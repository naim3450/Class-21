$("#addColor").click(function(){
    $(".one").addClass("two");
});

$("#Remove_Color").click(function(){
    $(".one").removeClass("two");
});

$("#Add_and_Remove_Color").click(function(){
    $(".one").toggleClass("two")
});

$("#Hide_and_Show").click(function(){
    $(".one").toggle()
})
