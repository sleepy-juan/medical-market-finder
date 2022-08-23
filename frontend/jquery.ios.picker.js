

(function ($) {

    //    $("head").append("<style type='text/css'></style>");


    $.fn.picker = function (json, callback) {
        var options = json.data;
        var lineHeight = 30;
        $ele = $(this);
        $ele.empty();
        $ele.addClass("picker-wrapper");
        $ele.append('<div class="clone-scroller"></div>');
        $ele.append('<div class="picker-up"></div>');
        $ele.append('<div class="picker-down"></div>');
        $ele.append('<div class="picker-scroller"></div>');

        if (typeof json.lineHeight != "undefined") {
            lineHeight = json.lineHeight;
        }
        $.each(options, function (index, option) {
            $ele.find('.clone-scroller').append('<div class="option">' + option + '</div>');
            $ele.find('.picker-scroller').append('<div class="option">' + option + '</div>');
        });
        $ele.find('.clone-scroller').bind("scroll", function () {

            clockWise(lineHeight);
        });
        $ele.find(".clone-scroller").bind("scrollstop", function (e) {
            var scrollAmount = Math.round($(this).scrollTop() / lineHeight) * lineHeight;
            $(this).parent().find(".clone-scroller").animate({
                scrollTop: scrollAmount
            }, 100);
            
            
            
            var eIndex = Math.round(unit / 22.5);
            var $scroller = $(".picker-scroller");
    var $clone = $(".clone-scroller");
    var $cloneScrollTop = $(".clone-scroller").scrollTop();
    var $options = $scroller.find(".option");
    var $optionsNo = $options.length;
    var $cloneHeight = lineHeight * $optionsNo;
    var totalDeg = 22.5 * $optionsNo;
    var unit = totalDeg / $cloneHeight * $cloneScrollTop;
            
            unit = Math.round(unit/22.5)*22.5;
    //    $(".output").html(totalDeg + "/" + $cloneHeight + "/" + $cloneScrollTop);
    $scroller.css("-webkit-transform", "translateZ(-90px) rotateX(" + unit + "deg)");
            
            
        });

        /*setting css*/
        if (typeof json.lineHeight != "undefined") {
            $ele.css("height", (lineHeight * 7) + "px");
            $ele.css("line-height", lineHeight + "px");
            $ele.find('.clone-scroller').css({
                "padding-top": (lineHeight * 3) + "px",
                "padding-bottom": (lineHeight * 3) + "px"
            });
            $ele.find('.picker-scroller').css({
                "padding-top": (lineHeight * 3) + "px",
                "padding-bottom": (lineHeight * 3) + "px"
            });
            $ele.find(".picker-up").css("height", (lineHeight * 3) + "px");
            $ele.find(".picker-down").css("height", (lineHeight * 3) + "px");
            $ele.find(".picker-down").css("top", (lineHeight * 4) + "px");
        }
        // default selected
        if (typeof json.selected != "undefined") {
            $ele.find('.clone-scroller').scrollTop(lineHeight * json.selected);
            $ele.find('.picker-scroller').scrollTop(lineHeight * json.selected);
        }

        $ele.find('.picker-scroller').find(".option").each(function (index, $option) {
            $option = $($option);
            $option.css("-webkit-transform", "rotateX(-" + (22.5 * index) + "deg) translateZ(90px)");
            if (index > 7) {
                $option.hide();
            }
        });

    };
}(jQuery));


var deg = 0;

function clockWise(lineHeight) {
    var $scroller = $(".picker-scroller");
    var $clone = $(".clone-scroller");
    var $cloneScrollTop = $(".clone-scroller").scrollTop();
    var $options = $scroller.find(".option");
    var $optionsNo = $options.length;
    var $cloneHeight = lineHeight * $optionsNo;
    var totalDeg = 22.5 * $optionsNo;
    var unit = totalDeg / $cloneHeight * $cloneScrollTop;
    //    $(".output").html(totalDeg + "/" + $cloneHeight + "/" + $cloneScrollTop);
    $scroller.css("-webkit-transform", "translateZ(-90px) rotateX(" + unit + "deg)");

    var eIndex = Math.round(unit / 22.5);
    $(".output").html(eIndex);
    sessionStorage.setItem("country1",eIndex);
    $($options).hide();
    $($options.get(eIndex)).show();
    for (i = eIndex; i < (eIndex + 7); i++) {
        $($options.get(i)).show();
    }
    if (eIndex > 7) {
        for (i = eIndex; i >= (eIndex - 7); i--) {
            $($options.get(i)).show();
        }
    } else {
        for (i = 0; i < 8; i++) {
            $($options.get(i)).show();
        }
    }

}


function clockWise2(lineHeight) {
    var $scroller = $(".picker-scroller2");
    var $clone = $(".clone-scroller2");
    var $cloneScrollTop = $(".clone-scroller2").scrollTop();
    var $options = $scroller.find(".option2");
    var $optionsNo = $options.length*2;
    var $cloneHeight = lineHeight * $optionsNo;
    var totalDeg = 22.5 * $optionsNo*2;
    var unit = totalDeg / $cloneHeight * $cloneScrollTop;
    //    $(".output").html(totalDeg + "/" + $cloneHeight + "/" + $cloneScrollTop);
    $scroller.css("-webkit-transform", "translateZ(-90px) rotateX(" + unit*0.5 + "deg)");

    var eIndex = Math.round(unit / 22.5*0.5);
    $(".output2").html(eIndex);
    sessionStorage.setItem("country2",eIndex);
    $($options).hide();
    $($options.get(eIndex)).show();
    for (i = eIndex; i < (eIndex + 7); i++) {
        $($options.get(i)).show();
    }
    if (eIndex > 7) {
        for (i = eIndex; i >= (eIndex - 7); i--) {
            $($options.get(i)).show();
        }
    } else {
        for (i = 0; i < 8; i++) {
            $($options.get(i)).show();
        }
    }

}


(function ($) {

    //    $("head").append("<style type='text/css'></style>");


    $.fn.picker2 = function (json, callback) {
        var options = json.data;
        var lineHeight = 30;
        $ele = $(this);
        $ele.empty();
        $ele.addClass("picker-wrapper2");
        $ele.append('<div class="clone-scroller2"></div>');
        $ele.append('<div class="picker-up2"></div>');
        $ele.append('<div class="picker-down2"></div>');
        $ele.append('<div class="picker-scroller2"></div>');

        if (typeof json.lineHeight != "undefined") {
            lineHeight = json.lineHeight;
        }
        $.each(options, function (index, option) {
            $ele.find('.clone-scroller2').append('<div class="option2">' + option + '</div>');
            $ele.find('.picker-scroller2').append('<div class="option2">' + option + '</div>');
        });
        $ele.find('.clone-scroller2').bind("scroll", function () {

            clockWise2(lineHeight);
        });
        $ele.find(".clone-scroller2").bind("scrollstop", function (e) {
            var scrollAmount = Math.round($(this).scrollTop() / lineHeight) * lineHeight;
            $(this).parent().find(".clone-scroller2").animate({
                scrollTop: scrollAmount*5
            }, 100);
            
            
            
            var eIndex = Math.round(unit / 22.5);
            var $scroller = $(".picker-scroller2");
    var $clone = $(".clone-scroller2");
    var $cloneScrollTop = $(".clone-scroller2").scrollTop();
    var $options = $scroller.find(".option2");
    var $optionsNo = $options.length;
    var $cloneHeight = lineHeight * $optionsNo;
    var totalDeg = 22.5 * $optionsNo;
    var unit = totalDeg / $cloneHeight * $cloneScrollTop*2;
            
            unit = Math.round(unit/22.5)*22.5;
    //    $(".output").html(totalDeg + "/" + $cloneHeight + "/" + $cloneScrollTop);
    $scroller.css("-webkit-transform", "translateZ(-90px) rotateX(" + unit + "deg)");
            
            
        });

        /*setting css*/
        if (typeof json.lineHeight != "undefined") {
            $ele.css("height", (lineHeight * 7) + "px");
            $ele.css("line-height", lineHeight + "px");
            $ele.find('.clone-scroller2').css({
                "padding-top": (lineHeight * 3) + "px",
                "padding-bottom": (lineHeight * 3) + "px"
            });
            $ele.find('.picker-scroller2').css({
                "padding-top": (lineHeight * 3) + "px",
                "padding-bottom": (lineHeight * 3) + "px"
            });
            $ele.find(".picker-up2").css("height", (lineHeight * 3) + "px");
            $ele.find(".picker-down2").css("height", (lineHeight * 3) + "px");
            $ele.find(".picker-down2").css("top", (lineHeight * 4) + "px");
        }
        // default selected
        if (typeof json.selected != "undefined") {
            $ele.find('.clone-scroller2').scrollTop(lineHeight * json.selected);
            $ele.find('.picker-scroller2').scrollTop(lineHeight * json.selected);
        }

        $ele.find('.picker-scroller2').find(".option2").each(function (index, $option) {
            $option = $($option);
            $option.css("-webkit-transform", "rotateX(-" + (22.5 * index) + "deg) translateZ(90px)");
            if (index > 7) {
                $option.hide();
            }
        });

    };
}(jQuery));






//

function clockWise3(lineHeight) {
    var $scroller = $(".picker-scroller3");
    var $clone = $(".clone-scroller3");
    var $cloneScrollTop = $(".clone-scroller3").scrollTop();
    var $options = $scroller.find(".option3");
    var $optionsNo = $options.length*2;
    var $cloneHeight = lineHeight * $optionsNo;
    var totalDeg = 22.5 * $optionsNo*2;
    var unit = totalDeg / $cloneHeight * $cloneScrollTop;
    //    $(".output").html(totalDeg + "/" + $cloneHeight + "/" + $cloneScrollTop);
    $scroller.css("-webkit-transform", "translateZ(-90px) rotateX(" + unit*0.5 + "deg)");

    var eIndex = Math.round(unit / 22.5*0.5);
    $(".output3").html(eIndex);
    $($options).hide();
    $($options.get(eIndex)).show();
    for (i = eIndex; i < (eIndex + 7); i++) {
        $($options.get(i)).show();
    }
    if (eIndex > 7) {
        for (i = eIndex; i >= (eIndex - 7); i--) {
            $($options.get(i)).show();
        }
    } else {
        for (i = 0; i < 8; i++) {
            $($options.get(i)).show();
        }
    }

}


(function ($) {

    //    $("head").append("<style type='text/css'></style>");


    $.fn.picker3 = function (json, callback) {
        var options = json.data;
        var lineHeight = 30;
        $ele = $(this);
        $ele.empty();
        $ele.addClass("picker-wrapper3");
        $ele.append('<div class="clone-scroller3"></div>');
        $ele.append('<div class="picker-up3"></div>');
        $ele.append('<div class="picker-down3"></div>');
        $ele.append('<div class="picker-scroller3"></div>');

        if (typeof json.lineHeight != "undefined") {
            lineHeight = json.lineHeight;
        }
        $.each(options, function (index, option) {
            $ele.find('.clone-scroller3').append('<div class="option3">' + option + '</div>');
            $ele.find('.picker-scroller3').append('<div class="option3">' + option + '</div>');
        });
        $ele.find('.clone-scroller3').bind("scroll", function () {

            clockWise3(lineHeight);
        });
        $ele.find(".clone-scroller3").bind("scrollstop", function (e) {
            var scrollAmount = Math.round($(this).scrollTop() / lineHeight) * lineHeight;
            $(this).parent().find(".clone-scroller3").animate({
                scrollTop: scrollAmount*5
            }, 100);
            
            
            
            var eIndex = Math.round(unit / 22.5);
            var $scroller = $(".picker-scroller3");
            var $clone = $(".clone-scroller3");
            var $cloneScrollTop = $(".clone-scroller3").scrollTop();
            var $options = $scroller.find(".option3");
            var $optionsNo = $options.length;
            var $cloneHeight = lineHeight * $optionsNo;
            var totalDeg = 22.5 * $optionsNo;
            var unit = totalDeg / $cloneHeight * $cloneScrollTop*2;
            
            unit = Math.round(unit/22.5)*22.5;
    //    $(".output").html(totalDeg + "/" + $cloneHeight + "/" + $cloneScrollTop);
    $scroller.css("-webkit-transform", "translateZ(-90px) rotateX(" + unit + "deg)");
            
            
        });

        /*setting css*/
        if (typeof json.lineHeight != "undefined") {
            $ele.css("height", (lineHeight * 7) + "px");
            $ele.css("line-height", lineHeight + "px");
            $ele.find('.clone-scroller3').css({
                "padding-top": (lineHeight * 3) + "px",
                "padding-bottom": (lineHeight * 3) + "px"
            });
            $ele.find('.picker-scroller3').css({
                "padding-top": (lineHeight * 3) + "px",
                "padding-bottom": (lineHeight * 3) + "px"
            });
            $ele.find(".picker-up3").css("height", (lineHeight * 3) + "px");
            $ele.find(".picker-down3").css("height", (lineHeight * 3) + "px");
            $ele.find(".picker-down3").css("top", (lineHeight * 4) + "px");
        }
        // default selected
        if (typeof json.selected != "undefined") {
            $ele.find('.clone-scroller3').scrollTop(lineHeight * json.selected);
            $ele.find('.picker-scroller3').scrollTop(lineHeight * json.selected);
        }

        $ele.find('.picker-scroller3').find(".option3").each(function (index, $option) {
            $option = $($option);
            $option.css("-webkit-transform", "rotateX(-" + (22.5 * index) + "deg) translateZ(90px)");
            if (index > 7) {
                $option.hide();
            }
        });

    };
}(jQuery));

var deg =0;