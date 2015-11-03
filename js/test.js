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






var pop2 = function ()
{
    alert("pop2");

    var csInterface = new CSInterface();

// Create a new Event
    var event = new CSEvent("com.adobe.PhotoshopRegisterEvent", "APPLICATION");

// Set Event properties: extension id
    event.extensionId = csInterface.getExtensionID();

    event.data = "1668247673";

// Dispatch the Event
    csInterface.dispatchEvent(event);

// Attach a callback
    csInterface.addEventListener("com.adobe.PhotoshopJSONCallback"+csInterface.getExtensionID(), PSCallback);

    csInterface.addEventListener("com.adobe.PhotoshopJSONCallback"+csInterface.getExtensionID(), PSCallback);

// Define the callback
    function PSCallback(csEvent) { alert("RRR"+csEvent.data) }

    new CSInterface().addEventListener(
        "documentAfterActivate",
        function(event) {
            alert("Event type:" + event.type +
                "\nData: " + event.data );
        }

    )



    csInterface.addEventListener("My Custom Event", function(evt) {

        alert('Data from the JSX payload: ' + evt.data);

    });


    cs.evalScript("dodo('pop2')");
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






