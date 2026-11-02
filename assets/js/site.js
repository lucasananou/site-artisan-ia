/* ==========================================================================
   Template « Site artisan » — JavaScript unique
   --------------------------------------------------------------------------
   Trois choses seulement :
     1. le menu du téléphone (bouton hamburger)
     2. l'année automatique dans le pied de page
     3. l'envoi du formulaire de contact vers Web3Forms (sans serveur)

   Tout ce qui se configure est dans l'objet CONFIG ci-dessous.
   ========================================================================== */

/* --------------------------------------------------------------------------
   CONFIG — LE SEUL ENDROIT À MODIFIER POUR BRANCHER LE FORMULAIRE
   --------------------------------------------------------------------------
   1. Aller sur https://web3forms.com (gratuit, sans compte).
   2. Saisir l'adresse e-mail de l'artisan → une clé d'accès arrive par mail.
   3. Coller cette clé ci-dessous à la place de REMPLACER-PAR-VOTRE-CLE.
   4. Envoyer un message de test depuis la page contact et vérifier la
      réception dans la boîte mail de l'artisan (penser aux indésirables).

   Cette clé n'est pas un secret : elle ne permet que d'envoyer un message
   vers l'adresse qui l'a créée. Elle peut rester dans le code public.
   -------------------------------------------------------------------------- */
const CONFIG = {
  // Clé d'accès Web3Forms (https://web3forms.com)
  web3formsKey: "REMPLACER-PAR-VOTRE-CLE",

  // Objet des e-mails reçus
  sujetEmail: "Nouvelle demande depuis le site",

  // Messages affichés à l'internaute
  messages: {
    envoi: "Envoi en cours…",
    succes:
      "Merci, votre demande est bien partie. Nous vous rappelons sous 24 h ouvrées.",
    erreur:
      "L'envoi a échoué. Merci de nous appeler directement, ou de réessayer dans quelques minutes.",
    nonConfigure:
      "Formulaire non configuré : la clé Web3Forms n'a pas encore été renseignée dans assets/js/site.js.",
  },
};

/* --------------------------------------------------------------------------
   1. Menu du téléphone
   -------------------------------------------------------------------------- */
(function menuTelephone() {
  const bouton = document.querySelector(".nav-toggle");
  const menu = document.querySelector("#menu-principal");
  if (!bouton || !menu) return;

  const fermer = () => {
    menu.dataset.open = "false";
    bouton.setAttribute("aria-expanded", "false");
  };

  bouton.addEventListener("click", () => {
    const ouvert = bouton.getAttribute("aria-expanded") === "true";
    menu.dataset.open = String(!ouvert);
    bouton.setAttribute("aria-expanded", String(!ouvert));
  });

  // Fermer : clic sur un lien, touche Échap, retour au format ordinateur
  menu.addEventListener("click", (e) => {
    if (e.target.closest("a")) fermer();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && bouton.getAttribute("aria-expanded") === "true") {
      fermer();
      bouton.focus();
    }
  });

  window.matchMedia("(min-width: 921px)").addEventListener("change", (e) => {
    if (e.matches) fermer();
  });
})();

/* --------------------------------------------------------------------------
   2. Année courante dans le pied de page
   -------------------------------------------------------------------------- */
(function anneeCourante() {
  document.querySelectorAll("[data-annee]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
})();

/* --------------------------------------------------------------------------
   3. Formulaire de contact (Web3Forms, aucun serveur nécessaire)
   -------------------------------------------------------------------------- */
(function formulaireContact() {
  const form = document.querySelector("#formulaire-contact");
  if (!form) return;

  const statut = form.querySelector(".form-status");
  const bouton = form.querySelector("button[type='submit']");
  const libelleBouton = bouton ? bouton.textContent : "";

  const afficher = (texte, etat) => {
    if (!statut) return;
    statut.hidden = false;
    statut.textContent = texte;
    statut.dataset.state = etat;
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!CONFIG.web3formsKey || CONFIG.web3formsKey.startsWith("REMPLACER")) {
      afficher(CONFIG.messages.nonConfigure, "error");
      return;
    }

    if (bouton) {
      bouton.disabled = true;
      bouton.textContent = CONFIG.messages.envoi;
    }
    afficher(CONFIG.messages.envoi, "info");

    const donnees = Object.fromEntries(new FormData(form).entries());
    donnees.access_key = CONFIG.web3formsKey;
    donnees.subject = CONFIG.sujetEmail;

    try {
      const reponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(donnees),
      });
      const resultat = await reponse.json();

      if (reponse.ok && resultat.success) {
        form.reset();
        afficher(CONFIG.messages.succes, "ok");
      } else {
        afficher(resultat.message || CONFIG.messages.erreur, "error");
      }
    } catch (erreur) {
      afficher(CONFIG.messages.erreur, "error");
    } finally {
      if (bouton) {
        bouton.disabled = false;
        bouton.textContent = libelleBouton;
      }
    }
  });
})();
