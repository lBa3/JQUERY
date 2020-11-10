

$(document).ready(function(){
   
   //$("#box").hide();

   $("#show").click(function (){
      $("#box").show('fast');      
   });


   $("#fade-in").click(function (){
      $("#box").fadeIn('slow', function (){
      	alert("Hola aqui toy"); 
      });      
   });

   $("#fadeTo-in").click(function (){
      $("#box").fadeTo('slow', 1);  //mostrar      
   });

   $("#hide").click(function (){
      $("#box").hide('normal');      
   });

   $("#fade-out").click(function (){
      $("#box").fadeOut('slow');      
   });

   $("#fadeTo-out").click(function (){
      $("#box").fadeTo('slow', 0.2);  //ocultar      
   });

   $("#a-1").click(function (){
      $("#box").animate({
      	                   marginLeft:'500px' }
      	                ,'slow')
                .animate({
      	                   borderRadius:'900px'
      	                },'slow');
   });

   



});