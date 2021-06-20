$(document).ready(function() {
  $("#suggester").submit(function(event) {
    event.preventDefault();
    const personName = $("input#name").val();
    const codingSpeed = $("input:radio[name=codingSpeed]:checked").val();

  });
});