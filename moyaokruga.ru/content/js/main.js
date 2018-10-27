// JavaScript Document


jQuery(document).ready(function(){

jQuery(".check").each(function(){
     changeCheckStart(jQuery(this));     
});
                                        });
function changeCheck(el) {
	var el = el, input = el.find("input").eq(0);
	if(el.attr("class").indexOf("niceCheckDisabled")==-1) {	
   		if(!input.attr("checked")) {el.addClass("checked");input.attr("checked", true);}
           else {el.removeClass("checked");input.attr("checked", false).focus();}
	}
    return true;
}
function changeVisualCheck(input) {
    var wrapInput = input.parent();
	if(!input.attr("checked")) {
		wrapInput.removeClass("checked");
	}
	else {
		wrapInput.addClass("checked");
	}
}

function changeCheckStart(el)

{

try
{
var el = el,
	checkName = el.find('input').attr("name"),
	checkId = el.find('input').attr("id"),
	checkChecked = el.find('input').attr("checked"),
	checkDisabled = el.find('input').attr("disabled"),
	checkTab = el.find('input').attr("tabindex"),
    checkValue = el.find('input').attr("value");
	if(checkChecked)
		el.after("<span class='check checked'>"+
			"<input type='checkbox'"+
			"name='"+checkName+"'"+
			"id='"+checkId+"'"+
			"checked='"+checkChecked+"'"+
            "value='"+checkValue+"'"+
			"tabindex='"+checkTab+"' /></span>");
	else
		el.after("<span class='check'>"+
			"<input type='checkbox'"+
			"name='"+checkName+"'"+
			"id='"+checkId+"'"+
             "value='"+checkValue+"'"+
			"tabindex='"+checkTab+"' /></span>");
		
	if(checkDisabled)
	{
		el.next().addClass("check_disabled");
		el.next().find("input").eq(0).attr("disabled","disabled");
	}
		
	el.next().bind("mousedown", function(e) { changeCheck(jQuery(this)) });
	el.next().find("input").eq(0).bind("change", function(e) { changeVisualCheck(jQuery(this)) });
	if(jQuery.browser.msie)
	{
		el.next().find("input").eq(0).bind("click", function(e) { changeVisualCheck(jQuery(this)) });	
	}
	el.remove();
}
catch(e)
{
	
}
    return true;
}



// локализация календаря
jQuery(function ($) {
    try {
        $.datepicker.regional['ru'] = {
            closeText: 'Закрыть',
            prevText: '&#x3c;Пред',
            nextText: 'След&#x3e;',
            currentText: 'Сегодня',
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
		'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
		'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
            dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
            dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
            dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            weekHeader: 'Нед',
            dateFormat: 'dd.mm.yy',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
        };
        $.datepicker.setDefaults($.datepicker.regional['ru']);
    }
    catch (e)
    { }
});

$(document).ready(function () {

    /* PIE */
    if (window.PIE) {
        $('.menu, .banner.corn img, .questionnaire img, .menu-sity ul li a, .es-main article, .obyava-list article').each(function () {
            PIE.attach(this);
        });
    }

    // меню - темы
    $(".temes > a").click(function () {
        if ($(this).is('.open')) {
            $(this).removeClass('open');
            $(this).next('ul').slideUp(400);
        } else {
            $(this).addClass('open');
            $(this).next('ul').slideDown(400);
            $(document).bind('click', function (e) {
                var $clicked = $(e.target);
                if (!$clicked.parents().hasClass("temes")) {
                    $(".temes > a").removeClass("open").next('ul').slideUp(400);
                }
            });
        }
        return false;
    });

    // menu-sity
    $('.menu-sity > ul > li > ul').parent('li').find('> a').click(function () {
        if ($(this).parent().is('.open')) {
            $(this).parent().removeClass('open');
            $(this).parent().find('ul').slideUp(300);
        } else {
            $(this).parent().addClass('open');
            $(this).parent().find('ul').slideDown(300);
            $(document).bind('click', function (e) {
                var $clicked = $(e.target);
                if (!$clicked.parents().hasClass('all-sity')) {
                    $(".menu-sity ul li.all-sity").removeClass("open").find(' > ul').slideUp(400);
                }
            });
        }
        return false
    })


    //select
    try
    {
        $("select").selectBox();
    }
    catch (e)
    { 
    }

    /*
    try {
        //Каледраь
        $(".datepicker").datepicker({
            showOtherMonths: true,
            selectOtherMonths: true
        });
    }
    catch (e)
    { }*/

    //Скользяшие блоки, спойлеры
    $('.link-all > a').click(function () {
        if ($(this).is('.open')) {
            $(this).removeClass('open').text('РАЗВЕРНУТЬ');
            $(this).parents('.b-post').find('.b-post__txt').slideUp(400);
        } else {
            $(this).addClass('open').text('Свернуть');
            $(this).parents('.b-post').find('.b-post__txt').slideDown(400);
        }
        return false;
    });


    // fancybox
    try {
        $('.fancybox').fancybox();
    }
    catch (e)
    { }

    //top-menu	
    $('.menu ul > li > ul').parent('li').find('> a').click(function () {
        if ($(this).parent().is('.open')) {
            $(this).parent().removeClass('open');
            $(this).parent().find('ul').slideUp(300);
        } else {
            $('.menu ul > li > ul').slideUp(400).parent().removeClass('open');
            $(this).parent().addClass('open');
            $(this).parent().find('ul').slideDown(300);
            $(document).bind('click', function (e) {
                var $clicked = $(e.target);
                if (!$clicked.parents().hasClass('.menu')) {
                    $(".menu ul li").removeClass("open").find(' > ul').slideUp(400);
                }
            });
        }
        return false
    })


    //Стилизованый скроллбар
    /*var paneCars = jQuery('.scroll-pane-1tv');	
	
    paneCars.jScrollPane({
    verticalDragMinHeight: 14,
    verticalDragMaxHeight: 14
    });
	
    var apiCars = paneCars.data('jsp');

	
	
    $('.tabs-tv li').bind('click', function(){
    apiCars.reinitialise();
		
    })*/

    $(function () {
        try {
            $('.scroll-pane').jScrollPane(
                {
                    verticalDragMinHeight: 14,
                    verticalDragMaxHeight: 14,
                    autoReinitialise: true
                }
            );
        }
        catch (e)
    { }
    });




});   //end ready

	


//Plugin placeholder
(function(b){function d(a){this.input=a;a.attr("type")=="password"&&this.handlePassword();b(a[0].form).submit(function(){if(a.hasClass("placeholder")&&a[0].value==a.attr("placeholder"))a[0].value=""})}d.prototype={show:function(a){if(this.input[0].value===""||a&&this.valueIsPlaceholder()){if(this.isPassword)try{this.input[0].setAttribute("type","text")}catch(b){this.input.before(this.fakePassword.show()).hide()}this.input.addClass("placeholder");this.input[0].value=this.input.attr("placeholder")}},
hide:function(){if(this.valueIsPlaceholder()&&this.input.hasClass("placeholder")&&(this.input.removeClass("placeholder"),this.input[0].value="",this.isPassword)){try{this.input[0].setAttribute("type","password")}catch(a){}this.input.show();this.input[0].focus()}},valueIsPlaceholder:function(){return this.input[0].value==this.input.attr("placeholder")},handlePassword:function(){var a=this.input;a.attr("realType","password");this.isPassword=!0;if(b.browser.msie&&a[0].outerHTML){var c=b(a[0].outerHTML.replace(/type=(['"])?password\1/gi,
"type=$1text$1"));this.fakePassword=c.val(a.attr("placeholder")).addClass("placeholder").focus(function(){a.trigger("focus");b(this).hide()});b(a[0].form).submit(function(){c.remove();a.show()})}}};var e=!!("placeholder"in document.createElement("input"));b.fn.placeholder=function(){return e?this:this.each(function(){var a=b(this),c=new d(a);c.show(!0);a.focus(function(){c.hide()});a.blur(function(){c.show(!1)});b.browser.msie&&(b(window).load(function(){a.val()&&a.removeClass("placeholder");c.show(!0)}),
a.focus(function(){if(this.value==""){var a=this.createTextRange();a.collapse(!0);a.moveStart("character",0);a.select()}}))})}})(jQuery);


(function($) {
$(function() {

	$('ul.tabs').delegate('li:not(.active)', 'click', function() {
		$(this).addClass('active').siblings().removeClass('active')
			.parents('div.weather').find('div.t-weather').hide().eq($(this).index()).fadeIn(150);
	})
	
	$('ul.tabs-tv').delegate('li:not(.current)', 'click', function() {
		$(this).addClass('current').siblings().removeClass('current')
			.parents('div.tele').find('div.box').hide().eq($(this).index()).fadeIn(150);
	})
	
	$('ul.tabs').delegate('li:not(.active)', 'click', function() {
		$(this).addClass('active').siblings().removeClass('active')
			.parents('div.r-user-block').find('div.box').hide().eq($(this).index()).fadeIn(150);
	})

})
})(jQuery)	


jQuery(document).ready(function(){

$('#link').click(function(){
  var srchTxt = $(this).text();
  $('#txtEmail').attr({'value' : srchTxt}).addClass('focus-cl');
  return false;
 })
 
 $('#link-t').click(function(){
  var srchTxt = $(this).text();
  $('#txtPhone').attr({'value' : srchTxt}).addClass('focus-cl');
  return false;
 })

});


jQuery(document).ready(function(){

jQuery(".niceRadio").each(
function() {     
     changeRadioStart(jQuery(this));     
});

});

function changeRadio(el)

{
	var el = el,
		input = el.find("input").eq(0);
	var nm=input.attr("name");
		
	jQuery(".niceRadio input").each(
	
	function() {
     
		if(jQuery(this).attr("name")==nm)
		{
			jQuery(this).parent().removeClass("radioChecked");
		}
	   
	   
	});					  
	
	
	if(el.attr("class").indexOf("niceRadioDisabled")==-1)
	{	
		el.addClass("radioChecked");
		input.attr("checked", true);
	}
	
    return true;
}

function changeVisualRadio(input)
{

	var wrapInput = input.parent();
	var nm=input.attr("name");
		
	jQuery(".niceRadio input").each(
	
	function() {
     
		if(jQuery(this).attr("name")==nm)
		{
			jQuery(this).parent().removeClass("radioChecked");
		}
	   
	   
	});

	if(input.attr("checked")) 
	{
		wrapInput.addClass("radioChecked");
	}
}

function changeRadioStart(el)

{

try
{
var el = el,
	radioName = el.attr("name"),
	radioId = el.attr("id"),
	radioChecked = el.attr("checked"),
	radioDisabled = el.attr("disabled"),
	radioTab = el.attr("tabindex");
	radioValue = el.attr("value");
	if(radioChecked)
		el.after("<span class='niceRadio radioChecked'>"+
			"<input type='radio'"+
			"name='"+radioName+"'"+
			"id='"+radioId+"'"+
			"checked='"+radioChecked+"'"+
			"tabindex='"+radioTab+"'"+
            "value='"+radioValue+"' /></span>");
	else
		el.after("<span class='niceRadio'>"+
			"<input type='radio'"+
			"name='"+radioName+"'"+
			"id='"+radioId+"'"+
			"tabindex='"+radioTab+"'"+
	        "value='"+radioValue+"' /></span>");
			
	if(radioDisabled)
	{
		el.next().addClass("niceRadioDisabled");
		el.next().find("input").eq(0).attr("disabled","disabled");
	}	
	el.next().bind("mousedown", function(e) { changeRadio(jQuery(this)) });
	el.next().find("input").eq(0).bind("change", function(e) { changeVisualRadio(jQuery(this)) });
	if(jQuery.browser.msie)
	{
		el.next().find("input").eq(0).bind("click", function(e) { changeVisualRadio(jQuery(this)) });	
	}
	el.remove();
}
catch(e)
{

}
    return true;
}