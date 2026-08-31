// Створи функцію `getFirstItem(items)`, яка повертає перший елемент масиву. Якщо масив порожній, поверни рядок `Кошик порожній`. Перевір масив `['Молоко', 'Хліб', 'Яблука']`.

// function getFirstItem(items) {
//   return items[0] || `Кошик порожній`;
// }

// console.log(getFirstItem(['Молоко', 'Хліб', 'Яблука']));
// console.log(getFirstItem([]));

// Створи `calculateAverage(ratings)`. Якщо масив порожній, поверни 0. Інакше циклом знайди суму й поділи її на кількість оцінок. Перевір `[5, 4, 5, 3, 3]`.

// function calculateAverage(ratings) {
//   let total = 0;
//   let count = 0;

//   for (const rating of ratings) {
//     if (typeof rating === 'number') {
//       total += rating;
//       count += 1;
//     }
//   }

//   return total / count || 0;
// }

// console.log(calculateAverage([5, 4, 5, 3, 3, 'hello', 'sd', 'asdasd']));
// console.log(calculateAverage([]));

// Ціни та кількості зберігаються у двох масивах з однаковими індексами. Створи `calculateCartTotal(prices, quantities)`, яка додає `price * quantity` для кожної позиції. Перевір `[80, 25, 40]` і `[2, 3, 1]`.

// function calculateCartTotal(prices, quantities) {
//   let total = 0;

//   for (let i = 0; i < prices.length; i += 1) {
//     total += prices[i] * quantities[i];
//   }

//   return total;
// }

// console.log(calculateCartTotal([80, 25, 40], [2, 3, 1]));

// Створи `applyDiscount(prices, percent)`, яка повертає новий масив цін після знижки. Для округлення до двох знаків використай `Number(value.toFixed(2))`. Не використовуй `map()`. Перевір `[100, 250, 80]`, `10`.

// function applyDiscount(prices, percent) {
//   const newPrice = [];

//   for (const price of prices) {
//     const discounted = price - (price * percent) / 100;
//     newPrice.push(Number(discounted.toFixed(2)));
//   }

//   return newPrice;
// }

// console.log(applyDiscount([100, 250, 80], 10));

// Створи `cleanTags(tags)`. Для кожного рядка прибери крайні пробіли, переведи його у нижній регістр, пропусти порожні й не додавай дублікати. Перевір `[' JavaScript ', 'web', '', 'javascript', ' WEB ']`.

// function cleanTags(tags) {
//   const newTags = [];

//   for (const tag of tags) {
//     const normalizeTag = tag.trim().toLowerCase();

//     if (normalizeTag && !newTags.includes(normalizeTag)) {
//       newTags.push(normalizeTag);
//     }
//   }

//   return newTags;
// }

// console.log(cleanTags([' JavaScript ', 'web', '', 'javascript', ' WEB ']));

// Створи `searchNames(names, query)`. Поверни новий масив назв, що містять запит без урахування регістру. Використай цикл та рядковий `includes()`. Перевір `['JavaScript Basics', 'React Start', 'Advanced JavaScript']`, `'script'`.

// function searchNames(names, query) {
//   const newNames = [];

//   for (const name of names) {
//     const normalizedName = name.trim().toLowerCase();

//     if (normalizedName.includes(query.toLowerCase())) {
//       newNames.push(normalizedName);
//     }
//   }

//   return newNames;
// }

// console.log(
//   searchNames(
//     ['JavaScript Basics', 'React Start', 'Advanced JavaScript'],
//     'Script'
//   )
// );

// Створи `limitHistory(history, limit)`, яка повертає новий масив лише з останніх `limit` запитів. Початковий масив не змінюй. Перевір п’ять запитів і ліміт 3.

// function limitHistory(history, limit) {
//   return history.slice(-limit);
// }

// console.log(limitHistory(['html', 'css', 'js', 'nodejs', 'react'], 7));
// console.log(limitHistory(['html', 'css', 'js', 'nodejs', 'react'], 1));
// console.log(limitHistory(['html', 'css', 'js', 'nodejs', 'react'], 2));

// Створи `getUnsubscribed(previous, current)`, яка повертає імена, що були у попередньому масиві, але відсутні в поточному. Перевір `['Іра', 'Макс', 'Оля']` і `['Макс', 'Оля', 'Тарас']`.

// function getUnsubscribed(previous, current) {
//   const names = [];

//   for (const name of previous) {
//     if (!current.includes(name)) {
//       names.push(name);
//     }
//   }

//   return names;
// }

// console.log(getUnsubscribed(['Іра', 'Макс', 'Оля'], ['Макс', 'Оля', 'Тарас']));
