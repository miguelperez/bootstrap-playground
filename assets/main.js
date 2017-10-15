$(document).ready(function(){
  $('.js-editor').on('keyup', function(evt){
    $('.js-html-result').html($(this).val());
  });
});
