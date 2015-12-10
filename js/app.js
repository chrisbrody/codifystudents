var app = angular.module('codifyStudents', []);

app.controller('companiesCtrl', ['$scope', function ($scope) {
	$scope.companies = [
		{
			img: "img/placeholder.png"
		},
		{
			img: "img/placeholder.png"
		}
	]
}]);

app.controller('studentCtrl', ['$scope', function ($scope) {
	$scope.students = [
		{
			name: "Michael Rossi",
			imageLarge: "img/rossi-large.jpg",
			imageSmall: "img/rossi-small.jpg",
			strengths: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ligula lectus, tincidunt et justo in, mollis sollicitudin orci. Nullam congue iaculis quam.",
			about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ligula lectus, tincidunt et justo in, mollis sollicitudin orci. Nullam congue iaculis quam.",
			profile: "http://mikethedevy.com"
		},
		{
			name: "Brian Jenney",
			imageLarge: "img/brian-large.jpg",
			imageSmall: "img/brian-small.jpg",
			strengths: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ligula lectus, tincidunt et justo in, mollis sollicitudin orci. Nullam congue iaculis quam.",
			about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ligula lectus, tincidunt et justo in, mollis sollicitudin orci. Nullam congue iaculis quam.",
			profile: "http://builtbybrian.net"
		}
		,
		{
			name: "Iqbal Khalsa",
			imageLarge: "img/iqbal-large.png",
			imageSmall: "img/iqbal-small.png",
			strengths: "15+ years designing, HTML5, CSS3 and ES6 aka JavaScript",
			about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ligula lectus, tincidunt et justo in, mollis sollicitudin orci. Nullam congue iaculis quam.",
			profile: "http://www.iqbalFrontEnd.com"
		}
		,
		{
			name: "Billy Bates",
			imageLarge: "img/billy-large.png",
			imageSmall: "img/billy-small.png",
			strengths: "Illustrator, HTML5, CSS3, JavaScipt",
			about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ligula lectus, tincidunt et justo in, mollis sollicitudin orci. Nullam congue iaculis quam.",
			profile: "http://www.billybatesweb.com/"
		},
		{
			name: "Patrick San Juan",
			imageLarge: "img/psj-large.jpg",
			imageSmall: "img/psj-small.jpg",
			strengths: "MEAN Stack, HTML5, CSS3, JavaScript",
			about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ligula lectus, tincidunt et justo in, mollis sollicitudin orci. Nullam congue iaculis quam.",

			profile: ""
		}
	]
}]);