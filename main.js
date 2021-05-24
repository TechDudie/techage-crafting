var list = document.getElementById("list").innerHTML
function url(item) {
  return "https://raw.githubusercontent.com/joe7575/techage/master/textures/" + item + ".png"
}
function img(img_url) {
  return "<img src=\"" + img_url + "\">"
}
function h3(text) {
  return "<h3>" + text + "</h3>"
}
function p(text) {
  return "<p>" + text + "</p>"
}
function table(items) {
  var text = "<table><tr>"
  text += "<td>" + items[0] + "</td>"
  text += "<td>" + items[1] + "</td>"
  text += "<td>" + items[2] + "</td>"
  text += "</tr><tr>"
  text += "<td>" + items[3] + "</td>"
  text += "<td>" + items[4] + "</td>"
  text += "<td>" + items[5] + "</td>"
  text += "</tr><tr>"
  text += "<td>" + items[6] + "</td>"
  text += "<td>" + items[7] + "</td>"
  text += "<td>" + items[8] + "</td>"
  text += "</tr>"
  text += "</table>"
  return text
}
function recipe(items, result) {
  var i;
  for (i = 0; i < items.length; i++) {
    items[i] = img(url(items[i]))
  }
  list += h3(result)
  list += img(url(result))
  list += table(items)
}
