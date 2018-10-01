"use strict";
function mailTo() {
    var name = document.getElementById("name2");
    var sender = document.getElementById("email2");
    var text = document.getElementById("message2");
    var receiver = "olena.baerwald@gmx.de";
    var subject = "Anfrage von ";
    //window.location.href = "mailto:" + receiver + "?subject=" + subject + name + "&body=" + text;
    Email.send(sender.value,
        receiver,
        subject + name.value,
        text.value,
        {
            token: "ba53e8a4-cc3f-4abd-b1c9-89ee533d98c7",
            callback: function done(message) {
                if (message === "OK") {
                    alert("Email erfolgreich gesendet!");
                    name.value = "";
                    sender.value = "";
                    text.value = "";
                }
            }
        });
}