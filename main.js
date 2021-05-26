function add(html) {
  document.getElementById("list").innerHTML += html;
}
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
function table(items, result) {
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
    url = techage_mod;
  }
  if (mod == "DF") {
    url = default_mod;
  }
  return url;
}
function recipe(title,type,itm, result) {
  var items = itm; //copy
  var html = "";
  var url;
  var i;
  for (i = 0; i < items.length; i++) {
    if (items[i] == "") {
      continue;
    }
    url = mod(items[i]);
    items[i] = img(url(items[i].split(".")[1]));
  }
  url = mod(title);
  html += h3(result.split(".")[1]);
  html += table(items, img(url(result.split(".")[1])));
  alert(html); //debug
  return html;
}
add(recipe("Melting Pot","crafting",["DF.default_cobble","DF.default_copper_ingot","DF.default_cobble","DF.default_cobble","","DF.default_cobble","DF.default_cobble","DF.default_cobble","DF.default_cobble"],"TA.techage_meltingpot"));
