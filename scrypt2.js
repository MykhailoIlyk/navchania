// const orderRatings = {
//   "#A132": 4,
//   "#B882": 5,
//   "#Z009": 3,
//   "#L188": 5,
// };

// const objKeys = Object.keys(orderRatings);
// const values = Object.values(orderRatings);
// const arrMessage = objKeys.map(
//   (element) => `Order ${element} has rating ${orderRatings[element]}`,
// );
// const arrPerfect = objKeys.filter((element) => orderRatings[element] > 4);
// const average = values.reduce((acumulator, element) => acumulator + element, 0);
// console.log(arrMessage);
// console.log(`avarage ${average / values.length}`);
// console.log(arrPerfect);

//8
// const baseRestaurant = {
//   currency: "USD",
//   tax: 0.1,
//   getFinalPrice(price) {
//     const priceWithTax = price * (1 + this.tax);
//     return `${priceWithTax.toFixed(2)} ${this.currency}`;
//   },
// };
// const firstRestaurant = Object.create(baseRestaurant);
// firstRestaurant.name = "Taste of Tokyo";
// firstRestaurant.hours = {
//   Mon: "11:00–21:00",
//   Tue: "11:00–21:00",
//   Wed: "Closed",
//   Thu: "11:00–21:00",
//   Fri: "11:00–23:00",
//   Sat: "12:00–23:00",
//   Sun: "12:00–20:00",
// };
// firstRestaurant.menu = {
//   sushi: {
//     "California Roll": 8.5,
//     "Dragon Roll": 10.0,
//   },
//   ramen: {
//     "Shoyu Ramen": 11.0,
//     "Miso Ramen": 12.5,
//   },
// };
// firstRestaurant.specials = {
//   "Happy Hour (16:00–18:00)": "-20%",
//   "Free Dessert on Fridays": "Tiramisu",
// };

// const restorantKeys = Object.keys(firstRestaurant);
// const menuCategories = Object.keys(firstRestaurant.menu);
// const menu = Object.entries(firstRestaurant.menu);
// const dates = Object.entries(firstRestaurant.hours);
// const sushiPrices = Object.values(firstRestaurant.menu.sushi);
// const hours = Object.entries(firstRestaurant.hours);

// const working = dates.reduce((acumulator, element) => {
//   if (!(element[1] === "Closed")) {
//     acumulator.push(element);
//   }
//   return acumulator;
// }, []);

// function formatSchedule(hours) {
//   return hours.reduce((acumulator, element) => {
//     if (element[1] === "Closed") {
//       return acumulator;
//     } else {
//       acumulator.push(element.join(": "));
//       return acumulator;
//     }
//   }, []);
// }

// function getMostExpensiveDish(menuEntries) {
//   let maxPrice = 0;
//   let mostExpensive = null;

//   menuEntries.forEach(([category, dishes]) => {
//     Object.entries(dishes).forEach(([name, price]) => {
//       if (price > maxPrice) {
//         maxPrice = price;
//         mostExpensive = {
//           category: category,
//           name: name,
//           price: price,
//         };
//       }
//     });
//   });

//   return mostExpensive;
// }

// console.log(menuCategories);
// console.log(working);
// console.log("list of sushi prices " + sushiPrices);
// console.log(
//   `max price: ${Math.max(...sushiPrices)} cheepest dish ${Math.min(...sushiPrices)}`,
// );
// console.log(formatSchedule(hours));
// console.log(getMostExpensiveDish(menu));
//9
// const company = {
//   sales: {
//     employees: ["Olena", "Ivan"],
//     revenue: 12000,
//   },
//   marketing: {
//     employees: ["Nina", "Taras"],
//     revenue: 9000,
//   },
//   development: {
//     employees: ["Maksym", "Ira", "Sofiia"],
//     revenue: 18000,
//   },
// };

// const compSectors = Object.keys(company);

// const info = compSectors.map((element) => {
//   let dep = company[element];
//   return `Department: sales | Revenue: ${dep.revenue} | Employees: ${[...dep.employees]}`;
// });
// const names = compSectors.reduce((accumulator, element) => {
//   let dep = company[element];
//   dep.employees.forEach((element) => {
//     accumulator.push(element);
//   });
//   return accumulator;
// }, []);
// console.log(compSectors);
// console.log(info);
// console.log(names);
// console.log(`ìn company works ${names.length} emp`);

//10
// const subscriptions = {
//   Anna: { plan: "Pro", months: 3 },
//   Dmytro: { plan: "Basic", months: 1 },
//   Liza: { plan: "Pro", months: 6 },
//   Oleh: { plan: "Enterprise", months: 12 },
// };
// const users = Object.keys(subscriptions);
// const uniqueSubs = users.reduce((acumulator, element) => {
//   let user = subscriptions[element];
//   if (!acumulator.includes(user.plan)) {
//     acumulator.push(user.plan);
//   }
//   return acumulator;
// }, []);

// const listOfSubs = users.reduce((acumulator, element) => {
//   let user = subscriptions[element];
//   acumulator.push(`${element} has ${user.plan} plan for ${user.months} months`);
//   return acumulator;
// }, []);

// const allMonthes = users.reduce((acumulator, element) => {
//   let user = subscriptions[element];
//   return acumulator + user.months;
// }, 0);

// const premiumSubs = users.reduce((acumulator, element) => {
//   let user = subscriptions[element];
//   if (user.plan === "Pro" || user.plan === "Enterprise") {
//     acumulator.push(user);
//   }
//   return acumulator;
// }, []);

// console.log(users);
// console.log(uniqueSubs);
// console.log(listOfSubs);
// console.log(allMonthes);
// console.log(premiumSubs);
