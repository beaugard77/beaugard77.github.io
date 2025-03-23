document.addEventListener("DOMContentLoaded", function() {
  var contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); 

    var prenom = document.getElementById("prenom").value.trim();
    var nom = document.getElementById("nom").value.trim();

    var sujet = document.getElementById("sujet").value.trim();
    var message = document.getElementById("message").value.trim();
    var formMessage = document.getElementById("formMessage");

    if (prenom === "" || nom === "" || sujet === "" || message === "") {
      formMessage.innerText = "Tous les champs sont obligatoires.";
      formMessage.style.color = "red";
    } else {
      formMessage.innerText = "Message envoyé avec succès !";
      formMessage.style.color = "#00d4ff";

      contactForm.reset();
    }
  });
});


