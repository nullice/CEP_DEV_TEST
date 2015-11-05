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




var regularizFontlist= function(fontlist)//整理字体列表
{




    for (var i = 0; i < fontlist.length; i++)
    {


        fontlist.list[i].htmlName="";
        fontlist.list[i].userPreviweStr="";




    }

}

var pop = function ()
{
    //alert("pop");
   // console.log("pop");
    var cs = new CSInterface();
   // cs.evalScript("dodo(1122)");


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

            regularizFontlist(o);
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
                    div.setAttribute("font_postScriptName", o.list[i].postScriptName);
                    //div.setAttribute("style", "font-family:" + "'" + o.list[i][o.list[i].displayName] + "';");
                    div.setAttribute("style", "font-family: " + "'" + o.list[i].name + "','" + o.list[i].postScriptName + "', '"+ o.list[i].family+"' ;");

                    div.appendChild(document.createTextNode(o.list[i].family + " : " + o.list[i].style + " : " + o.list[i].name));

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

    event.data = "1885434740";

// Dispatch the Event
    csInterface.dispatchEvent(event);

// Attach a callback
    csInterface.addEventListener("com.adobe.PhotoshopJSONCallback" + csInterface.getExtensionID(), PSCallback);
    csInterface.addEventListener("com.adobe.cep.test", PSCallback);
    csInterface.addEventListener("PhotoshopCallback", PSCallbackAll);
// Define the callback
    function PSCallback(csEvent)
    {
        console.log(csEvent.data);
        alert("RRR" + csEvent.data)
    }


    function PSCallbackAll(csEvent)
    {
        console.log(csEvent.data);
        alert(csEvent.type+" :" + csEvent.data);
    }


    new CSInterface().addEventListener(
        "documentAfterActivate",

        function (event)
        {
            console.log(event.data);
            alert("Event type:" + event.type +
                "\nData: " + event.data);
        }
    )


    csInterface.addEventListener("My Custom Event", function (evt)
    {

        alert('Data from the JSX payload: ' + evt.data);

    });


    cs.evalScript("dodo('pop2')");
}



var pop3 = function ()
{
    var csInterface = new CSInterface();
    var event = new CSEvent();
    event.type = "com.adobe.cep.test";
    event.scope = "APPLICATION";
    event.data = "good bye @whitesincerely !";
    csInterface.dispatchEvent(event);

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






