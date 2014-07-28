
/*
 *  Passtech.be - HireMe page - Google Analytics Code
 */

(function() {
  "use strict";
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','http://www.google-analytics.com/analytics.js','ga');
  (function($) {
    ga('create', 'UA-15392844-5', 'auto');
    ga('send', 'pageview');
    return $(function() {
      return $('a[rel="external"]').on('click', function(event) {
        var externalUrl, linkCategory, _ref, _ref1;
        event.preventDefault();
        externalUrl = $(this).attr("href");
        linkCategory = (_ref = (_ref1 = $(this).attr("class")) != null ? _ref1.toLowerCase() : void 0) != null ? _ref : "outbound";
        return ga('send', 'event', linkCategory, 'click', externalUrl, {
          'hitCallback': function() {
            return document.location = externalUrl;
          }
        });
      });
    });
  })(jQuery);

}).call(this);
