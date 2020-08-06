
function check_valid(){
    let my_string = prompt('you value', 'A011AA01')
    console.log(my_string)
    // let regexp = /^[АВЕКМНОРСТУХ]\d{3}[АВЕКМНОРСТУХ]{2}\d{2,3}$/;
    console.log('Мама мыла раму тест тест тест')

    let regexp = /^[АВЕКМНОРСТУХ]\d{3}[АВЕКМНОРСТУХ]{2}\d{2,3}$/;
    console.log(regexp.test(my_string))
}


let my_string = 'A011AA01'

check_valid()
