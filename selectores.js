


$(document).ready(function(){
   console.log ("jQuery Ok...");

   //Selector por ID
   $("#p1").css("color", "red");
   $("#p2").css("color", "blue");
   $("#p3").css("color", "green");
   

   //Selector por clas css
   $(".perron").css("color", "pink");

   //selector por etiqueta
   $("p").css("border", "1px solid blue");

   //selector por atributo
   $('[title="Google"]').css('color', 'green');
   $('[title="facebook"]').css('color', 'yellow');

   //seleccionar elementos y agregar clase Css
   $("p, a").addClass('gatito');

   //selecionar elementos especificos 
   var elementos = $("#box_li").find('a');
   console.log (elementos);



});