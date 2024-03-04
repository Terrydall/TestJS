let Damier = 10; //Déclarer variables TailleDamier

function mondamier(Damier) { //Démarre la fonction avec paramètre taille tableau
    let ligne = new Array (Damier); //déclare un nouveau tableau
    for(let i = 0; i < Damier; i++){ //Initialise le début de la boucle/ condition d'arrêt et incrémentation
    let colonnes = new Array(Damier);//Déclare le tab colonne
    ligne[i] = colonnes; //A chaque ligne on ajoute une colonne
    for (let j= 0;j<Damier; j++){ //initialisation
        ligne[i][j] =(((i+j) % 2) === 0 ? "x" : "#"); //si paire la valeur =x si impair valeur =x // le ? est un opérateur ternaire qui remplace if et else
    }
    return(ligne);
}
}
 console.log(mondamier(Damier));
 
 

 
