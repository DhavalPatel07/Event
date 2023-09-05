var $ = jQuery.noConflict();
$(document).ready(function() {

/*  $(window).ready(function(){
    setInterval(function(){ 
      $('body').addClass("showpage")
    }, 5000);

  });*/

  /*Ctm Popup*/
   $(".formopen").click(function(e){
      e.preventDefault()
      $("body").addClass("hidescroll");
      $(".ctm-dvl-popup").show();
   });
   $(".close-btn").click(function(e){
      e.preventDefault();
      $("body").removeClass("hidescroll");
      $(".ctm-dvl-popup").hide();
   });
  /*Ctm Popup*/


     
var end1 = Math.floor((new Date("09/30/2023")).getTime() / 1000); // 09-Month / 10-Date / 2023- Year
var start1 = Math.floor((new Date("09/05/2023")).getTime() / 1000);
var now1 = Math.floor((new Date).getTime() / 1000);
$('.countdown').final_countdown({
    'start': start1,
    'end': end1,
    'now': now1

});

/*

// We will get the "now" value from this variable
var today = new Date();

// My target date is this month 30th 9.25pm
var target = new Date(today);
target.setDate(30);
target.setHours(12,0,0,0);

// // Countdown start from yesterday
var yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);
yesterday.setHours(0,0,0,0);;
$('.countdown').final_countdown({
 
 'start': yesterday.getTime() / 1000,
     'end': target.getTime() / 1000,
     'now': today.getTime() / 1000,
 seconds: {
     borderWidth: '10'
 },
 minutes: {
     borderWidth: '10'
 },
 hours: {
     borderWidth: '10'
 },
 days: {
     borderWidth: '10'
 }

});*/

/* Animation*/
    (function($) {
      $.fn.visible = function(partial) {var $t = $(this), $w = $(window), viewTop = $w.scrollTop(), viewBottom = viewTop + $w.height(), _top = $t.offset().top, _bottom = _top + $t.height(), compareTop = partial === true ? _bottom : _top, compareBottom = partial === true ? _top : _bottom; return ((compareBottom <= viewBottom) && (compareTop >= viewTop)); }; })(jQuery); var win = $(window); var allMods = $(".animation-effect"); allMods.each(function(i, el) {var el = $(el); if (el.visible(true)) {el.addClass("come-in"); }; }); win.scroll(function(event) {allMods.each(function(i, el) {var el = $(el); if (el.visible(true)) {setTimeout(function(){el.addClass("come-in"); }, 600); }; /*else {el.removeClass("come-in"); } */ });
    });
/* Animation*/

}); // end of ready function


const anime = function(){
new Vivus('svg-animation', {
    start: 'autostart',
    type: 'sync',
    duration: 300,
    forceRender: false,
    animTimingFunction:Vivus.EASE
  },(obj) => {
      obj.el.classList.add('draw');
  });
}
anime();




