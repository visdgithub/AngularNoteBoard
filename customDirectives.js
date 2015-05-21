angular.module('customDirectives', [])
.directive("nomadlyNotewidget", function (){
	return {
		restrict: 'E',
		template: "<div kendo-draggable k-hint=\"draggableHint\" k-dragstart=\"onDragStart\"			k-filter=\"'.dragHandle'\"				style=\"background-color: lightgrey; font-color: white\"				class=\"draggable\">								<div>					<div class=\"dragHandle\"						style=\"float: left; padding-left: 2%; padding-right: 2%; cursor: pointer;\">						=</div>					<input style=\"background-color: lightgrey;\" type=\"text\"						ng-model=note.title></input>					<div style=\"float: right; padding-right: 2%; cursor: pointer;\"						ng-click=\"close(this)\">x</div>				</div>								<div style=\"width: 250px; height: 110px\">					<textarea						style=\"width: 100%; height: 100%; background-color: lightgrey; resize: none;\"						ng-model=\"note.text\">{{note.text}}</textarea>				</div>								<div style=\"width: 100%; bottom: 0px; position: absolute\">					<div class=\"btn-group\" style=\"width: 100%; bottom: 0px; left: 0px\">						<label class=\"btn btn-primary\" style=\"width: 32%; padding: 0px 0px;\"							ng-model=\"note.priority\" btn-radio=\"0\">Trivial</label> <label							class=\"btn btn-primary\" style=\"width: 32%; padding: 0px 0px;\"							ng-model=\"note.priority\" btn-radio=\"1\">Important</label> <label							class=\"btn btn-primary\" style=\"width: 32%; padding: 0px 0px;\"							ng-model=\"note.priority\" btn-radio=\"2\">Critical</label>					</div>				</div>							</div>			<div ng-transclude></div>",
		transclude: true
	}
});
