factsButtonUnroll();
animateTitle();

function factsButtonUnroll() {
    // Fact section toggling
    //console.log("doc's ready");
    $("#the-facts button").each(function () {
        //console.log("in each  ready");
        $(this).click(function (a, b) {
            var topic = $(this).attr('class');
            $("#the-facts section").each(function () {
                if ($(this).attr('class') == topic || $(this).css('display') != "none") {
                    $(this).slideToggle();
                }
            });
            setTimeout(function () { $(scrollableElement('html', 'body')).animate({ scrollTop: $('#fact-buttons').offset().top }, 400); }, 400);
        });
    });
};
//Crossbrowser fix to choose html or body to scroll with
//source: http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links
// use the first element that is "scrollable"
function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i < argLength; i++) {
        var el = arguments[i],
            $scrollElement = $(el);
        if ($scrollElement.scrollTop() > 0) {
            return el;
        } else {
            $scrollElement.scrollTop(1);
            var isScrollable = $scrollElement.scrollTop() > 0;
            $scrollElement.scrollTop(0);
            if (isScrollable) {
                return el;
            }
        }
    }
    return [];
}

var finished = true;
var animateCount = -1;
function animateTitle() {
    //Use green sock or add display none here to make sure starting from none displayed.
    if (finished) {
        animateCount++;
        if (animateCount % 3 == 0 || animateCount == 1) {
            finished = false;
            $('header span[data-animate]').hide().removeClass("animated").removeClass("final");
            setTimeout(function () {
                $('[data-animate="title-1"]').fadeToggle();
                setTimeout(function () {
                    $('[data-animate="title-2"]').fadeToggle();
                    setTimeout(function () {
                        $('[data-animate="title-3"]').fadeToggle();
                        setTimeout(function () {
                            $('[data-animate="title-3"]').addClass('animated', 1000);
                            $('[data-animate="title-1"]').addClass('animated', 1000);
                            $('[data-animate="title-2"]').addClass('animated', 1000);
                            setTimeout(function () {
                                $('[data-animate="title-2"]').addClass('final', 1000);
                                setTimeout(function () { finished = true; }, 2000);
                            }, 1000);
                        }, 500);
                    }, 500);
                }, 500);
            }, 500);
        }
    }
};