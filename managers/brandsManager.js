import fs from 'fs';
import inputs from '../inputs/input.json';
const json = JSON.parse(JSON.stringify(inputs));

const brandsManager = {
    init()
    {
        this.initBrandsList((brands) =>
        {
            this.rewardBrandsPoints(brands);
        })
    },

    initBrandsList(callback)
    {
        this.brands = [];
        json.loyalty_cards.forEach((item) =>
        {
            const newItem = {
                id: item.id,
                name: item.name,
                brandPoints: 0
            };

            this.brands.push(newItem);

        });

        callback(this.brands);

    },

    rewardBrandsPoints(brands)
    {
        json.rewards.forEach((item) =>
        {
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
        this.createBrandsDB()
    },
    createBrandsDB()
    {
        fs.writeFile('./db/brands.json', JSON.stringify(this.brands, null, "\t"), function (err) {
            if (err) throw err;
            console.log('Brand DB was successfully created.');
        });
    }
}

export default brandsManager;