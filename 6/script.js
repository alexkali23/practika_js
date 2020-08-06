function check_date(){
    let date = prompt('you date','2020-06-10')
    date = new Date(date);
    let value = false
    if(new Date('05.12.2020 23:00') < date && new Date('06.15.2020 01:20') > date){
        value = true
    }
    if(new Date('05.17.2020 23:00') < date && new Date('09.13.2020 01:20') > date){
        if(value){
            console.log('prenadlejiy oboim promejutkam')
        }else{
            console.log('prenadlejit tolko vtoromy')
        }
    }else if(value){
        console.log('prenadlejit pervomy')
    }else{
        console.log('ne prenadlejit ne odnomy promejytky')
    }
}

let my_date = new Date("2020-06-10"); 

check_date()