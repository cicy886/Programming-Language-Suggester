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
      $("#cSharp").show();
    }else if (codingSpeed === "complex" && performance === "interpretive" && program === "visualStudio") {
      $("#cSharpRuby").show();
    }else if (codingSpeed === "complex" && performance === "largeApplication" && program === "apatanaStudio") {
      $("#python").show();
    }else if (codingSpeed === "fast" && performance === "largeApplication" && program === "visualStudio") {
      $("#python").show();
    } else if (codingSpeed === "fast" && performance === "interpretive" && program === "apatanaStudio") {
      $("#codingProgram").show();
    }else if (codingSpeed === "fast" && performance === "interpretive" && program === "visualStudio") {
      $("#pythonRuby").show();
    }else if (codingSpeed === "complex" && performance === "interpretive" && program === "apatanaStudio") {
      $("#ruby").show();
    }else if (codingSpeed === "fast" && performance === "largeApplication" && program === "apatanaStudio") {
      $("#python").show();
    }else {
      $("#pythonRuby").show();
    }
  });
});