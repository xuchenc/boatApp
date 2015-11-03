(function() {
	'use strict';
	angular.module('app', ['ui.router'])
	.config(Config);

	function Config($stateProvider, $urlRouterProvider,$httpProvider) {
		$stateProvider.state('Home',{
			url: '/',
			templateUrl: 'views/home.html'
		}).state('CreatePost',{
			url:'/createpost',
			templateUrl:'views/CreatePost.html'
		}).state('EditPost',{
			url:'/editpost/:id',
			templateUrl:'views/EditPost.html'
		}).state('Login_Register',{
			url:'/login-register',
			templateUrl:'/views/login_register.html'
		}).state('Profile',{
			url:'/profile',
			templateUrl:'/views/Profile.html'
		}).state('PostDetail',{
			url:'/postdetail/:id',
			templateUrl:'/views/PostDetail.html'
		}).state('Contact',{
			url:'/contactus',
			templateUrl:'/views/Contact.html'
		});
		$urlRouterProvider.otherwise('/');
		$httpProvider.interceptors.push('AuthInterceptor');
	}
})();
