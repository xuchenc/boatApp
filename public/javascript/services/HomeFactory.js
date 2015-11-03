(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);



	function HomeFactory($http, $q) {
		var o = {};



		o.createPost = function(post){
			var q = $q.defer();
			$http.post('api/boat',post).then(function(){
				q.resolve();
			});
			return q.promise;
		};

		o.getPost = function(){
			var q =$q.defer();
			$http.get('/api/boat').then(function(res){
				q.resolve(res.data);
			});
			return q.promise;
		};

		// o.getBoatById = function(id){
		// 	var q = $q.defer();
		// 	$http.get('/api/boat/' +id).then(function(res){
		// 		q.resolve(res.data);
		// 	});
		// 	return q.promise;
		// };



		o.deletePost = function(id){
			console.log(id);
			var q  =$q.defer();
			$http.delete('/api/boat/' + id).then(function(){
				q.resolve();
			});
			return q.promise;
		};

		o.editPost = function(newPostObj, postId){
			console.log(newPostObj,postId);
			var q =$q.defer();

			newPostObj.postId = postId;
			$http.put('/api/boat/', newPostObj).then(function(res){
				q.resolve(res.data);
			});
			return q.promise;
		};

		o.getPostById = function(id){
			var q  = $q.defer();
			$http.get('/api/boat/' + id).then(function(res){
				q.resolve(res.data);
			});
			return q.promise;
		};

		o.getComment= function(){
			var q = $q.defer();
			$http.get('/api/comment').then(function(res){
				q.resolve(res.data);
			});
			return q.promise;
		};

		o.addComment = function(postId, comment){
			console.log(postId , comment);
			var q = $q.defer();
			$http.post('/api/comment/' + postId, {comment: comment}).success(function(res){
				q.resolve(res.data);
			});
			return q.promise;
		};

		o.deleteComment = function(comment){
			var q  = $q.defer();
			$http.delete('/api/comment/' + comment._id).success(function(res){
				q.resolve();
			});
			return q.promise;
		};






		return o;
	}
})();
