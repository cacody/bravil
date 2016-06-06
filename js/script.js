
jQuery(document).ready(function ($) {


//  $(".trigger1").click(function(){

$(".trigger1").live('touchstart click', function(event){
        event.stopPropagation();
        event.preventDefault();
        if(event.handled !== true) {

	if ($(".area2").hasClass("active")) {
		$(".area2").removeClass("active");
		$(".area2").toggle();
	}
	if ($(".area3").hasClass("active")) {
		$(".area3").removeClass("active");
		$(".area3").toggle();
	}
	if ($(".area4").hasClass("active")) {
		$(".area4").removeClass("active");
		$(".area4").toggle();
	}
	if ($(".area1").hasClass("active")) {
		$(".area1").removeClass("active");
	}
	else {
    $(".area1").addClass("active");}
	$(".area1").toggle(100);

event.handled = true;
        } else {
            return false;
        }
});

// $(".trigger2").click(function(){

$(".trigger2").live('touchstart click', function(event){
        event.stopPropagation();
        event.preventDefault();
        if(event.handled !== true) {

	if ($(".area1").hasClass("active")) {
		$(".area1").removeClass("active");
		$(".area1").toggle();
	}
	if ($(".area3").hasClass("active")) {
		$(".area3").removeClass("active");
		$(".area3").toggle();
	}
	if ($(".area4").hasClass("active")) {
		$(".area4").removeClass("active");
		$(".area4").toggle();
	}
	if ($(".area2").hasClass("active")) {
		$(".area2").removeClass("active");
	}
	else {
    $(".area2").addClass("active");}
	$(".area2").toggle(100);

event.handled = true;
        } else {
            return false;
        }
});

//  $(".trigger3").click(function(){

$(".trigger3").live('touchstart click', function(event){
        event.stopPropagation();
        event.preventDefault();
        if(event.handled !== true) {

	if ($(".area1").hasClass("active")) {
		$(".area1").removeClass("active");
		$(".area1").toggle();
	}
	if ($(".area2").hasClass("active")) {
		$(".area2").removeClass("active");
		$(".area2").toggle();
	}
	if ($(".area4").hasClass("active")) {
		$(".area4").removeClass("active");
		$(".area4").toggle();
	}
	if ($(".area3").hasClass("active")) {
		$(".area3").removeClass("active");
	}
	else {
    $(".area3").addClass("active");}
	$(".area3").toggle(100);

event.handled = true;
        } else {
            return false;
        }
});


//  $(".trigger4").click(function(){

$(".trigger4").live('touchstart click', function(event){
        event.stopPropagation();
        event.preventDefault();
        if(event.handled !== true) {

	if ($(".area1").hasClass("active")) {
		$(".area1").removeClass("active");
		$(".area1").toggle();
	}
	if ($(".area2").hasClass("active")) {
		$(".area2").removeClass("active");
		$(".area2").toggle();
	}
	if ($(".area3").hasClass("active")) {
		$(".area3").removeClass("active");
		$(".area3").toggle();
	}
	if ($(".area4").hasClass("active")) {
		$(".area4").removeClass("active");
	}
	else {
    $(".area4").addClass("active");}
	$(".area4").toggle(100);

event.handled = true;
        } else {
            return false;
        }

  });


// Research Landing Page - Reminders scripting

// if linked, add class to a parent element for rollover effect
$('.field-collection-item-field-reminders').has('.field-name-field-reminder-item a').addClass('linked-reminder');

// if linked, 1) remove link from reminder-item, 2) add link to paretn element for block link effect

$(function(){
	$('.field-collection-item-field-reminders').has('.field-name-field-reminder-item a').each(function(){
		var current = $(this);
		var reminderLink = $('.field-name-field-reminder-item a').attr('href'));
		$(current).wrap('<a href="' + reminderLink + '"></a>');
		$('.field-name-field-reminder-item a').contents().unwrap();
	});
});



// $('.field-name-field-reminder-item a').contents().unwrap();


});
