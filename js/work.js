function workFunction() {
    //--- --- --- ---
    //--- On load animations ---
    $(document).ready(function() {
        $(".startToWork").click(function() {
            onLoadWork();
        });
    });
    
    
    function onLoadWork() {
        $(".startContent").css({"display": "none"});
        $(".workContent").css({"display": "flex"});
        workStart();
        
        $(".menuButton").removeClass("activeMenu");
        $(".menu ul li:nth-child(5) a").addClass("activeMenu");
    }
    
    function workStart() {
        nextWork();
        setTimeout(function() {
            $(".workDesc").addClass("workDescDeco");
            $("header").addClass("headerFade"); 

            $(".workShortcutBar").css({"display": "block"});
            $(".workShortcutSide").addClass("workShortcutSideSwooshIn");

            buttonDesignLoad();
        }, 600);   

        setTimeout(function() {
            $("header").addClass("headerFaded"); 
            $("header").removeClass("headerFade"); 

            eventWorkSelectOn();
        }, 1400); 
    }

    //--- --- --- ---
    //--- work showcase selector --- 
    var finalWorkNumber= 4;
    var workNumber = 0;
    var nextWorkNumber = 1;

    var workAnimation = false;
    var scrollUp = true;    

    var startY;
    var endY;

        //--- --- --- ---
        //--- work showcase navigation --- 

            function eventWorkSelectOn() {
                //--- trigger next/prev work by scrolling ---        
                $(window).on("mousewheel DOMMouseScroll", function(eventMouse){
                    if (workAnimation === false) {
                        if (eventMouse.originalEvent.wheelDelta > 0 || eventMouse.originalEvent.detail < 0) {
                            scrollUp = true;
                        } else {
                            scrollUp = false;
                        }
                        workAni();
                    }
                });

                //--- trigger next/prev swipe up/down --- 
                $(document).on("touchstart", "body", function (eventTouch) {  
                    startY = eventTouch.originalEvent.touches[0].clientY;

                    $(document).on("touchend", "body",function (eventTouch) {

                        if (workAnimation === false) {
                            endY = eventTouch.originalEvent.changedTouches[0].clientY;
                            if ( (startY-endY) <= -150) {
                                // moved down
                                scrollUp = true;
                                workAni();  
                            } else if( (startY-endY) >= 150) {
                                // moved up
                                scrollUp = false; 
                                workAni();  
                            }
                        }
                    });
                });
            }   

            function eventWorkSelectOff() {    
                $(window).off("mousewheel DOMMouseScroll");
                $(document).off("touchstart", "body");
            }


            //--- work shortcutBar directLink ---
            var jumpDistWorkNumber;   
            $(".workShortcutButton").click(function() {
                if (workAnimation === false) {
                    workAnimation = true;
                    t = 1200;
                    nextWorkNumber = ($(this).index()+1);
                    jumpDistWorkNumber = nextWorkNumber-workNumber; 

                    if ((jumpDistWorkNumber) > 0) {
                        nextWork();
                    } else if ((jumpDistWorkNumber) < 0) {
                        prevWork();
                    } else {
                        endWork();
                        t = 800;
                    } 
                    setTimeout(function(){workAnimation = false}, t);
                }
            });

        //--- --- --- ---
        //--- work showcase animation --- 

            //--- next/prev work animation ---
            function workAni() {
                workAnimation = true;
                t = 1200;

                if (scrollUp === true) {
                    if (workNumber === 1) {
                        endWork();  
                        t = 800;
                    } 
                    else {
                        nextWorkNumber = workNumber - 1;
                        prevWork();  
                    }             
                } else {
                    if (workNumber === finalWorkNumber) {
                        endWork();  
                        t = 800;
                    } 
                    else {
                        nextWorkNumber = workNumber + 1;
                        nextWork();
                    }
                }

                //--- wait till ready for next input
                setTimeout(function(){
                    workAnimation = false;
                }, t);
            }

            //--- remove work animation classes --- 
            function cleanStep() {
                $(".workBox").removeClass("workNextA");
                $(".workBox").removeClass("workNextB");
                $(".workBox").removeClass("workPrevA");
                $(".workBox").removeClass("workPrevB");
            }

            //--- get work picture and description ---
            function changeWorkPicDesc() {
                
                $(".workFrame").removeClass("workPic"+workNumber);
                $(".workFrame").addClass("workPic"+nextWorkNumber);

                $(".workDesc p:nth-child("+workNumber+")").css({"display": "none"});
                $(".workDesc p:nth-child("+nextWorkNumber+")").css({"display": "block"});

                activeWorkSCButton();
                workNumber = nextWorkNumber;   
            }
    
            //--- animation next work --- 
            function nextWork()  {
                cleanStep(); 
                //--- animation part old ---
                $(".workBox").addClass("workNextA");
                //--- animation part new ---
                setTimeout(function(){
                    $(".workBox").addClass("workNextB");
                    changeWorkPicDesc();                    
                }, 550);
            }

            //--- animation prev work --- 
            function prevWork()  {
                cleanStep();   
                //--- animation part old ---
                $(".workBox").addClass("workPrevA");
                //--- animation part new ---
                setTimeout(function(){
                    $(".workBox").addClass("workPrevB");                    
                    changeWorkPicDesc();
                }, 550);
            }
             
            //--- animation no next/prev work --- 
            function endWork()  {
                cleanStep();
                $(".workBox").addClass("workShake");
                setTimeout(function(){
                    $(".workBox").removeClass("workShake");
                }, 600);
            }


            //--- work shortcutBar button animation TODO ---
            function buttonDesignLoad() {
                setTimeout(function() {
                    $(".workShortcutButton:nth-child(1) .workShortcutButtonDesign").addClass("workShortcutButtonDesignLoad").css({"display": "block"});
                }, 1000);
                setTimeout(function() {
                    $(".workShortcutButton:nth-child(2) .workShortcutButtonDesign").addClass("workShortcutButtonDesignLoad").css({"display": "block"}); 
                }, 1250);
                setTimeout(function() {
                    $(".workShortcutButton:nth-child(3) .workShortcutButtonDesign").addClass("workShortcutButtonDesignLoad").css({"display": "block"}); 
                }, 1500);
                setTimeout(function() {
                    $(".workShortcutButton:nth-child(4) .workShortcutButtonDesign").addClass("workShortcutButtonDesignLoad").css({"display": "block"}); 
                }, 1750);
            }

            function activeWorkSCButton() {
                $(".workShortcutButton:nth-child("+workNumber+") .workShortcutButtonDesign").removeClass("workShortcutButtonActive");
                $(".workShortcutButton:nth-child("+nextWorkNumber+") .workShortcutButtonDesign").addClass("workShortcutButtonActive");
            }



    //--- --- --- ---
    //--- expand work details --- 
    var expandedWork = false;

    //--- greyfilter off/on --- 

    $(".workFrame").click(function() {
        if (expandedWork === false && workNumber != 0) {
            expandWork();  
        }       
    });

    $(".workContentLargeReturnButton").click(function() {
        if (expandedWork === true) {
            closeExpanWork(); 
        }          
    });

    function expandWork() {

        eventWorkSelectOff();
        //--- close header menu / decomment later when combine all js!---
        //closeMoMenu();

        workAnimation = true;
        expandWorkAnimations();

        setTimeout(function(){
            $(".workContent").addClass("workContentLargeDesc"); 
            //closeMoMenu();
        }, 800); 
        
        setTimeout(function(){
            $(".workDesc").removeClass("workDescDeco");
        }, 1200); 
        
        setTimeout(function(){
            $(".workDescBig").removeClass("displayNone");
            $(".workDescBig"+workNumber).removeClass("displayNone");

            $(".workDesc p").addClass("displayNone");

            expandedWork = true;
        }, 1400);            
    }  

    function closeExpanWork() {

        closeExpanWorkAnimations();

        setTimeout(function(){
            $(".workDescBig").addClass("displayNone");      
            $(".workDescBig"+workNumber).addClass("displayNone"); 

            $(".workDesc").addClass("workDescDeco");
        }, 800);    

        setTimeout(function(){   
            $(".workDesc p").removeClass("displayNone");
        }, 1700);  

        setTimeout(function(){
            $(".workContent").removeClass("workContentLargeDesc");
            expandedWork = false;
        }, 2200);       

        setTimeout(function(){   
            workAnimation = false; 
            eventWorkSelectOn();
        }, 2800); 
    }

    function expandWorkAnimations() {
        //--- grey animation 08 ---
        $(".workFrame").addClass("removeGreyFilter");          
        //--- sidebar animation 08 ---
        $(".workShortcutSide").addClass("workShortcutSideSwooshOut");

        setTimeout(function(){    
            //--- desc animation 08 ---
            $(".workBox").addClass("workOpenLargeDesc");
            //--- header animation 05 ---
            $("header").addClass("headerGone");

            $(".workShortcutSide").removeClass("workShortcutSideSwooshIn");
        }, 810); 

         setTimeout(function(){          
            //---  ---
            $(".workDescBig").removeClass("workDescBigFadeOut");
            $(".workDescBig").addClass("workDescBigFadeIn");

            //--- backButton animation 08 ---
            $(".workContentLargeReturnButton").removeClass("displayNone");
            $(".workContentLargeReturnButton").addClass("workContentLargeReturnButtonSwooshIn");
        }, 1400);

        setTimeout(function(){
            $(".workContentLargeReturnButton").removeClass("workContentLargeReturnButtonSwooshIn");
        }, 2200);            
    }

    function closeExpanWorkAnimations() {                        
        //--- use next work animations ---
        nextWork();

        //--- grey animation 08 ---
        $(".workFrame").removeClass("removeGreyFilter");
        //--- backButton animation 08 ---
        $(".workContentLargeReturnButton").addClass("workContentLargeReturnButtonSwooshOut");
        //---  ---
        $(".workDescBig").removeClass("workDescBigFadeIn");
        $(".workDescBig").addClass("workDescBigFadeOut");

        setTimeout(function(){
            //--- desc animation 08 ---
            $(".workBox").addClass("workCloseLargeDesc");
            $(".workBox").removeClass("workOpenLargeDesc");   

            $(".workContentLargeReturnButton").addClass("displayNone");
        }, 900); 

        setTimeout(function(){   
            //--- header animation 05 ---
            $("header").addClass("headerIn");  
        }, 1700); 

        setTimeout(function(){
            $("header").removeClass("headerGone");
            $("header").removeClass("headerIn");  

            $(".workShortcutSide").removeClass("workShortcutSideSwooshOut"); 
            $(".workContentLargeReturnButton").removeClass("workContentLargeReturnButtonSwooshOut");     

            $(".workBox").removeClass("workCloseLargeDesc");
        }, 2200);  
    }
}
