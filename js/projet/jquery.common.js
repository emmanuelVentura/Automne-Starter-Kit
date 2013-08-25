$(window).ready(function() {

	// Affichage des liens masqués ne fonctionnant qu'avec le js
	$(".nojs").removeClass('nojs');

	// Retour en haut de page
	$('#print').on('click',function(e){
		e.preventDefault();
		print();
	});

	// Retour en haut de page
	$('#up').on('click',function(e){
		e.preventDefault();
		$('html,body').animate({scrollTop:0},'slow');
	});

	// Active la modale sur les images
	$("a[rel='atm-enlarge']").fancybox();
});