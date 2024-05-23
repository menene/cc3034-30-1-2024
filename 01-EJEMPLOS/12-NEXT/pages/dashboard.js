import { getSession, useSession, signOut } from 'next-auth/react';
import Nav from '../components/Nav';

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (!session) {
    if (typeof window !== 'undefined') {
      window.location.href = '/login';
    }
    return null;
  }

  return (
    <>
        <Nav />
        <div className='container mt-4'>
            <h1>Dashboard</h1>
            <p>Hola, {session.user.name} 🤓</p>
            <button className='btn btn-danger' onClick={() => signOut()}>
                Salir
            </button>
        </div>
    </>
  );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }

    return {
        props: {
            session,
        },
    };
}
