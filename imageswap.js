$(document).ready(function() {
    //preload images
    $("#image_list a").each(function(){
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });

    //setup event handler for each link
    $("#image_list a").click(function(evt){
        var src = $(this).attr("href");
        $("#image").attr("src",src);

        var caption = $(this).attr("title");
        $("#caption").text(caption);

        //prevent default action of the link
        evt.preventDefault();
    });

    $("li:first-child a").focus();

    $("#image_list a").hover(
        function(evt){$(this).stop(true).animate({top:15},"fast");},
        function(evt){$(this).stop(true).animate({top:0},"fast");} 
    );
});//end ready