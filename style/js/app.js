$(function() {

   $('#page-preloader').addClass('done');

    // gallery
    baguetteBox.run('.tz-gallery');

    // Get header height
    var headerHeight = $('.navbar').height();

    $(window).resize(function() {
        headerHeight = $('.navbar').height();
    });
    
    $('.nav-item-link').click(function(e) {
        e.preventDefault();

        var currentLinkId = $(this).attr('href');
        var sectionOffsetTop = $(currentLinkId).offset().top - headerHeight;
        
        $('body,html').animate({scrollTop: sectionOffsetTop}, 500);
    });

    //E-mail Ajax Send
    $("form").submit(function() { 
    //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Cпасибо за заявку!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    $(function() {
        // gallery
        baguetteBox.run('.tz-gallery');

        // Get header height
        var headerHeight = $('.navbar').height();

        $(window).resize(function() {
            headerHeight = $('.navbar').height();
        });
        
        $('.nav-item-link').click(function(e) {
            e.preventDefault();

            var currentLinkId = $(this).attr('href');
            var sectionOffsetTop = $(currentLinkId).offset().top - headerHeight;
            
            $('body,html').animate({scrollTop: sectionOffsetTop}, 500);
        });

        //E-mail Ajax Send
        $("form").submit(function() { 
        //Change
            var th = $(this);
            $.ajax({
                type: "POST",
                url: "mail.php", //Change
                data: th.serialize()
            }).done(function() {
                alert("Cпасибо за заявку!");
                setTimeout(function() {
                    // Done Functions
                    th.trigger("reset");
                }, 1000);
            });
            return false;
        });

    });

    function myMap() {
        var mapCanvas = document.getElementById("map");
        var myCenter = new google.maps.LatLng(46.486855,30.689112600000044); 
        var mapOptions = {center: myCenter, zoom: 17};
        var map = new google.maps.Map(mapCanvas,mapOptions);
        var marker = new google.maps.Marker({
            position: myCenter,
            icon: "publick/assets/img/tatoo-marker.png"
        });
        marker.setMap(map);
        var infowindow = new google.maps.InfoWindow({
            content: "Я тут!"
        });
        infowindow.open(map,marker);
    }
    myMap()
});