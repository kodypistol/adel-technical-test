import fs from 'fs';
import inputs from '../inputs/input.json';
const json = JSON.parse(JSON.stringify(inputs));

const usersManager = {
    init(){

        // Initialise la liste des utilisateurs, en passant en paramètres le nombre d'utilisateurs qui sera traité,
        // puis un callback qui sera executé à la fin de cette initialisation.
        this.initUserList(7, () =>
        {
            this.rewardUsers()
        });

    },
    initUserList(howManyUsers, callback){

        // Crée un modèle vide du futur fichier users.json
        this.baseUserList = {
            users: [

            ]

        }


        // Création d'une boucle pour ajouter à notre modèle le "boilerplate" (=template) du nombre d'utilisateur que nous
        // avons passé en paramètres plus tôt
        for(let i = 0 ; i < howManyUsers ; i++)
        {
            this.baseUserList.users.push(
                {
                "user_id": i + 1,
                "total_points": 0,
                "loyalty_cards_id": []
                }
            )
        }
        // Le callback spécifié dans la fonction init() est executé ici
        callback()
    },

    rewardUsers(){

        // On crée un objet vide pour pouvoir, par la suite lui ajouter le boilerplate et les données correspondantes pour chaque récompense
        this.newItem = {};

        // On parcourt le tableau de toutes les "récompenses" spécifiées dans le input.json
        json.rewards.forEach((item) =>
        {
            // En fonction de l'id de l'utilisateur, on lui attribue les données dont il a besoin en l'appliquant au modèle this.newItem.
            // J'ai opté pour un switch/case car c'est la seule façon qui m'ait réussi pour l'instant. J'ai tenté d'automatiser le tout, d'utiliser des boucles
            // je n'y suis pas parvenu malheureusement. Je n'abandonne pas l'idée, néanmoins.
            switch(item.user_id)
            {

                case 1:

                    this.baseUserList.users[0].total_points += item.points;
                    if (this.baseUserList.users[0].loyalty_cards_id.indexOf(item.loyalty_card_id) === -1)
                    {

                        this.baseUserList.users[0].loyalty_cards_id.push(
                            this.newItem.push = {
                            id: item.loyalty_card_id,
                            points: item.points,
                            name: json.loyalty_cards[item.loyalty_card_id - 1].name
                        })
                    }
                    break;
                case 2:

                    this.baseUserList.users[1].total_points += item.points;
                    if (this.baseUserList.users[1].loyalty_cards_id.indexOf(item.loyalty_card_id) === -1)
                    {
                        this.baseUserList.users[1].loyalty_cards_id.push(
                            this.newItem.push = {
                            id: item.loyalty_card_id,
                            points: item.points,
                            name: json.loyalty_cards[item.loyalty_card_id - 1].name
                        })
                    }
                    break;
                case 3:

                    this.baseUserList.users[2].total_points += item.points;
                    if (this.baseUserList.users[2].loyalty_cards_id.indexOf(item.loyalty_card_id) === -1)
                    {
                        this.baseUserList.users[2].loyalty_cards_id.push(
                            this.newItem.push = {
                                id: item.loyalty_card_id,
                                points: item.points,
                                name: json.loyalty_cards[item.loyalty_card_id - 1].name
                            }
                        )
                    }
                    break;
                case 4:

                    this.baseUserList.users[3].total_points += item.points;
                    if (this.baseUserList.users[3].loyalty_cards_id.indexOf(item.loyalty_card_id) === -1)
                    {
                        this.baseUserList.users[3].loyalty_cards_id.push(
                            this.newItem.push = {
                                id: item.loyalty_card_id,
                                points: item.points,
                                name: json.loyalty_cards[item.loyalty_card_id - 1].name
                            }
                        )
                    }
                    break;
                case 5:

                    this.baseUserList.users[4].total_points += item.points;
                    if (this.baseUserList.users[4].loyalty_cards_id.indexOf(item.loyalty_card_id) === -1)
                    {
                        this.baseUserList.users[4].loyalty_cards_id.push(
                            this.newItem.push = {
                                id: item.loyalty_card_id,
                                points: item.points,
                                name: json.loyalty_cards[item.loyalty_card_id - 1].name
                            }
                        )
                    }
                    break;
                case 6:

                    this.baseUserList.users[5].total_points += item.points;
                    if (this.baseUserList.users[5].loyalty_cards_id.indexOf(item.loyalty_card_id) === -1)
                    {
                        this.baseUserList.users[5].loyalty_cards_id.push(
                            this.newItem.push = {
                            id: item.loyalty_card_id,
                            points: item.points,
                            name: json.loyalty_cards[item.loyalty_card_id - 1].name
                        })
                    }
                    break;
                case 7:

                    this.baseUserList.users[6].total_points += item.points;
                    if (this.baseUserList.users[6].loyalty_cards_id.indexOf(item.loyalty_card_id) === -1)
                    {
                        this.baseUserList.users[6].loyalty_cards_id.push(
                            this.newItem.push = {
                            id: item.loyalty_card_id,
                            points: item.points,
                            name: json.loyalty_cards[item.loyalty_card_id - 1].name
                        })
                    }
                    break;
            }
        });
        // Lorsque nous avons fini de parcourir le tableau, nous pouvons enfin envoyer notre nouveau boilerplate rempli dans un
        // nouveau fichier users.json.
        this.createUserDB();
    },
    createUserDB() {
        // Utilisation du module node "fs"
        fs.writeFile('./db/users.json', JSON.stringify(this.baseUserList, null, "\t"), function (err) {
            if (err) throw err;
            console.log('User DB was successfully created.');

        });
    }
}
export default usersManager;







