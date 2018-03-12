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
	bottom.toggle('hidden');
	

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
})

lang2.on('click', function(e) {
	e.preventDefault();
})

