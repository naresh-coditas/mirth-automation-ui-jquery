function login() {
	$.ajax({
		url: API_ENDPOINT + '/user/login',
		method: 'POST',
		contentType: 'application/json',
		data: JSON.stringify({
			userName: $('#username').val(),
			password: $('#password').val()
		}),
		success: function(response) {
			sessionStorage.setItem('jwtToken', response.token);
			window.location.href = "main.html";
		},
		error: function(xhr, status, error) {
			console.error('Login failed:', status, error);
		}
	});
}