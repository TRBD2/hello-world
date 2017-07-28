<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%-- <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
	 --%>
<%-- <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> --%>
<%@ page session="false"%>
<html class="no-js">
<!--<![endif]-->
<head>
    <title>BOARDS</title>
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
	                         <li><a href="${pageContext.request.contextPath}/addSubjects">ADD SUBJECT</a>
	                   <li><a href="${pageContext.request.contextPath}/bookMapping">BOOK MAPPING</a>
	                        <ul class="flyout">
	                            <li><a href="/employers">VIEW ALL EMPLOYERS</a></li>
	                            <li><a href="/employer-add">ADD NEW EMPLOYER</a></li>
	                             
	                        </ul>
	                    </li>
	                    <li><a href="${pageContext.request.contextPath}/groups">GROUP SET</a>
	                        <ul class="flyout">
	                                <li><a href="/verifier-list">VIEW ALL VERIFIERS</a></li>
	                                <li><a href="/verifier-add">ADD NEW VERIFIER</a></li>
	                        </ul>
	                    </li>
	                    
	                    
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
              
              

            	<div class="col-xs-12 col-sm-12 col-lg-12">
                    <div id="dt_ad_allemployees_wrapper" class="dataTables_wrapper">
                    <div class="top"><div id="dt_ad_allemployees_filter" class="dataTables_filter">
                    <label>Search:<input type="search" class="" placeholder="" aria-controls="dt_ad_allemployees"></label>&nbsp;&nbsp;
                    <button class="btn btn-confirm">search</button>&nbsp;&nbsp;<button class="btn btn-confirm">clear</button></div>
                    </div>
                    <div id="dt_ad_allemployees_processing" class="dataTables_processing" style="display: none;">Loading Employee Data ...</div><table id="dt_ad_allemployees" class="wa-table has-dt-search wa_column_filter dataTable" role="grid" aria-describedby="dt_ad_allemployees_info">
                        <thead>
                            <tr role="row">
                            <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="EMP. ID">Sr no</th>
                            <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="FIRST NAME">BOARD NAME</th>
                            <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="LAST NAME">ACTION</th>
                            
                            </tr>
                        </thead>
                       <tfoot>
                            
                        </tfoot>
                    <tbody>
                    <tr id="row_dataModel_3023" role="row" class="odd">
	                    <td>1</td>
						<td>RBSE</td>
						<td> <a href="#">EDIT</a> | <a href="#">DELETE</a> </td>
					</tr>
					
					<tr id="row_dataModel_3032" role="row" class="even">
						<td>2</td>
						<td>CBSE</td>
						<td> <a href="#">EDIT</a> | <a href="#">DELETE</a> </td>
					</tr>
					<tr id="row_dataModel_3023" role="row" class="odd">
	                    <td>3</td>
						<td>ICSE</td>
						<td> <a href="#">EDIT</a> | <a href="#">DELETE</a> </td>
					</tr>
					
					<tr id="row_dataModel_3032" role="row" class="even">
						<td>4</td>
						<td>MPBSE</td>
						<td> <a href="#">EDIT</a> | <a href="#">DELETE</a> </td>
					</tr>
					<tr id="row_dataModel_3032" role="row" class="odd">
						<td>3</td>
						<td>
									<input type="text" placeholder="board name" value="HBSE">
						 </td>
						<td> <button> Update</button> </td>
					</tr>
					</tbody></table><div class="bottom"><div class="dataTables_length" id="dt_ad_allemployees_length"><label>Show <select name="dt_ad_allemployees_length" aria-controls="dt_ad_allemployees" class=""><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option><option value="500">500</option><option value="1000">1000</option></select> entries</label></div><div class="dataTables_info" id="dt_ad_allemployees_info" role="status" aria-live="polite">Showing 1 to 10 of 3,121 entries (filtered from 3,133 total entries)</div><div class="dataTables_paginate paging_simple_numbers" id="dt_ad_allemployees_paginate"><a class="paginate_button previous disabled" aria-controls="dt_ad_allemployees" data-dt-idx="0" tabindex="0" id="dt_ad_allemployees_previous">Previous</a><span><a class="paginate_button current" aria-controls="dt_ad_allemployees" data-dt-idx="1" tabindex="0">1</a><a class="paginate_button " aria-controls="dt_ad_allemployees" data-dt-idx="2" tabindex="0">2</a><a class="paginate_button " aria-controls="dt_ad_allemployees" data-dt-idx="3" tabindex="0">3</a><a class="paginate_button " aria-controls="dt_ad_allemployees" data-dt-idx="4" tabindex="0">4</a><a class="paginate_button " aria-controls="dt_ad_allemployees" data-dt-idx="5" tabindex="0">5</a><span class="ellipsis">…</span><a class="paginate_button " aria-controls="dt_ad_allemployees" data-dt-idx="6" tabindex="0">313</a></span><a class="paginate_button next" aria-controls="dt_ad_allemployees" data-dt-idx="7" tabindex="0" id="dt_ad_allemployees_next">Next</a></div></div><div class="clear"></div></div>
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