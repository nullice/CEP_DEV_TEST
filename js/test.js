var ff;
var fonts = function (len)
{
    var cs = new CSInterface();

    alert("aaa" + len);

    var fontlist = [];
    for (var i = 0; i < len; i++)
    {
        cs.evalScript("app.fonts[" + i + "]", function (res)
        {
            fontlist[fontlist.length] = res;
            console.log(fontlist)
        });

    }


}


var pop = function ()
{
    //alert("pop");
    console.log("pop");
    var cs = new CSInterface();
    cs.evalScript("dodo(1122)");


    function loadJSX(fileName)
    {
        var extensionRoot = cs.getSystemPath(SystemPath.EXTENSION) + "/jsx/";
        cs.evalScript('$.evalFile("' + extensionRoot + fileName + '")');
    }

    loadJSX("json2.js");

    cs.evalScript('getFontsJson()',
        function (result)
        {
            var o = JSON.parse(result);
            alert("getFontsJson \n" + o);


            var nwe_fontlistNode = document.createElement("div");
            nwe_fontlistNode.className = "fontlist";
            for (var i = 0; i < o.length; i++)
            {
                if (o.list[i].name != undefined)
                {
                    var div = document.createElement("div");
                    div.className = "fontdiv";
                    div.setAttribute("font_name", o.list[i].name);
                    div.setAttribute("font_family", o.list[i].family);
                    div.setAttribute("font_type", o.list[i].typename);
                    div.setAttribute("font_postScriptName", o.list[i].postScriptName);

                    div.setAttribute("style", "font-family:" + "'" + o.list[i].name + "';");


                    div.appendChild(document.createTextNode(o.list[i].name));
                    nwe_fontlistNode.appendChild(div);
                }
            }


            var docfs = document.getElementById("fontlist");
            docfs.parentNode.replaceChild(nwe_fontlistNode, docfs);
            console.log(o);
            gg = o;
        }
    )
}


//
//    cs.evalScript("app.fonts.length",function(res)
//    {
//
//        lll=res;
//
//
//
//
//    }
//    );
//
//    var txt = '{ "employees" : [' +
//        '{ "firstName":"Bill" , "lastName":"Gates" },' +
//        '{ "firstName":"George" , "lastName":"Bush" },' +
//        '{ "firstName":"Thomas" , "lastName":"Carter" } ]}';
//
//console.log( eval ("(" + txt + ")"))






