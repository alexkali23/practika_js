var p = 20;
function test (){
    P = 30;
    var p = 25; //   локальная переменная перебивает глобальную
    console.log('result 0', p);
}
function test1 (){
    console.log('result 1', p) // напишет глобальную переменную
    test2();
}
function test2 (p){//р являеться локальной переменной
    console.log('result 2', p);//если test2() вызвана как undefined так как p не определена || и n если вызвана как  test2(n)
    test3(p);
    function test3 (k){
        var k=30 ;
        console.log('result 3', k) //мы перебиваем одну локальную переменную другой/с let так нельзя сделать/ я думал здесь замыкание будет
    }
}
function test4 (M){
    //test4(); // на этом моменте вообще все зависнет ибо нет ветки выхода из рекурсии
    console.log('result 4',M) // ну а так выведет 20
}
test();
test1(33);
test2(10);
//test3(p); // такой функции нет глобальной области  видимости
test4(p);
console.log('result 5', p)// в глобальной области видимости переменная не изменялась// и являеться изменяемой


let array = [0]

function my(){
    array[0] = '3'
}

my()
console.log('result 6', array)//['3']// а вот array судя по всему является   неизменяемым типом данных

function test6(name){
    //test7()
    function test7(){
        name+= 10
        console.log(name)
    }
    test7() //40
    test7() //50
    test7() //60
    return test7
}

value = test6(30)
value()//70
value()//80

value2 = test6(0)
value2()//40
value2()//50




