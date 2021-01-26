const axios = require('axios');

// taken from: https://stackoverflow.com/questions/4009756/how-to-count-string-occurrence-in-string
function occurrences(string, subString, allowOverlapping) {

	string += "";
	subString += "";
	if (subString.length <= 0) return (string.length + 1);

	var n = 0,
		pos = 0,
		step = allowOverlapping ? 1 : subString.length;

	while (true) {
		pos = string.indexOf(subString, pos);
		if (pos >= 0) {
			++n;
			pos += step;
		} else break;
	}
	return n;
}

let count = 0;
let string = "";

axios.get('http://apply.dataquest.com.au/').then(resp => {

	const doc = document.createElement("div");
	doc.innerHTML = resp.data;

	// console.log(resp.data);
	string = resp.data;
	const subString = `<div class="lazy-image__image" style="background-image: url(&quot;https://cf.shopee.co.id/file/240cb66e9076cabd0c61d9ef414f53cd&quot;);"></div>`

	// get name tag
	// get email tag

	count = occurrences(string, subString)
	// const num = (text.match(/'color: blue'>*</g)).length;

	console.log(count);
});

// const FormData = require('form-data');

// const form = new FormData();
// // form.append('my_field', 'Raisa');
// // form.append('my_buffer', 'raisaamaliaa@gmail.com');
// form.append('count', count);

// axios.post('http://apply.dataquest.com.au/', form, { headers: form.getHeaders() }).then((response) => {
// 	console.log(response);
//   }, (error) => {
// 	console.log(error);
//   });
// const form = new FormData();
// form.append(item.name, fs.createReadStream(string));

// const response = await axios({
//     method: 'post',
//     url: 'http://www.yourserver.com/upload',
//     data: form,
//     headers: {
//         'Content-Type': `multipart/form-data; boundary=${form._boundary}`,
//     },
// });



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



let csvContent = "data:text/csv;charset=utf-8,"
	+ famArray.map(e => e.join(",")).join("\n");

var encodedUri = encodeURI(csvContent);
var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", "my_data.csv");
document.body.appendChild(link); // Required for FF

link.click(); // This will download the data file named "my_data.csv"
// Display the url to the user
img.forEach(element => {
	style = img.currentStyle || window.getComputedStyle(element, null)
	bi = style.backgroundImage.slice(4, -1).replace(/['"]/g, "");
	console.log('Image URL: ' + bi);
	// arr.push(bi);
});