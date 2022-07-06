let habilidades=[
    "Responsabilidad",
    "Creativa",
    "Trabajo en equipo",
    "Cortés",
    "Aplicada",
    "Html…………………….50%",
    "Css……………………...50%",
    "Javascript………………30%",
    "Microsoft office(Word, Excel y Power Point)……………….60%",
    "Contabilidad……………………………..70%",
]  

$(".skills").addClass("active")
$(".skills .skill .skill-bar span").each(function() {
   $(this).animate({
      "width": $(this).parent().attr("data-bar") + "%"
   }, 1000);
   $(this).append('<b>' + $(this).parent().attr("data-bar") + '%</b>');
});
setTimeout(function() {
   $(".skills .skill .skill-bar span b").animate({"opacity":"1"},1000);
}, 2000);