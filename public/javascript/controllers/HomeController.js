(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);




	function HomeController(HomeFactory,$stateParams, $state) {
		var vm = this;
		vm.newPost = {};

	 HomeFactory.getPost().then(function(res){
		 vm.posts = res;
	 });



	 vm.deletePost = function(post){
		 console.log(post);
		 HomeFactory.deletePost(post._id).then(function(){
			 vm.posts.splice(vm.posts.indexOf(post),1);
		 });
	 };


	 vm.editPost = function(){
		 console.log(vm.newPost);
		 console.log($stateParams.id);
		 HomeFactory.editPost(vm.newPost,$stateParams.id).then(function(res){
			 console.log("Im here.");
				console.log(res);
				vm.newPost= null;
				$state.go('Home');
		 });
	 };

	}



	// function searchstudent(){
	// 	var searchvalue = document.getElementById('search').value;
	// 	var from_s = document.getElementById('students-out');
	// 	for(var i  =0; i<from_s.potions.length-1;i++){
	// 		var st=from_s.options[i].text;
	// 		if(st.search(searchvalue)>-1){
	// 			var temp = from_s.options[i];
	// 			from_s.add(temp,from_s.option[0]);
	// 		}
	// 	}
	// }
})();




	var options = {
		valueNames:['name','location']

	};
	var userList = new List('users', options);




	$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);
