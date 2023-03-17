
function registrerBil() {
    const bil = {
        persNr: $("#persNr").val(),
        navn: $("#navn").val(),
        adresse: $("#adresse").val(),
        kjennetegn: $("#kjennetegn").val(),
        bilmerke: $("#bilmerke").val(),
        biltype: $("#biltype").val()
    };

    $.post("/lagre", bil, function(){
        hentAlle();
    });
    $("#persNr").val("");
    $("#navn").val("");
    $("#adresse").val("");
    $("#kjennetegn").val("");
    $("#bilmerke").val("");
    $("#biltype").val("");
}
    function hentAlle(){
        $.get("/hentAlle", function(data){
            formaterData(data);
        });
    }

    function formaterData(biler) {
        let ut = "<table><tr><th>Eiers personnummer</th><th>Eiers navn</th><th>Eiers adresse</th><th>Kjennetegn</th><th>Bilmerke</th><th>Biltype</th></tr>";
        for (const bil of biler) {
            ut += "<tr><td>" + bil.persNr + "</td><td>" + bil.navn + "</td><td>" + bil.adresse + "</td><td>" + bil.kjennetegn + "</td><td>" + bil.bilmerke + "</td><td>" + bil.biltype + "</td></tr>";
        }
        ut += "</table>";
        $("#alleBiler").html(ut);
    }
    function slettAlle(){
        $.get("/slettAlle", function(){
            hentAlle();
        });
    }

