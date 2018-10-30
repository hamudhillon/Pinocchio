$(document).ready(function(){

	$(window).scroll(function(){
        var c =$('nav').offset().top;
        if (c>=100) {
        	// alert('s');
        	$('nav').css({'background':'rgba(0,0,0,.9)'});
        }
        else{
        	$('nav').css({'background':'rgba(0,0,0,.0)'});
        }
    });
	$('.news1 .slide-controls .active li').click(function()
		{	
			$(this).css({'color':'white'}).siblings().css({'color':'rgba(255,255,255,.5)'});
			var x = $(this).attr("data-name");
			if (x==1) {
			$('.main-slidebox').css({'background-image':'url("imgs/1.jpg")'});
			$('.n1').css({'display':'block'});
			$('.n2').css({'display':'none'});
			$('.n3').css({'display':'none'});

			$('.upcoming').css({'background-image':'url("imgs/2.jpg")'});
			}
			else if(x==2)
			{
			$('.main-slidebox').css({'background-image':'url("imgs/2.jpg")'});
			$('.n2').css({'display':'block'});
			$('.n3').css({'display':'none'});
			$('.n1').css({'display':'none'});
			$('.upcoming').css({'background-image':'url("imgs/3.jpg")'});

			}else{
			$('.main-slidebox').css({'background-image':'url("imgs/3.jpg")'});
			$('.upcoming').css({'background-image':'url("imgs/1.jpg")'});
			$('.n3').css({'display':'block'});
			$('.n2').css({'display':'none'});
			$('.n1').css({'display':'none'});
			}
		
		});



		$('.video-box .playlist table tr').click(function(){
			var y = $(this).attr("data-name");
			$(this).children().css({'color':'white'}).children().addClass('live');
			$(this).siblings().children().css({'color':'grey'}).children().removeClass('live');
			// $(this).children().children().css({'border':'2px solid green'});
			// $(this).childern().children().addClass('live').siblings().removeClass('live');
			$('.video video source').attr('src','imgs/'+y);
			$('.video video').attr('autoplay','true');
			$('.video video')[0].load();
		});
});