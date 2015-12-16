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
			strengths: "HTML5, CSS3, JavaScript, jQuery, adobe works, yeoman (types) and AngularJS ",
			about: "Mike is a young passionate programmer with a knack for design and a highly creative mind. He loves sports and travel and can hold any conversation. A turn key programmer for the right compnay.",
			profile: "http://mikethedevy.com"
		},
		{
			name: "Brian Jenney",
			imageLarge: "img/brian-large.jpg",
			imageSmall: "img/brian-small.jpg",
			strengths: "AngularJS, HTML5, CSS3, Bootstrap, jQuery and JavaScript",
			about: "Brian is a passionate guy with a knack for picking new information up quickly and being able to use it with great efficiency. A very personable and laid back developer, Brian would make a great team member and team leader for your company and its projects.",
			profile: "http://builtbybrian.net"
		}
		,
		{
			name: "Iqbal Khalsa",
			imageLarge: "img/iqbal-large.png",
			imageSmall: "img/iqbal-small.png",
			strengths: "15+ years designing, HTML5, CSS3, Bootstrap, jQuery and ES6 aka JavaScript",
			about: "Iqbal is at the top of his talent pool. With 10+yrs of design experience and fortified Front End Developer knowledge the only thing missing, is working with your company! Iqbal enjoys trail walking trails in his spare time as well as design and photography.",
			profile: "http://www.iqbalFrontEnd.com"
		}
		,
		{
			name: "Billy Bates",
			imageLarge: "img/billy-large.png",
			imageSmall: "img/billy-small.png",
			strengths: "Illustrator, HTML5, CSS3, Bootstrap, jQuery and JavaScipt",
			about: "Billy is a grad with a MechSci degree. He is always pushing to learn more and looking for that perfect place to unleash his skills and get your productivity rollin! Get this Front End Developer while he is still here!",
			profile: "http://www.billybatesweb.com/"
		},
		{
			name: "Patrick San Juan",
			imageLarge: "img/psj-large.jpg",
			imageSmall: "img/psj-small.jpg",
			strengths: "MEAN Stack, HTML5, CSS3, Bootstrap, jQuery and JavaScript",
			about: "Patrick is a coding crazy man! Self motivated and working for a non-profit while finding the right fit for his coding, he is always working on his knowledge of the MEAN stack and ready for your challenge!",

			profile: ""
		}
	]
}]);