let TRACKING_NUMBER = 'UA-69363541-2';
/*
-------------------------------
env detecting
-------------------------------
 */
if (window.location.hostname !== "roxychen.me") {
  TRACKING_NUMBER = '';
}

/*
-------------------------------
Google Anylytice Tracking Code
-------------------------------
 */

export default (
  function(i, s, o, g, r, a, m){
    i.GoogleAnalyticsObject = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
  (TRACKING_NUMBER.length === 0) && (console.log('%c tracking number is unavailable' ,  'color: #DA3300; font-size: 16px;'))
  ga('create', TRACKING_NUMBER , 'auto');
  ga('require', 'displayfeatures');
  ga('require', 'linkid', 'linkid.js');
  ga('send', 'pageview');