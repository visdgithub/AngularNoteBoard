angular.module('customDirectives', [])
.directive("nomadlyNotewidget", function (){
	return {
		restrict: 'E',
		templateUrl: "nomadlyNotewidgetTemplate.html",
		transclude: true
	}
});
