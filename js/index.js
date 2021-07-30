$(document).ready(function (){
	//multi level menu
$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');
    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass("show");
    });
    return false;
});

// Sliding Menu
$('.navbar-toggler').click(function() {
	if($('.navbar-bg').css('display') == 'none') {
		$('.navbar-bg').css('display', 'block');
		$('.navbar-collapse').addClass('show');
		$('.navbar-collapse').addClass('collapsed');
		// $('.navbar-collapse').css('position', 'fixed');
	}else {
		$('.navbar-bg').css('display', 'none');
		$('.navbar-collapse').removeClass('show');
		$('.navbar-collapse').removeClass('collapsed');
	}
});

$('.navbar-bg').click(function() {
	$('.navbar-bg').css('display', 'none');
	$('.navbar-collapse').removeClass('show');
	$('.navbar-collapse').removeClass('collapsed');
});

$('.close-collapse').click(function() {
	$('.navbar-bg').css('display', 'none');
	$('.navbar-collapse').removeClass('show');
	$('.navbar-collapse').removeClass('collapsed');
});

	
});