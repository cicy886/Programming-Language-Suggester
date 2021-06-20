function replace(num) {
  $("#cSharp").hide();
  $("#cSharpRuby").hide();
  $("#python").hide();
  $("#codeProgram").hide();
  $("#pythonRuby").hide();
  $("#ruby").hide();

  if (num===1){
    $("#cSharp").show();
  }else if (num===2) {
    $("#cSharpRuby").show();
  }else if (num===3) {
    $("#python").show();
  }else if (num===4) {
    $("#codeProgram").show();
  }else if (num===5) {
    $("#pythonRuby").show();
  }else {
    $("#ruby").show();
  }
}


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
      replace(1);
    }else if (codingSpeed === "complex" && performance === "interpretive" && program === "visualStudio") {
      $(".name").text(personName);
      replace(2);
    }else if (codingSpeed === "complex" && performance === "largeApplication" && program === "aptanaStudio") {
      $(".name").text(personName);
      replace(3)
    }else if (codingSpeed === "fast" && performance === "largeApplication" && program === "visualStudio") {
      $(".name").text(personName);
      replace(3);
    } else if (codingSpeed === "fast" && performance === "interpretive" && program === "aptanaStudio") {
      $(".name").text(personName);
      replace(4);
    }else if (codingSpeed === "fast" && performance === "interpretive" && program === "visualStudio") {
      $(".name").text(personName);
      replace(5);
    }else if (codingSpeed === "complex" && performance === "interpretive" && program === "aptanaStudio") {
      $(".name").text(personName);
      replace(6);
    }else {
      $(".name").text(personName);
      replace(5);
    }
  });
});