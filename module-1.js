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

const fileName = 'archive.backup.zip';
const dotIndex = fileName.lastIndexOf('.');
console.log(dotIndex);

const firstPart = fileName.slice(0, dotIndex);
const secondPart = fileName.slice(dotIndex + 1);
console.log(firstPart);
console.log(secondPart);
