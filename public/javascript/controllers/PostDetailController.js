(function() {
	'use strict';
	angular.module('app')
	.controller('PostDetailController', PostDetailController);
	function PostDetailController(HomeFactory,$state, $stateParams) {

    var vm = this;
    vm.comment = {};

		if(!$stateParams.id) $state.go('Home');//This means, is this Id exists, run the function inside.
		console.log($stateParams.id);
   HomeFactory.getPostById($stateParams.id).then(function(res){
    vm.post = res;   //at this point I am creating a new variable.
   });


   HomeFactory.getComment().then(function(res){
     console.log(res);
     vm.comments = res;
   });




vm.addComment = function(){
  console.log(vm.post._id , vm.newComment);
  HomeFactory.addComment(vm.post._id, vm.newComment).then(function(res){
		vm.newComment = {};
		vm.post.comment.push(res);
  });
};




vm.deleteComment = function(comment){
	console.log(comment);
	//console.log(vm.comment);

  vm.post.comments.splice(vm.post.comments.indexOf(comment), 1);
  HomeFactory.deleteComment(comment);
};


	}
})();
