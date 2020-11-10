

$(document).ready(function(){

   //load GET
   //$("#box").load("https://reqres.in/");

//GET 
   $.get("https://reqres.in/api/users",{page: 2}, function (response){
       console.log(response);
       response.data.forEach((usuario, index) => {
       		$("#box").append("<p>"+ usuario.first_name +"</p><hr/>");
       		$("#box").append("<img src= '"+usuario.avatar+"'/>");
       });

   });
   
//POST
    var usuario = {
    	"name": "Roge Ba3",
        "job": "FreelancerDev"
    };
   $.post("https://reqres.in/api/users",usuario, function(response){
     console.log(response);
   });

//via Form POST
    $("#form").submit(function(e){
    	e.preventDefault();
		    var usuario = {
		    	"name": $("#campo_name").val(),
		        "job" : $("#campo_job").val()
		    };
		    console.log(usuario);

		   $.post($(this).attr('action'),usuario, function(response){
		     console.log(response);
		   }).done(function(){
		   	   $(".flotante").append("<hr/><p>El usuario fue enviado con exito</p>");
		       $(".flotante").append("<hr/><p>"+ $("#campo_name").val(),  $("#campo_job").val()+"</p>");
		   });
		return false;
    });

//AJAX
    $("#form").submit(function(e){   
    	e.preventDefault();
		    var usuario = {
		    	"name": $("#campo_name").val(),
		        "job" : $("#campo_job").val()
		    };
		    console.log(usuario);
		    
	    $.ajax({
	    	type:"POST",
	    	dataType:'json',
	    	contentType: 'application/json',
	    	url:$(this).attr('action'),
	    	data:usuario,
	    	beforeSend: function(){
	    		console.log("Se esta enviado la info...");
	    	},
	    	success:function (response){
	    		console.log(response);
	    	},
	    	error: function(){
	    		console.log("hay un error.");
	    	}
	    	timeout:2000
	    });
	return false;
    });        

});