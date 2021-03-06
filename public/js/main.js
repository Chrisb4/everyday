
$( document ).ready(function(e){
console.log('main.js connected');




// Name and empty variable to hold moods after we get them from the get-moods ajax call
var moodHistory;

//Category selector actions
var $money = $('.money-main-wrapper');
var $mood = $('.mood-main-wrapper');

$('#money-selector').click(function(){
  $money.removeClass('hidden');
  $mood.addClass('hidden');
});
$('#mood-selector').click(function(){
  $mood.removeClass('hidden');
  $money.addClass('hidden');
})
$('#home-selector').click(function(){
  $mood.addClass('hidden');
  $money.addClass('hidden');
})

//This gets the values from the form and returns them in an object with the same keys as the Schema
var getMoodValues = function(){
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
var getDebitValues = function(){
  var amount = document.querySelector('input[name=amount]').value;
  var type = document.querySelector('select[name=type]').value;
  var comment = document.querySelector('textarea[name=comment]').value;
  var label = document.querySelector('select[name=label]').value;

  return {
    amount: amount,
    type: type,
    comment: comment,
    label: label
  }
};
$('#submit-mood').click(function(e){
  e.preventDefault();
  let value = getMoodValues();
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
    $('#mood-form').each(function(){
      this.reset();
    });
  });
  postMood.fail(function(jqXHR, textStatus, errorThrown){
    console.log(errorThrown);
  })
});
$('#submit-debit').click(function(e){
  e.preventDefault();
  let value = getDebitValues();
  console.log(value);

  var postDebit = $.ajax({
    url: '/debits',
    type: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(value)
  });
  postDebit.done(function(data){
    console.log(data);
    $('#debit-form').each(function(){
      this.reset();
    });
  });
  postDebit.fail(function(jqXHR, textStatus, errorThrown){
    console.log(errorThrown);
  });
});

var timeLoop = function(moodHistory){
  for (var i = 0; i < moodHistory.length; i++) {
    var z = moment(moodHistory[i].time).format("ddd MMMM Do h:m A");
    $('.mood-target').append('<div class="mood-container"><div><h3>' + z + '</h3><p>' + moodHistory[i].mood + '</p></div><div><h3>Did You Exercise?</h3><p>' + moodHistory[i].exercise + '</p></div><div><h3>Did You Meditate?</h3><p>' + moodHistory[i].meditate + '</p></div><div><h3>Energy Level:</h3><p>' + moodHistory[i].energy + '</p></div><div><h3>Comments:</h3><p>' + moodHistory[i].comments + '</p></div></div>');
  }
}

var getMoodsOnLoad = function(){
  var getmoods = $.ajax({
    url: '/moods',
    type: 'GET',
    dataType: 'json',
    contentType: 'application/json'
  });
  getmoods.done(function(data){
    moodHistory = data;
    timeLoop(moodHistory);
  });
  getmoods.fail(function(jqXHR, textStatus, errorThrown){
    console.log(errorThrown);
  });
};
getMoodsOnLoad();


$('#get-moods').click(function(){
  $('.mood-target').toggle();
})

// $('#get-moods').click(function(){
//   var getMoods = $.ajax({
//     url: '/moods',
//     type: 'GET',
//     datatype: 'json',
//     contentType: 'application/json'
//   });
//   getMoods.done(function(data){
//
//     moodHistory = data;
//     timeLoop(moodHistory);
//   });
//   getMoods.fail(function(jqXHR, textStatus, errorThrown){
//     console.log(errorThrown);
//   });
// });


});
