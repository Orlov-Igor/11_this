let bindIt = function(func, bindedObj) {
    
    return function() {
        
        return func.apply(bindedObj);
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


  