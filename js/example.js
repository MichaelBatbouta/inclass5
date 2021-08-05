// ADD NEW ITEM TO END OF LIST
var ul = document.getElementsByTagName("ul")[0];
//var li = document.createElement("li");
//li.appendChild(document.createTextNode("Element 4"));
//ul.appendChild(li);


var node = document.createElement("LI");
var textnode = document.createTextNode("cream");
node.appendChild(textnode);
ul.appendChild(node);

//var first = document.createElement("LI");
//var firstnode = document.createTextNode("Water");
//first.appendChild(firstnode);
//ul.unshift(first);

// ADD NEW ITEM START OF LIST
var node = document.createElement("LI");
var textnode = document.createTextNode("kalc");
node.appendChild(textnode);
var ul = document.getElementsByTagName("ul")[0];
ul.insertBefore(node, ul.childNodes[0]);
// ADD A CLASS OF COOL TO ALL LIST ITEMS

var listitem = document.getElementsByTagName("li");
var length = listitem.length;   //length is the number of items
for(i = 0; i < length; i++){
    var change = document.getElementsByTagName("li")[i];
    change.classList.add("cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
//using length from above
var h1 = document.createElement('h2');
var content = document.createTextNode(length);
h1.appendChild(content);
document.getElementsByTagName("h2")[0].appendChild(h1);