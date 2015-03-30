var app = angular.module('nomadlyNoteBoard', [ 'kendo.directives',
		'customDirectives', 'ui.bootstrap' ]);

$(document).ready(function() {
	$("#noticeBoard").kendoSplitter({
		orientation : "horizontal",
		panes : [ {
			collapsible : true,
			size : "80%"
		}, {
			collapsible : false,
			resizable : false
		} ]
	});
});

app.service('notesData', function() {
	var currentIndex = -1;
	var data = [];
	return {
		notes : function() {
			return data;
		},
		addNote : function() {
			currentIndex++;
			data.push({
				id : currentIndex,
				title : "Title",
				priority : 0,
				text : ""
			});
		},
		deleteNote : function(id) {
			var oldNotesData = data;
			data = [];

			angular.forEach(oldNotesData, function(note) {
				if (note.id !== id) {
					data.push(note);
				}
			});
		}

	}
});

app.controller('MainController', [
		'$scope',
		'notesData',
		function($scope, notesData) {

			$scope.notes = notesData.notes();

			$scope.close = function(arg) {
				notesData.deleteNote(arg.note.id);
				$scope.notes = notesData.notes();
			}

			$scope.onClick1 = function() {
				notesData.addNote();
			};

			$scope.draggableHint = function(obj) {
				return obj.parent().parent().clone().addClass("ob-clone");
			}	

			$scope.onDragStart = function(obj) {
				$scope.$apply(function() {
					obj.currentTarget.parent().parent().addClass("ob-hide");
				});
			}

			$scope.onDrop = function(obj) {
				var pos = $(".ob-clone").offset();
				obj.draggable.currentTarget.parent().parent().removeClass(
						"ob-hide").offset(pos);
			}

		} ]);
