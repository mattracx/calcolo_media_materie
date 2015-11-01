var inserito = false; // Almeno un valore è inserito;
var errore_generale = false;
var n_materie = 0;
var somma_valutazioni = 0.00;

function controllaVoto(id_voto) {
    vuoto = false;
    inserito = true;
    // Ottenimento dell'oggetto voto:
    input_voto = document.getElementById(id_voto);
    valore_voto = input_voto.value;
    // Controllo dei campi e somma valutazioni:
    /*  Se un campo non è vuoto ed è valido viene incrementata il numero di materie
        ed il valore al suo interno viene convertito da Stringa ad Intero
        in modo da poter essere sommato con gli altri valori;
    */
    if(isNaN(valore_voto)) {
        // Il valore inserito non è valido:
        errore = true;
        alert("E' consentito inserire solamente numeri! Per favore ricontrolla tutti i campi.");
        input_voto.style.border = "2px solid red";
    } else {
        if(!input_voto.value) {
            // Non è stato inserito alcun valore:
            inserito = false;
            errore = false;
            vuoto = true;
            input_voto.style.border = "1px solid black";
        } else {
            // Il valore inserito è un numero:
            voto = parseFloat(valore_voto);
            if(voto > 0 && voto <= 10) {
                // Il voto è valido:
                errore = false;
                input_voto.style.border = "2px solid green";
            } else {
                // Il voto non è maggiore di 0 o minore di 10:
                errore = true;
                input_voto.style.border = "2px solid red";
                alert("La valutazione non può essere minore di 1 o maggiore di 10!");
            }
        }
    }
    if(!errore)
        return voto;
    else {
        if(vuoto)
            return -2
        else return -1;
    }
}

function votoValido(voto) {
    n_materie++;
    somma_valutazioni += voto;
}

function mostra_errore() {
    alert("Si è verificato un errore!\nPer favore, ricontrolla tutti i campi!");
}

function calcolaMedia() {
    // Ottenimento dei valori inseriti:
    voto_tps = document.getElementById("voto_tps").value;
    voto_sistemi = document.getElementById("voto_sistemi").value;
    voto_informatica = document.getElementById("voto_info").value;
    voto_gestione = document.getElementById("voto_gestione").value;
    voto_matematica = document.getElementById("voto_matematica").value;
    voto_inglese = document.getElementById("voto_inglese").value;
    voto_italiano = document.getElementById("voto_italiano").value;
    voto_storia = document.getElementById("voto_storia").value;
    // Controllo degli errori:
    if(inserito) {
        if(voto_tps) {
            // Valutazione T.P.S.
            v = controllaVoto("voto_tps");
            if(v !== -1 && v !== -2) {
                votoValido(v);
            } else mostra_errore();
        }
        if(voto_sistemi) {
            // Valutazione Sistemi e Reti
            v = controllaVoto("voto_sistemi");
            if(v !== -1 && v !== -2) {
                votoValido(v);
            } else mostra_errore();
        }
        if(voto_informatica) {
            // Valutazione Informatica
            v = controllaVoto("voto_info");
            if(v !== -1 && v !== -2) {
                votoValido(v);
            } else mostra_errore();
        }
        if(voto_gestione) {
            // Valutazione Gestione d'Impresa
            v = controllaVoto("voto_gestione");
            if(v !== -1 && v !== -2) {
                votoValido(v);
            } else mostra_errore();
        }
        if(voto_matematica) {
            // Valutazione Matematica
            v = controllaVoto("voto_matematica");
            if(v !== -1 && v !== -2) {
                votoValido(v);
            } else mostra_errore();
        }
        if(voto_inglese) {
            // Valutazione Inglese
            v = controllaVoto("voto_inglese");
            if(v !== -1 && v !== -2) {
                votoValido(v);
            } else mostra_errore();
        }
        if(voto_italiano) {
            // Valutazione Italiano
            v = controllaVoto("voto_italiano");
            if(v !== -1 && v !== -2) {
                votoValido(v);
            } else mostra_errore();
        }
        if(voto_storia) {
            // Valutazione Storia
            v = controllaVoto("voto_storia");
            if(v !== -1 && v !== -2) {
                votoValido(v);
            } else mostra_errore();
        }
        // Viene controllato se sono state inserite almeno due valutazioni:
        if(n_materie < 2) {
            alert("E' necessario inserire almeno due valutazioni");
        }
        // Calcolo della media:
        if(n_materie >= 2) {
            // Mostra solamente due cifre decimali;
            media = (somma_valutazioni/n_materie).toFixed(2);
            if(isNaN(media)) {
                alert("E' consentito inserire solamente numeri! Per favore ricontrolla tutti i campi.");
            } else {
                // Il risultato viene visualizzato nella pagina:
                contenuto = document.getElementById("box");
                contenuto.innerHTML = "<h1>Calcolo media</h1>";
                contenuto.innerHTML += "<p style='margin-top: 30px; margin-bottom: 30px;' align='center'>La media è: <b>" + media + "</b></p>";
                contenuto.innerHTML += "<div id='pulsanti'><input id='btnCalcola' style='width: 120px' type='button' onClick='ricalcola();' value='Ricalcola media'></div>";
            }
        }
    } else {
        alert("Per poter calcolare la media è necessario inserire almeno due, o più valori.");
    }
}

function ricalcola() {
    // Viene aggiornata la pagina:
    document.location.reload();
}
