function change_style(my_string){
    my_string = my_string.toLowerCase()
    my_string = my_string.split('_')
    for(let i in my_string){
        if(i !== 0 ){
            my_string[i] = my_string[i][0].toUpperCase() + my_string[i].substr(1)
        }
    }
    return my_string.join('')
}


function change_style_reg(my_string){
    my_string = my_string.toLowerCase()
    return my_string.replace(/_([a-z])/g, (m, w)=> {return w.toUpperCase();});
}

let my_string = 'JavaScript_is_awesome';
console.log(change_style_reg(my_string))



