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


var regularizFontlist = function (fontlist)//整理字体列表
{


    for (var i = 0; i < fontlist.length; i++)
    {


        fontlist.list[i].htmlName = "";
        fontlist.list[i].userPreviweStr = "";


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
                    div.setAttribute("style", "font-family: " + "'" + o.list[i].name + "','" + o.list[i].postScriptName + "', '" + o.list[i].family + "' ;");

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
    event.data = "1298866208";

// Dispatch the Event
    csInterface.dispatchEvent(event);

// Attach a callback
    csInterface.addEventListener("PhotoshopCallbackUnique", PSCallbackAll);
    csInterface.addEventListener("com.adobe.PhotoshopJSONCallback" + csInterface.getExtensionID(), PSCallbackCS);
    csInterface.addEventListener("com.adobe.cep.test", PSCallback);
    csInterface.addEventListener(CSInterface.THEME_COLOR_CHANGED_EVENT, sssss);

    function sssss(event)
    {
        alert("1111");

    }


    var esEvent = JSON.parse(result)

    // Define the callback
    function PSCallbackCS(event)
    {
        event.data = event.data.replace("ver1,{", "{");
        var esEvent = JSON.parse(event.data);
        alert(esEvent.eventID + "\n" + esEvent.eventData);
    }


// Define the callback
    function PSCallback(csEvent)
    {
        console.log(csEvent.data);
        alert("RRR: " + csEvent.data)
    }


    csInterface.addEventListener("com.nullice.event.test2",
        function (csEvent)
        {
            alert(csEvent.type + " : " + csEvent.data);
        }
    );


    function PSCallbackAll(csEvent)
    {
        console.log(csEvent.data);
        alert("PhotoshopCallback \n" + csEvent.type + " :" + csEvent.data);
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
    var cs = new CSInterface();
    var message = "来自 CEP"
    cs.evalScript("dodo('" + message + "');")
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

var fileName = "D:/1.txt";
inf = window.cep.fs.readFile(fileName);
window.cep.fs.writeFile("D:/2.txt", inf.data);

inf = window.cep.fs.readFile(fileName, "Base64");
window.cep.fs.writeFile("D:/3.txt", inf.data, "Base64");


var fileName = "D:/autorun.ico";

inf = window.cep.fs.readFile(fileName, "Base64");
window.cep.fs.writeFile("D:/1.ico", inf.data, "Base64");

inf = window.cep.fs.readFile("D:/A.ico";
,
"Base64"
)
;
window.cep.fs.writeFile("D:/B.ico", inf.data, "Base64");


var result = window.cep.fs.readdir(__dirname );
if (0 == result.err)
{
    console.log( result.data);
    // [".idea", "css", "CSXS", "EEE", "font", "img", "js", "jsx", "tem", ".debug", "1.TXT", "index.html"]
}
else
{
    console.log("错误：" + result.err)
}


//-----------------


result = window.cep.fs.readFile(fileName);
if (0 == result.err)
{
    // err 不为 0 ，读取成功
    console.log(result.data);
}
else
{
    // 失败
}


var path = "/tmp/test";
result = window.cep.fs.readFile(path, cep.encoding.Base64);
if (0 == result.err)
{
    //success
    var base64Data = result.data;
    var data = cep.encoding.convertion.b64_to_utf8(base64Data);
}
else
{
...// fail
}




