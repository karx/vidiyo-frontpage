$("#filter-options :checkbox").click(function() 
	{   
        console.log('somethibng0');
       	$(".stars-all li").hide();
       	$("#filter-options :checkbox:checked").each(function() 
       	{
           $("." + $(this).val()).fadeIn();
           console.log("." + $(this).val());
		});
       
        if($('#filter-options :checkbox').filter(':checked').length < 1) 
        {
        	$(".stars-all li").fadeIn();
        	
        }
        
    });
