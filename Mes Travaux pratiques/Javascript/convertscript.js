function clearDisplayAllvolume() {
    /**
     * Fonction pour nettoyer les champs valeur et résultat
     */
    document.getElementById('valeur').value = ''; // Réinitialise le champ d'Id valeur
    document.getElementById('result').value = ''; // Réinitialise le champ d'Id résultat
}
function clearDisplayAlldistance() {
    /**
     * Fonction pour nettoyer les champs valeur et résultat
     */
    document.getElementById('valeurdistance').value = ''; // Réinitialise le champ d'Id valeurdistance
    document.getElementById('resultdistance').value = ''; // Réinitialise le champ d'Id résultdistance
}
function clearDisplayAllmasse() {
    /**
     * Fonction pour nettoyer les champs valeur et résultat
     */
    document.getElementById('valeurmasse').value = ''; // Réinitialise le champ d'Id valeurmasse
    document.getElementById('resultmasse').value = ''; // Réinitialise le champ d'Id résultmasse
}


function convertValuevolume() {
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

            case 'mᵌ': // Si la valeur du sélecteur choisie est le hm
                result = valeur*1000;
            break;

            case 'dmᵌ': // Si la valeur du sélecteur choisie est le hm
                result = valeur*1;
            break;

            case 'cmᵌ': // Si la valeur du sélecteur choisie est le hm
                result = valeur*0.001;
            break;

            case 'mmᵌ': // Si la valeur du sélecteur choisie est le km
                result = valeur*0.000001;
                break;

            case 'Kl': // Si la valeur du sélecteur choisie est le dam
                result = valeur*1000;
                break;
            
            case 'hl': // Si la valeur du sélecteur choisie est le dam
                result = valeur*100;
                break;

            case 'dal': // Si la valeur du sélecteur choisie est le dam
                result = valeur*10;
                break;

            case 'l': // Si la valeur du sélecteur choisie est le dam
                result = valeur*1;
                break;
            
            case 'dl': // Si la valeur du sélecteur choisie est le dm
                result = valeur*0.1;
                break;

            case 'cl': // Si la valeur du sélecteur choisie est le cm
                result = valeur*0.01;
                break;

            case 'ml': // Si la valeur du sélecteur choisie est le mm
                result = valeur*0.001;
                break;


        }

        // modification de la valeur de l'élément d'Id "result" avec la nouvelle valeur contenue dans la variable result
        document.getElementById('result').value = result;

        
    } catch (error) {
        document.getElementById('result').value = 'Erreur'; // Affiche une erreur
    }
}

function convertValuedistance() {
    /**
     * Fonction qui récupère l'unité de conversion puis multiplie
     * la valeur d'entrée par des puissances de 10
     */
    try {
        let tailledistance = document.getElementById('tailledistance').value;
        let valeurdistance = document.getElementById('valeurdistance').value;
        let resultdistance = 0;
        /**Utilisation de la structure switch équivalent à "selon" en algorithmique*/
        switch (tailledistance) {

            case 'Km': // Si la valeur du sélecteur choisie est le Km
                resultdistance = valeurdistance*1000;
                break;
            
            case 'hm': // Si la valeur du sélecteur choisie est le hm
                resultdistance = valeurdistance*100;
                break;

            case 'dam': // Si la valeur du sélecteur choisie est le dam
                resultdistance = valeurdistance*10;
                break;

            case 'm': // Si la valeur du sélecteur choisie est le m
                resultdistance = valeurdistance*1;
                break;
            
            case 'dm': // Si la valeur du sélecteur choisie est le dm
                resultdistance = valeurdistance*0.1;
                break;

            case 'cm': // Si la valeur du sélecteur choisie est le cm
                resultdistance = valeurdistance*0.01;
                break;

            case 'mm': // Si la valeur du sélecteur choisie est le mm
                resultdistance = valeurdistance*0.001;
                break;


        }

        // modification de la valeur de l'élément d'Id "resultdistance" avec la nouvelle valeur contenue dans la variable result
        document.getElementById('resultdistance').value = resultdistance;

        
    } catch (error) {
        document.getElementById('resultdistance').value = 'Erreur'; // Affiche une erreur
    }
}

function convertValuemasse() {
    /**
     * Fonction qui récupère l'unité de conversion puis multiplie
     * la valeur d'entrée par des puissances de 10
     */
    try {
        let taillemasse = document.getElementById('taillemasse').value;
        let valeurmasse = document.getElementById('valeurmasse').value;
        let resultmasse = 0;
        /**Utilisation de la structure switch équivalent à "selon" en algorithmique*/
        switch (taillemasse) {

            case 'Kg': // Si la valeur du sélecteur choisie est le Km
                resultmasse = valeurmasse*1000;
                break;
            
            case 'hg': // Si la valeur du sélecteur choisie est le hm
                resultmasse = valeurmasse*100;
                break;

            case 'dag': // Si la valeur du sélecteur choisie est le dam
                resultmasse = valeurmasse*10;
                break;

            case 'g': // Si la valeur du sélecteur choisie est le m
                resultmasse = valeurmasse*1;
                break;
            
            case 'dg': // Si la valeur du sélecteur choisie est le dm
                resultmasse = valeurmasse*0.1;
                break;

            case 'cg': // Si la valeur du sélecteur choisie est le cm
                resultmasse = valeurmasse*0.01;
                break;

            case 'mg': // Si la valeur du sélecteur choisie est le mm
                resultmasse = valeurmasse*0.001;
                break;


        }

        // modification de la valeur de l'élément d'Id "resultdistance" avec la nouvelle valeur contenue dans la variable result
        document.getElementById('resultmasse').value = resultmasse;

        
    } catch (error) {
        document.getElementById('resultmasse').value = 'Erreur'; // Affiche une erreur
    }
}

