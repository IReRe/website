//--- --- --- ---
//--- toggle night mode ---
var nightModeState = 0;
$(".nightMode").click(function() {
    nightModeState++;
    //---state: even->nightMode uneven->lightMode ---
    var isEven = function(x) {
        return (x % 2 === 0) ? true : false;
    };
    if (isEven(nightModeState) === false) {
        $(".content").css({"background-color": "#EDEDED", "color": "#363534"});
        $(".nightMode p").css({"display": "none"});
        $(".nightMode p:nth-child(2)").css({"display": "block"}); 
    }
    else if (isEven(nightModeState) === true) {
        $(".content").css({"background-color": "#363534", "color": "#EDEDED"});  
        $(".nightMode p").css({"display": "none"});
        $(".nightMode p:nth-child(1)").css({"display": "block"}); 
    }
});


//--- --- --- ---
//--- expand mobile menu ---
var mobileMenuState = 0;
//--- expand / collapse mobile menu ---
function expand() {
    $(".headBot").css({"overflow": "visible"});
    $(".menu ul li").css({"float": "none"});
    $(".expandMenu p").css({"display": "none"});
    $(".expandMenu p:nth-child(2)").css({"display": "block"});

    $(".menu ul").css({"display": "flex", "flex-direction": "column"});
    $(".menu ul li:nth-child(3)").css({"order": "7"});
    $(".menu ul li:nth-child(4)").css({"order": "6"});
    $(".menu ul li:nth-child(5)").css({"order": "5"});
    $(".menu ul li:nth-child(6)").css({"order": "4"});
    $(".menu ul li:nth-child(7)").css({"order": "3"});
}
function collapse() {
    $(".headBot").css({"overflow": "hidden"});
    $(".menu ul li").css({"float": "right"});
    $(".expandMenu p").css({"display": "none"});
    $(".expandMenu p:nth-child(1)").css({"display": "block"}); 

    $(".menu ul").css({"display": "block"});
}         
//--- expand / collapse mobile menu based on current mobileMenuState ---
$(".expandMenu").click(function() {
    mobileMenuState++;
     //---state: even->collapsed uneven->expanded ---
    var isEven = function(x) {
        return (x % 2 === 0) ? true : false;
    };
    if (isEven(mobileMenuState) === false) {
        expand();
    }
    else if (isEven(mobileMenuState) === true) {
        collapse();
    }
});   
//--- collapse mobile menu when screen wider than 800 ---
$(window).on("resize", function() {
   if ($(window).width() > 783) {
        collapse();
        mobileMenuState = 0;
   }
});
//--- collapse mobile menu on click outside menu ---
//TODO


//--- --- --- ---
//--- switch to nav-only-header when not at page top ---
$(window).on("scroll", function() {
    if($(window).scrollTop() > 100 && $(window).width() > 800)
    {
        $(".headBot").css({"position": "fixed","top": "0px","width": "99%"});
    } 
    else if($(window).scrollTop() > 150 && $(window).width() <= 800)
    {
        $(".headBot").css({"position": "fixed","top": "0px","width": "99%"});
    } 
    else 
    {
        $(".headBot").css({"position": "relative","width": "100%"});
    }   
});


//--- --- --- ---
//--- Hide nav-only-header when scrolling down ---
/*
var didScroll;
var lastScrollTop = 0;
var delta = 10;
var navbarHeight = $('header').outerHeight()+$('.headBot').outerHeight();
//--- ---
$(window).scroll(function(event) {
    didScroll = true;
});
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 50);

function hasScrolled() {
    var st = $(this).scrollTop();
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    if (st > lastScrollTop && st > navbarHeight){
    // Scroll Down "display": "none"
        $('.headBot').css({"display": "none"});
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.headBot').css({"display": "block"});
        }
    }
    lastScrollTop = st;
}
*/
