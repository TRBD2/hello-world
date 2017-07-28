<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%-- <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
	 --%>
<%-- <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> --%>
<%@ page session="false"%>
<html class="no-js">
<!--<![endif]-->
<head>
    <title>RBD</title>
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
        <!--     <div class="col-xs-12 col-sm-2 col-lg-2 wa-header-logo"> <a href="/dashboard?noOfDays=30">
            <img src="/static/images/logo.svg"></a>  </div>
             <div class="col-xs-12 col-sm-5 col-lg-5 wa-header-user">
                <div class="wa-wallet">
                    <img src="/static/images/avatar_new.png">
                    <ul class="wa-wallet-nav">
                                <li><a href="/wallet">WALLET</a></li>
                        <li><a href="/viewUser/1">ACCOUNT</a></li>
                        <li><a href="/support">SUPPORT</a></li>
                        <li><a id="selfPassword_1" href="javascript:void(0);" data-toggle="modal" data-target="#header_user_change_password" data-id="1">CHANGE PASSWORD</a></li>
                    </ul>
                </div>
                <div class="wa-logout">
                    <a href="/logout">LOGIN</a>
                </div>
            </div>
        </div> -->
    
        <div class="wa-admin-navbar">
      	    <div class="container">
            <div class="col-xs-12 col-sm-12 col-lg-12 wa-header-menu">
                <a href="javascript:void(0);" class="wa-mobile-nav" style="display:none;"><i class="n1"></i><i class="n2"></i><i class="n3"></i></a>
                <ul class="wa-navigation">
                        <li><a href="/dashboard?noOfDays=30" class="">DASHBOARD</a></li>
                            <li><a href="${pageContext.request.contextPath}/boards">BOARD</a>
                                <ul class="flyout">
                                    <li><a href="/searches/all">SEARCH LIST</a></li>
                                </ul>
                            </li>
                        <li><a href="/appeals/">STANDARED</a></li>
                        <li><a href="/requestList/">BOOK TYPE</a></li>
                        <li><a href="${pageContext.request.contextPath}/subjects">SUBJECT</a>
                        <li><a href="${pageContext.request.contextPath}/addSubjects">ADD SUBJECT</a>
                            
                        </li>
                    <li><a href="javascript:void(0);">BOOK MAPPING</a>
                        <ul class="flyout">
                            <li><a href="/employers">VIEW ALL EMPLOYERS</a></li>                             
                        </ul>
                    </li>
                    <li><a href="javascript:void(0);">GROUP SET</a>
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
    <div class="modal fade" id="header_user_change_password" tabindex="-1" role="dialog" aria-labelledby="change_passwordLabel" aria-hidden="true" style="display: none; padding-left: 0px;">
        <div class="vertical-alignment-helper">
            <div class="modal-dialog vertical-align-center">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title" id="change_passwordLabel">Change Password</h4>
                    </div>
                    <form id="changeSelfPasswordForm" method="post" action="/changeSelfPassword">
                        <div class="modal-body disp-inline">
                            <input name="userId" id="userIdHeader" type="hidden" value="">
                            <div class="col-xs-12 col-sm-6 col-lg-6">
                                <span class="wa-es-form-row">
                                <label>Old Password</label>
                                <input name="oldPassword" id="oldPasswordHeader" type="password">
                                </span>
                            </div>
                            <span class="clearfix"></span>
                            <div class="col-xs-12 col-sm-6 col-lg-6">
                                <span class="wa-es-form-row">
                                <label>New Password</label>
                                <input name="password" id="selfPassword" type="password">
                                </span>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-lg-6">
                                <span class="wa-es-form-row">
                                <label>Confirm Password</label>
                                <input name="confirmPassword" id="selfConfirmPassword" type="password">
                                </span>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-lg-12">
                                <span class="wa-es-form-button wa-save-account">
                                <input value="CHANGE PASSWORD" class="pull-left" type="button" onclick="changeSelfPassword();">
                                <a href="javascript:void(0);" data-dismiss="modal" class="pull-left wa-black-button">CANCEL</a>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade confirmInvoicePay" id="confirmInvoicePay" role="dialog">
        <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Confirm Invoice Payment</h4>
                </div>
                <div class="modal-body">
                    <span>Are you sure you want to make the payment against this invoice?</span>
                </div>
                <div class="modal-footer wa-modal-footer">
                    <button type="button" class="wa-black-button ml15 wa-back-btn" data-dismiss="modal">Cancel</button>
                    <button type="button" class="wa-appeal-modal-button1" id="confirmSubmit" onclick="submit();">Submit Changes</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade confirmCartItem" id="confirmCartItem" role="dialog">
        <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Confirm Cart Items</h4>
                </div>
                <div class="modal-body">
                    <span>Please select atleast one cart item to proceed.</span>
                </div>
                <div class="modal-footer wa-modal-footer">
                    <button type="button" class="wa-black-button ml15 wa-back-btn" data-dismiss="modal">Ok</button>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript">
    $('#header_user_change_password').on('show.bs.modal', function (e) {
            var id = $(e.relatedTarget).attr('data-id');
            $(this).find('#userIdHeader').val(id);
        });
    
    function changeSelfPassword(){
        //alert($("#selfPassword").val());
       // alert($("#selfConfirmPassword").val());
    
        if(!($("#selfPassword").val()) && !($("selfConfirmPassword").val()))
        {
            notificationBar('danger','Error','Password and Confirm Password cant not be blank',4000);
        }
        else
        {
        if($("#selfPassword").val() != $("#selfConfirmPassword").val()) {
            notificationBar('danger','Error', 'Password and Confirm Password dont match!', 4000);
        } else {
            $("#changeSelfPasswordForm").submit();
        }
        }
    
    }
    
    </script>    <!-- body starts -->
    <div class="wa-content-encloseure">
	<div class="container">
    	<!-- <div class="wa-breadcrumb row">
        	<strong>Dashboard</strong>
        </div> -->
        <div class="wa-content-box">
            <div class="col-xs-12 col-sm-12 col-lg-12">
                <div class="wa-report-period wa-report-period-admin">
                    <!-- <ul>
                        <li><a href="/dashboard?noOfDays=7" 
                        >LAST 1 WEEK</a></li>
                        <li><a href="/dashboard?noOfDays=30"
                                class="active"
                        >LAST 1 MONTH</a></li>
                        <li><a href="/dashboard?noOfDays=365"
                        >LAST 1 YEAR</a></li>
                        <li class="ad-dash-date-range"><a href="javascript:void(0);"
                        ><input type="text" 
                            value="SELECT RANGE"
                         id="datepicker_dateRange" class="dashboard-datepicker"></a></li>
                    </ul> -->
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-lg-12">
            	<div class="wa-dash-count">
                	<a href="/appeals/Pending"><span class="wa-dash-col1"><strong>12</strong><font>Books<br>Sold</font></span></a>
                    <a href="/appeals/Responded"><span class="wa-dash-col2"><strong>2</strong><font>Books<br>Buy</font></span></a>
                    <a href="/requestList/Pending"><span class="wa-dash-col3"><strong>8</strong><font>Books<br>Return</font></span></a>
                    <a href="/requestList/Responded"><span class="wa-dash-col4"><strong>7</strong><font>Books<br>Defacted</font></span></a>
                </div>
            	<div class="wa-dash-bar-diag-horz">
                	<!-- <h3 class="wa-form-title">Invoices</h3> -->
                    <div class="wa-dash-count wa-dash-count-white wa-dash-count-lower">
                        <a href="/invoices/all?invoiceType=B"><span class="wa-dash-col5"><!-- <strong>6</strong><font>Total No. of<br>Invoices Raised</font> --></span></a>
                        <a href="/invoices/all?invoiceType=B&paymentStatus=1"><span class="wa-dash-col5"><!-- <strong>2</strong><font>Total No. of Invoices<br>Pending</font> --></span></a>
                        <a href="/invoices/all?invoiceType=B&paymentStatus=4"><span class="wa-dash-col7"><!-- <strong>3</strong><font>Total No. of Invoices<br>Failed</font> --></span></a>
                	</div>                    
                </div>
            </div>
           <!--  <div class="col-xs-12 col-sm-12 col-lg-5">
            	<div class="wa-dash-count wa-dash-count-white">
                	<a href="/employees/all?isLastMonth=false"><span class="wa-dash-col5"><strong>3017</strong><font>Total No. of<br>Ex-Employees Added</font></span></a>
                    <a href="/employees/all?noOfDays=30"><span class="wa-dash-col6"><strong>2991</strong><font>Ex-Employees added<br>
                                        Last Month
                    </font></span></a>
                </div>
            	<div class="wa-emp-upload">
                	<h3 class="wa-form-title">Add Ex-Employee - Bulk Upload</h3>
                        <form class="wa-verifier-form" id="wa-employee-upload-form" action='/employees/excelUploads' method="post" encType="multipart/form-data">
                                <div class="col-xs-12 col-sm-6 col-lg-6">
	                            <span class="wa-es-form-row">
                                <label>Select Employers</label>
                                <select  name="employerId" onchange="createDownloadUrl(this.value);" id="selectEmployer">
                                	<option value="" >Select</option>
                                        <option  value="10"> abc</option>
                                        <option  value="4"> Aviation Pvt. Ld</option>
                                        <option  value="1"> Dew Solutions P Ltd</option>
                                        <option  value="3"> Myntra</option>
                                        <option  value="5"> Networking Pvt. Lt</option>
                                        <option  value="13"> Oracle</option>
                                        <option  value="12"> Platinum</option>
                                        <option  value="9"> QuickTech</option>
                                        <option  value="6"> Sunrise</option>
                                        <option  value="2"> Test Company</option>
                                        <option  value="14"> TestEmployer</option>
                                        <option  value="15"> TestEmployer</option>
                                        <option  value="7"> Unique</option>
                                        <option  value="8"> xerox</option>
                                        <option  value="11"> xyz</option>
                        		</select>
                            </span>
                                </div>
                            <span class="clearfix"></span>
                            <div class="col-xs-12 col-sm-6 col-lg-6">
                                <span class="wa-es-form-row">
                                    <label>Upload File (.XLS/.XLSX)</label>
                                    <input placeholder="Browse" type="file" id="emplyee-upload-file" name="sampleFile">
                                </span>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-lg-6">
                                <span class="wa-es-form-row">

                                        <label>
                                            <input type="checkbox" name="isCustomized" value="yes"> Customized Excel format 
                                            <span></span>
                                        </label>

                                </span>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-lg-12">
                                <span class="wa-es-form-button wa-bulk-upload-submit">
                                    <input value="UPLOAD FILE"  class="pull-left wa-upload-button wa-dashboard-admin-button" type="button" onclick="bulkUploadEmployee('Admin')">
                                        <a href="javascript:void(0)" class="pull-left wa-black-button wa-download-button wa-dashboard-admin-button">DOWNLOAD TEMPLATE</a>
                                </span>
                            </div>
                        </form>
                </div>
            </div> -->
        </div>
  </div>
</div>

    <!-- body ends -->
    <div class="wa-footer">
        <div class="container">
            <p>&copy; 2017 RBD Pvt. Ltd. All Rights Reserved.</p>
        </div>
    </div>
    
    <script type="text/javascript">
    	$(document).ready(function(){
    		Handlebars.registerHelper('json', function(context) {
        		return JSON.stringify(context);
    		});
            
    
    	});
    </script>


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