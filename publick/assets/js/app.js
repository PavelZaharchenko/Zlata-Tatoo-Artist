$(function(){$("#page-preloader").addClass("done"),baguetteBox.run(".tz-gallery");var e,t,n,a,o,i=$(".navbar").height();$(window).resize(function(){i=$(".navbar").height()}),$(".nav-item-link").click(function(e){e.preventDefault();var t=$(this).attr("href"),n=$(t).offset().top-i;$("body,html").animate({scrollTop:n},500)}),$("form").submit(function(){var e=$(this);return $.ajax({type:"POST",url:"mail.php",data:e.serialize()}).done(function(){alert("Cпасибо за заявку!"),setTimeout(function(){e.trigger("reset")},1e3)}),!1}),$(function(){baguetteBox.run(".tz-gallery");var e=$(".navbar").height();$(window).resize(function(){e=$(".navbar").height()}),$(".nav-item-link").click(function(t){t.preventDefault();var n=$(this).attr("href"),a=$(n).offset().top-e;$("body,html").animate({scrollTop:a},500)}),$("form").submit(function(){var e=$(this);return $.ajax({type:"POST",url:"mail.php",data:e.serialize()}).done(function(){alert("Cпасибо за заявку!"),setTimeout(function(){e.trigger("reset")},1e3)}),!1})}),e=document.getElementById("map"),t=new google.maps.LatLng(46.486855,30.689112600000044),n={center:t,zoom:17},a=new google.maps.Map(e,n),(o=new google.maps.Marker({position:t,icon:"publick/assets/img/tatoo-marker.png"})).setMap(a),new google.maps.InfoWindow({content:"Я тут!"}).open(a,o)});