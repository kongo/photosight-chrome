
$(".photo-item.cols-item > a > img").after(function() {
  var href = $(this).attr("src").replace(/_thumb\.jpg/, '_xlarge.jpg');

  return "<a class='dwnld' href='" + href + "' download='YES!' style='left: " + (405 - $(this).width()) / 2 + "px'>DWNLD</a>";
});



$("a#show_photo").before(function() {
  var href = $("img#big_photo").attr("data-href").replace(/_thumb\.jpg/, '_xlarge.jpg');

  return "<a class='dwnld big' href='" + href + "' download='YES!'>DWNLD</a>";
});

