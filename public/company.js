var socket = io();
function testToolTip() {
	$('[data-toggle="tooltip"]').tooltip();
}

var company;
function getCompany() {
	company = document.getElementById('companyName').value;
	socket.emit('get company', company);
	console.log(company);
}

socket.on('post data', postData);

function postData(dataArr) {
    document.getElementById("companyForm").style.visibility = "hidden";
    console.log('averge ' + average(dataArr));

	var data = "<h2 style=\"color:#FFFFFF\">" + company +" </h2><ul class=\"list-group\"><li class=\"list-group-item\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Ranges from 0 to 1, 0 being a poor financial indication.\">Average: " + average(dataArr) + "</li>";
	data += "<li class=\"list-group-item\">Articles Analyzed: " + dataArr.length + "</li>";
	data += "<li class=\"list-group-item\">Standard Deviation: " + stdev(dataArr) + "</li>";
	data += "<li class=\"list-group-item\">Variance: " + variance(dataArr) + "</li></ul>";
    document.getElementById("dataList").innerHTML = data;
    document.getElementById("dataList").style.display = 'block';
	document.getElementById("info").style.display = 'block';
}

function average(data) {
	var sum = 0;
	for (var i = 0; i < data.length; i++) {
		sum += sigmoid(data[i]);
	};
	var avg = sum/data.length;
	return avg;
}

function variance(data) {
	var avg = average(data);
	var sum = 0;
	for (var i = 0; i < data.length; i++) {
		sum += Math.pow(sigmoid(data[i]) - avg, 2);
	};
	return sum/data.length;
}

function stdev(data) {
	return Math.pow(variance(data), 0.5);
}

function sigmoid(x){
	return 1/(1+Math.exp(-x));
}