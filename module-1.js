// Створи змінну `studentName` за допомогою `const` і запиши в неї своє ім'я. Виведи значення змінної в консоль.

// const studentName = 'Andrii';
// console.log(studentName);

// Є `name = 'Олег'`, `age = 17`, `group = 'FS-12'`. Створи один шаблонний рядок формату: `Студент: Олег | Вік: 17 | Група: FS-12`.
// const name = 'Олег';
// const age = 17;
// const group = 'FS-12';
// const message = `Студент: ${name} | Вiк: ${age} | Група: ${group}`;

// console.log(message);

// Створи змінну `age` зі значенням 16. Виведи її в консоль. Переконайся, що значення збережено як число, а не як рядок.

// const age = 16;

// console.log(age, typeof age);

// Є `firstName = 'Анна'` і `lastName = 'Коваль'`. Отримай перші літери обох слів і створи рядок `А.К.`.

// const firstName = 'Анна';
// const lastName = 'Коваль';

// const message = `${firstName[0]}.${lastName[0]}.`;
// console.log(message);

// Створи змінну `isStudent` зі значенням `true`. Виведи її в консоль.

// const isStudent = true;

// console.log(isStudent);

// Є рядок `'   Student_User   '`. Прибери крайні пробіли та перетвори всі літери на нижній регістр.

// const string = '   Student_User   ';
// const trimmedStringLowerCase = string.trim().toLowerCase();

// console.log(trimmedStringLowerCase);

// Створи змінну `city` через `let` зі значенням `'Київ'`. Потім зміни значення на `'Львів'` і виведи результат.

// let city = 'Київ';

// city = 'Львів';

// console.log(city);

// Є рядок `'   lviv   '`. Прибери пробіли. Потім зроби першу літеру великою, а решту залиш малими. Вхідне слово гарантовано записане малими літерами.

// const city = '   lviv   ';
// const trimmedCity = city.trim();
// const formattedCity = trimmedCity[0].toUpperCase() + trimmedCity.slice(1);

// console.log(formattedCity);

// Створи змінну `language` зі значенням `'JavaScript'`. За допомогою `typeof` виведи тип її значення.

// const language = 'JavaScript';

// console.log(typeof language);

// Є `email = 'student@gmail.com'`. Отримай частину після символу `@`. Позицію `@` знайди методом `indexOf()`.

// const email = 'student@gmail.com';
// const atIndex = email.indexOf('@');

// console.log(atIndex);

// const gmail = email.slice(atIndex + 1);

// console.log(gmail);

// Створи змінну `lessonNumber` зі значенням `3`. Виведи тип цього значення.

// const lessonNumber = 3;
// console.log(typeof lessonNumber);

// Із рядка `'mentor@school.com'` отримай частину до символу `@`.

// const email = 'mentor@school.com';
// const position = email.indexOf('@');
// const username = email.slice(0, position);

// console.log(username);

// Є рядки з зайвими пробілами: `firstName = '  іван  '`, `lastName = '  петренко  '`. Очисти їх, зроби першу літеру кожного слова великою, а решту — малими. Створи `Петренко Іван`.

// const firstName = '  іван  ';
// const lastName = '  петренко  ';

// const trimmedFirstName = firstName.trim();
// const trimmedLastName = lastName.trim();

// const formattedFirstName =
//   trimmedFirstName[0].toUpperCase() + trimmedFirstName.slice(1).toLowerCase();
// const formattedLastName =
//   trimmedLastName[0].toUpperCase() + trimmedLastName.slice(1).toLowerCase();

// const fullName = `${formattedLastName} ${formattedFirstName}`;
// console.log(fullName);

// Є `fileName = 'lesson-notes.md'`. Отримай останні три символи, щоб дістати розширення `'.md'`.

// const fileName = 'lesson-notes.md';
// // const extension = fileName.slice(-3);
// const indexName = fileName.indexOf('.');
// const extension = fileName.slice(indexName);
// console.log(extension);

// Є `email = 'student@example.com'`. Залиш видимими перші дві літери імені користувача та весь домен. Решту імені заміни п'ятьма зірочками. Очікуваний формат: `st*****@example.com`.

// const email = 'student@example.com';
// const atIndex = email.indexOf('@');
// const username = email.slice(0, atIndex);
// const domain = email.slice(atIndex);
// const maskedEmail =
//   username.slice(0, 2) + '*'.repeat(username.length - 2) + domain;

// console.log(maskedEmail);

// Є заголовок `'JavaScript String Basics'`. Перетвори його на нижній регістр і заміни всі пробіли дефісами.

// const title = 'JavaScript String Basics';
// const lowerTitle = title.toLowerCase();
// console.log(lowerTitle);

// const slug = lowerTitle.replaceAll(' ', '-');
// console.log(slug);

// const slug1 = lowerTitle.split(' ').join('-');
// console.log(slug1);

// Є `'my-first-javascript-homework.js'`. Отримай назву без `'.js'`, заміни всі дефіси пробілами та додай префікс `'Файл: '`.

// const fileName = 'my-first-javascript-homework.js';
// const atIndex = fileName.indexOf('.');
// console.log(atIndex);
// const slug = fileName.slice(0, atIndex);
// console.log(slug);
// const string = slug.replaceAll('-', ' ');
// console.log(string);

// const message = `Файл: ${string}`;
// console.log(message);

// Є текст `'JavaScript is a programming language'`. Отримай перші 10 символів і додай в кінці три крапки.

// const text = 'JavaScript is a programming language';
// const message = text.slice(0, 11) + '...';
// console.log(message);

// Є `'archive.backup.zip'`. Знайди останню крапку. Окремо отримай базову назву `'archive.backup'` та розширення `'zip'`.

// const fileName = 'archive.backup.zip';
// const dotIndex = fileName.lastIndexOf('.');
// console.log(dotIndex);

// const firstPart = fileName.slice(0, dotIndex);
// const secondPart = fileName.slice(dotIndex + 1);
// console.log(firstPart);
// console.log(secondPart);

// Створи змінні `firstNumber = 18` і `secondNumber = 11`. За допомогою оператора `>` перевір, чи перше число більше за друге. Виведи результат порівняння в консоль.

// function compareNumbers(firstNumber, secondNumber) {
//   return firstNumber > secondNumber;
// }

// console.log(compareNumbers(18, 11));

// Створи функцію `haveSameType(firstValue, secondValue)`, яка порівнює результати `typeof` для двох параметрів. Перевір число `8` і число `15`.

// function haveSameType(firstValue, secondValue) {
//   return typeof firstValue === typeof secondValue;
// }

// console.log(haveSameType(8, 15));

// Створи `score = 60` і `minimumScore = 60`. Перевір оператором `>=`, чи набраний бал не менший за мінімальний.

// function compareScore(score, minimumScore) {
//   return score >= minimumScore;
// }

// console.log(compareScore(60, 60));

// Створи допоміжну функцію `normalizeTitle(title)`, яка прибирає крайні пробіли, переводить текст у нижній регістр і замінює всі дефіси пробілами. Потім створи `areTitlesEqual(firstTitle, secondTitle)`, яка порівнює нормалізовані результати. Перевір `'  JS-Basics  '` і `'js basics'`.

// function normalizeTitle(title) {
//   return title.trim().toLowerCase().replaceAll('-', ' ');
// }

// function areTitlesEqual(firstTitle, secondTitle) {
//   return normalizeTitle(firstTitle) === normalizeTitle(secondTitle);
// }

// console.log(areTitlesEqual('  JS-Basics  ', 'js basics'));

// Створи функцію `isNumberEqualToText(number, text)`. Усередині перетвори `text` на число за допомогою `Number()` і виконай суворе порівняння. Перевір `42` і `'42'`.

// function isNumberEqualToText(number, text) {}

// Створи функцію `isFirstTextLonger(firstText, secondText)`, яка порівнює довжини двох рядків. Перевір `'keyboard'` і `'mouse'`.

// function isFirstTextLonger(firstText, secondText) {
//   return firstText.length === secondText.length;
// }

// console.log(isFirstTextLonger('keyboard', 'mouse'));

// Створи функцію `getCleanLength(login)`, яка повертає довжину логіна після `trim()`. Створи другу функцію `isFirstLoginLonger(firstLogin, secondLogin)`, яка порівнює результати першої. Перевір `'  coder_one  '` і `'dev2'`.

// function getCleanLength(login) {
//   return login.trim().length;
// }

// function isFirstLoginLonger(firstLogin, secondLogin) {
//   return getCleanLength(firstLogin) === getCleanLength(secondLogin);
// }

// console.log(isFirstLoginLonger('  coder_one  ', 'dev2'));

// Створи функцію `createPersonalCode(firstName, lastName, year)`. Вона має взяти перші дві літери імені, перші дві літери прізвища, перевести їх у верхній регістр та додати останні дві цифри року. Для `'Marta'`, `'Stone'`, `2026` очікується `'MAST26'`.

// function createPersonalCode(firstName, lastName, year) {
//   const firstNameLetters = firstName.slice(0, 2).toUpperCase();
//   const lastNameLetters = lastName.slice(0, 2).toUpperCase();
//   const yearLastNumbers = String(year).slice(-2);

//   return firstNameLetters + lastNameLetters + yearLastNumbers;
// }

// console.log(createPersonalCode('Marta', 'Stone', 2026));

// Створи функцію `containsAtSign(text)`, яка повертає результат наявності '@' у рядку. Перевір `'user@site.net'` і `'usersite.net'`.

// function containsAtSign(text) {
//   return text.includes('@');
// }

// console.log(containsAtSign('user@site.net'));
// console.log(containsAtSign('usersite.net'));

// Створи функцію `makeLengthReport(firstText, secondText)`. Вона повинна повернути рядок `First: 8 | Second: 5 | First longer: true` для значень `'terminal'` і `'mouse'`. Довжини та результат порівняння обчисли всередині функції.

// function makeLengthReport(firstText, secondText) {
//   const firstTextLength = firstText.length;
//   const secondTextLength = secondText.length;
//   const isFirstLoger = firstTextLength > secondTextLength;

//   return `First: ${firstTextLength} | Second: ${secondTextLength} | First longer: ${isFirstLoger}`;
// }

// console.log(makeLengthReport('terminal', 'mouse'));

// Створи функцію `hasExtension(fileName, extension)`. Функція повинна перевіряти закінчення назви файлу. Виклич її з `'notes.pdf'` і `'.pdf'`.

// function hasExtension(fileName, extension) {
//   return fileName.endsWith(extension);
// }

// console.log(hasExtension('notes.pdf', '.pdf'));
// console.log(hasExtension('notes.pdf', '.pasddf'));

// Створи `getDomain(email)`, яка повертає частину після `@`. Потім створи `haveSameDomain(firstEmail, secondEmail)`, яка порівнює домени в нижньому регістрі. Перевір `'one@School.ORG'` і `'two@school.org'`.

// function getDomain(email) {
//   const atIndex = email.indexOf('@');
//   const normalizeDomain = email.slice(atIndex + 1).toLowerCase();

//   return normalizeDomain;
// }

// function haveSameDomain(firstEmail, secondEmail) {
//   return getDomain(firstEmail) === getDomain(secondEmail);
// }

// console.log(haveSameDomain('one@School.ORG', 'two@school.org'));
// console.log(haveSameDomain('one@School.ORG', 'two@school.asdorg'));
