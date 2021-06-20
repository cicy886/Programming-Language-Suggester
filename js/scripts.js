$(document).ready(function() {
  $("#suggester").submit(function(event) {
    event.preventDefault();
    const personName = $("input#name").val();
    const codingSpeed = $("input:radio[name=codingSpeed]:checked").val();
    const performance = $("input:radio[name=performance]:checked").val();
    const program = $("input:radio[name=program]:checked").val();
    const whatToCreate =$("#whatToCreate").val();
    const feature =$("#feature").val();

    if (codingSpeed === "complex" && performance === "largeApplication" && program === "visualStudio") {
      $(".name").text(personName);
      $("#cSharp").show();
    }else if (codingSpeed === "complex" && performance === "interpretive" && program === "visualStudio") {
      $(".name").text(personName);
      $("#cSharpRuby").show();
    }else if (codingSpeed === "complex" && performance === "largeApplication" && program === "apatanaStudio") {
      $(".name").text(personName);
      $("#python").show();
    }else if (codingSpeed === "fast" && performance === "largeApplication" && program === "visualStudio") {
      $(".name").text(personName);
      $("#python").show();
    } else if (codingSpeed === "fast" && performance === "interpretive" && program === "apatanaStudio") {
      $(".name").text(personName);
      $("#codingProgram").show();
    }else if (codingSpeed === "fast" && performance === "interpretive" && program === "visualStudio") {
      $(".name").text(personName);
      $("#pythonRuby").show();
    }else if (codingSpeed === "complex" && performance === "interpretive" && program === "apatanaStudio") {
      $(".name").text(personName);
      $("#ruby").show();
    }else if (codingSpeed === "fast" && performance === "largeApplication" && program === "apatanaStudio") {
      $(".name").text(personName);
      $("#python").show();
    }else {
      $(".name").text(personName);
      $("#pythonRuby").show();
    }
  });
});