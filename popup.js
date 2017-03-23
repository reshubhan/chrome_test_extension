chrome.tabs.getSelected(null, function(tab) {
	alert("This is get from extension");
    document.getElementById('updatelink').innerHTML = tab.url;
    var url = "https://script.google.com/a/macros/etouch.net/s/AKfycbyu5lo6CCByn10qidPn4nO83p8c9-wkTfzJSdZIFwyX/dev?url="+tab.url;
    document.getElementById('updatelink').href = url;
    //Get request to googl app script
    $.get(url);


    alert("This is post from extension");
    var posturl = "https://script.google.com/a/macros/etouch.net/s/AKfycbyu5lo6CCByn10qidPn4nO83p8c9-wkTfzJSdZIFwyX/dev?name=amar&email=akaithwar@etouch.net";
	
	//Post Request to googl app script
	$.post(posturl)
	.done(function(data) {
	    $( "#savedLinks" ).html( data );
	})
	.fail(function() {
	    alert( "error" );
	});


	//Mulitiple promise  to googl app script
	var firstPromise  = $.get(url);
	var secondPromise = $.post(posturl);

	$.when(firstPromise, secondPromise).done(function(firstData, secondData) {
	  $( "#promise1" ).html(firstData );
	  $( "#promise2" ).html(secondData );
	});

});


