<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container">
		<table id="subjectTable" class="table table-bordered">
			<thead>
				<tr>
					<th>ID</th>

					<th>Subject Name</th>

				</tr>
			</thead>
			<tbody>

			</tbody>
		</table>
	</div>
</body>
<script>
	$(document)
			.ready(
					function() {
						var limit=0;
						$
								.ajax({
									url : "/RBD/getSubject",
									type : "POST",
									context : this,
									data : {},
									dataType : 'json',
									success : function(result) {
										console.log("aaa", JSON
												.stringify(result));
										var metricsHTML = "";
										// Loop through Object and create metricsHTML
										for ( var key in result) {
											
											metricsHTML += "<tr>";
											metricsHTML += "<td>"+ (limit = limit + 1) +"</td>";
											metricsHTML += "<td>"
											+ result[key]["subjectName"]
											+"</td>";
											 metricsHTML += "<td><a href='updateSubject{}'>Update</a></td>";
											 metricsHTML += "<td><a href=''>Delete</a></td>";
												
											 	metricsHTML += "</tr>";
												
											 	
												
										}

										// Replace table’s tbody html with metricsHTML
										$("#subjectTable tbody").html(
												metricsHTML);

										//alert("success", result);
									},
									error : function(error) {
										alert("error", error);
									}
								});

						console.log("ready!");
					});
</script>
</html>