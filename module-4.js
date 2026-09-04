// Створи функцію `createUser(name, age, isActive)`, яка повертає об’єкт із властивостями `name`, `age` та `isActive`. Назви параметрів і властивостей збігаються, тому використай скорочений запис властивостей. Перевір дані `'Олена'`, `24`, `true`.

// const createUser = function (name, age, isActive) {
//   return {
//     name,
//     age,
//     isActive,
//   };
// };

// console.log(createUser('Олена', 24, true));

// Створи `normalizeUsers(users)`. Для кожного користувача поверни новий об’єкт: `id` залиш без змін, `name` очисть методом `trim()`, `email` переведи в нижній регістр, а відсутній `isActive` заміни на `false`. Не змінюй вхідний масив та об’єкти.

// const users = [
//   { id: 1, name: '  Анна ', email: ' ANNA@MAIL.COM ' },
//   { id: 2, name: 'Ігор', email: 'IGOR@MAIL.COM', isActive: true },
// ];

// const normalizeUsers = function (users) {
//   const newUsers = [];

//   for (const user of users) {
//     const newUser = {
//       id: user.id,
//       name: user.name.trim(),
//       email: user.email.toLowerCase(),
//       isActive: user.isActive ?? false,
//     };
//     newUsers.push(newUser);
//   }

//   return newUsers;
// };

// console.log(normalizeUsers(users));

// Створи `normalizeCatalog(response)`. `response` має поле `items`; кожен товар містить вкладений `price: { amount, currency }`, масив `tags` і необов’язковий `stock`. Поверни об’єкт `{ products, total }`, де товари мають плоскі поля `id`, `name`, `price`, `currency`, `tags`, `inStock`. Копіюй масив тегів; `inStock` істинний лише при `stock > 0`.

// const response = {
//   items: [
//     {
//       id: 1,
//       name: ' Mouse ',
//       price: { amount: 500, currency: 'UAH' },
//       tags: ['tech'],
//       stock: 3,
//     },
//     {
//       id: 2,
//       name: 'Book',
//       price: { amount: 250, currency: 'UAH' },
//       tags: [],
//       stock: 0,
//     },
//   ],
// };

// const normalizeCatalog = function (response) {
//   const products = [];

//   for (const item of response.items) {
//     const product = {
//       id: item.id,
//       name: item.name.trim(),
//       price: item.price.amount,
//       currency: item.price.currency,
//       tags: item.tags.slice(),
//       inStock: item.stock > 0,
//     };
//     products.push(product);
//   }

//   return {
//     products,
//     total: products.length,
//   };
// };

// console.log(normalizeCatalog(response));

// Створи `getProfileLabel(user)`. Функція отримує об’єкт користувача та повертає рядок у форматі `Ім’я — місто`. Якщо властивості `city` немає або вона містить порожній рядок, замість міста виведи `місто не вказано`. Перевір `{ name: 'Максим', city: '' }`.

// const getProfileLabel = function (user) {
//   return `${user.name} — ${user.city.trim() || `місто не вказано`}`;
// };

// console.log(getProfileLabel({ name: 'Максим', city: ' ' }));
// console.log(getProfileLabel({ name: 'Максим', city: 'Kyiv' }));

// Створи `searchContacts(contacts, query)`. Поверни копії контактів, у яких `name` або `email` містить `query` без урахування регістру. Якщо після `trim()` запит порожній, поверни копії всіх контактів. Не використовуй `filter()`.

// const contacts = [
//   { name: 'Anna', email: 'anna@mail.com' },
//   { name: 'Bohdan', email: 'dev@site.com' },
// ];

// const searchContacts = function (contacts, query) {
//   const newContacts = [];
//   const normalizedQuery = query.trim().toLowerCase();

//   for (const contact of contacts) {
//     const matches =
//       normalizedQuery === '' ||
//       contact.name.toLowerCase().includes(normalizedQuery) ||
//       contact.email.toLowerCase().includes(normalizedQuery);

//     if (matches) {
//       newContacts.push({ ...contact });
//     }
//   }

//   return newContacts;
// };

// console.log(searchContacts(contacts, 'MAIL'));
// console.log(searchContacts(contacts, ''));

// Створи `groupProducts(products)`. Поверни об’єкт, де кожна властивість має назву категорії, а її значенням є масив копій товарів цієї категорії. Категорії заздалегідь невідомі. Використай звичайний цикл.

// Очікуваний результат:
// const result = {
//   tech: [
//     { name: 'Mouse', category: 'tech' },
//     { name: 'Cable', category: 'tech' },
//   ],
//   books: [{ name: 'Book', category: 'books' }],
// };

// // ---------------------------------------

// const products = [
//   { name: 'Mouse', category: 'tech' },
//   { name: 'Book', category: 'books' },
//   { name: 'Cable', category: 'tech' },
// ];

// const groupProducts = function (products) {
//   const result = {};

//   for (const product of products) {
//     if (!result[product.category]) {
//       result[product.category] = [];
//     }

//     result[product.category].push({ ...product });
//   }

//   return result;
// };

// console.log(groupProducts(products));

// Створи `createTagList(...tags)`. Rest-параметр має зібрати всі передані теги в масив. Поверни новий масив, у якому кожен тег починається із `#`. Використай звичайний цикл. Перевір `'js'`, `'frontend'`, `'practice'`.

// const createTagList = function (...tags) {
//   const result = [];

//   for (const tag of tags) {
//     result.push(`#${tag}`);
//   }

//   return result;
// };

// console.log(createTagList('js', 'frontend', 'practice'));

// Створи `indexById(items)`. Перетвори масив об’єктів на об’єкт-довідник: ключем має бути `id`, а значенням — копія відповідного запису. Вважай ID унікальними. Перевір два записи.

// const indexById = function (items) {
//   const newObj = {};

//   for (const item of items) {
//     newObj[item.id] = item;
//   }

//   return newObj;
// };

// console.log(
//   indexById([
//     { id: 10, title: 'A' },
//     { id: 20, title: 'B' },
//   ])
// );

// Є масив `users` з `id` і `name` та масив `statuses` з `userId` і `online`. Створи `attachStatuses(users, statuses)`, яка повертає новий масив користувачів із полем `online`. Якщо статус не знайдено, встанови `false`.

// const users = [
//   { id: 1, name: 'Анна' },
//   { id: 2, name: 'Ігор' },
// ];

// const attachStatuses = function (users, statuses) {
//   const newUsers = [];

//   for (const user of users) {
//     let online = false;
//     for (const status of statuses) {
//       if (user.id === status.userId) {
//         online = status.online;
//         break;
//       }
//     }

//     newUsers.push({ ...user, online });
//   }

//   return newUsers;
// };

// console.log(attachStatuses(users, [{ userId: 2, online: true }]));

// Створи `getFilledValues(data)`. Отримай значення через `Object.values()` і звичайним циклом поверни новий масив без порожніх рядків. Нуль і `false` вважай заповненими значеннями. Перевір `{ name: 'Анна', city: '', attempts: 0, subscribed: false }`.

// const getFilledValues = function (data) {
//   const values = Object.values(data);
//   const newArr = [];

//   for (const value of values) {
//     if (value !== '') {
//       newArr.push(value);
//     }
//   }

//   return newArr;
// };

// console.log(
//   getFilledValues({ name: 'Анна', city: '', attempts: 0, subscribed: false })
// );

// Створи `changeCity(user, city)`. Об’єкт користувача має вкладений об’єкт `address`. Поверни новий об’єкт користувача з новим `address.city`, зберігши інші поля користувача й адреси. Не змінюй жоден вхідний об’єкт.

// const user = {
//   id: 1,
//   name: 'Олег',
//   address: { city: 'Київ', street: 'Садова' },
// };

// const changeCity = function (user, city) {
//   return { ...user, address: { ...user.address, city: city } };
// };

// console.log(changeCity(user, 'Lviv'));

// Створи `applyDefaults(defaults, custom)`. Функція має об’єднати два об’єкти так, щоб властивості `custom` замінювали однойменні властивості `defaults`. Перевір стандартні `{ theme: 'light', pageSize: 10 }` та користувацькі `{ pageSize: 25 }`.

// const applyDefaults = function (defaults, custom) {
//   return { ...defaults, ...custom };
// };

// console.log(applyDefaults({ theme: 'light', pageSize: 10 }, { pageSize: 25 }));

// Створи `validateSignup(form)`. Поверни об’єкт помилок: додай `name`, якщо ім’я після `trim()` коротше 2 символів; `email`, якщо немає `@`; `password`, якщо пароль коротший 8 символів. Коректні поля не додавай. Перевір некоректну форму.

// const validateSignup = function (form) {
//   const errors = {};

//   if (form.name.trim().length < 2) {
//     errors.name = `Iм'я надто коротке`;
//   }

//   if (!form.email.includes('@')) {
//     errors.email = `Некорректний email`;
//   }

//   if (form.password.length < 8) {
//     errors.password = `Пароль мiн 8 сим`;
//   }

//   return errors;
// };

// console.log(
//   validateSignup({ name: ' Aфывфыв ', email: 'mail.com', password: '1234' })
// );

// Створи `pickFields(data, allowedKeys)`. Поверни новий об’єкт лише з тими власними властивостями `data`, назви яких є в `allowedKeys`. Відсутні ключі пропускай. Перевір профіль і список `['name', 'city']`.

// const pickFields = function (data, allowedKeys) {
//   const newData = {};

//   for (const key in data) {
//     if (allowedKeys.includes(key)) {
//       newData[key] = data[key];
//     }
//   }

//   return newData;
// };

// console.log(
//   pickFields({ id: 1, name: 'Іра', email: 'i@mail.com', city: 'Київ' }, [
//     'name',
//     'city',
//     'email',
//   ])
// );

// Створи `omitFields(data, blockedKeys)`. Поверни новий об’єкт без властивостей, назви яких містяться в `blockedKeys`. Рішення має працювати з довільними ключами, тому використай `Object.keys()` і цикл.

// const omitFields = function (data, blockedKeys) {
//   const newObj = {};
//   const keys = Object.keys(data);

//   for (const key of keys) {
//     if (!blockedKeys.includes(key)) {
//       newObj[key] = data[key];
//     }
//   }

//   return newObj;
// };

// console.log(
//   omitFields(
//     { id: 1, name: 'Іра', token: 'abc', password: '123' },
//     ['token', 'password'],
//     ['token', 'password']
//   )
// );

// Створи `stringifyQuery(params)`. Перебери об’єкт і сформуй рядок `ключ=значення`, з’єднавши пари символом `&`. Властивості з порожнім рядком або значенням `null` пропускай. Для спрощення кодування URL не потрібне.

// const stringifyQuery = function (params) {
//   const paramsArr = [];
//   const keys = Object.keys(params);
//   for (const key of keys) {
//     if (params[key] !== null && params[key] !== '') {
//       paramsArr.push(`${key}=${params[key]}`);
//     }
//   }

//   return paramsArr.join('&');
// };

// console.log(
//   stringifyQuery({ page: 2, search: '', sort: 'price', compact: false })
// );

// Створи `mergePages(...pages)`. Кожна сторінка — масив об’єктів із `id` та числовим `updatedAt`. Поверни по одному запису на ID: якщо ID повторюється, збережи версію з більшим `updatedAt`. Порядок має відповідати першій появі ID. Усі записи скопіюй.

// const first = [
//   { id: 1, value: 'old', updatedAt: 10 },
//   { id: 2, value: 'B', updatedAt: 5 },
// ];
// const second = [
//   { id: 1, value: 'new', updatedAt: 20 },
//   { id: 3, value: 'C', updatedAt: 7 },
// ];

// const mergePages = function (...pages) {
//   let newArr = [];

//   for (const page of pages) {
//     newArr = newArr.concat(page);
//   }

//   const result = [];
//   const uniqueIds = [];

//   for (const item of newArr) {
//     if (!uniqueIds.includes(item.id)) {
//       uniqueIds.push(item.id);
//       result.push({ ...item });
//     } else {
//       for (let i = 0; i < result.length; i++) {
//         if (result[i].id === item.id && result[i].updatedAt < item.updatedAt) {
//           result.splice(i, 1, item);
//         }
//       }
//     }
//   }

//   return result;
// };

// console.log(mergePages(first, second));

// Створи `summarizeCart(cart)`. Для масиву позицій із `price` та `quantity` поверни об’єкт `{ positions, units, total }`: кількість позицій, загальну кількість одиниць і повну вартість. Перевір дві позиції.

// const summarizeCart = function (cart) {
//   let units = 0;
//   let total = 0;

//   for (const unit of cart) {
//     units += unit.quantity;
//     total += unit.price * unit.quantity;
//   }

//   return {
//     positions: cart.length,
//     units,
//     total,
//   };
// };

// console.log(
//   summarizeCart([
//     { price: 100, quantity: 2 },
//     { price: 250, quantity: 1 },
//   ])
// );

// Створи `moveTask(board, taskId, newStatus)`. `board` — об’єкт, де ключі є статусами, а значення — масивами задач. Поверни новий об’єкт дошки: знайдену задачу видали зі старого масиву, додай у новий і онови її `status`. Вважай новий статус наявним.

// const board = {
//   todo: [{ id: 1, title: 'A', status: 'todo' }, {}, {}],
//   done: [{ id: 2, title: 'B', status: 'done' }],
// };

// const moveTask = function (board, taskId, newStatus) {
//   const newBoard = {};
//   const statuses = Object.keys(board);
//   let movedTask = null;

//   for (let i = 0; i < statuses.length; i++) {
//     const status = statuses[i];

//     newBoard[status] = [];

//     for (let i = 0; i < board[status].length; i++) {
//       const task = board[status][i];
//       if (task.id === taskId) {
//         movedTask = { ...task, status: newStatus };
//       } else {
//         newBoard[status].push({ ...task });
//       }
//     }
//   }
//   if (movedTask) {
//     newBoard[newStatus].push(movedTask);
//   }

//   return newBoard;
// };

// console.log(moveTask(board, 1, 'done'));

// const board = {
//   todo: [{ id: 1, title: 'A', status: 'todo' }],
//   done: [{ id: 2, title: 'B', status: 'done' }],
// };

// function moveTask(board, taskId, newStatus) {
//   const newBoard = {};
//   const statuses = Object.keys(board);
//   let movedTask = null;
//   for (let i = 0; i < statuses.length; i++) {
//     const status = statuses[i];
//     newBoard[status] = [];
//     for (let i = 0; i < board[status].length; i++) {
//       const task = board[status][i];
//       if (task.id === taskId) {
//         movedTask = { ...task, status: newStatus };
//       } else {
//         newBoard[status].push({ ...task });
//       }
//     }
//   }
//   if (movedTask) {
//     newBoard[newStatus].push(movedTask);
//   }

//   return newBoard;
// }

// console.log(moveTask(board, 1, 'done'));
