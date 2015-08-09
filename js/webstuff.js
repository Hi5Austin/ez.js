// stored here is all the functions not stored in an object but help with web access

function grabFromHTML(id){
	var selector = "#" + id;
	return $(selector).val()
}

function postRequest(data){
	$.ajax({
  		type: "POST",
  		url: uploadLink,
  		data: data,
  		success: console.log("POST succesful"),
  		dataType: "JSON"
	});
}