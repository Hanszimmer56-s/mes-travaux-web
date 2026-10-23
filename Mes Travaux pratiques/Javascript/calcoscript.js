function appendToDisplay(value) {
    /**
     * Fonction pour ajouter une valeur à l'opération
     * @param value : valeur des touches cliquées
     */
    document.getElementById(' ').value += value; 
}

function clearDisplayAll() {
    /**
     * Fonction pour nettoyer les champs opération et résultat
     */
    document.getElementById(' ').value = ''; // Réinitialise le champ opération
    document.getElementById(' ').value = ''; // Réinitialise le champ résultat
}

function clearDisplay() {
    /**
     * Fonction pour supprimer un caractère dans la zone d'opération
     */
    let operation = document.getElementById(' ').value; // Utilisez let ici
    operation = operation.slice(0, -1); // Retire la dernière valeur entrée
    document.getElementById(' ').value = operation; // Réaffecte la nouvelle valeur
}

function calculateResult() {
    /**
     * Fonction qui récupère la valeur dans le champ opération
     * et retourne la solution dans le champ résultat sinon
     * retourne une erreur
     */
    try {
        const operation = document.getElementById(' ').value;
        const result = eval(operation);
        document.getElementById(' ').value = result; // Affiche le résultat
    } catch (error) {
        document.getElementById(' ').value = 'Erreur'; // Affiche une erreur
    }
}
