class Calc{
    constructor() {
        this.array = ['0','+']; //  данные нужны чтобы все работало // для данной задачи хранить данные в стринговом формате с сохранением 2 последних чисел правильней
                                                                    // однако если в последствии захотим еще и удалять символы то данный формат работать не будет
        this.check_last_sumbol_operation = true; // является ли последний элемент в масиве знаком операции // хотел забивать просто название типа данных последнего элемента но посчитал что так быстрее
        this.bufer = 0; //  буфер данных на случай умножения и деления
        this.result = 0; // результат вычислений array.lenght - [1,2]
    }
    
    calc_operation(a,b,operation){
        if(operation === '+'){
            return a+b
        }else if(operation === '-'){
            return a-b
        }else if(operation === '*'){
            return a*b  
        }else if(operation === '/'){
            return a/b
        }
    }

    add_sumbol(sumbol){
        length = this.array.length
        if(Number.isInteger(+sumbol)){
            if(this.check_last_sumbol_operation){
                this.check_last_sumbol_operation = false;
                this.array.push(sumbol);
            }else{
                this.array[length - 1] = String(this.array[length - 1])+String(sumbol)
            }
        }else{
            if(!this.check_last_sumbol_operation){
                if(sumbol === '+' || sumbol === '-'){
                    if(this.bufer === 0){
                        this.result = this.calc_operation(+this.result,+this.array[length - 1],this.array[length - 2])
                    }else{
                        this.result+= this.calc_operation(+this.bufer,+this.array[length - 1],this.array[length - 2])
                        this.bufer = 0
                    }
                    }else if(sumbol === '*' || sumbol === '/'){
                        if(this.bufer === 0){
                            this.bufer = +this.array[length - 1];
                            if(this.array[length - 2] === '-'){
                                this.bufer *= -1;
                            }
                        }else{
                            this.bufer = this.calc_operation(this.bufer,this.array[length - 1],this.array[length - 2])
                        }
                    }
                this.check_last_sumbol_operation = true;
                this.array.push(sumbol);
            }
        }
    }

    refresh(){
        this.array = ['0','+'];
        this.check_last_sumbol_operation = true; 
        this.bufer = 0; 
        this.result = 0; 
    }

    give_string(){
        return this.array.slice(2).join('')
    }

    give_result(){
        if(this.check_last_sumbol_operation){
            return this.result + this.bufer
        }else{
            if(this.array[this.array.length-2] === '+' || this.array[this.array.length-2] === '-'){
                return this.calc_operation(+this.result,+this.array[this.array.length-1],this.array[this.array.length-2]) + this.bufer
            }else{
                return this.calc_operation(+this.bufer,+this.array[this.array.length-1],this.array[this.array.length-2]) + this.result
            }
        }
        
    }



}




test_case_1 = [
    ['1'    ,'1'    ,'+'    ,'2'    ,'3'    ,'-'        ,'1',        '0',        '*',         '20'           ,'-'            ,'30'],                // то что мы добавляем
    ['1'    ,'11'   ,'11+'  ,'11+2' ,'11+23','11+23-'   ,'11+23-1'   ,'11+23-10', '11+23-10*','11+23-10*20', '11+23-10*20-'  ,'11+23-10*20-30'],    // то что мы хотим увидеть при изображении в стринг формте
    ['1'   ,'11'   ,'11'   ,'13'   ,'34'   ,'34'       ,'33'        ,'24'        ,'24'      ,'-166'          ,'-166'             ,'-196']           // то какой результат мы ожидаем получить
]

test_case_2 = [
    ['3'    ,'*'    ,'3'    ,'/'    ,'2'        ,'*'        ,'10'],
    ['3'    ,'3*'   ,'3*3'  ,'3*3/' ,'3*3/2'    ,'3*3/2*'   ,'3*3/2*10'],
    ['3'    ,'3'    ,'9'    ,'9'    ,'4.5'        ,'4.5'        ,'45']
]


function test(test_case){    // не особо знаком с инструментами для тестирования на js
    test_calc = new Calc()
    for(let i = 0;i<test_case[0].length;i++){
        test_calc.add_sumbol(test_case[0][i])
        if(test_case[1][i] != test_calc.give_string() || test_case[2][i] != test_calc.give_result()){
            console.log('- - - - - - - - - - - - - - - - - - - - - - - - ')
            console.log('ogidaetsa - ' + test_case[1][i])
            console.log('poluchay - '+ test_calc.give_string())
            console.log('ogidaetsa - ' + test_case[2][i])
            console.log('poluchay - '+ test_calc.give_result())
            console.log('- - - - - - - - - - - - - - - - - - - - - - - - ')
        }
    }
}


test(test_case_1)
test(test_case_2)










class Menu {
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this);
      this.calc = new Calc; 
      this.state = 'input_data'// 'view_data'
    }

    onClick(event) {
        if(event.target.textContent == '='){
            this.state = 'view_data'
            this.calc.refresh()
            return
        }
            this.calc.add_sumbol(event.target.textContent)
            document.getElementById('string').innerHTML = this.calc.give_string();
            document.getElementById('result').innerHTML = this.calc.give_result();

    };
  }

new Menu(document.getElementById('calc'));

  