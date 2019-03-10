!function(){
    var duration = 20
    function writeCss(prefix, code, callback) {
        var container = document.querySelector('#code')
        
        var styleTag = document.querySelector('#styleTag')
        var n = 0
        // var timer = setInterval(() => {
        //     n += 1
        //     container.innerHTML = code.substring(0, n)
        //     styleTag.innerHTML = code.substring(0, n)
        //     container.scrollTop = container.scrollHeight
        //     if (n >= code.length) {
        //         window.clearInterval(timer)
        //         callback && callback()
        //     }
        // }, 10);
        setTimeout(function fn() {
            n += 1
            container.innerHTML = code.substring(0, n)
            hljs.highlightBlock(container)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n < code.length) {
                setTimeout(fn, duration)
            } else {
                callback && callback()
            }
        }, duration);
    }

    var css = `
/*
 * 我叫 dogezhou
 * 今天来画一个琦玉老师，
 * 首先添加画布
 */

/* duang! */    
.preview-wrapper {
    transform:rotate(360deg);
}

/* 一个琦玉老师！谢谢观看！*/
    `
    // writeCss('', css)

    // 调速
    $('.actions').on('click', 'button', function(e) {
        var $button = $(e.currentTarget)
        var speed = $button.attr('data-speed')
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        switch(speed) {
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 10
                break
        }
    })
}();