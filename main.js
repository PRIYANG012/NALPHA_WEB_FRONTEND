var x = 0;
$(document).ready(function(){
  $("div").scroll(function(){
    $("span").text( x+= 1);
  });
});


$(document).ready(function()
		{
            $("#idcall").click(function()
				{
                   
                    $("#ha").css({"color": "#007BFF", "transition": "1s"});
                    $("#hb").css({"hight": "300px","width":"300px","transition": "1s"});
                    $(".hc").css({"display": "block", "transition": "1s"});
                });
        
            $(".site-blocks-cover").mouseenter(function()
				{
                   
                    $("#hb").css({"hight": "0px","width":"0px","transition": "1s"});
                     $("#ha").css({"color": "white", "transition": "1s"});
                     $(".hc").css({"display": "none", "transition": "1s"});
                     $("#ha2").css({"color": "#f8F9fa", "transition": "1s"});
                     $(".hc2").css({"display": "none", "transition": "1s"});
                });
			$(".site-blocks-cover-sub").mouseenter(function()
				{
                    $("#ha").css({"color": "#007BFF", "transition": "1s"});
                    $("#hb").css({"hight": "300px","width":"300px","transition": "1s"});
                    $(".hc").css({"display": "block", "transition": "1s"});
				});

			$("#idcon").click(function()
				{
                   
                    // $("#hb").css({"hight": "0px","width":"0px","transition": "1s"});
                     $("#ha2").css({"color": "#007BFF", "transition": "1s"});
                     $(".hc2").css({"display": "block", "transition": "1s"});
                });
             
        

            $(".site-blocks-cover-sub-2").mouseenter(function()
				{
                    $("#ha2").css({"color": "#007BFF", "transition": "1s"});
                    // $("#hb").css({"hight": "300px","width":"300px","transition": "1s"});
                    $(".hc2").css({"display": "block", "transition": "1s"});
				});

			$(".site-blocks-cover-sub-2").mouseleave(function()
				{
                   
                    // $("#hb").css({"hight": "0px","width":"0px","transition": "1s"});
                     $("#ha2").css({"color": "#f8F9fa", "transition": "1s"});
                     $(".hc2").css({"display": "none", "transition": "1s"});
                });    
                
                
		});