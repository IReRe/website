function headerFunction() {
//--- --- --- ---
//--- nightmode ---
    var nightModeState = 0;
    $(".nightMode").click(function() {
        nightModeState++;
        //--- state: even->nightMode uneven->lightMode ---
        var isEven = function(x) {
            return (x % 2 === 0) ? true : false;
        };
        //--- activate light mode ---
        if (isEven(nightModeState) === false) {
            $(".content").addClass("contentLight");
            $(".nightMode").addClass("switchButtonIconOther");
        }
        //--- activate dark mode ---
        else if (isEven(nightModeState) === true) {
            $(".content").removeClass("contentLight"); 
            $(".nightMode").removeClass("switchButtonIconOther");
        }
    });


//--- --- --- ---
//--- expand mobile menu ---
    var mobileMenuState = 0;

    var isEven = function(x) {
            return (x % 2 === 0) ? true : false;
        };

    //--- expand / collapse mobile menu ---
    function expandMoMenu() {
        $(".headBot").css({"overflow": "visible"});         
        $(".expandMenu").addClass("switchButtonIconOther");
        $(".menu").addClass("mobileMenu");
    }
    function collapseMoMenu() {
        $(".headBot").css({"overflow": "hidden"});
        $(".expandMenu").removeClass("switchButtonIconOther");
        $(".menu").removeClass("mobileMenu");
    }   

    //--- expand / collapse mobile menu based on current mobileMenuState ---
    $(".expandMenu").click(function() {
        mobileMenuState++;
         //---state: even->collapsed uneven->expanded ---
        if (isEven(mobileMenuState) === false) {
            expandMoMenu();
        }
        else if (isEven(mobileMenuState) === true) {
            collapseMoMenu();
        }
    });   
    //--- collapse mobile menu when screen wider than 800 (scrollbar-length 17) ---
    $(window).on("resize", function() {
        if ($(window).width() > 800) {
            collapseMoMenu();
            mobileMenuState = 0;
       }
    });
    //--- collapse mobile menu on click outside menu ---
    //TODO

    function closeMoMenu() {
        if (isEven(mobileMenuState) === false) {
            mobileMenuState++;
            collapseMoMenu();
        }
    }


//--- --- no need anymore but position sticky buggy? --- ---
//--- switch to nav-only-header when not at page top ---

    $(window).on("scroll", function() {
        if($(window).scrollTop() > 100 && $(window).width() > 800) {
            $(".headBot").css({"position": "fixed","top": "0px","width": "99%"});
        } 
        else if($(window).scrollTop() > 150 && $(window).width() <= 800) {
            $(".headBot").css({"position": "fixed","top": "0px","width": "99%"});
        } 
        else {
            $(".headBot").css({"position": "relative","width": "100%"});
        }   
    });


//--- --- possible feature --- ---
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
}, 200);

function hasScrolled() {
    var st = $(this).scrollTop();
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    if (st > lastScrollTop && st > navbarHeight){
    // Scroll Down
        $('.headBot').addClass("displayNone");
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.headBot').removeClass("displayNone");
        }
    }
    lastScrollTop = st;
}
*/
};