// event pada saat link di klik
$('.page-scroll').on('click', function(event){
	// ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap elemen yang bersangkutan
	var elemenTujuan = $(tujuan);
	// pindahkan scroll
	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1000, 'easeInOutExpo');
	event.preventDefault();
});

// paralax
// jumbotron
$(window).scroll(function(){
	var windowScroll = $(this).scrollTop();

	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ (windowScroll/6.74) + '%)'
	})
	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ windowScroll + '%)'
	})

	// portfolio
	if(windowScroll > $('.portfolio').offset().top - 100){
		$('.portfolio .thumbnail').addClass('muncul');
	}
});