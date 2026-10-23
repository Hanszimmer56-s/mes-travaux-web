function selectTaff(devoir) {
    switch (devoir) {
        case 'convertisseur':
            document.getElementById('convert').classList.remove('hidden');
            break;
        case 'equation':
            document.getElementById('equation').classList.remove('hidden');
            break;
    
        case 'volume':
            document.getElementById('volume').classList.remove('hidden');
            break;
    
        case 'carre':
            document.getElementById('carre').classList.remove('hidden');
            break;
    
        case 'reset':
            document.getElementById('convert').classList.add('hidden');
            document.getElementById('carre').classList.add('hidden');
            document.getElementById('equation').classList.add('hidden');
            document.getElementById('volume').classList.add('hidden');
            clearDisplayAll();
            clearDisplayAll_();
            clearDisplayAll__();
            document.getElementById('num').value = '';

            break;
    }
}

/**Convertisseur */
function clearDisplayAll() {
    /**
     * Fonction pour nettoyer les champs valeur et résultat
     */
    document.getElementById('valeur').value = ''; // Réinitialise le champ d'Id valeur
    document.getElementById('result').value = ''; // Réinitialise le champ d'Id résultat
}

function convertValue() {
    /**
     * Fonction qui récupère l'unité de conversion puis multiplie
     * la valeur d'entrée par des puissances de 10
     */
    try {
        let taille = document.getElementById('taille').value;
        let valeur = document.getElementById('valeur').value;
        let result = 0;
        /**Utilisation de la structure switch équivalent à "selon" en algorithmique*/
        switch (taille) {
            case 'dam': // Si la valeur du sélecteur choisie est le dam
                result = valeur*10;
                break;

            case 'cm': // Si la valeur du sélecteur choisie est le cm
                result = valeur*0.01;
                break;

            case 'dm': // Si la valeur du sélecteur choisie est le dm
                result = valeur*0.1;
                break;

            case 'mm': // Si la valeur du sélecteur choisie est le mm
                result = valeur*0.001;
                break;

            case 'km': // Si la valeur du sélecteur choisie est le km
                result = valeur*1000;
                break;
                
            case 'hm': // Si la valeur du sélecteur choisie est le hm
                result = valeur*100;
            break;

        }

        // modification de la valeur de l'élément d'Id "result" avec la nouvelle valeur contenue dans la variable result
        document.getElementById('result').value = result;

        
    } catch (error) {
        document.getElementById('result').value = 'Erreur'; // Affiche une erreur
    }
}

/** Equation du second dégré */
function clearDisplayAll_() {
    /**
     * Fonction pour nettoyer tous les différents champs de l'application.
     */
    document.getElementById('aCoef').value = ''; // Réinitialise le champ d'Id aCoef
    document.getElementById('bCoef').value = ''; // Réinitialise le champ d'Id bCoef
    document.getElementById('cCoef').value = ''; // Réinitialise le champ d'Id cCoef
    document.getElementById('expression-fonction').value = ''; // Réinitialise le champ d'Id expression-fonction
    document.getElementById('message').value = ''; // Réinitialise le champ d'Id message
    document.getElementById('resultX0').value = ''; // Réinitialise le champ d'Id resultX0
    document.getElementById('resultX1').value = ''; // Réinitialise le champ d'Id resultX1
    document.getElementById('resultX2').value = ''; // Réinitialise le champ d'Id resultX2

    // Remettons la classe hidden
    document.getElementById('expression-fonction').classList.add('hidden');
    document.getElementById('message').classList.add('hidden');
    document.getElementById('resultX0').classList.add('hidden');
    document.getElementById('resultX1').classList.add('hidden');
    document.getElementById('resultX2').classList.add('hidden');
}

function solution() {
    /**
     * Fonction qui récupère les coefficients entrés,
     * vérifie si a est nul ou pas,
     * résout l'équation et donne la solution.
     */
    try {
        let a = parseFloat(document.getElementById('aCoef').value);
        let b = parseFloat(document.getElementById('bCoef').value);
        let c = parseFloat(document.getElementById('cCoef').value);
        let delta = b ** 2 - 4 * a * c; // Calcul du discriminant

        // Vérification si a est nul pour déterminer le type d'équation
        if (a === 0) {
            document.getElementById('expression-fonction').innerText = `Équation : ${b}x + ${c}`;
            document.getElementById('message').innerText = `Ce n'est pas une équation du second degré`;
            document.getElementById('resultX0').value = (-1) * c / b; // Calcul de la solution x0
        } else {
            if (b>=0) {
                document.getElementById('expression-fonction').innerText = `Équation : ${a}x² + ${b}x + ${c}`;
            } else {
                document.getElementById('expression-fonction').innerText = `Équation : ${a}x² ${b}x + ${c}`;
            }
            document.getElementById('message').innerText = `C'est une équation du second degré`;

            // Vérification des solutions selon la valeur de delta
            if (delta < 0) {
                document.getElementById('message').innerText = `C'est une équation du second degré mais qui n'admet pas de solution dans R`;
            } else if(delta > 0) {
                let x1 = (-b - Math.sqrt(delta)) / (2 * a); // Calcul de x1
                let x2 = (-b + Math.sqrt(delta)) / (2 * a); // Calcul de x2
                document.getElementById('resultX1').value = x1; // Affichage de x1
                document.getElementById('resultX2').value = x2; // Affichage de x2
            }
            else {
                document.getElementById('resultX0').value = (-1) * b / 2 * a; // Calcul de la solution x0
            }
        }

        // Afficher les éléments nécessaires
        document.getElementById('expression-fonction').classList.remove('hidden');
        document.getElementById('message').classList.remove('hidden');

        if (a === 0) {
            document.getElementById('resultX0').classList.remove('hidden');
            document.getElementById('resultX0').classList.add('col-3');
        }
        if (a !== 0 && delta >= 0) { // delta >= 0 pour les solutions réelles
            document.getElementById('resultX1').classList.remove('hidden');
            document.getElementById('resultX2').classList.remove('hidden');
            document.getElementById('resultX1').classList.add('col-3');
            document.getElementById('resultX2').classList.add('col-3');
        }

    } catch (error) {
        document.getElementById('message').innerText = `Une erreur s'est produite, consultez la console`;
    }
}
/** Calcul du volume du cylindre */
function clearDisplayAll__() {
    /**
     * Fonction pour nettoyer les champs valeur et résultat
     */
    document.getElementById('rayon').value = ''; // Réinitialise le champ d'Id rayon
    document.getElementById('hauteur').value = ''; // Réinitialise le champ d'Id hauteur
    document.getElementById('resultV').value = ''; // Réinitialise le champ d'Id résultat
}

function calculVolume() {
    const rayon = document.getElementById('rayon').value;
    const hauteur = document.getElementById('hauteur').value;
    const pi = Math.PI;
    var volume = pi*rayon*rayon*hauteur;
    document.getElementById('resultV').value = volume;
}



/** Carré d'un nombre */
function carre() {
    // il y'a pas le document.*
    //var nombre = getElementById('num').value;
    var nombre = document.getElementById('num').value;
    // ça récupère la valeur de nombre mais c'est un texte

    //alert(nombre^2);
    // Mauvaise opération de calcul de puissance
    alert(nombre**2);
}