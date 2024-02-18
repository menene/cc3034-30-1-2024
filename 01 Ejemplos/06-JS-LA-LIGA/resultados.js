/*const raw = [
    {
        rank: 1,
        team: {
            id: 541,
            name: "Real Madrid",
            logo: "https://media.api-sports.io/football/teams/541.png",
        },
        points: 61,
        goalsDiff: 37,
        group: "Primera División",
        form: "WDWWW",
        status: "same",
        description: "Promotion - Champions League (Group Stage: )",
        all: {
            played: 24,
            win: 19,
            draw: 4,
            lose: 1,
            goals: {
                for: 52,
                against: 15,
            },
        },
        home: {
            played: 12,
            win: 10,
            draw: 2,
            lose: 0,
            goals: {
                for: 30,
                against: 7,
            },
        },
        away: {
            played: 12,
            win: 9,
            draw: 2,
            lose: 1,
            goals: {
                for: 22,
                against: 8,
            },
        },
        update: "2024-02-12T00:00:00+00:00",
    },
    {
        rank: 2,
        team: {
            id: 547,
            name: "Girona",
            logo: "https://media.api-sports.io/football/teams/547.png",
        },
        points: 56,
        goalsDiff: 23,
        group: "Primera División",
        form: "LDWWD",
        status: "same",
        description: "Promotion - Champions League (Group Stage: )",
        all: {
            played: 24,
            win: 17,
            draw: 5,
            lose: 2,
            goals: {
                for: 52,
                against: 29,
            },
        },
        home: {
            played: 12,
            win: 9,
            draw: 2,
            lose: 1,
            goals: {
                for: 30,
                against: 14,
            },
        },
        away: {
            played: 12,
            win: 8,
            draw: 3,
            lose: 1,
            goals: {
                for: 22,
                against: 15,
            },
        },
        update: "2024-02-12T00:00:00+00:00",
    },
    {
        rank: 3,
        team: {
            id: 529,
            name: "Barcelona",
            logo: "https://media.api-sports.io/football/teams/529.png",
        },
        points: 51,
        goalsDiff: 17,
        group: "Primera División",
        form: "DWWLW",
        status: "same",
        description: "Promotion - Champions League (Group Stage: )",
        all: {
            played: 24,
            win: 15,
            draw: 6,
            lose: 3,
            goals: {
                for: 50,
                against: 33,
            },
        },
        home: {
            played: 13,
            win: 9,
            draw: 1,
            lose: 3,
            goals: {
                for: 28,
                against: 19,
            },
        },
        away: {
            played: 11,
            win: 6,
            draw: 5,
            lose: 0,
            goals: {
                for: 22,
                against: 14,
            },
        },
        update: "2024-02-12T00:00:00+00:00",
    },
];

const resultados = raw.map((equipo) => ({
    posicion: equipo.rank,
    logo: equipo.team.logo,
    equipo: equipo.team.name,
    puntos: equipo.points,
    jugados: equipo.all.played,
    ganados: equipo.all.win,
    empatados: equipo.all.draw,
    perdidos: equipo.all.lose,
    golesFavor: equipo.all.goals.for,
    golesContra: equipo.all.goals.against,
    diferenciaGoles: equipo.goalsDiff,
    rendimiento: Math.round((equipo.all.win * 100) / equipo.all.played),
}));

const posiciones = document.getElementById("posiciones");

let row, cell;
resultados.forEach((res) => {
    row = posiciones.insertRow(-1);

    // posicion
    cell = row.insertCell(0);
    cell.innerText = res.posicion;

    // logo
    cell = row.insertCell(1);
    cell.innerHTML = "<img class='team-logo' src='" + res.logo + "' />";

    // equipo
    cell = row.insertCell(2);
    cell.innerText = res.equipo;

    cell = row.insertCell(3);
    cell.innerText = res.puntos;

    cell = row.insertCell(4);
    cell.innerText = res.jugados;

    cell = row.insertCell(5);
    cell.innerText = res.ganados;

    cell = row.insertCell(6);
    cell.innerText = res.empatados;

    cell = row.insertCell(7);
    cell.innerText = res.perdidos;

    cell = row.insertCell(8);
    cell.innerText = res.golesFavor;

    cell = row.insertCell(9);
    cell.innerText = res.golesContra;

    cell = row.insertCell(10);
    cell.innerText = res.diferenciaGoles;

    cell = row.insertCell(11);
    cell.innerText = res.rendimiento;
});*/

// ---------------------------
async function consultarApi() {
    const response = await fetch("https://v3.football.api-sports.io/standings?league=140&season=2023", {
        method: "GET",
        headers: {
            "x-apisports-key": "1f47615287e63109fec7628941ff295b",
        },
    });

    return response.json();
}

consultarApi().then((datos) => {
    const raw = datos.response[0].league.standings[0];

    const resultados = raw.map((equipo) => ({
        posicion: equipo.rank,
        logo: equipo.team.logo,
        equipo: equipo.team.name,
        puntos: equipo.points,
        jugados: equipo.all.played,
        ganados: equipo.all.win,
        empatados: equipo.all.draw,
        perdidos: equipo.all.lose,
        golesFavor: equipo.all.goals.for,
        golesContra: equipo.all.goals.against,
        diferenciaGoles: equipo.goalsDiff,
        rendimiento: Math.round((equipo.all.win * 100) / equipo.all.played),
    }));

    const posiciones = document.getElementById("posiciones");

    let row, cell;
    resultados.forEach((res) => {
        row = posiciones.insertRow(-1);

        // posicion
        cell = row.insertCell(0);
        cell.innerText = res.posicion;

        if (res.posicion <= 4) {
            cell.className = "champions";
        }

        if (res.posicion > 4 && res.posicion <= 6) {
            cell.className = "europa";
        }

        if (res.posicion == 7) {
            cell.className = "conference";
        }

        if (res.posicion >= 18) {
            cell.className = "descenso";
        }

        // logo
        cell = row.insertCell(1);
        cell.innerHTML = "<img class='team-logo' src='" + res.logo + "' />";

        // equipo
        cell = row.insertCell(2);
        cell.innerText = res.equipo;

        cell = row.insertCell(3);
        cell.innerText = res.puntos;

        cell = row.insertCell(4);
        cell.innerText = res.jugados;

        cell = row.insertCell(5);
        cell.innerText = res.ganados;

        cell = row.insertCell(6);
        cell.innerText = res.empatados;

        cell = row.insertCell(7);
        cell.innerText = res.perdidos;

        cell = row.insertCell(8);
        cell.innerText = res.golesFavor;

        cell = row.insertCell(9);
        cell.innerText = res.golesContra;

        cell = row.insertCell(10);
        cell.innerText = res.diferenciaGoles;

        cell = row.insertCell(11);
        cell.innerText = res.rendimiento;
    });
});
