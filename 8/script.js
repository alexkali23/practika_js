let user = {   
    name: "John", 
    age: 30,
    age1: 32,
    count_likes: 9,
    count_image: 21.3,        
  };

let count_int_value = 0;

for(let key in user){
    if(typeof user[key] === 'number' || typeof user[key] === 'bigint'){
        user[key]*=2
        count_int_value+=user[key]
    }
}


  console.log(count_int_value)
  console.log(user)