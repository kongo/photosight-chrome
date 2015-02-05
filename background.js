
$("a.preview230").after(function() {
  var href = $(this).find("img").attr("src").replace(/_thumb\.jpg/, '_xlarge.jpg');

  return "<a class='dwnld' href='" + href + "' download='YES!' style=''>DWNLD</a>";
});



$("a#show_photo").before(function() {
  var href = $("img#big_photo").attr("data-href").replace(/_thumb\.jpg/, '_xlarge.jpg');

  return "<a class='dwnld big' href='" + href + "' download='YES!'>DWNLD</a>";
});

