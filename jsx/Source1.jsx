var dodo = function (info)
{
    alert("dodo:" + info);
}


var dodo2 = function (info)
{
    return 11;
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