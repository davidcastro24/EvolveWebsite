$( document ).ready(function() {
    var w = window.innerWidth;
    if(w > 767){
        $('#menu-jk').scrollToFixed();
    }/*else{
        $('#menu-jk').scrollToFixed();
    }*/
    
})

$(window).scroll(function(){
    const bannerTop = $("#staff").offset().top;
    const bannerBottom = bannerTop + $("#staff").height();
    const scrollTop = $(window).scrollTop() + $(window).height();

    /*console.log("scrollTop"+scrollTop);
    console.log("bannertop"+bannerTop);
    console.log("bottom"+bannerBottom);*/

    if (scrollTop > bannerTop && scrollTop < bannerBottom) {
        const dev = $("#dev");
        const eng = $("#eng");
        const agile = $("#agile");
        const des = $("#des");

        const maxdev = 30;
        const maxeng = 25;
        const maxagile = 15;
        const maxdes = 10;

        
    
        function countUp(counter,maxCount) {
            let currentCount = 0;
            function step(){
                //console.log(currentCount);
                if (currentCount <= maxCount) {
                    counter.html(currentCount + "+");
                    currentCount+=1;
                    setTimeout(step, 15); // adjust the delay to control the speed of the animation
                }
            }

            step();
        }
    
        countUp(dev,maxdev);
        countUp(eng,maxeng);
        countUp(agile,maxagile);
        countUp(des,maxdes);

      }

});




/*$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:false,
        navigation:true,
        navigationText:["",""],
        autoPlay:true
    });
});*/

