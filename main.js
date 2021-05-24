var list = document.getElementById("list").innerHTML
function url(item) {
  return "https://raw.githubusercontent.com/joe7575/techage/master/textures/" + item + ".png"
}
function img(img_url) {
  return "<img src=\"" + img_url + "\">"
}
function table(a,b,c, d,e,f, g,h,i) {
  var text = "<table><tr>"
  text += "<td>" + a + "</td>"
  text += "<td>" + b + "</td>"
  text += "<td>" + c + "</td>"
  text += "</tr><tr>"
  text += "<td>" + d + "</td>"
  text += "<td>" + e + "</td>"
  text += "<td>" + f + "</td>"
  text += "</tr><tr>"
  text += "<td>" + g + "</td>"
  text += "<td>" + h + "</td>"
  text += "<td>" + i + "</td>"
  text += "</tr>"
  text += "</table>"
  return text
}
function recipe(a,b,c, d,e,f, g,h,i) {
  //
}
