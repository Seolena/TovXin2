// alert("fdsfsd");

var arrow = $('.arrow-lang');
var bottom = $('.lang-bottom');
var lang1 = $('.lang1');
var lang2 = $('.lang2');
var lang3 = $('.lang3');
var lang4 = $('.lang4');
var lang_bottom_opasity = $('.lang-bottom-opasity');

// arrow.on('click', function(e) {
// 	e.preventDefault();
// 	bottom.toggle('notvisible');
// })

arrow.on('click', function(e) {
	e.preventDefault();
	bottom.toggle('notvisible');
	

})


lang3.on('click', function(e) {
	e.preventDefault();
	bottom.toggle('notvisible');
	lang1.toggle('notvisible');
	lang2.toggle('notvisible');
	lang3.toggle('notvisible');
	lang4.toggle('notvisible');
	; 

})

lang4.on('click', function(e) {
	e.preventDefault();
	bottom.toggle('notvisible');
	lang1.toggle('notvisible');
	lang2.toggle('notvisible');
	lang3.toggle('notvisible');
	lang4.toggle('notvisible');
	
})

lang1.on('click', function(e) {
	e.preventDefault();
	bottom.toggle('notvisible');
})

lang2.on('click', function(e) {
	e.preventDefault();
	bottom.toggle('notvisible');
})


$('a.scroll').bind("click", function(e){
		e.preventDefault();
		var anchor = $(this);
		var href = anchor.attr('href');
		var href_cutted = '#'+(anchor.attr('href').split('#'))[1];
		//alert(href_cutted);
		$('html, body').stop().animate({
			scrollTop: $(href).offset().top
		}, 300);
		
		
	});



$(document).ready(function(){
    $(".modalbox").fancybox();
    $("#f_contact").submit(function(){ return false; });
    $("#f_send").on("click", function(){
         
        // тут дальнейшие действия по обработке формы
        // закрываем окно, как правило делать это нужно после обработки данных
        $("#f_contact").fadeOut("fast", function(){
            $(this).before("<p><strong>Ваше сообщение отправлено!</strong></p>");
            setTimeout("$.fancybox.close()", 1000);
        });
    });
});
