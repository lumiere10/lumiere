
$('.but').click(function () {
    
    $('#modal1').toggleClass('opened');
});

$(document).click(function (e) {
    if (!$(e.target).parents().andSelf().is('.but')) {
        $("#modal1").removeClass("opened");
    }
});

$(document).mousedown(function(e){
   
    if(e.button == 2 )
{

    if (!$(e.target).parents().andSelf().is('.modal1')) {
        $("#modal1").removeClass("opened");
    }
    else{
    $('#modal1').toggleClass('opened');}
    
}
    
});





$("#modal1").click(function (e) {
    e.stopPropagation();
});



