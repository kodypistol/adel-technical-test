// Le code est plutôt ressemblant au code du fichier usersManagers.js, c'est pourquoi pas mal de commentaires
// seront copiés-collés.

import fs from 'fs';
import inputs from '../inputs/input.json';
const json = JSON.parse(JSON.stringify(inputs));

const brandsManager = {
    init()
    {
        // Initialise la liste des enseignes, en utilisant en paramètre du callback le "boilerplate" (=template) d'enseignes qui aura été créé au sein de la fonction.
        // Nous utilisons un callback ici pour s'assurer d'exécuter la prochaine fonction uniquement lorsque this.initBrandsList() aura terminé.
        this.initBrandsList((brands) =>
        {
            this.rewardBrandsPoints(brands);
        })
    },

    initBrandsList(callback)
    {
        // Crée un modèle vide du futur fichier brands.json
        this.brands = [];

        // On parcourt la liste des enseignes données dans le fichier input.json
        json.loyalty_cards.forEach((item) =>
        {
            // Pour chaque objet parcouru, on crée un nouvel objet contenant les informations dont on a besoin
            // et on le transmet à notre précédent objet qui était vide jusque-là.
            const newItem = {
                id: item.id,
                name: item.name,
                brandPoints: 0
            };

            this.brands.push(newItem);

        });

        // Nous fournissons en paramètres notre objet qui contient toutes les informations des enseignes, sans le nombre de points.
        callback(this.brands);

    },

    rewardBrandsPoints(brands)
    {
        // Nous devons à présent calculer le nombre de points total de chaque enseigne.
        // Pour ce faire, nous parcourons le tableau des rewards fourni dans le fichier input.json
        json.rewards.forEach((item) =>
        {
            // En fonction de l'id de chaque carte de fidélité d'utilisateur, nous ajoutons le nombre de points nécessaire à l'enseigne correspondant dans notre précédent modèle
            // J'ai opté pour un switch/case car c'est la seule façon qui m'ait réussi pour l'instant. J'ai tenté d'automatiser le tout, d'utiliser des boucles
            // je n'y suis pas parvenu malheureusement. Je n'abandonne pas l'idée, néanmoins.
            switch (item.loyalty_card_id){
                case 1:
                    brands[0].brandPoints += item.points
                    break;
                case 2:
                    brands[1].brandPoints += item.points
                    break;
                case 3:
                    brands[2].brandPoints += item.points
                    break;
                case 4:
                    brands[3].brandPoints += item.points
                    break;
                case 5:
                    brands[4].brandPoints += item.points
                    break;
                case 6:
                    brands[5].brandPoints += item.points
                    break;
            }
        });
        // Lorsque nous avons fini de parcourir le tableau, nous pouvons enfin envoyer notre nouveau boilerplate rempli dans un
        // nouveau fichier brands.json.
        this.createBrandsDB()
    },
    createBrandsDB()
    {
        // Utilisation du module node "fs"
        fs.writeFile('./db/brands.json', JSON.stringify(this.brands, null, "\t"), function (err) {
            if (err) throw err;
            console.log('Brand DB was successfully created.');
        });
    }
}

export default brandsManager;