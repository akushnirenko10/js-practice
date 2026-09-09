// З масиву товарів { id, title, price } треба отримати простий масив назв, щоб підставити його в підказку пошуку. Напиши стрілочну функцію getTitles, яка використовує map.

// const { use } = require('react');

// const getTitles = products => products.map(product => product.title);

// console.log(
//   getTitles([
//     { id: 1, title: 'Миша' },
//     { id: 2, title: 'Монітор' },
//   ])
// );

// Кожна стаття має масив тегів. Для хмари тегів потрібен один плоский список (повтори поки що залишаємо). Напиши функцію collectTags(articles)

// const collectTags = articles => articles.flatMap(article => article.tags);

// console.log(collectTags([{ tags: ['js', 'css'] }, { tags: ['js'] }]));

// Постачальник підняв ціни на певний відсоток. Напиши функцію applyMarkup(prices, percent), яка повертає новий масив цін із націнкою, округлених до 2 знаків. Вихідний масив не змінюється.

// const applyMarkup = (prices, percent) =>
//   prices.map(price => Number((price * (1 + percent / 100)).toFixed(2)));

// console.log(applyMarkup([100, 250], 10));

// Для звіту треба зібрати всі товарні позиції з масиву замовлень в один масив, додавши до кожної позиції номер замовлення. Напиши функцію collectOrderItems(orders), де замовлення — { id, items: [{ title, qty }] }.

// const collectOrderItems = orders =>
//   orders.flatMap(order =>
//     order.items.map(item => ({ ...item, orderId: order.id }))
//   );

// console.log(
//   collectOrderItems([
//     { id: 10, items: [{ title: 'Миша', qty: 1 }] },
//     { id: 11, items: [{ title: 'Клава', qty: 3 }] },
//   ])
// );

// flatMap вміє відкидати елементи: якщо колбек повертає порожній масив, елемент зникає. Напиши функцію getDeliveredCities(orders), яка повертає міста лише доставлених замовлень (status === 'delivered'), використавши один flatMap.

// const getDeliveredCities = orders =>
//   orders.flatMap(order => (order.status === 'delivered' ? order.city : []));

// const getDeliveredCities = orders =>
//   orders.filter(order => order.status === 'delivered').map(order => order.city);

// console.log(
//   getDeliveredCities([
//     { city: 'Київ', status: 'delivered' },
//     { city: 'Львів', status: 'new' },
//   ])
// );

// Користувачі вводять телефон як завгодно: з пробілами, дужками й дефісами. Напиши функцію normalizePhones(phones), яка залишає лише цифри і приводить номер до вигляду +380XXXXXXXXX. Номери, у яких після очищення не 12 цифр, познач як null.

// const onlyDigits = phone =>
//   phone
//     .split('')
//     .filter(symbol => symbol >= 0 && symbol <= 9)
//     .join('');

// const normalizePhones = (phones, callback) =>
//   phones.map(phone => {
//     const normalizedPhone = callback(phone);

//     return normalizedPhone.length !== 12 ? null : `+${normalizedPhone}`;
//   });

// console.log(normalizePhones(['(067) 123-45-67', '380671234567'], onlyDigits));

// Є масив цін:
// const prices = [100, 250, 80, 500, 120];

// Створи новий масив, у якому кожна ціна буде зменшена на 10%.

// const prices = [100, 250, 80, 500, 120];

// // const newPrices = prices => prices.map(price => price * (1 - 0.1));
// const newPrices = prices =>
//   prices.reduce((acc, price) => {
//     acc.push(price * (1 - 0.1));
//     return acc;
//   }, []);

// console.log(newPrices(prices));

// Є масив користувачів:
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 17 },
//   { name: "Charlie", age: 30 }
// ];

// Отримай масив, який містить тільки імена користувачів.

// const users = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 17 },
//   { name: 'Charlie', age: 30 },
// ];

// const getUserNames = users => users.map(user => user.name);
// const getUserNames = users =>
//   users.reduce((acc, user) => {
//     acc.push(user.name);
//     return acc;
//   }, []);

// console.log(getUserNames(users));

// Використовуючи масив користувачів із попередньої задачі, отримай тільки користувачів віком 18 років і старше.

// const users = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 17 },
//   { name: 'Charlie', age: 30 },
// ];

// // const adultUsers = users => users.filter(user => user.age >= 18);
// const adultUsers = users =>
//   users.reduce((acc, user) => {
//     if (user.age >= 18) {
//       acc.push(user);
//     }
//     return acc;
//   }, []);

// console.log(adultUsers(users));

// const products = [
//   { name: 'Phone', price: 1000, discount: 10 },
//   { name: 'Mouse', price: 100, discount: 20 },
//   { name: 'Keyboard', price: 200, discount: 0 },
// ];

// // Створи новий масив, де кожен елемент має name і finalPrice. finalPrice — ціна після знижки.

// const getProductsWithDiscount = products =>
//   products.reduce((acc, { name, price, discount }) => {
//     const finalPrice = price * (1 - discount / 100);
//     acc.push({ name, finalPrice });

//     return acc;
//   }, []);

// // const getProductsWithDiscount = products =>
// //   products.map(({ name, price, discount }) => ({
// //     name,
// //     finalPrice: price * (1 - discount / 100),
// //   }));

// console.log(getProductsWithDiscount(products));

// const orders = [
//   { userId: 1, total: 100 },
//   { userId: 2, total: 200 },
//   { userId: 1, total: 300 },
//   { userId: 3, total: 150 },
// ];

// Порахуй суму всіх замовлень користувача з userId === 1.

// const getTotalPrice = (orders, userId) =>
//   orders
//     .filter(order => order.userId === userId)
//     .reduce((acc, order) => {
//       return acc + order.total;
//     }, 0);

// console.log(getTotalPrice(orders, 1));

// Умова
// Отримай email тільки активних користувачів.

// const users = [
//   { name: 'Alice', email: 'alice@gmail.com', active: true },
//   { name: 'Bob', email: 'bob@gmail.com', active: false },
//   { name: 'John', email: 'john@gmail.com', active: true },
// ];

// const getActiveUsers = users =>
//   users.filter(user => user.active).map(user => user.email);

// console.log(getActiveUsers(users));

// const orders = [
//   {
//     id: 1,
//     customer: 'Alice',
//     items: [
//       { name: 'Phone', price: 800, quantity: 1 },
//       { name: 'Mouse', price: 50, quantity: 2 },
//     ],
//   },
//   {
//     id: 2,
//     customer: 'Bob',
//     items: [{ name: 'Laptop', price: 1200, quantity: 1 }],
//   },
// ];

// // Порахуй загальну суму всіх замовлень.

// // const getTotalPrice = orders =>
// //   orders
// //     .flatMap(order => order.items)
// //     .reduce((acc, order) => acc + order.price * order.quantity, 0);

// const getTotalPrice = orders =>
//   orders.reduce((totalOrdersSum, order) => {
//     const totalItemsSum = order.items.reduce(
//       (acc, item) => acc + item.price * item.quantity,
//       0
//     );

//     return totalOrdersSum + totalItemsSum;
//   }, 0);

// console.log(getTotalPrice(orders));

// Порахуй середній вік усіх користувачів.

// const users = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 17 },
//   { name: 'John', age: 30 },
//   { name: 'Maria', age: 28 },
// ];

// const getAverageAge = users => {
//   const totalAges = users.reduce((acc, user) => acc + user.age, 0);

//   return totalAges / users.length;
// };

// console.log(getAverageAge(users));

// Знайди найдорожчий товар категорії "laptop".

// const products = [
//   { name: 'iPhone', category: 'phone', price: 900 },
//   { name: 'Samsung', category: 'phone', price: 700 },
//   { name: 'MacBook Air', category: 'phone', price: 1200 },
//   { name: 'Dell XPS', category: 'phone', price: 1500 },
//   { name: 'Dell', category: 'phone', price: 500 },
// ];

// const getExpensivePrice = (products, category) => {
//   const productsByCategory = products.filter(
//     product => product.category === category
//   );

//   if (productsByCategory.length <= 0) {
//     return 'Error';
//   }

//   return productsByCategory.reduce((mostExpProduct, product) => {
//     return (mostExpProduct =
//       mostExpProduct.price < product.price ? product : mostExpProduct);
//   }).name;
// };

// console.log(getExpensivePrice(products, 'laptop'));
