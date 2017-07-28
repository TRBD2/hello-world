<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%-- <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
 --%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Metrics Page</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>

	<div class="container">
		<table id="metricsTable" class="table table-bordered">
			<thead>
				<tr>
					<th>Metric Name</th>
					<th>Metric Type</th>
					<th>FieldType</th>
					<th>UOM</th>
					<th>list values order</th>
					<th>Number type</th>
					<th>Allowed Number Range</th>
					<th>Character Limit</th>
				</tr>
			</thead>
			<tbody>
			
			</tbody>
		</table>
	</div>
</body>
<script>
	$(document).ready(function() {
		$.ajax({
					url : "/RBD/getAllMetrics",
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
							metricsHTML += "<td>"
									+ result[key]["metricName"]
									+ "</td>";
							metricsHTML += "<td>"
									+ result[key]["type"]
									+ "</td>";
							metricsHTML += "<td>"
									+ (result[key]["fieldType"] === null ? ""
											: result[key]["fieldType"])
									+ "</td>";
							metricsHTML += "<td>"
									+ (result[key]["uom"] === null ? ""
											: result[key]["uom"])
									+ "</td>";
							metricsHTML += "<td>"
									+ (result[key]["listvalues"] === null ? ""
											: result[key]["listvalues"])
									+ "</td>";
							metricsHTML += "<td>"
									+ (result[key]["numberType"] === null ? ""
											: result[key]["numberType"])
									+ "</td>";
							metricsHTML += "<td>"
									+ (result[key]["numberRange"] === null ? ""
											: result[key]["numberRange"])
									+ "</td>";
							metricsHTML += "<td>"
									+ (result[key]["characterLimit"] === null ? ""
											: result[key]["characterLimit"])
									+ "</td>";
							metricsHTML += "</tr>";

						}

						// Replace table’s tbody html with metricsHTML
						$("#metricsTable tbody").html(
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
