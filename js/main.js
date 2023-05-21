$(function(){
    mobileAtivado = false;

    //mobile
    ativarMobile()
    function ativarMobile(){
        var mobile = $('.menu__mobile');
        var btn = $('.button__mobile');
        var line1 = $('.line1');
        var line2 = $('.line2');
        var line3 = $('.line3');
        var link = $('.menu__mobile li a');
        var animacao = false;
        var dark = $('.dark');

        btn.click(function(){
            if(animacao)return
            animacao = true

            if(mobileAtivado){
                mobileAtivado = false
                line1.css("transform","rotate(0)").css("top","4px");
                line2.css("display","block");
                dark.fadeOut()
                btn.css("background-color","rgb(0 0 0 / 20%)")
                line3.css("transform","rotate(0)").css("top","18px");
                mobile.toggle('slide',{direction : 'right'},'slow',function(){
                    animacao = false;
                },1000);
            }else{
                mobileAtivado = true
                line1.css("transform","rotate(45deg)").css("top","14px");
                line2.css("display","none");
                dark.fadeIn()
                btn.css("background-color","rgb(255 0 0 / 20%)")
                line3.css("transform","rotate(-45deg)").css("top","11px");
                mobile.toggle('slide',{direction : 'right'},'slow',function(){
                    animacao = false;
                },1000);
            }

        });

        dark.click(function(){
            if(animacao)return
            animacao = true

            if(mobileAtivado){
                mobileAtivado = false
                line1.css("transform","rotate(0)").css("top","4px");
                line2.css("display","block");
                dark.fadeOut()
                btn.css("background-color","rgb(0 0 0 / 20%)")
                line3.css("transform","rotate(0)").css("top","18px");
                mobile.toggle('slide',{direction : 'right'},'slow',function(){
                    animacao = false;
                },1000);
            }
        });

        link.click(function(){
            if(animacao)return
            animacao = true

            if(mobileAtivado){
                mobileAtivado = false
                line1.css("transform","rotate(0)").css("top","4px");
                line2.css("display","block");
                dark.fadeOut()
                btn.css("background-color","rgb(0 0 0 / 20%)")
                line3.css("transform","rotate(0)").css("top","18px");
                mobile.toggle('slide',{direction : 'right'},'slow',function(){
                    animacao = false;
                },1000);
            }
        });

        $(window).resize(function(){
            if($(this).width() >= 860){
                if(mobileAtivado){
                    mobileAtivado = false
                    line1.css("transform","rotate(0)").css("top","4px");
                    line2.css("display","block");
                    dark.fadeOut()
                    btn.css("background-color","rgb(0 0 0 / 20%)")
                    line3.css("transform","rotate(0)").css("top","18px");
                    mobile.fadeOut()
                }
            }
        });
    };


    //efeitoScroll
    navegation($('nav a'),0);
    navegationFooter($('footer p a'),0)
    function navegation(el,res){
        el.click(function(event){
            var ancora = $(this);
            var calculo = $(ancora.attr('href')).offset().top;

            if(res){
                animacao = calculo - res;
            }else{
                animacao = calculo;
            }

            $('html,body').stop().animate({
                scrollTop: animacao,
            },1000);

            event.preventDefault()
        });
    };
    function navegationFooter(el,res){
        el.click(function(event){
            var ancora = $(this);
            var calculo = $(ancora.attr('href')).offset().top;

            if(res){
                animacao = calculo - res;
            }else{
                animacao = calculo;
            }

            $('html,body').stop().animate({
                scrollTop: animacao,
            },1000);

            event.preventDefault()
        }); 
    };

    //slider
    var slider = $('.slider');

    slider.slick({
        slidesToShow: 2,
        centerMode: false,
        slidesToScroll: 2,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1500,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        dots: true,
        responsive: [
            {
                breakpoint: 861,
                settings: {
                    centermode: false,
                    arrows: false,
                    dots: false,
                }
            }
        ]
    });

});
