import fs from 'fs';
import inputs from '../inputs/input.json';
const json = JSON.parse(JSON.stringify(inputs));

const usersManager = {
    init(){

        this.initUserList(7, () =>
        {
            this.rewardUsers()
        });

    },
    initUserList(howManyUsers, callback){

        this.baseUserList = {
            users: [

            ]

        }


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
        callback()




    },

    rewardUsers(){

        this.newItem = {};

        // Get the earning user points history
        json.rewards.forEach((item) =>
        {
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

        })
        this.createUserDB()
    },
    createUserDB() {
        fs.writeFile('./db/users.json', JSON.stringify(this.baseUserList, null, "\t"), function (err) {
            if (err) throw err;
            console.log('User DB was successfully created.');

        });
    }
}
export default usersManager;







