define([], function(){

  var myLibrary = (function() {
    function sayHello() {
      return "Hello";
    }
    return {
      sayHello: sayHello
    };
  })();

  return myLibrary;
})

