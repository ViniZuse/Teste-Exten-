//Logo dos Times
var faze = "<img alt='FaZe' src='img/faze.svg' title='FaZe'>";
var mouse = "<img alt='mousesports' src='img/mousesports.svg' title='mousesports'>";
var fnatic = "<img alt='Fnatic' src='img/fnatic.svg' title='Fnatic'>";
var cloud9 = "<img alt='Cloud9' src='img/cloud9.svg' title='Cloud9'>";
var astralis = "<img alt='Astralis' src='img/astralis.svg' title='Astralis'>";
var navi = "<img alt='Natus Vincere' src='img/navi.svg' title='Natus Vincere'>";
var liquid = "<img alt='Liquid' src='img/liquid.svg' title='Liquid'>";
var sk = "<img alt='SK' src='img/sk.svg' title='SK'>";
var g2 = "<img alt='G2' src='img/g2.svg' title='G2'>";
var nip = "<img alt='Ninjas in Pyjamas' src='img/nip.svg' title='Ninjas in Pyjamas'>";
var envyus = "<img alt='Team EnVyUs' src='img/envyus.svg' title='Team EnVyUs'>";
var tyloo = "<img alt='TyLoo' src='img/tyloo.svg' title='TyLoo'>";
var gambit = "<img alt='Gambit Esports' src='img/gambit.svg' title='Gambit Esports'>";
var renegades = "<img alt='Renegades' src='img/renegades.svg' title='Renegades'>";
var ss = "<img alt='Space Soldiers' src='img/ss.svg' title='Space Soldiers'>";
var valiance = "<img alt='Valiance' src='img/valiance.svg' title='Valiance'>";
var lg = "<img alt='Luminosity Gaming' src='img/lg.svg' title='Luminosity Gaming'>";
var nrg = "<img alt='NRG Esports' src='img/nrg.svg' title='NRG Esports'>";
var splyce = "<img alt='Splyce' src='img/splyce.svg' title='Splyce'>";
var complexity = "<img alt='compLexity Gaming' src='img/complexity.svg' title='compLexity Gaming'>";
var ghost = "<img alt='Ghost Gaming' src='img/ghost.svg' title='Ghost Gaming'>";
var eunited = "<img alt='eUnited' src='img/eunited.svg' title='eUnited'>";
var intz = "<img alt='INTZ e-Sports Club' src='img/intz.svg' title='INTZ e-Sports Club'>";
var rogue = "<img alt='Rogue' src='img/rogue.svg' title='Rogue'>";


var virtue = "<img alt='Virtue Gaming' src='img/virtue.png' title='Virtue Gaming'>";
var isurus = "<img alt='Isurus Gaming' src='img/isurus.png' title='Isurus Gaming'>";
var yeah = "<img alt='YeaH! Gaming' src='img/yeah.png' title='YeaH! Gaming'>";
var furia = "<img alt='FURIA eSports' src='img/furia.png' title='FURIA eSports'>";
var bulldozer = "<img alt='Bulldozer e-Sports' src='img/bulldozer.png' title='Bulldozer e-Sports'>";
var csbl = "<img alt='CSBL' src='img/csbl.png' title='CSBL'>";
var wild = "<img alt='Team WILD' src='img/wild.png' title='Team WILD'>";
var c4 = "<img alt='C4 Gaming' src='img/c4.png' title='C4 Gaming'>";
var yng = "<img alt='YNG Sharks Esports' src='img/yng.png' title='YNG Sharks Esports'>";
var tone = "<img alt='Team One' src='img/tone.png' title='Team One'>";



// Imagens da ExtensaO
var vs = "<img class='versus' alt='Versus' src='img/vs.jpg' title='Versus'>";
var undefined_img = "<img alt='No Image' src='https://draft5.gg/img/flags/TBA.svg' title='No Image'>";
var trofeu = "<img class='trofeu_img' alt='Trofeu' src='img/trofeu.png' title='Trofeu'>";
var relogio = "<img class='relogio_img' alt='Relogio' src='img/relogio.png' title='Relogio'>";

var times = ['FaZe Clan', 'mousesports', 'Fnatic', 'Cloud9', 'Astralis', 'Natus Vincere', 'Team Liquid', 'SK Gaming', 'G2 Esports', 'Ninjas in Pyjamas', 'Team EnVyUs', 'TyLoo', 'Gambit Esports', 'Renegades',
    'Space Soldiers', 'Valiance', 'Luminosity Gaming', 'Virtue Gaming', 'NRG Esports', 'Isurus Gaming', 'YeaH! Gaming', 'FURIA eSports', 'Splyce', 'compLexity Gaming', 'Ghost Gaming', 'eUnited', 'Bulldozer e-Sports',
    'CSBL', 'Team WILD', 'C4 Gaming', 'YNG Sharks Esports', 'Team One', 'Rogue', 'INTZ e-Sports Club'
];
var times_logo = [faze, mouse, fnatic, cloud9, astralis, navi, liquid, sk, g2, nip, envyus, tyloo, gambit, renegades, ss, valiance, lg, virtue, nrg, isurus, yeah, furia, splyce, complexity, ghost, eunited,
    bulldozer, csbl, wild, c4, yng, tone, rogue, intz
];

var jogosAoVivo = 0;
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.draft5.gg/api/v2/matches?filter[status]=0&limit=50", true);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        var resp = JSON.parse(xhr.responseText);
        var htmlResposta = '';
        for (i = 0; i < resp.length; i++) {
            var data = new Date(resp[i].matchDate * 1000);
            var dataAtual = new Date();
            var hours = data.getHours();
            var minutes = "0" + data.getMinutes();
            var formattedTime = hours + ':' + minutes.substr(-2);
            var horaAtual = dataAtual.getHours();
            var minutoAtual = dataAtual.getMinutes();

            var time1 = '';
            var time2 = '';
            var statusPartida = "";
            var resultado = "";

            for (time = 0; time < times.length; time++) {
                if (resp[i].teamA == times[time]) {
                    time1 = "<div class='time1'> " + times_logo[time] + " <span class='nomeTime'>" + resp[i].teamA + "</span> </div>";
                }
                if (resp[i].teamB == times[time]) {
                    time2 = "<div class='time2'> " + times_logo[time] + " <span class='nomeTime'>" + resp[i].teamB + "</span> </div>";
                }
            }
            if (time1 == '') {
                time1 = "<div class='time1'>" + undefined_img + " <span class='nomeTime'>" + resp[i].teamA + " </span> </div> "
            }
            if (time2 == '') {
                time2 = "<div class='time2'>" + undefined_img + " <span class='nomeTime'>" + resp[i].teamB + " </span> </div> "
            }

            if (data <= dataAtual) {
                if (resp[i].isOver == 1) {
                    statusPartida = "<span class='status_partida'> Partida Finalizada </span>"
                    if (resp[i].series.scoreA > resp[i].series.scoreB) {
                        time1 = time1 + " <span class='score_time_a winner'>" + resp[i].series.scoreA + "</span>";
                        time2 = "<span class='score_time_b'>" + resp[i].series.scoreB + "</span>" + time2;
                    } else {
                        time1 = time1 + " <span class='score_time_a'>" + resp[i].series.scoreA + "</span>";
                        time2 = "<span class='score_time_b winner'>" + resp[i].series.scoreB + "</span>" + time2;
                    }
                    resultado = "<div class='score'>"
                    for (aux = 0; aux < resp[i].scores.length; aux++) {
                        resultado = resultado + "<div class='card_mapa'>"
                        var scoreA = "";
                        var scoreB = "";
                        if (resp[i].scores[aux].scoreA > resp[i].scores[aux].scoreB) {
                            scoreA = scoreA + " winner";
                        } else {
                            scoreB = scoreB + " winner";
                        }
                        resultado = resultado + "<span class='mapa'>" + resp[i].scores[aux].map + " </span> <span class='" + scoreA + "'>" + resp[i].scores[aux].scoreA + " </span> - <span class='" + scoreB + "'>" + resp[i].scores[aux].scoreB + " </span> ";
                        resultado = resultado + "</div>"
                    }
                    resultado = resultado + "</div>"

                } else {
                    statusPartida = "<span class='ao_vivo'> </span><span class='status_partida'> Partida Ao Vivo </span>"
                    jogosAoVivo++;
                }
            }

            if (resp[i].teamACountry == 'BR' || resp[i].teamBCountry == 'BR') {
                htmlResposta = htmlResposta + " <div id='partida'> " + statusPartida + "<div class='times'>" + time1 + vs + time2 + " </div> " + resultado + " <div class='trofeu'>" + trofeu + " <span class='tournament'>" + resp[i].tournament + "</span></div> <div class='relogio'>" + relogio + " <span class='horario'>" + data.toLocaleDateString() + " - " + formattedTime + "</span></div> <div class='brasil'></div> </div>";
            } else {
                htmlResposta = htmlResposta + " <div id='partida'> " + statusPartida + " <div class='times'>" + time1 + vs + time2 + " </div>" + resultado + " <div class='trofeu'>" + trofeu + " <span class='tournament'>" + resp[i].tournament + "</span></div> <div class='relogio'>" + relogio + " <span class='horario'>" + data.toLocaleDateString() + " - " + formattedTime + "</span></div> </div>";
            }
        }
        setBadgeJogosAoVivo(jogosAoVivo);
        document.getElementById("resp").innerHTML = htmlResposta;
    }
}
xhr.send();



function setBadgeJogosAoVivo(qtdJogos) {
    chrome.browserAction.setBadgeText({
        text: qtdJogos != 0 ? qtdJogos.toString() : ''
    });
}


function onInit() {
    chrome.alarms.create('refresh', {
        periodInMinutes: 1
    });


}


chrome.runtime.onInstalled.addListener(onInit);