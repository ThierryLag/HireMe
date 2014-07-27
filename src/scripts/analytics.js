/**
 *  Passtech.be - HireMe page - Google Analytics Code
 */
"use strict"


// ----------------------------------------------------------------------------

// Default GA code
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-15392844-5', 'auto');
ga('send', 'pageview');

// ----------------------------------------------------------------------------

$(document).ready(function() { 
    $( 'a[rel="external"]' ).each(function() {
        event.preventDefault();

        ga('send', 'event', 'outbound', 'click', $( this ).attr( "href" ), {
            'hitCallback': function () {
                document.location = $( this ).attr( "href" );
            }
        });
    });
});