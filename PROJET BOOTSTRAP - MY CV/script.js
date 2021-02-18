$(document).ready(function () {
     $(".navbar a, #recommendation #chevron a").on("click", function (event) {
        event.preventDefault();
        var hash = this.hash;
        

        $('body,html').animate({scrollTop: $(hash).offset().top}, 900, function(){window.location.hash = hash;})
        
    });
    
//    ${'footer #glyphicon-envelope'}.onclick(window.location.href = "mailto:aminm-34@hotmail.fr")
});