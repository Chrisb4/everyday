console.log('mood.js is connected');
var trest = document.readyState;console.log(trest)
$( document ).ready(function(e){


var test = document.readyState;console.log(test)


})
//This gets the values from the form and returns them in an object with the same keys as the Schema
var getValues = function(){
  var name = document.querySelector('input[name=lion-name]').value;
  var pride = document.querySelector('input[name=lion-pride]').value;
  var age = document.querySelector('input[type=number').value;
  var gender = document.querySelector('select');
  gender = gender.options[gender.selectedIndex].value;


  document.querySelector('input[name=lion-name]').value = '';
  document.querySelector('input[name=lion-pride]').value = '';
  document.querySelector('input[type=number').value = '';


  return {
    name: name,
    pride: pride,
    age: age,
    gender: gender
  };
};
