// Get the image id, style and the url from it
var img = document.getElementsByClassName('lazy-image__image')
var text = document.getElementsByClassName('full-brand-list-item__brand-name')

var famArray = [];

for (let i = 0; i < img.length; i++) {

	style = img.currentStyle || window.getComputedStyle(img[i], null)
	bi = style.backgroundImage.slice(4, -1).replace(/['"]/g, "");
	famArray.push([text[i].textContent, bi]);
}

function excel() {

	var link = '\n';
	for (let i = 0; i < famArray.length; i++) {
		link += `<a href="${famArray[i][1]}">${famArray[i][0]}</a><br/>`
	}
	var w = window.open("");
	w.document.write(link);
}
excel();
