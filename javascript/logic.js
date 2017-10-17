$(document).ready(function() {
	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyCT0d8Wy8DXcIsYQp3hvc22dmz2GDuCZqU",
		authDomain: "campbase-c64d6.firebaseapp.com",
		databaseURL: "https://campbase-c64d6.firebaseio.com",
		projectId: "campbase-c64d6",
		storageBucket: "",
		messagingSenderId: "343604388573"
	};

	firebase.initializeApp(config);

	var database = firebase.database();

	// database.ref("/EmployeeDataManagement").on("child_added", function(childsnapshot) {});
	database.ref("/EmployeeDataManagement").on("value", function(snap) {
		$("#display-article").empty();

		snap.forEach(function(childsnap) {
			var childValue = childsnap.val();

			var tr = $("<tr>");
			tr.append("<td>" + childValue.employeeName + "</td>");
			tr.append("<td>" + childValue.role + "</td>");
			tr.append("<td>" + childValue.startDate + "</td>");
			tr.append("<td>" + "" + "</td>");
			tr.append("<td>" + childValue.monthlyRate + "</td>");
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

