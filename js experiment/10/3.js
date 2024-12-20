const lectures = ['Тема 1', 'Тема 2', 'Тема 3'];
const practices = ['Практика 1', 'Практика 2', 'Практика 3'];

lectures.push('Тема 4');
practices.unshift('Практика 4');

console.log("Лекции:");
lectures.forEach(lecture => console.log(lecture));

console.log("Практики:");
practices.forEach(practice => console.log(practice));

function printArr(array) {
  return array.join(", ");
}

console.log("Темы лекций:", printArr(lectures));
console.log("Темы практик:", printArr(practices));