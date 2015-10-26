var postUrl = 'main.html';

function ajaxPost (val){
    $.post(postUrl+val).success(function() { alert("second success"); })
        .error(function() { alert("error"); })
        .complete(function() { alert("complete"); });
}


effect = {

    setfirst : function (){
        $(".knob").val(20);
    },

    setbase : function (){
        $(".knob").knob({
            'min':0,
            'max':100,
            'width':'60%',
            "fgColor": '#66FF66',
            //"bgColor": '',
            'release' : function (v) {
                ajaxPost('');
                }
        });
    }
}



$(document).ready(function(){
    effect.setfirst();
    effect.setbase();
    console.log("123");
})