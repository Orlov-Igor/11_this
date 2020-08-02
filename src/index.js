let bindIt = function(func, bindedObj, ...rest) {
    
    return function(...args) {
        
        return func.apply(bindedObj, args.concat(...rest));
	};  
};

let user = {
    firstName: "Вася"
  };
  
let user2 = {
    firstName: "Аркадий"
  };

  function showStreetName(nickname) {
    console.log(`${this.firstName} ${nickname}`);
  }
  
  let name = bindIt(showStreetName, user2, "Рыжий");
  name(); 


  