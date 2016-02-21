var socket = io();
function getCompany() {
	var company = document.getElementById('companyName').value;
	socket.emit('get company', company);
	console.log(company);
}