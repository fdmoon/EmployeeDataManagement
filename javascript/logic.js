$(document).ready(function() {
	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyBo92eXeu-sm1osi-VuSZisMbT7-2wHHys",
	    authDomain: "employeedatamanagement-d04ac.firebaseapp.com",
	    databaseURL: "https://employeedatamanagement-d04ac.firebaseio.com",
	    projectId: "employeedatamanagement-d04ac",
	    storageBucket: "employeedatamanagement-d04ac.appspot.com",
	    messagingSenderId: "558135677303"
	};

	firebase.initializeApp(config);

	var database = firebase.database();

	database.ref("/EmployeeDataManagement").on("value", function(snap) {
		$("#display-article").empty();

		snap.forEach(function(childsnap) {
			var childValue = childsnap.val();

			var tr = $("<tr>");
			tr.append("<td>" + childValue.employeeName + "</td>");
			tr.append("<td>" + childValue.role + "</td>");
			tr.append("<td>" + childValue.startDate + "</td>");
			tr.append("<td>" + "" + "</td>");
			tr.append("<td>" + "$" + childValue.monthlyRate + "</td>");
			tr.append("<td>" + "" + "</td>");
			
			$("#display-article").append(tr);
		});
	});

	$("#select-article").on("click", function(event) {
		// prevent form from submitting
		event.preventDefault();

		var name = $("#data-name").val().trim();
		var role = $("#data-role").val().trim();
		var date = $("#data-date").val().trim();
		var rate = $("#data-rate").val().trim();

		database.ref("/EmployeeDataManagement").push({
			employeeName: name,
			role: role,
			startDate: date,
			monthlyRate: rate
		});
	});

	// database.ref("/EmployeeDataManagement").set({});	// clear data in Firebase
});

