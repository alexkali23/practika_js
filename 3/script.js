// Example 1
let a1 = 'Text';
let b1 = a1;
a1 = 'another text';
console.log('a1 = ', a1);
console.log('b1 = ', b1); //будут разные значения так как переменная хранит данные

// Example 2
let a2 = 28;
let b2 = a2;
a2 = 41;
console.log('a2 = ', a2);
console.log('b2 = ', b2); //будут разные значения так как переменная хранит данные

// Example 3
let a3 = {
	name: 'Ivan Ivanov',
	age: 41,
};
let b3 = Object.assign({}, a3);
a3.name = 'Igor Petrov';
console.log('a3 = ', a3); //будут одинаковые значения так как обе переменных хранят не значение а ссылку на обьект
console.log('b3 = ', b3);

// Example 4
let a4 = [1,3,5,7,9];
let b4 = Object.assign({}, a4);
a4 = [2,4,6,8,10];
console.log('a4 = ', a4); //будут разные значения так как мы инициировали новый обьект в а4
console.log('b4 = ', b4);

// Example 5
let a5 = [1,2,3,4,5];
let b5 = Object.assign({}, a5);
a5[0] = 0;
console.log('a5 = ', a5); //будут одинаковые значения так как обе переменных хранят не значение а ссылку на обьект
console.log('b5 = ', b5);

// Example 6
let a6 = [1,2,3,4,5];
let b6 = Object.assign({}, a6);
a6.push(6)
console.log('a6 = ', a6); //будут одинаковые значения так как обе переменных хранят не значение а ссылку на обьект
console.log('b6 = ', b6);

// Example 7
let a7 = [{
	name: 'Vasya',
  age: 12
}, {
	name: 'Misha',
  age: 14
}, {
	name: 'Pavel',
  age: 13
}];
let b7 = a7;

a7.map((obj)=> {
		obj.name = obj.name + ' Pupkin';
		obj.age = obj.age;
});
console.log('a7 = ', a7); //будут одинаковые значения так как обе переменных хранят не значение а ссылку на обьект во время мап изменяеться сам обьект и не создаеться новый
console.log('b7 = ', b7);//на 7 примере поверхносное копирование не работает нужно использовать глубокое

//Чем клонирование отличается от копирования по ссылке? Тем что в памяти при копировании по ссылке остаеться только один обьект и 2 ссылки на него. А при клонировании 2 обьекта/
//Чем shallow copy отличается от deep copy? Тем что при shallow copy вложенные обьекты по прежнему ссылаються на 1 реальный обьект в памяти/ С помощью deep copy нельзя клонировать циклические обьекты

let obj = {
    a: 1,
    b: {
      c: 2,
    },
  }

  obj2 = Object.assign({}, obj);
  obj.b.d = 10

  console.log(obj);
  console.log(obj2);


