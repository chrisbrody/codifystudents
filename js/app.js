var app = angular.module('codifyStudents', []);

app.controller('studentCtrl', ['$scope', function ($scope) {
	$scope.students = [
		{
			name: "John Doe",
			imageLarge: "http://lorempixel.com/output/people-q-c-100-100-1.jpg",
			imageSmall: "placeholder.png",
			strengths: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ligula lectus, tincidunt et justo in, mollis sollicitudin orci. Nullam congue iaculis quam.",
			languages: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ligula lectus, tincidunt et justo in, mollis sollicitudin orci. Nullam congue iaculis quam.",
			profile: "http://codifyacademy.com"
		}
	]
}]);