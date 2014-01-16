var mySingleton = (function(){
     
     var instance = null;
     
     function init(){
         var privateVariable = "I'm private";
         var privateMethod = function(){
             console.log('I am private');
         }
         return {
             publicVariable : privateVariable,
             publicMethod : privateMethod
         }
     }
     
     return {
         getInstance : function(){
             if( !instance ){
                 instance = init();
             }
             
             return instance;
         }
     }
})();

var singletonA = mySingleton.getInstance();
var singletonB = mySingleton.getInstance();

console.log( singletonA === singletonB );

