/**
 * Created by Клиент on 12.07.2016.
 */



$(document).ready(function(){

    //$(".content").each(function(){
    //
    //    var visible = $(this).visible(true);
    //    $(this).css(visible ? ("opacity", "0.5") : ("opacity", "1"));
    //
    //});
    //


    $(".card").mouseover(function(){

        $(this).stop();

        $(this).animate({
            paddingTop: "0px"
        }, 250).css("box-shadow", "7px 8px 20px -4px #000000");

    })

        $(".card").mouseout(function(){
            $(this).stop();

            $(this).animate({
                paddingTop: "10px"
            }, 250).css("box-shadow", "0px 0px 0px 0px #ffffff");
        });


})


