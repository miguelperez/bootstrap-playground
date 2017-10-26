$(document).ready(function(){

  var editor = ace.edit("codeEditor");
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/html");

  editor.getSession().on('change', function(e) {
    $('.js-html-result').html( editor.getValue() );
  });

});
