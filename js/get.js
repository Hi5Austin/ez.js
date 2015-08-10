//DataGetter = {
//	"downloadLink":"link",
//	"getData": function(){console.log("getting data")},
//	"createDisplays": function(){console.log("displays created")},
//	"placeDisplays":function(){console.log("displays placed")}
//}

var downloadLink = ""
var dataString = "";
var data = {};

function getData(){
	var res = $.get(downloadLink).done(function(data){setData(res.responseText)})
}

function setData(string){
	dataString = string;
	var data = JSON.parse(dataString);
	console.log(data)
}