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
      document.getElementById('projects').innerHTML = res.data.public_repos;
      document.getElementById('following').innerHTML = res.data.following;
      document.getElementById('followers').innerHTML = res.data.followers;
      document.getElementById('legend').src='./assets/img/galaxy.jpg';
	})
	.catch((err)=>{

	});
}

setInterval(()=>{
    axios.get('./refs/gcommits.gt')
	 .then((res)=>{
		 document.getElementById('gcommits').innerHTML = res.data.split('\n').length;
	 });
     axios.get('./refs/g_projects.gt')
   .then((res)=>{
     document.getElementById('gprojects').innerHTML = res.data.split('\n').length;
   });
     axios.get('./refs/g_frequency.gt')
   .then((res)=>{
     document.getElementById('codef').innerHTML = res.data;
   });
},2000);