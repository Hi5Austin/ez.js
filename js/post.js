//DataPoster = {
//	"uploadLink":"link",
//	"createForms":function(){console.log("forms created")},
//	"placeForms":function(){console.log("forms placed")}.
//	"sendData":function(){console.log("data sent!")}
//}
var uploadLink = ""

function sendData(nameOfClass){
	obj = new classes[nameOfClass]; 	// construct an empty object with the correct constructor

	params = Object.keys(obj); 	        // get parameters
	var length = params.length

	htmlContent = []; 	                // get the input from the html
	for(var i = 0; i < params.length; i ++){
		htmlContent.push(grabFromHTML(params[i]));
	}

	for(var i = 0; i < length; i ++){  	// assign the input to the attributes of the object
		obj[params[i]] = htmlContent[i];
	}

	var objString = JSON.stringify(obj); // create JSON string

	postRequest(objString);  	         // make post request
}

function createForms(){
	var html = ""
	for (blueprint in classes){        // for every class in the classes object
		obj = new classes[blueprint];  // make an empty object
		var keys = Object.keys(obj);   // get the attributes of the object
		for(var i = 0; i < keys.length; i++){   // for every attribute in that object
			var attr = keys[i];
			html += "<input id='"+ attr+"' value='"+ attr+"'> </input><br>";   // make an input tag with the attributes in it
		}
		var onclick = "sendData('" + blueprint + "')";  // make a string that is the function sendData with the correct class getting called
		html += "<a style='cursor:pointer' onclick="+ onclick +"> Submit </a><br>";
		forms[blueprint] = html;
		html = "";
	}
}

function placeForms(){
	var formDivs = $("div[id^='upload-']");    // get all the divs withs ids that begin with "upload-"
	for(var i = 0; i < formDivs.length; i ++){
		var id = $(formDivs[i]).attr("id");  // get the id
		var name = id.split("-")[1]
		form = forms[name];                    // get the form assigned to that class
		$(formDivs[i]).html(form);             // insert the form in the html of that div
	}
}
