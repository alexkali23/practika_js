function generete_array(a,b){
    let array = [];
    for(let i = a ;i<b ; i++){
        array.push(i)
    }
    //так как я понял подрозумеваються количество элементов а не символов
    console.log(array.length)
    new_array = array.slice()
    new_array =  new_array.filter(num => num%3 == 1)
    console.log(new_array)

}

generete_array(-4,21);

