// З масиву товарів { id, title, price } треба отримати простий масив назв, щоб підставити його в підказку пошуку. Напиши стрілочну функцію getTitles, яка використовує map.

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
