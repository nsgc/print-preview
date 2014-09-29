$(function() {
  $("body > .wrapper > .header").remove();
  $("body > .wrapper > .site > .pagehead").remove();
  $("body > .wrapper > .site > .container > div > .repository-sidebar").remove();
  $('#wiki-wrapper > .gh-header').remove();
  $('#wiki-rightbar').remove();

  $('.repository-with-sidebar .repository-content').css("width", "");
  $('#wiki-body').css("margin-right", "0");

  $('#wiki-footer').remove();
  $('body > .container').remove();
});
