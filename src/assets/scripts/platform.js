// ios下状态栏遮挡
var standalone = win.navigator.standalone,
    userAgent = win.navigator.userAgent.toLowerCase(),
    safari = /safari/.test( userAgent ),
    ios = /iphone|ipod|ipad/.test( userAgent ),
    uc = /ucbrowser/.test(userAgent),
    qihoo = /qihoobrowser/.test(userAgent),
    sogoumobilebrowser = /sogoumobilebrowser/.test(userAgent);

win.isIosWebview = false;
win.ios = ios;
if( ios ) {

    if ( !standalone && safari ) {
        //browser
    } else if ( standalone && !safari ) {
        //standalone

    } else if ( !standalone && !safari ) {
        //uiwebview  【不是uc也不是360也不是搜狗】
        if(!uc && !qihoo && !sogoumobilebrowser){
            isIosWebview = true;
        }

    };
} else {
    //not iOS
};
