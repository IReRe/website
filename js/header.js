function headerFunction() {
    
//--- --- --- ---
//--- expand mobile menu ---
    var mobileMenuState = false;

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
         //---state: even->collapsed uneven->expanded ---
        if (mobileMenuState === false) {
            expandMoMenu();
            mobileMenuState = true;
        }
        else if (mobileMenuState === true) {
            collapseMoMenu();
            mobileMenuState = false;
        }
    });   
    //--- collapse mobile menu when screen wider than 800 (scrollbar-length 17) ---
    $(window).on("resize", function() {
        if ($(window).width() > 800) {
            collapseMoMenu();
            mobileMenuState = false;
       }
    });
    //--- collapse mobile menu on click outside menu ---
    //TODO

    function closeMoMenu() {
        if (mobileMenuState === true) {
            collapseMoMenu();
            mobileMenuState = false;
        }
    }


//--- --- shouldnt be needed but position sticky buggy? --- ---
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

};