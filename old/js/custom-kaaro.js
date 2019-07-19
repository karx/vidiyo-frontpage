$("#filter-options :checkbox").click(function() 
	{   
        console.log('somethibng0');
       	$("#stars-all div").hide();
       	$("#filter-options :checkbox:checked").each(function() 
       	{
           $("." + $(this).val()).fadeIn();
		});
       
        if($('#filter-options :checkbox').filter(':checked').length < 1) 
        {
        	$("#stars-all div").fadeIn();
        	
        }
        
    });
