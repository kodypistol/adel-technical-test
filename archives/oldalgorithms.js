
// const userId = item.user_id - 1;
// const userPoints = item.points;
// const userLoyaltyCard = item.loyalty_card_id;
//
// // this.baseUserList.users[userId].points = userPoints
//  fs.readFile('./db/users.json', 'utf8', (err, content) => {
//      if (err) throw err;
//
//      const data = JSON.parse(content);
//
//      console.log('AVANT POUR LE USER: ' + data.users[userId].user_id)
//      console.log(data.users[userId].total_points)
//      data.users[userId].total_points += userPoints;
//      console.log('APRÈS pour le user : ' + data.users[userId].user_id)
//      console.log(data.users[userId].total_points)
//
//      this.newData = JSON.stringify(data)
//
//      fs.writeFile('./db/users.json', this.newData, function (err) {
//          if (err) throw err;
//          console.log('File is updated with new values successfully.');
//      });

// })





// for(let key in json.rewards)
// {
//     const registeredUsersId = json.rewards[key].user_id;
//     const userLoyaltyCard = json.rewards[key].loyalty_card_id
//
//     json.loyalty_cards.forEach((child) =>
//     {
//         if (userLoyaltyCard === child.id)
//         {
//             console.log('Voici ce que j\'ai besoin')
//             console.log(this.baseUserList.users[registeredUsersId])
//             // this.baseUserList.users[registeredUsersId].total_points = json.rewards[key].points
//             // console.log('User: ' + registeredUsersId + ', got ' + json.rewards[key].points + ' points by buying in: ' + child.name)
//         }
//     })
// }