# Apuntar un dominio a un server

Cuando compramos un dominio nuevo, es necesario realizar ciertas configuraciones para que este apunte a nuestro servidor.

## Nameservers

Es necesario definirle los name servers de Cloudflare ya que ahí vamos a manejar los dns de nuestro dominio nuevo.

# DNS

Con nuestro dominio ya configurador en Cloudflare podemos manejar los DNS y con un registro A podemos apuntar a nuestro servidor.

Creamos un registro nuevo de tipo A, el nombre debe ser el dominio y el content debe ser la IP de nuestro servidor.
