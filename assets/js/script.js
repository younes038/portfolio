$(document).ready(function () {
	$('#menu-icon').on('click', function () {
		if ($("#menu-icon").css("right").val() === "0%") {
			$("#menu-icon").css("right", "100%");
		} else {
			$("#menu-icon").css("right", "0%");
		}
	});
});