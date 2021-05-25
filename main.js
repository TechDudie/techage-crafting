alert("hi"); //debug
var list = document.getElementById("list").innerHTML;
function techage_mod(item) {
  return "https://raw.githubusercontent.com/joe7575/techage/master/textures/" + item + ".png";
}
function default_mod(item) {
  return "https://raw.githubusercontent.com/minetest/minetest_game/master/mods/default/textures/" + item + ".png";
}
function img(img_url) {
  return "<img src=\"" + img_url + "\">";
}
function h3(text) {
  return "<h3>" + text + "</h3>";
}
function p(text) {
  return "<p>" + text + "</p>";
}
function table(items) {
  var text = "<table><tr>";
  text += "<td>" + items[0] + "</td>";
  text += "<td>" + items[1] + "</td>";
  text += "<td>" + items[2] + "</td>";
  text += "</tr><tr>";
  text += "<td>" + items[3] + "</td>";
  text += "<td>" + items[4] + "</td>";
  text += "<td>" + items[5] + "</td>";
  text += "</tr><tr>";
  text += "<td>" + items[6] + "</td>";
  text += "<td>" + items[7] + "</td>";
  text += "<td>" + items[8] + "</td>";
  text += "</tr>";
  text += "</table>";
  return text;
}
function mod(itemstring) {
  var mod = itemstring.split(".")[0];
  var url = null;
  if (mod == "TA") {
    url == techage_mod;
  }
  if (mod == "DF") {
    url == default_mod;
  }
  return url;
}
function recipe(items, result) {
  var items = items;
  var html = "";
  var url;
  var i;
  for (i = 0; i < items.length; i++) {
    url = mod(items[i]);
    items[i] = img(url(items[i]));
  }
  url = mod(result);
  html += h3(result);
  html += img(url(result));
  html += table(items);
  alert(html); //debug
  return html;
}
list += recipe(["DF.dirt","DF.dirt","DF.dirt","DF.dirt","DF.dirt","DF.dirt","DF.dirt","DF.dirt","DF.dirt"],"DF.dirt");
