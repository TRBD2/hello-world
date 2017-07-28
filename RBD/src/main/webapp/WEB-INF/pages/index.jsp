<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%-- <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
	 --%>
<%-- <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> --%>
<%@ page session="false"%>
<html>
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/css/bootstrap.min.css" >
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/css/font-awesome.css" >
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/css/jquery-ui.min.css" >
        <script type="text/javascript" src="${pageContext.request.contextPath}/static/js/jquery-1.11.3.min.js"></script>
<title>Metrics</title>
<body>
	<form action="getMetrics" method="post">

		<input type="submit" value="show metrics">
	</form>
	
	<a href="${pageContext.request.contextPath}/dashboard" class="btn btnn-default">Dashboard</a>

	<form method="POST" action="uploadFile" enctype="multipart/form-data">
		File to upload: <input type="fiale" name="file"> <br> <br>Name:
		<input type="texat" name="name"> <input type="submit"
			value="Upload"> Press here to upload the file!
	</form>
</body>
</html>