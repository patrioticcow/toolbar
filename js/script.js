//var QUERY = 'kittens';

var cheatSheet = {

	//searchOnFlickr_: '',

	requestKittens: function() { 
	}

};

document.addEventListener('DOMContentLoaded', function () {
	cheatSheet.requestKittens();
});

$(function () {
	$('#mainTab a').click(function (e) {
		e.preventDefault();
  		$(this).tab('show');
	});

	$('#php_empty').load('php_empty.html');
	$('#php_egual_egual').load('php_egual_egual.html');
	$('#php_egual_egual_egual').load('php_egual_egual_egual.html');
	$('#php_global_variables').load('php_global_variables.html');
	$('#php_date_time').load('php_date_time.html');
	$('#php_unit').load('php_unit.html');
})