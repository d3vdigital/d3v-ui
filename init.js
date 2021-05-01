/******** Get init.js base location ********/
let current_location = document.currentScript.src.replace('init.js', '');


/******** Load CSS ********/
load_css(current_location+'lib-ui/bootstrap/css/bootstrap.min.css');
load_css(current_location+'lib-ui/bootbox/bootbox.css');


/******** Load JS ********/
load_js(current_location+'lib-js/jquery/jquery-3.6.0.min.js');
load_js(current_location+'lib-js/popper/popper.min.js');
load_js(current_location+'lib-ui/bootstrap/js/bootstrap.min.js');
load_js(current_location+'lib-ui/bootbox/bootbox.min.js');
load_js(current_location+'lib-ui/bootbox/bootbox.locales.min.js');
load_js(current_location+'lib-fonts/fontawesome/js/all.js');


/******** Loader Functions ********/
function load_js(file){		
	let script = '<script src="'+file+'" type="text/javascript"></script>';
	document.write(script);
}

function load_css(file){
	let link = '<link href="'+file+'" type="text/css" rel="stylesheet" media="screen,print">';	
	document.write(link);
}

