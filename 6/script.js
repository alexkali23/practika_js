function check_date(){
    // по идее корректно будет работать и без get.time
    // по идее корректно будет работать и с GMT+0000 вместо UTC+0000
    let date = prompt('you date','2020-05-13')
    date = new Date(date).getTime();
    console.log(new Date('06.15.2020 01:20'))
    console.log(new Date('06.15.2020 01:20  UTC+0000').getTime())
    let flag = false
    if(new Date('05.12.2020 23:00 GMT+0000').getTime() < date && new Date('06.15.2020 01:20  GMT+0000').getTime() > date){
        flag = true
    }
    if(new Date('05.17.2020 23:00  GMT+0000').getTime() < date && new Date('09.13.2020 01:20  GMT+0000').getTime() > date){
        if(flag){
            console.log('prenadlejiy oboim promejutkam')
        }else{
            console.log('prenadlejit tolko vtoromy')
        }
    }else if(flag){
        console.log('prenadlejit pervomy')
    }else{
        console.log('ne prenadlejit ne odnomy promejytky')
    }
}

let my_date = new Date("2020-06-10"); 

check_date()