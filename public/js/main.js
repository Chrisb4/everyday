$( document ).ready(function(e){
console.log('mood.js connected');
var loTest = _.chunk(['a', 'b', 'c', 'd'], 2);
console.log(loTest);

// name and empty variable to hold moods after we get them from the get-moods ajax call
var moodHistory;

//This gets the values from the form and returns them in an object with the same keys as the Schema
var getValues = function(){
  var mood = document.querySelector('input[name=mood]').value;
  var meditate = document.querySelector('select[name=meditate]').value;
  var exercise = document.querySelector('select[name=exercise]').value;
  var energy = document.querySelector('input[name=energy]').value;
  var comments = document.querySelector('textarea[name=comments]').value;

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
    url: '/moods',
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

$('#get-moods').click(function(){
  var getMoods = $.ajax({
    url: '/moods',
    type: 'GET',
    datatype: 'json',
    contentType: 'application/json'
  });
  getMoods.done(function(data){

    moodHistory = data;
    console.log(moodHistory[5].meditate);
  });
  getMoods.fail(function(jqXHR, textStatus, errorThrown){
    console.log(errorThrown);
  });

  $('.mood-target').append("<p>" + moodHistory[5].meditate + "</p>");

});


});
