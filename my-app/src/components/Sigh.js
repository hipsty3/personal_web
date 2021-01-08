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
	const subString = "<span style='color: blue'>*</span>"

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



