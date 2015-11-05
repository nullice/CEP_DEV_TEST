var dodo = function (info)
{
    alert("dodo:" + info);
}


var dodo2 = function (info)
{


    try {
        var xLib = new ExternalObject("lib:\PlugPlugExternalObject");
    } catch (e) {
        alert(e);
    }

    if (xLib) {
        var eventObj = new CSXSEvent();
        eventObj.type = "My Custom Event";
        eventObj.data = "some payload data...";
        eventObj.dispatch();
    }


}


function getFontsJson()
{
    var fontlist = new Object();
    fontlist.length = app.fonts.length;
    fontlist.list = [{}];
    for (var i=0; i < app.fonts.length; i++)
    {
        fontlist.list[fontlist.list.length]=
        {
            name:app.fonts[i].name,
            style:app.fonts[i].style,
            typename:fonts[i].typename,
            postScriptName:fonts[i].postScriptName,
            family:fonts[i].family
        }
    }

    return JSON.stringify(fontlist);
}