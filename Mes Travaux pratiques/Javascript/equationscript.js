function clearDisplayAll() {
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
        let delta = ; // 

        // 
        if (a === 0) {
            document.getElementById('expression-fonction').innerText = `Équation : ${b}x + ${c}`;
            document.getElementById('message').innerText = `Ce n'est pas une équation du second degré`;
            document.getElementById('resultX0').value = ; // Calcul de la solution x0
        } else {
            document.getElementById('expression-fonction').innerText = `Équation : ${a}x² + ${b}x + ${c}`;
            document.getElementById('message').innerText = `C'est une équation du second degré`;

            // 
            if (delta < 0) {
                document.getElementById('message').innerText = `C'est une équation du second degré mais qui n'admet pas de solution dans R`;
            } else {
                let x1 = ; // Calcul de x1
                let x2 = ; // Calcul de x2
                document.getElementById('resultX1').value = x1; // Affichage de x1
                document.getElementById('resultX2').value = x2; // Affichage de x2
            }
        }

        // 
        document.getElementById('expression-fonction').classList.remove('hidden');
        document.getElementById('message').classList.remove('hidden');

        if (a === 0) {
            document.getElementById('resultX0').classList.remove('hidden');
            document.getElementById('resultX0').classList.add('col-3');
        }
        if (a !== 0 && delta >= 0) { // 
            document.getElementById('resultX1').classList.remove('hidden');
            document.getElementById('resultX2').classList.remove('hidden');
            document.getElementById('resultX1').classList.add('col-3');
            document.getElementById('resultX2').classList.add('col-3');
        }

    } catch (error) {
        document.getElementById('message').innerText = `Une erreur s'est produite, consultez la console`;
    }
}