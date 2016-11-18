function enableScroll(selector) {
    var element = $(selector);
    var container = element.parent();
    // element.css({position: 'fixed'});
    var prevOffset = 0;
    var curDir = true;
    var prevDir = true;
    var inilOffset = element.offset().top;
    $(window).scroll(function(e) {
        var yOffset = window.pageYOffset;
        prevDir = curDir;
        curDir = prevOffset < yOffset;
        prevOffset = yOffset;
        var totalY = element.offset().top + element.height() + inilOffset;

        if (curDir === true && curDir === prevDir && 
            window.pageYOffset + window.innerHeight >= totalY) {
            element.css({
                position: 'fixed',
                bottom: 0,
                top: ''
            });
        }

        if (prevDir !== curDir && curDir === false && element.css('position') === 'fixed') {

            // var top = container.height() - element.height();
            var top = yOffset - (element.height() - window.innerHeight);
            element.css({
                position: 'relative',
                top: top,
                bottom: ''
            });
        }

        if (curDir === true && curDir !== prevDir && element.css('position') === 'fixed') {
            element.css({
                'position': 'relative',
                'top': yOffset,
                'bottom': '',
            });
        }

        if (curDir === false && element.css('position') === 'relative' &&
            element.offset().top >= yOffset) {
            element.css({
                'position': 'fixed',
                'top': 0,
                'bottom': ''
            });
        }

        if (curDir === false && yOffset <= inilOffset) {
            element.css({
                'position': 'relative',
                'top': '',
                'bottom': ''
            });
        }
    });

}