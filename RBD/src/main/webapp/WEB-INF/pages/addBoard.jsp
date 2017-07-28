<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%-- <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
	 --%>
<%-- <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> --%>
<%@ page session="false"%>
<html class="no-js">
<!--<![endif]-->
<head>
    <title>ADD BOARD</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/css/bootstrap.min.css" >
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/css/font-awesome.css" >
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/css/jquery-ui.min.css" >
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/css/jquery-ui.theme.min.css" >
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/css/jquery-ui.structure.min.css" >
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/css/jquery.dataTables.min.css" >
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/css/style.css" >
    
    <script type="text/javascript" src="${pageContext.request.contextPath}/static/js/jquery-1.11.3.min.js"></script>
    <script type="text/javascript" src="/static/js/jquery-ui.min.js"></script>
    <script type="text/javascript" src="/static/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="/static/js/moment.min.js"></script>

    <script>
    var wa_global_datatable;
    var wa_inpute_date_format = 'DD-MM-YYYY'
    </script>

    <link rel="SHORTCUT ICON" href="/static/images/favicon.ico" />
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
</head>
<body>
    <!--header starts-->
    <div class="main_wrapper">
        <div class="wa-header wa-header-employer">
	        <div class="container">
	      
	    
	        <div class="wa-admin-navbar">
	      	    <div class="container">
	            <div class="col-xs-12 col-sm-12 col-lg-12 wa-header-menu">
	                <a href="javascript:void(0);" class="wa-mobile-nav" style="display:none;"><i class="n1"></i><i class="n2"></i><i class="n3"></i></a>
	                <ul class="wa-navigation">
	                         <li><a href="${pageContext.request.contextPath}/dashboard">DASHBOARD</a>
	                         <li><a href="${pageContext.request.contextPath}/boards">BOARD</a>
	                         <li><a href="${pageContext.request.contextPath}/standareds">STANDARED</a>
	                         <li><a href="${pageContext.request.contextPath}/bookTypes">BOOK TYPE</a>
	                         <li><a href="${pageContext.request.contextPath}/subjects">SUBJECT</a>
	                         <li><a href="${pageContext.request.contextPath}/groups">ADD MASTERS</a>
		                        <ul class="flyout">
		                                <li><a href="${pageContext.request.contextPath}/addBoards">ADD BOARD</a></li>
		                                <li><a href="${pageContext.request.contextPath}/addStandareds">ADD STANDARED</a></li>
		                                <li><a href="${pageContext.request.contextPath}/addBookTypes">ADD BOOK TYPE</a></li>
		                                <li><a href="${pageContext.request.contextPath}/addSubjects">ADD SUBJECT</a></li>
		                        </ul>
		                    </li>
	                    <li><a href="${pageContext.request.contextPath}/bookMapping">BOOK MAPPING</a>       </li>
	                    <li><a href="${pageContext.request.contextPath}/groups">GROUP SET</a> </li>
	                    
	                    
	                </ul>
	                
	            </div>
	      	    </div>
	        </div>
       
    	</div>
    </div>
      <!-- body starts -->
    <div class="wa-content-encloseure">
	<div class="container">
    	<!-- <div class="wa-breadcrumb row">
        	<strong>Dashboard</strong>
        </div> -->
       <div class="wa-content-box">
            <div class="wa-content-full">
              <div class="wa-land-title">
              	<h3>ADD BOARD</h3> 
              </div>
              

            	<div class="col-xs-12 col-sm-12 col-lg-12 m20">
                  	
                  	
                  	<form action="submitBoards" method="post" class="wa-verifier-form">
                  		<div class="row">
                  			<div class="col-xs-4 col-sm-4 col-lg-4">
                  				<span class="wa-es-form-row">
                  					<label> Serial No</label>
                  					1
                  				</span>
                  			</div>
                  			<div class="col-xs-6 col-sm-6 col-lg-6">
                  				<span class="wa-es-form-row">
                  					<label class="required-field"> Board Name</label>
                  					<input type="text" id="" name="" value=""  placeholder="Enter board Name" required class="required-filed">
                  				</span>
                  			</div>
                  		
                  		</div>
                  		
                  		<div class="row">
                  			<div class="col-xs-4 col-sm-4 col-lg-4">
                  				<span class="wa-es-form-row">
                  					<label> Serial No</label>
                  					2
                  				</span>
                  			</div>
                  			<div class="col-xs-6 col-sm-6 col-lg-6">
                  				<span class="wa-es-form-row">
                  					<label class="required-field"> Board Name</label>
                  					<input type="text" id="" name="" value="" placeholder="Enter board Name" required class="required-filed">
                  				</span>
                  			</div>
                  		
                  		</div>
                  		<div class="row">
                  			<div class="col-xs-2 col-sm-2 col-lg-2">
                  				<span class="wa-es-form-button">
                  					<input type="button"  value="+ADD MORE" class="pull-left wa-save-button">
                  				</span>
                  			</div>
                  		
                  		</div>
                  		
                  			<div class="col-xs-12 col-sm-12 col-lg-12">
                  				<span class="wa-es-form-button">
                  					<input type="submit"  value="SAVE" class="pull-right wa-save-button">
                  				</span>
                  			</div>
                  		
                  	
                  		
                    </form>
            </div>
                  	
                </div>
            </div>
        </div>
  </div>
</div>

    <!-- body ends -->
    <div class="wa-footer">
        <div class="container">
            <p>&copy; 2017 RBD Pvt. Ltd. All Rights Reserved.</p>
        </div>
    </div>
   </div> 
<script type="text/javascript" src="/static/js/jquery.validate.js"></script>
<script type="text/javascript" src="/static/js/charts-loader.js"></script>
<script type="text/javascript" src="/static/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/static/js/jquery.toaster.js"></script>
<script type="text/javascript" src="/static/js/wa-common.js"></script>
<script type="text/javascript" src="/static/js/underscore-min.js"></script>



</body>
<script>
    $(document).ready(function() {
    });
</script>
</html>