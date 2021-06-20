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
      $("button").click(function() {
        $("p").removeId();
        $("p").addId("cSharp");
      });
      $(".name").text(personName);
      $("#cSharp").show();
    }else if (codingSpeed === "complex" && performance === "interpretive" && program === "visualStudio") {
      $("button").click(function() {
        $("p").removeId();
        $("p").addId("cSharpRuby");
      });
      $(".name").text(personName);
      $("#cSharpRuby").show();
    }else if (codingSpeed === "complex" && performance === "largeApplication" && program === "aptanaStudio") {
      $("button").click(function() {
        $("p").removeId();
        $("p").addId("python");
      });
      $(".name").text(personName);
      $("#python").show();
    }else if (codingSpeed === "fast" && performance === "largeApplication" && program === "visualStudio") {
      $("button").click(function() {
        $("p").removeId();
        $("p").addId("python");
      });
      $(".name").text(personName);
      $("#python").show();
    } else if (codingSpeed === "fast" && performance === "interpretive" && program === "aptanaStudio") {
      $("button").click(function() {
        $("p").removeId();
        $("p").addId("codeProgram");
      });
      $(".name").text(personName);
      $("#codeProgram").show();
    }else if (codingSpeed === "fast" && performance === "interpretive" && program === "visualStudio") {
      $("button").click(function() {
        $("p").removeId();
        $("p").addId("pythonRuby");
      });
      $(".name").text(personName);
      $("#pythonRuby").show();
    }else if (codingSpeed === "complex" && performance === "interpretive" && program === "aptanaStudio") {
      $("button").click(function() {
        $("p").removeId();
        $("p").addId("ruby");
      });
      $(".name").text(personName);
      $("#ruby").show();
    }else {
      $("button").click(function() {
        $("p").removeId();
        $("p").addId("pythonRuby");
      });
      $(".name").text(personName);
      $("#pythonRuby").show();
    }
  });
});