extensions = [];

$(document).ready(function() {
		
	// Populate the list of names/extensions
	$('#extensions tr').each(function() {
		var raw_name = removeWhitespace($("td:first-child", this).text());
		var raw_ext = removeWhitespace($("td:last-child", this).text());
		extensions[extensions.length] =
			{
				name: raw_name,
				ext: raw_ext,
				query: raw_name + raw_ext,
				ref: $(this)
			};

	});	
	
	//Add our search box and focus on it
	$('#extensions').before('<strong>Fresh Search: </strong><input id="extSearch" type="text" size="50"/><br/>');
	$('#extSearch').focus();	
	
	$('#extSearch').keyup(function(event) {
		
		var searchTerm = removeWhitespace($('#extSearch').val());
		
		if (searchTerm != "") {
			searchExtensions(searchTerm);
		} else {
			resetExtensions();
		}
		
	});
});

function searchExtensions(searchTerm) {
	for (var i = 0; i < extensions.length; i++) {
		if (extensions[i].query.indexOf(searchTerm) !== -1) {
			extensions[i].ref.show();
		} else {
			extensions[i].ref.hide();
		}
	}
}

function resetExtensions() {
	$('#extensions tr').show();
}

function removeWhitespace(value) {
	return value.replace(/[^a-zA-Z0-9ë]+/g,'').toLowerCase();
}

