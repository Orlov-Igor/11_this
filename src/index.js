let bindIt = function(func, bindedObj) {
    
    return function(...args) {
        
        return func.apply(bindedObj, args);
	};  
};

let user = {
    firstName: "Вася"
  };
  
let user2 = {
    firstName: "Аркадий"
  };

  function showName() {
    console.log(this.firstName);
  }
  
  let name = bindIt(showName, user2);
  name(); 


  