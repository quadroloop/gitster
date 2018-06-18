// gitster.js version 0
// Bryce Mercines 2018

var user = 'quadroloop';

window.onload = function() {
	axios.get('https://api.github.com/users/'+user)
	.then((res)=>{
      document.getElementById('avatar').src = res.data.avatar_url;
      document.getElementById('name').innerHTML = res.data.name;
      document.getElementById('login').innerHTML = res.data.login;
      document.getElementById('bio').innerHTML = res.data.bio;
	})
	.catch((err)=>{

	});
}