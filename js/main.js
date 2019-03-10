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
 *
 * 今天来画一个《一拳超人》中的
 * 主角琦玉老师，
 * 
 * 首先添加画布
 */
.preview {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #93dce3;
    background: linear-gradient(#93dce3 70%, #d9f0f2 100%);
}

/*
 * 然后画出他的脸，
 * 一定要画出精确的弧度
 */
.face-wrapper {
    position: relative;
}
.face-wrapper .face {
    width: 212px;
    height: 308px;
    background: #e2b5a0;
    border: 3px solid #0c0807;
    border-top-left-radius: 48% 42%;
    border-top-right-radius: 48% 42%;
    border-bottom-right-radius: 50% 54%;
    border-bottom-left-radius: 50% 54%;
    position: relative;
    z-index: 1;
}

/*
 *
 */
/*
 * 然后是琦玉老师的眉毛
 */
.eyebrow {
    position: absolute;
    top: 126px;
    width: 46px;
    height: 4px;
    border: 2px solid #0c0807;
    border-bottom: 0;
    border-top-left-radius: 50% 98%;
    border-top-right-radius: 50% 98%;
}
.eyebrow.left {
    left: 36px;
}
.eyebrow.right {
    right: 36px;
}

/*
 * 然后是琦玉老师的眼睛
 */
.eye {
    position: absolute;
    top: 145px;
    width: 50px;
    height: 28px;
    border: 2px solid #0c0807;
    background: #eae6e3;
    border-top-left-radius: 70% 40%;
    border-top-right-radius: 70% 40%;
    border-bottom-right-radius: 60% 80%;
    border-bottom-left-radius: 60% 80%;
}
/* 左眼放到左边 */
.eye.left {
    left: 28px;
}
/* 右眼放到右边 */
.eye.right {
    right: 28px;
}

/*
 * 然后是琦玉老师的眼珠子
 */
.eyeball {
    position: absolute;
    top: 154px;
    width: 4px;
    height: 4px;
    background: #0c0807;
    border-radius: 50px;
}
.eyeball.left {
    left: 56px;
}
.eyeball.right {
    right: 56px;
}

/*
 * 然后是琦玉老师的鼻子
 */
.nose {
}
/** 一笔 */
.nose .nose-line1 {
    position: absolute;
    left: 94px;
    top: 144px;
    width: 5px;
    height: 54px;
    border: 2px solid #0c0807;
    border-left: 0;
    border-top-right-radius: 98% 50%;
    border-bottom-right-radius: 98% 50%;
}
/** 两笔 */
.nose .nose-line2 {
    position: absolute;
    left: 94px;
    top: 203px;
    width: 5px;
    height: 8px;
    border: 2px solid #0c0807;
    border-right: 0;
    border-top: 0;
    border-bottom: 0;
    transform: rotate(-20deg);
}
/** 再加上阴影就行了 */
.nose .nose-shadow {
    position: absolute;
    background-color: transparent;
}
.nose .nose-shadow1 {
    top: 142px;
    left: 86px;
    width: 6px;
    height: 60px;
    border-radius: 40%;
    box-shadow: 5px 3px 0px 0px #a27265;
}
.nose .nose-shadow2 {
    top: 146px;
    left: 80px;
    width: 8px;
    height: 56px;
    border-radius: 40%;
    transform: rotate(5deg);
    box-shadow: 8px 3px 0px 0px #a27265;
}
.nose .nose-shadow3 {
    position: absolute;
    top: 200px;
    left: 88px;
    width: 20px;
    height: 16px;
    background: #a27265;
    border-top-left-radius: 60% 50%;
    border-top-right-radius: 60% 50%;
    border-bottom-left-radius: 80% 100%;
    border-bottom-right-radius: 80% 100%;
}

/*
 * 然后是琦玉老师的耳朵
 */
.ear {
    position: absolute;
    top: 142px;
    width: 40px;
    height: 75px;
    border: 3px solid #0c0807;
    background: #e2b5a0;
    border-top-left-radius: 100% 120%;
    border-top-right-radius: 100% 120%;
    border-bottom-right-radius: 90% 120%;
    border-bottom-left-radius: 90% 120%;
}
/** 左耳 */
.ear.left {
    left: -14px;
    transform: rotate(-15deg);
}
/** 右耳 */
.ear.right {
    right: -14px;
    transform: rotate(15deg);
}

/*
  * 耳朵的细节
  */
.ear-line {
    position: absolute;
    top: 156px;
    width: 16px;
    height: 28px;
    border: 2px solid #0c0807;
    border-bottom: 0;
    border-top-left-radius: 100% 120%;
    border-top-right-radius: 100% 120%;
}
.ear-line.left {
    left: -6px;
    transform: rotate(-10deg);
}
.ear-line.right {
    right: -6px;
    transform: scaleX(-1);
    transform: rotate(10deg);
}

/*
 * 最后是嘴巴
 */
.mouth {
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    top: 234px;
    width: 28px;
    height: 10px;
    border: 2px solid #0c0807;
    background: #b07b6f;
    border-top-left-radius: 70% 20%;
    border-top-right-radius: 70% 20%;
    border-bottom-right-radius: 70% 120%;
    border-bottom-left-radius: 70% 120%;
}

/*
 * 好像缺了什么？要有光！
 */
.light {
    position: absolute;
    top: 30px;
    left: 150px;
    width: 25px;
    height: 45px;
    border-radius: 50%;
    background: #f2dccb;
    transform: rotate(-32deg);
}

/* duang! */
.preview-wrapper {
    transform: rotate(360deg);
}

/* 头要闪 */
@keyframes blink {
    50% {
        background: transparent;
        height: 0;
        width: 0;
    }
}

.light {
    animation: blink 1.5s infinite ease-out;
}

/* 
 * 大功告成！
 *
 * 一个一拳超人！谢谢观看！
 * 
 */
    `
    writeCss('', css)

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
                duration = 5
                break
        }
    })
}();