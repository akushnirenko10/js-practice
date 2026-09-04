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

// Створи `appendCopy(items, item)`. Функція має створити копію масиву, додати `item` у кінець і повернути новий масив. Початковий масив не змінюй. Перевір `['HTML', 'CSS']` і `'JavaScript'`.

// const appendCopy = function (items, item) {
//   return [...items, item];
// };

// console.log(appendCopy(['HTML', 'CSS'], 'JavaScript'));

// Створи `prependCopy(items, item)`, яка повертає копію масиву з новим елементом на початку. Використай `slice()` та `unshift()`. Перевір `['Каталог', 'Контакти']` і `'Головна'`.

// const prependCopy = function (items, item) {
//   const copyItems = items.slice();
//   console.log(copyItems.unshift(item));
//   return copyItems;
// };

// console.log(prependCopy(['Каталог', 'Контакти'], 'Головна'));

// Створи `removeExisting(items, value)`. Поверни копію без першого входження `value`; якщо значення немає, поверни незмінену копію. Перевір `['new', 'draft', 'ready']` і `'draft'`.

// const removeExisting = function (items, value) {
//   const copyItems = items.slice();
//   const atIndex = items.indexOf(value);
//   if (atIndex !== -1) {
//     copyItems.splice(atIndex, 1);
//   }
//   return copyItems;
// };

// console.log(removeExisting(['new', 'draft', 'ready'], 'draft'));

// Створи допоміжні функції `normalizePhone(phone)` та `preparePhones(phones)`. Перша залишає в рядку лише цифри. Друга обробляє масив, відкидає номери не з 10 цифр і дублікати, зберігаючи порядок. Перевір `['050 123-45-67', '+38(050)1234567', '067-555-44-33', '123']`.

// const normalizePhone = function (phone) {
//   let digits = '';

//   for (const digit of phone) {
//     if (digit >= '0' && digit <= '9') {
//       digits += digit;
//     }
//   }

//   return digits.padStart(12, '38');
// };

// const preparePhones = function (phones) {
//   const result = [];

//   for (const phone of phones) {
//     const formattedPhone = normalizePhone(phone);
//     if (formattedPhone.length === 12 && !result.includes(formattedPhone)) {
//       result.push(formattedPhone);
//     }
//   }

//   return result;
// };

// console.log(
//   preparePhones([
//     '050 123-45-67',
//     '+38(050)1234567',
//     '+38(050)1234567',
//     '067-555-44-33',
//     '123',
//     '000000000000',
//   ])
// );

// Створи `withoutFirst(messages)`. Функція повертає копію масиву без першого елемента. Для порожнього масиву поверни порожній масив. Перевір `['Старе', 'Нове', 'Важливе']`.

// const withoutFirst = function (messages) {
//   return messages.slice(1);
// };

// console.log(withoutFirst(['Старе', 'Нове', 'Важливе']));
// console.log(withoutFirst([]));

// Створи `replaceMatches(items, oldValue, newValue)`, яка повертає новий масив, замінюючи всі точні збіги. Не використовуй методи перебору. Перевір `['dev', 'prod', 'dev']`, `'dev'`, `'test'`.

// const replaceMatches = function (items, oldValue, newValue) {
//   const newItems = [];

//   for (const item of items) {
//     if (item === oldValue) {
//       newItems.push(newValue);
//     } else {
//       newItems.push(item);
//     }
//   }

//   return newItems;
// };

// console.log(replaceMatches(['dev', 'prod', 'dev'], 'dev', 'test'));

// Кожен рядок має формат `[login, email, age]`. Створи окремі `isValidLogin`, `isValidEmail`, `isValidAge` і `validateRegistrations(rows)`. Остання повертає вкладені пари `[номер рядка, текст помилки]` для кожної знайденої помилки. Нумерація починається з 1.

// const isValidLogin = function (login) {
//   return login.length >= 3 && !login.includes(' ');
// };

// const isValidEmail = function (email) {
//   const atIndex = email.indexOf('@');
//   return email.includes('@gmail.com') && atIndex >= 2;
// };

// const isValidAge = function (age) {
//   return typeof age === 'number' && age >= 18;
// };

// const validateRegistrations = function (rows) {
//   const errors = [];

//   for (let i = 0; i < rows.length; i++) {
//     const row = rows[i];

//     if (!isValidLogin(row[0])) {
//       errors.push([i, `Invalid login (${row[0]})`]);
//     }

//     if (!isValidEmail(row[1])) {
//       errors.push([i, `Invalid email (${row[1]})`]);
//     }

//     if (!isValidAge(row[2])) {
//       errors.push([i, `Invalid age (${row[2]})`]);
//     }
//   }

//   return errors;
// };

// console.log(
//   validateRegistrations([
//     ['An', 'anasdsadna@gmail.com', 28],
//     ['Anaaa', 'anasdsadnagmail.com', 28],
//     ['Anton', 'com', 18],
//     ['Anton', '@gmail.com', 18],
//     ['asdasda3', 'ann3dd3a@gmail.com', 17],
//     ['asdasda3', 'ann3dd3a@gmail.com', '17'],
//   ])
// );

// Створи `toggleSelection(selected, value)`. Якщо `value` уже є у масиві, видали його з копії; якщо немає — додай. Перевір `['dark', 'compact']` і `'dark'`.

// const toggleSelection = function (selected, value) {
//   const copyArr = selected.slice();
//   const atIndex = selected.indexOf(value);

//   if (atIndex === -1) {
//     copyArr.push(value);
//   } else {
//     copyArr.splice(atIndex, 1);
//   }

//   return copyArr;
// };

// console.log(toggleSelection(['dark', 'compact'], 'dark'));

// Створи `unionLists(first, second)`, яка повертає всі унікальні елементи двох масивів у порядку першої появи. Перевір `['uk', 'en']` і `['en', 'pl', 'uk']`..

// const unionLists = function (first, second) {
//   const arr = first.concat(second);
//   const uniqueElements = [];
//   for (const item of arr) {
//     if (!uniqueElements.includes(item)) {
//       uniqueElements.push(item);
//     }
//   }

//   return uniqueElements;
// };

// console.log(unionLists(['uk', 'en'], ['en', 'pl', 'uk']));

// Створи `combineLabels(names, values)`. Для кожного індексу сформуй рядок `Назва: значення`. Опрацюй лише спільну довжину масивів. Перевір `['Views', 'Likes', 'Comments']` і `[1200, 85]`.

// const combineLabels = function (names, values) {
//   const length = names.length < values.length ? names.length : values.length;
//   const arr = [];

//   for (let i = 0; i < length; i++) {
//     arr.push(`${names[i]}: ${values[i]}`);
//   }

//   return arr;
// };

// console.log(combineLabels(['Views', 'Likes', 'Comments'], [1200, 85, 6]));
