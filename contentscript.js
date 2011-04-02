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
	
	$('#extensions').after('<div id="searchResultMessage" style="padding:10px;color:red;font-weight:bold"/>');
	$('#searchResultMessage').hide();
	
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
	var numVisible = extensions.length;
	
	for (var i = 0; i < extensions.length; i++) {
		if (extensions[i].query.indexOf(searchTerm) !== -1) {
			extensions[i].ref.show();
		} else {
			extensions[i].ref.hide();
			numVisible--;
		}
	}
	
	if (numVisible == 0) {
		$('#searchResultMessage').html(randomEmptyMesssage());
		$('#searchResultMessage').show();
	} else {
		$('#searchResultMessage').hide();
	}
}

function randomEmptyMesssage() {
	var messages = new Array(
		"The person you're trying to find isn't here right now. Please leave a message at the beep. *BEEP*",
		"I'm sorry, I must of misplaced the person you're looking for!",
		"In the game of hide and seek, sometimes the hidden can't be found.",
		"Thank you Mario! But the person is in another castle!",
		"Oop! Looks like you've made a typo! Don't worry... it happens to the best of us.",
		"The person does not exist. Have you tried looking at Harvest?",
		"Bummer. The person you're looking for is not a functioning employee at FreshBooks.",
		"Oh no! Your search broke me! Please try again!",
		"Wanted: Missing Search Result. If found, please report to the search page!",
		"The person cannot be displayed because you need some fresh air.",
		"This person sucks, so I won't be displaying their extension",
		"Were you just making up names or something? I mean I've seens some pretend names in my day, but come on! Its like you're not even trying!",
		"Woohoo! Found your result. Please click <a href='http://www.youtube.com/watch?v=oHg5SJYRHA0' target='_blank'>HERE</a> to see.",
		"Hark! The page thou art searching for exists not on this page! Pray tell, who art thou trying to find?",
		"I tried searching for someone at FreshBooks and all I got was this lousy message",
		"I WOULD of found who you're looking for, but I got distracted by all the cute animals on #fluffychat!",
		"AHH!!! You broke me! Now my horrible master, Anton will punish me! SAVE ME!!!!!!!",
		"Food + Noon = Inability to find people. Sorry.",
		"I say ol'chap.. seem you've mucked around and found yourself a person who doesn't even exist! Jollygood, then.",
		"This is not the person you're looking for. Move along...Move along...",
		"The person was not found... Because I ate them.",
		"The person does not exist. But if you think about it, do YOU even exist?",
		"What the dickens?! You seriously think FreshBooks would hire someone with THAT kinda name?!",
		"D'oh!",
		"What have you done?! I take my eye off you for one minute and this is who I find you looking for? Come on!",
		"The buddy you have tried to find<br/>Their name might not of been defined<br/>So add them now<br/>Hope you know how<br/>Thank you for being kind",
		"Awww snap! Have you tried looking on Facebook?"
	);
	return messages[randomNumber(messages.length)]
}

function resetExtensions() {
	$('#extensions tr').show();
}

function removeWhitespace(value) {
	return value.replace(/[^a-zA-Z0-9ë]+/g,'').toLowerCase();
}

//function to get random number from 1 to n
function randomNumber(maxVal)
{
   var randVal = Math.random()*maxVal;
   return typeof floatVal=='undefined'?Math.round(randVal):randVal.toFixed(1);
}


