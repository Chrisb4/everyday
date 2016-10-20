$( document ).ready(function(e){

//This gets the values from the form and returns them in an object with the same keys as the Schema
var getValues = function(){
  var mood = document.querySelector('input[name=mood]').value;
  var meditate = document.querySelector('select[name=meditate]').value;
  var exercise = document.querySelector('select[name=exercise]').value;
  var energy = document.querySelector('input[name=energy]').value;
  var comments = document.querySelector('input[name=comments]').value;

  return {
    mood : mood,
    meditate: meditate,
    exercise: exercise,
    energy: energy,
    comments: comments
  };
};
$('#submit').click(function(e){
  e.preventDefault();
  var value = getValues();
  console.log(value);

  var postMood = $.ajax({
    url: '/mood',
    type: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(value)
  });
  postMood.done(function(data){
    console.log(data);
  });
  postMood.fail(function(jqXHR, textStatus, errorThrown){
    console.log(errorThrown);
  })
});

});
