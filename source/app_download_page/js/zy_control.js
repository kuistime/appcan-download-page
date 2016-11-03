function zy_touch(c, f){
    var t = event.currentTarget;
        if(!t.zTouch) {
        t.zTouch = new zyClick(t, f, c);
                t.zTouch._touchStart(event);
    }
}
function zy_init()
{
        if(window.navigator.platform=="Win32")
                document.body.style.fontSize=window.localStorage["defaultfontsize"];
}