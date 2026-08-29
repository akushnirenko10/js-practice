// Створи змінну `isLoggedIn` зі значенням `true`. Якщо користувач увійшов у систему, виведи `Кабінет відкрито`.

// const isLoggedIn = true;

// if (isLoggedIn) {
//   console.log('Кабінет відкрито');
// }

// Створи функцію `getScoreLevel(score)`: від 80 включно — `Високий`, від 50 включно — `Середній`, інакше — `Початковий`. Перевір `68`.

// function getScoreLevel(score) {
//   if (score >= 80) {
//     return 'Високий';
//   } else if (score >= 50) {
//     return 'Середній';
//   } else {
//     return 'Початковий';
//   }
// }

// console.log(getScoreLevel(-80));
// console.log(getScoreLevel(20));
// console.log(getScoreLevel(50));

// Створи `validateRegistration(name, email, password, acceptedRules)`. Пріоритет перевірок: порожнє ім’я — `Вкажіть ім’я`; email без `@` — `Некоректний email`; пароль коротший за 8 — `Короткий пароль`; правила не прийняті — `Прийміть правила`; інакше — `Реєстрація дозволена`. Перевір `'Анна', 'anna@mail.com', 'jsStart8', true`.

// function validateRegistration(name, email, password, acceptedRules) {
//   if (name.trim() === '') {
//     return `Вкажіть ім’я`;
//   } else if (!email.includes('@')) {
//     return `Некоректний email`;
//   } else if (password.length < 8) {
//     return `Короткий пароль`;
//   } else if (!acceptedRules) {
//     return `Прийміть правила`;
//   } else {
//     return `Реєстрація дозволена`;
//   }
// }

// console.log(validateRegistration('Анна', 'anna@mail.com', 'jsStart8', true));
// console.log(validateRegistration('Анна', 'anna@mail.com', 'jsStart8', false));
// console.log(validateRegistration('Анна', 'annamail.com', 'jsStart8', true));
// console.log(validateRegistration('', 'anna@mail.com', 'jsStart8', true));
// console.log(validateRegistration('Анна', 'anna@mail.com', 'js', true));

// Є `hasUnreadMessage = false`. Якщо непрочитаних повідомлень немає, виведи `Нових повідомлень немає`.

// const hasUnreadMessage = false;

// if (!hasUnreadMessage) {
//   console.log(`Нових повідомлень немає`);
// }

// Створи `getLessonState(isPublished, isLocked)`. Якщо урок не опублікований — `Чернетка`; якщо опублікований, але заблокований — `Заблоковано`; інакше — `Доступно`. Перевір `true, false`.

// function getLessonState(isPublished, isLocked) {
//   if (!isPublished) {
//     return `Чернетка`;
//   } else if (isLocked) {
//     return `Заблоковано`;
//   } else {
//     return `Доступно`;
//   }
// }

// console.log(getLessonState(true, false));
// console.log(getLessonState(false, false));
// console.log(getLessonState(true, true));

// Створи `validateLogin(login)`. Після `trim()` поверни `Логін порожній`, якщо рядок порожній; `Логін закороткий`, якщо довжина менша за 4; інакше — `Логін прийнято`. Перевір `'  js  '`.

// function validateLogin(login) {
//   if (login.trim() === '') {
//     return `Логін порожній`;
//   } else if (login.trim().length < 4) {
//     return `Логін закороткий`;
//   } else {
//     return `Логін прийнято`;
//   }
// }

// console.log(validateLogin('  js  '));
// console.log(validateLogin('    '));
// console.log(validateLogin('  j123123s  '));

// Створи `getFileType(fileName)`. Без урахування регістру поверни `JavaScript`, якщо назва закінчується на `.js`; `HTML`, якщо на `.html`; `CSS`, якщо на `.css`; інакше — `Невідомий тип`. Перевір `'STYLE.CSS'`.

// function getFileType(fileName) {
//   const normalizedFileName = fileName.toLowerCase().trim();

//   if (normalizedFileName.endsWith('.js')) {
//     return `JavaScript`;
//   } else if (normalizedFileName.endsWith('.html')) {
//     return `HTML`;
//   } else if (normalizedFileName.endsWith('.css')) {
//     return `CSS`;
//   } else {
//     return `Невідомий тип`;
//   }
// }

// console.log(getFileType('STYLE.CSS'));
// console.log(getFileType('STYLE.html'));
// console.log(getFileType('STYLE.js'));
// console.log(getFileType('STYLE.CaqdqSS'));

// Створи `getModuleAccess(role, isPaid, completedIntro, isBlocked)`.
// Заблокованому завжди повертається `Доступ заблоковано`.
// Ментор або адміністратор має `Повний доступ`.
// Студент отримує `Доступ відкрито`, тільки якщо курс оплачено й вступ завершено.
// Інакше — `Виконайте умови доступу`. Перевір `'student', true, true, false`.

// function getModuleAccess(role, isPaid, completedIntro, isBlocked) {
//   if (isBlocked) {
//     return `Доступ заблоковано`;
//   } else if (role === 'Mentor' || role === 'Admin') {
//     return `Повний доступ`;
//   } else if (isPaid && completedIntro) {
//     return `Доступ відкрито`;
//   } else {
//     return `Виконайте умови доступу`;
//   }
// }

// console.log(getModuleAccess('student', true, true, false));
// console.log(getModuleAccess('student', true, true, true));
// console.log(getModuleAccess('student', false, true, false));
// console.log(getModuleAccess('Admin', true, true, false));

// Створи `checkUsername(username)`. Коректне ім’я має довжину від 5 до 12 символів включно та не повинно містити пробіл. Поверни `Коректне` або `Некоректне`. Перевір `'js_student'`.

// function checkUsername(username) {
//   if (username.trim().length >= 5 && username.trim().length <= 12) {
//     return `Коректне`;
//   }

//   return `Некоректне`;
// }

// console.log(checkUsername('123123123123123123dent'));
// console.log(checkUsername('js-student'));
// console.log(checkUsername('dent'));

// Створи `getDeadlineStatus(daysLeft, isSubmitted)`. Якщо роботу здано — `Здано`; інакше, якщо днів не більше 0 — `Термін минув`; якщо залишився 1 день — `Останній день`; інакше — `Є час`. Перевір `1, false`.

// function getDeadlineStatus(daysLeft, isSubmitted) {
//   if (isSubmitted) {
//     return `Здано`;
//   }

//   if (daysLeft <= 0) {
//     return `Термін минув`;
//   }

//   if (daysLeft === 1) {
//     return `Останній день`;
//   }

//   return `Є час`;
// }

// console.log(getDeadlineStatus(1, false));
// console.log(getDeadlineStatus(0, false));
// console.log(getDeadlineStatus(1, !false));

// Створи `checkRoute(path, isAuthenticated, role)`.
// Для шляхів, що починаються з `'/admin'`, потрібна роль `'admin'`;
// для `'/profile'` потрібна авторизація;
// шлях `'/'` завжди доступний; решта повертає `Сторінку не знайдено`.
// Перевір `'/admin/users', true, 'editor'`.

// function checkRoute(path, isAuthenticated, role) {
//   if (path.startsWith('/admin')) {
//     return role === 'admin' ? 'Доступ дозволено' : 'Доступ заборонено';
//   }

//   if (path.startsWith('/profile')) {
//     return isAuthenticated ? 'Доступ дозволено' : 'Доступ заборонено';
//   }

//   if (path === '/') {
//     return 'Доступ дозволено';
//   }

//   return `Сторінку не знайдено`;
// }

// console.log(checkRoute('/admin/users', true, 'editor'));
// console.log(checkRoute('/admin/users', true, 'admin'));
// console.log(checkRoute('/', false, 'editor'));
// console.log(checkRoute('/asdasd', false, 'editor'));

// За допомогою циклу `for` виведи числа від 1 до 5. Кожне число має з’явитися в консолі на окремому рядку.

// for (let i = 1; i <= 5; i += 1) {
//   console.log(i);
// }

// Створи функцію `countVowels(text)`. Переведи текст у нижній регістр і циклом порахуй англійські голосні `a`, `e`, `i`, `o`, `u`. Перевір `'Education'`.

// function countVowels(text) {
//   const lowerText = text.toLowerCase();
//   let counter = 0;

//   for (let i = 0; i < lowerText.length; i += 1) {
//     if (
//       lowerText[i] === 'a' ||
//       lowerText[i] === 'e' ||
//       lowerText[i] === 'i' ||
//       lowerText[i] === 'o' ||
//       lowerText[i] === 'u'
//     ) {
//       counter += 1;
//     }
//   }

//   return counter;
// }

// console.log(countVowels('Education'));

// За допомогою циклу `for` виведи числа від 5 до 1, а після завершення циклу — слово `Старт!`.

// function start(seconds) {
//   for (let i = seconds; i > 0; i -= 1) {
//     console.log(i);
//   }
//   console.log('Start!');
// }

// start(5);

// Є рядок `'JS'`. Пройди по ньому циклом і для кожного символу виведи рядок формату `<індекс>: <символ>`.

// function message(string) {
//   for (let i = 0; i < string.length; i += 1) {
//     console.log(`${i + 1}: ${string[i]}`);
//   }
// }

// message('JS');

// Створи `removeSpaces(text)`. Циклом побудуй новий рядок, додаючи лише символи, які не є пробілами. Перевір `'learn js daily'`.

// function removeSpaces(text) {
//   let str = '';

//   for (let i = 0; i < text.length; i += 1) {
//     if (text[i] !== ' ') {
//       str += text[i];
//     }
//   }

//   return str;
// }

// console.log(removeSpaces('learn js daily'));
// console.log(removeSpaces('le arn js da ily'));
// console.log(removeSpaces('learn js daadsdasdily'));
// console.log(removeSpaces('learasdnjsdaily'));

// Створи `findLongestWord(text)`. Не використовуй масиви або `split()`. Проходь по рядку разом із додатковим пробілом у кінці, накопичуй поточне слово й запам’ятовуй найдовше. Перевір `'learning loops builds skill'`.

// function findLongestWord(text) {
//   let currentWord = '';
//   let longestWord = '';

//   for (let i = 0; i < text.length; i += 1) {
//     if (text[i] !== ' ') {
//       currentWord += text[i];
//     } else {
//       if (currentWord.length > longestWord.length) {
//         longestWord = currentWord;
//       }
//       currentWord = '';
//     }
//   }

//   if (currentWord.length > longestWord.length) {
//     longestWord = currentWord;
//   }

//   return longestWord;
// }

// function findLongestWord(text) {
//   const wordsArr = text.split(' ');
//   let longestWord = wordsArr[0];

//   for (const word of wordsArr) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }

// function findLongestWord(text) {
//   return text
//     .split(' ')
//     .reduce((longestWord, word) =>
//       longestWord.length < word.length ? word : longestWord
//     );
// }

// console.log(findLongestWord('learning loops builds skiasdasdasdll'));

// Створи `makeWordLengthReport(text)`. Без `split()` сформуй рядок виду `Code(4) every(5) day(3)`. Між елементами має бути один пробіл. Перевір `'Code every day'`.

// function makeWordLengthReport(text) {
//   let currentWord = '';
//   let result = '';

//   for (let i = 0; i < text.length; i += 1) {
//     if (text[i] !== ' ') {
//       currentWord += text[i];
//     } else {
//       result += `${currentWord}(${currentWord.length}) `;
//       currentWord = '';
//     }
//   }

//   result += `${currentWord}(${currentWord.length})`;

//   return result;
// }

// console.log(makeWordLengthReport('Code every day'));
// console.log(makeWordLengthReport('Codasde every day'));
// console.log(makeWordLengthReport('Code everasdasdy day'));
// console.log(makeWordLengthReport('Codasdase every day a sasdada'));

// Створи `removeDuplicateWords(text)` без `split()`. Читай слова посимвольно. Додавай слово до результату, лише якщо рядок із пробілами навколо результату ще не містить таке окреме слово. Перевір `'code code clean code'`.

// function removeDuplicateWords(text) {
//   let currentWord = '';
//   let result = '';

//   for (let i = 0; i < text.length; i += 1) {
//     if (text[i] !== ' ') {
//       currentWord += text[i];
//     } else {
//       if (!result.includes(currentWord)) {
//         result += `${currentWord} `;
//       }
//       currentWord = '';
//     }
//   }

//   if (!result.includes(currentWord)) {
//     result += `${currentWord} `;
//   }

//   return result.trim();
// }

// console.log(removeDuplicateWords('code code clean code'));
