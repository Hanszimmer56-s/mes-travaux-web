/* ==========================================================
   HZ DEV — PORTFOLIO DE TRAVAUX PRATIQUES
   JavaScript : animations et interactions
   Auteur : Hans Zimmer
========================================================== */

"use strict";


/* ==========================================================
   1. INITIALISATION
========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("HZ DEV : Portfolio chargé avec succès.");

    initialiserNavigation();
    initialiserAnimations();
    initialiserCompteurs();
    initialiserRetourEnHaut();
    initialiserLiensNavigation();

});


/* ==========================================================
   2. NAVIGATION FLUIDE
========================================================== */

function initialiserNavigation() {

    const liens = document.querySelectorAll(
        '.navbar a[href^="#"], .header-button[href^="#"], ' +
        '.hero-buttons a[href^="#"], .about-button[href^="#"]'
    );

    liens.forEach(function (lien) {

        lien.addEventListener("click", function (event) {

            const destination = lien.getAttribute("href");

            if (!destination || destination === "#") {
                return;
            }

            const section = document.querySelector(destination);

            if (section) {

                event.preventDefault();

                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                /*
                 * Met à jour le fragment de l'URL sans
                 * provoquer un saut brutal.
                 */
                history.replaceState(null, "", destination);

            }

        });

    });

}


/* ==========================================================
   3. ANIMATIONS AU DÉFILEMENT
========================================================== */

function initialiserAnimations() {

    const elements = document.querySelectorAll(
        ".profile-card, .work-card, .about-content, " +
        ".section-heading, .technology-bar"
    );

    /*
     * Si IntersectionObserver n'est pas disponible,
     * les éléments restent visibles normalement.
     */
    if (!("IntersectionObserver" in window)) {
        return;
    }

    elements.forEach(function (element) {
        element.classList.add("js-animation-ready");
    });

    const observateur = new IntersectionObserver(

        function (entrees, observer) {

            entrees.forEach(function (entree) {

                if (entree.isIntersecting) {

                    entree.target.classList.add("is-visible");

                    /*
                     * L'élément n'a besoin d'être observé
                     * qu'une seule fois.
                     */
                    observer.unobserve(entree.target);

                }

            });

        },

        {
            threshold: 0.12,
            rootMargin: "0px 0px -35px 0px"
        }

    );

    elements.forEach(function (element) {
        observateur.observe(element);
    });

}


/* ==========================================================
   4. COMPTEURS ANIMÉS
========================================================== */

function initialiserCompteurs() {

    const compteurs = document.querySelectorAll(
        ".stat-number"
    );

    if (compteurs.length === 0) {
        return;
    }

    /*
     * Récupère la valeur numérique de chaque compteur.
     * Exemple : "05" devient 5.
     */
    compteurs.forEach(function (compteur) {

        const texteInitial = compteur.textContent.trim();
        const valeurFinale = parseInt(texteInitial, 10);

        if (Number.isNaN(valeurFinale)) {
            return;
        }

        compteur.dataset.valeurFinale = valeurFinale;
        compteur.dataset.longueur = texteInitial.length;

        compteur.textContent = "0".padStart(
            texteInitial.length,
            "0"
        );

    });

    /*
     * Lance l'animation lorsque les statistiques
     * deviennent visibles à l'écran.
     */
    if (!("IntersectionObserver" in window)) {

        compteurs.forEach(function (compteur) {
            afficherValeurFinale(compteur);
        });

        return;
    }

    const observateurCompteurs = new IntersectionObserver(

        function (entrees, observer) {

            entrees.forEach(function (entree) {

                if (entree.isIntersecting) {

                    animerCompteur(entree.target);

                    observer.unobserve(entree.target);

                }

            });

        },

        {
            threshold: 0.5
        }

    );

    compteurs.forEach(function (compteur) {
        observateurCompteurs.observe(compteur);
    });

}


function animerCompteur(element) {

    const valeurFinale = parseInt(
        element.dataset.valeurFinale,
        10
    );

    const longueur = parseInt(
        element.dataset.longueur,
        10
    );

    const duree = 900;
    const debut = performance.now();

    function actualiserCompteur(tempsActuel) {

        const progression = Math.min(
            (tempsActuel - debut) / duree,
            1
        );

        /*
         * Fonction d'accélération et de ralentissement
         * pour une animation plus naturelle.
         */
        const progressionFluide =
            1 - Math.pow(1 - progression, 3);

        const valeurActuelle = Math.floor(
            progressionFluide * valeurFinale
        );

        element.textContent = String(
            valeurActuelle
        ).padStart(longueur, "0");

        if (progression < 1) {

            requestAnimationFrame(actualiserCompteur);

        } else {

            element.textContent = String(
                valeurFinale
            ).padStart(longueur, "0");

        }

    }

    requestAnimationFrame(actualiserCompteur);

}


function afficherValeurFinale(element) {

    const valeur = element.dataset.valeurFinale;
    const longueur = parseInt(element.dataset.longueur, 10);

    if (valeur !== undefined) {

        element.textContent = String(valeur).padStart(
            longueur,
            "0"
        );

    }

}


/* ==========================================================
   5. BOUTON RETOUR EN HAUT
========================================================== */

function initialiserRetourEnHaut() {

    const bouton = document.querySelector(".back-to-top");

    if (!bouton) {
        return;
    }

    bouton.addEventListener("click", function (event) {

        const destination = document.querySelector("#accueil");

        if (destination) {

            event.preventDefault();

            destination.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            history.replaceState(null, "", "#accueil");

        }

    });

}


/* ==========================================================
   6. MISE À JOUR DU MENU ACTIF
========================================================== */

function initialiserLiensNavigation() {

    const liens = document.querySelectorAll(
        ".navbar .nav-link"
    );

    const sections = document.querySelectorAll(
        "#accueil, #profil, #travaux, #apropos"
    );

    if (liens.length === 0 || sections.length === 0) {
        return;
    }

    /*
     * Active le lien correspondant à la section visible.
     */
    function mettreAJourMenu() {

        let sectionActuelle = "accueil";

        const positionReference = 160;

        sections.forEach(function (section) {

            const position = section.getBoundingClientRect();

            if (position.top <= positionReference) {
                sectionActuelle = section.id;
            }

        });

        liens.forEach(function (lien) {

            const destination = lien.getAttribute("href");

            lien.classList.toggle(
                "active",
                destination === "#" + sectionActuelle
            );

        });

    }

    let defilementEnAttente = false;

    window.addEventListener("scroll", function () {

        if (!defilementEnAttente) {

            window.requestAnimationFrame(function () {

                mettreAJourMenu();

                defilementEnAttente = false;

            });

            defilementEnAttente = true;

        }

    }, { passive: true });

    mettreAJourMenu();

}


/* ==========================================================
   7. EFFET SUR LES CARTES DES TRAVAUX
========================================================== */

function initialiserEffetsCartes() {

    const cartes = document.querySelectorAll(".work-card");

    cartes.forEach(function (carte) {

        carte.addEventListener("mouseenter", function () {
            carte.classList.add("card-hovered");
        });

        carte.addEventListener("mouseleave", function () {
            carte.classList.remove("card-hovered");
        });

    });

}

/*
* Cette fonction peut être appelée si tu souhaites
* ajouter d'autres cartes dynamiquement plus tard.
*/
initialiserEffetsCartes();