$(document).ready(function() {		
		
    	$(".fa-bars").click(function(){
    		$(".fa-bars").hide();
        	$("#slide").slideDown(1000);
        	$(".fa-window-close").show();
    	});

    	$(".fa-window-close").click(function(){
    		$(".fa-window-close").hide();
        	$("#slide").slideUp(1000);
        	$(".fa-bars").show();
    	});

});