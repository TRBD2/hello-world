var ApplicationConstant = {
    validExt: {xls: ['xls', 'xlsx'], imagesPdf: ['png', 'jpg', 'jpeg', 'pdf']}
};

var barGraphColors=["#3366cc","#dc3912","#ff9900","#109618","#990099","#0099c6","#dd4477","#66aa00","#b82e2e","#316395","#3366cc","#994499","#22aa99","#aaaa11","#6633cc","#e67300","#8b0707","#651067","#329262","#5574a6","#3b3eac","#b77322","#16d620","#b91383","#f4359e","#9c5935","#a9c413","#2a778d","#668d1c","#bea413","#0c5922", "#743411"];
$(document).ready(function () {
    
 //   $(".cust_date, .datepicker_recurring_start, .datepicker_recurring_start_tax, #datepicker_dateRange").attr('readonly', 'readonly');
    
    if ($('#wa-employee-add-non-admin-form').length > 0) {
        $('#wa-employee-add-non-admin-form').load(getEmployeeMasterFields());
    }

    if ($('#wa-employee-dynamic-edit-form').length > 0) {
        $('#wa-employee-dynamic-edit-form').load(getEmployeeData($('#wa-employee-edit-employeeId').val(), true));
    }

    notificationBar = function (priority, title, message, timeout) {
        var settings = {};
        if (timeout) {
            settings.timeout = timeout;
        }

        var escape = document.createElement('textarea');
        escape.innerHTML = message;

        var options = {
            priority: priority,   //priority: success,info,warning, danger
            title: title,
            message: escape.textContent,
            settings: settings
        };

        if (options.priority === '<use default>') {
            options.priority = null;
        }

        var codeobj = [];
        var codestr = [];

        var labels = ['message', 'title', 'priority'];
        for (var i = 0, l = labels.length; i < l; i += 1) {
            if (options[labels[i]] !== null) {
                codeobj.push([labels[i], "'" + options[labels[i]] + "'"].join(' : '));
            }
            codestr.push((options[labels[i]] !== null) ? "'" + options[labels[i]] + "'" : 'null');
        }

        if (codestr[2] === 'null') {
            codestr.pop();
            if (codestr[1] === 'null') {
                codestr.pop();
            }
        }

        codeobj = "$.toaster({ " + codeobj.join(", ") + " });"
        codestr = "$.toaster(" + codestr.join(", ") + ");"
       // console.log('priority', priority);
        $.toaster(options);
    }
    
    //Wallet Menu
    $('.wa-wallet').click(function () {
        $(this).toggleClass('wa-toggle');
    });


    //Forgot Password
    $('.req-reset-pass').click(function () {
        $('.wa-login-form').hide();
        $('.wa-forgot-form').fadeIn();
    });
    $('.wa-forgot-submit,.wa-cancel-forgot-pass').click(function () {
        $('.wa-forgot-form').hide();
        $('.wa-login-form').fadeIn();
    });
    //Toggle Box
    $(".wa-pay-result-row").find(".wa-change-row-color").change(function () {
        var sel = $(this).is(':checked');
        if (sel == true) {
            $(this).parent().parent().addClass("opt-checked");
        } else {
            $(this).parent().parent().removeClass("opt-checked");
        }
    });
    //Data Tables - Appeals
    //     $('#dt_all_appeals').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     $('#dt_responded_appeals').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     $('#dt_pending_appeals').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     $('#dt_closed_appeals').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     //Data Tables - Requests
    //     $('#dt_all_requests').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     $('#dt_responded_requests').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     $('#dt_pending_requests').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     $('#dt_closed_requests').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     //Data Tables - Employer Appeals
    //     $('#dt_em_all_appeals').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     $('#dt_em_responded_appeals').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     $('#dt_em_pending_appeals').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     $('#dt_em_closed_appeals').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     //Data Tables - Employer Requests
    //     $('#dt_em_all_requests').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     $('#dt_em_responded_requests').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     $('#dt_em_pending_requests').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     $('#dt_em_closed_requests').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     //Data Tables - Reports
    //     $('#dt_reports').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     //Data Tables - Wallet
    //     $('#dt_wallet').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     //Data Tables - Invoice
    //     $('#dt_invoices').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     //Data Tables - Users
    //     $('#dt_users').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     //Data Tables - Employer
    //     $('#dt_allemployees').DataTable({"info": false,"searching": true,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',language: {searchPlaceholder: "SEARCH BY EMPLOYEE ID","search": ""},columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     //Data Tables - Admin Appeals
    //     // $('#dt_ad_all_appeals').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     $('#dt_ad_responded_appeals').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     $('#dt_ad_pending_appeals').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     $('#dt_ad_closed_appeals').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     //Data Tables - Admin Requests
    //     //$('#dt_ad_all_requests').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     $('#dt_ad_responded_requests').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     $('#dt_ad_pending_requests').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     $('#dt_ad_closed_requests').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     //Data Tables - Admin Employees
    //     //$('#dt_ad_allemployees').DataTable({"info": false,"searching": true,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',language: {searchPlaceholder: "SEARCH BY EMPLOYEE ID","search": ""},columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     //Data Tables - Admin Employers
    //     $('#dt_ad_allemployers').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     //Data Tables - Admin Employer Users
    //     $('#dt_ad_allusers').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     //Data Tables - Admin Verifiers
    //     $('#dt_ad_allverifiers').DataTable({"info": false,"searching": true,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     //Data Tables - Admin Verifier Users
    //     $('#dt_ad_allverif_users').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     //Data Tables - Admin All Users
    //    // $('#dt_ad_all_users').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     //Data Tables - Admin All Groups
    //     $('#dt_ad_all_groups').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     //Data Tables - Admin Reports
    //     $('#dt_ad_all_reports').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     //Data Tables - Admin Reports Details
    //     $('#dt_ad_all_reports_details').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     //Data Tables - Admin Reports Generate Invoice
    //     $('#dt_ad_all_reports_invoice').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     //Data Tables - Payment Taxes
    //     $('#dt_ad_paymentTax').DataTable({"info": false,"searching": false,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //     //Data Tables - Payment Invoice
    //     $('#dt_ad_paymentInvoice').DataTable({"info": false,"searching": true,"bAutoWidth" : false,"dom": '<"top"f>rt<"bottom"ilp><"clear">',language: {searchPlaceholder: "SEARCH BY INVOICE NO.","search": ""},columnDefs: [{ targets: 'no-sort', orderable: false }]});
    //Tabs
    $('.wa-tab-handler a').click(function () {
        var clickedTab = $(this).attr('id');
        if ($(this).attr("id")) {
            $('.wa-tabbed').removeClass('active');
            $('.' + clickedTab).addClass('active');
            $('.wa-add-credit-popup').removeClass('active');
            /* for add credit popup fix*/
        }
        $('.wa-tab-handler a').removeClass('active');
        $(this).addClass('active');
    });
    //Add Credit
    $('.wa-add-credit').click(function () {
        $('.wa-add-credit-popup').toggleClass('active')
    });
    //Filter buttons
    $('.wa-report-period a').click(function () {
        $('.wa-report-period a').removeClass('active');
        $(this).addClass('active');
    });
    //Mobile menu
    $('.wa-mobile-nav').click(function () {
        $('body').toggleClass('wa-nav-opened');
    });
    $('.wa-navigation a').click(function () {
        $('body').removeClass('wa-nav-opened');
    });
    //View Verfier Details - Toggle Button
    $('.view-verifier').click(function () {
        $(this).toggleClass('closed');
        $('.wa-appeal-summary').slideToggle();
    });
    // Edit Employee - Sub menu


    // Sortable - Map Fields
    $("#drag-fields").sortable({placeholder: "draggable-placeholder", axis: 'y'});
    // Add field - Map Fields
    $('.map-add-new-field a').click(function () {
        $(this).parent().toggleClass('showing');
    });
    // Groups Add/ Edit
    /*$('.add-group-selector').change(function() {
     var selgpValue = $(this).val();
     $('option:selected', this ).remove();
     $(this).next('.selected-group-items').append('<span><font>'+selgpValue+'</font><i>x</i></span>');
     });
     $('body').on('click','.selected-group-items i',function() {
     var selgpclValue = $(this).prev('font').text();
     $(this).parents('.selected-group-items').prev('select').append('<option value="'+selgpclValue+'">'+selgpclValue+'</option>');
     $(this).prev().parent().remove();
     });*/
    //Generate Invoice Button
    $('body').on('click', '.inv-disabled', function (e) {
        e.preventDefault();
    });
    $('.invoice-toggler').change(function () {
        if ($(this).is(':checked')) {
            $('.inv-toggler').removeClass('inv-disabled');
        } else {
            $('.inv-toggler').addClass('inv-disabled');
        }
    });


    /**
     * added by govind
     */
    $('#select-all, #select-allMob').click(function (event) {
        if (this.checked) {
            // Iterate each checkbox
            $('.check_normal.noText :checkbox').each(function () {
                this.checked = true;
            });
            $("[name^='hiddenField_']").each(function () {
                $('#' + this.name.substring(12)).val(this.value);
            });
        }
        else {
            $('.check_normal.noText :checkbox').each(function () {
                this.checked = false;
            });

            $("[name^='hiddenField_']").each(function () {
                $('#' + this.name.substring(12)).val("");
            });
        }
    });

    copyValues = function (_this, fieldName) {
        if (_this.checked) {
            $('#' + fieldName).val($('#hiddenField_' + fieldName).val());
        } else {
            $('#' + fieldName).val("");
        }

    }

    if($('#tabStatus').val() != undefined && $('#tabStatus').val() != "") {
       var  tabClick = $('#tabStatus').val();
        $('.wa1-tab-handler a').removeClass('active');
        var idName = 'tab_'+tabClick;
        $('#'+idName).addClass('active');
    }

});

$(window).on("load", function () {

    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
    $('.wa-header-menu ul a').each(function () {

        if (this.href === path) {
            $(this).parents("ul").parent("li").find("a:first").addClass('active');
            //$(this).parentsUntil('a').addClass("active");
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });

});

// $(document).ready  ends---------------------------------------------------------

function bulkUploadEmployee(loginType) {
    if(loginType == 'Admin' &&  $("#selectEmployer").val() =="" ){
        notificationBar('warning', 'Warning', 'Please select a Employer First', 400000);
        return false;
    }else{
        var nme = document.getElementById("emplyee-upload-file");
        if (nme.value.length <= 0) {
            notificationBar('warning', 'Warning', 'Please select a .xls File!', 4000);
            nme.focus();
            return false;
        } else if (!validExt(nme.value, ApplicationConstant.validExt.xls)) {
            notificationBar('warning', 'Warning', 'Please select .xls file only!', 4000);
            nme.focus();
            return false;
        } else {
            //notificationBar('success','success:', 'Uploading ...!',4000);
            $("#wa-employee-upload-form").submit();
        }
    }

}

function submitEmployeeAddForm(loginType) {
    //alert( $("#selectEmployer").val())
    if(loginType == 'Admin' &&  $("#selectEmployer").val() =="" ){
        notificationBar('warning', 'Warning', 'Please select a Employer First', 4000);
        return false;
    }else {
        //notificationBar('success','success:', 'Uploading ...!',4000);
        $("#wa-employee-add-form").submit();
    }
   

}

function validExt(fileName, ext) {
    var fileExt = fileName.split('.').pop();
    if (fileExt.length > 2) {
        return ext.some(function (val, index, array) {
            return fileExt.toLowerCase() === val;
        })
    } else {
        return false;
    }
}

function uploadSearchDocument(addToCart, formName) {
    if ($("#" + formName).valid()) {
        var nme = document.getElementById("searchUploadDoc");
        //console.log("uploadSearchDocument ",nme.value.length);
        if (nme.value.length <= 0) {
            notificationBar('warning', 'Warning', 'Please select images and pdf file only!', 4000);
            nme.focus();
            return false;
        } else if (!validExt(nme.value, ApplicationConstant.validExt.imagesPdf)) {
            notificationBar('warning', 'Warning', 'Please select images and pdf file only!', 4000);
            nme.focus();
            return false;
        } else if (!addToCart) {
            checkDuplicateSearch(formName, submitToVerifyConfirm);
        } else if (addToCart) {
            checkDuplicateSearch(formName, submitToCart);
        }
    } else {
        notificationBar('warning', 'Warning', 'Please fill in all the necessary fields first!', 4000);
    }
}

function checkDuplicateSearch(formName, submitFunction) {

    var postSave = $.ajax({
        url: '/checkDuplicateSearch',
        type: 'post',
        dataType: 'json',
        async: false,
        data: $('#' + formName + ' :input').serialize()
    });
    postSave.done(function (data) {
        //console.log("data:" + JSON.stringify(data));
        submitFunction(data);
    });
}

function submitVerifySearchOk() {
    $("#verifierSearchForm").attr("action", "/addToCart");
    $("#verifierSearchForm").submit();
}

function submitToCart(resultDuplicate) {
    //console.log('resultDuplicate::', JSON.stringify(resultDuplicate));
    if (resultDuplicate.duplicateFound) {
        $("#searchAlreadyPerformedHref").trigger("click");
        // var r = confirm("This search has already been performed, do you still want to continue? This would be chargeable if you proceed");
        // if (r == true) {
        //     $("#verifierSearchForm").attr("action", "/addToCart");
        //     $("#verifierSearchForm").submit();
        // }
    } else {
        $("#verifierSearchForm").attr("action", "/addToCart");
        $("#verifierSearchForm").submit();
    }
}

function submitToVerifyConfirm(resultDuplicate) {
    //console.log('resultDuplicate::', JSON.stringify(resultDuplicate));
    if (resultDuplicate.duplicateFound) {
        var r = confirm("This search has already been performed, do you still want to continue? This would be chargeable if you proceed");
        if (r == true) {
            $("#verifierSearchForm").attr("action", "/verifyConfirm");
            $("#verifierSearchForm").submit();
        }
    } else {
        $("#verifierSearchForm").attr("action", "/verifyConfirm");
        $("#verifierSearchForm").submit();
    }
}

$('#employerName').on('change', function (event) {
    // console.log($(this).val());
    var isDashboard = $(this).hasClass('isDashboard');

    resetVerifyFields(isDashboard);

    var data = {
        employerId: $(this).val()
    };
    var postSave = $.ajax({
        url: '/getEmployerSearchCriterion',
        type: 'post',
        dataType: 'json',
        data: data
    });
    postSave.done(function (data) {
        //console.log("data:"+ JSON.stringify(data));
        var $select = $('#searchCriterionName');
        $select.find('option').remove();
        $select.append('<option value="">Select Search Criteria</option>');
        $.each(data.employerSearchCriterion, function (key, value) {
            $select.append('<option value=' + value.search_criterion_id + '>' + value.master_search_criterion.search_criteria + '</option>');
        });
    });
});


$('#searchCriterionName').on('change', function (event) {
    // console.log($(this).val());
    var isDashboard = $(this).hasClass('isDashboard');

    resetVerifyFields(isDashboard);

    var data = {
        searchCriterionId: $(this).val()
    };
    var postSave = $.ajax({
        url: '/getFieldDetails',
        type: 'post',
        dataType: 'json',
        data: data
    });
    var fieldLabelList = [];
    postSave.done(function (data) {
        if (data.masterFields[0] != undefined && data.masterFields[0].field1 != null) {
            fieldLabelList.push(data.masterFields[0].field_label1);
            var labelField = '<label>';
            if (data.masterFields[0].is_mandatory1) {
                labelField = '<label class="required-field">';
            }
            $("#field1").html('<span class="wa-es-form-row wa-es-form-row-verify">' + labelField + data.masterFields[0].field_label1 + '</label> ' + createField(data.masterFields[0].field_input_type1, data.masterFields[0].field_name1, data.masterFields[0].is_mandatory1, data.masterFields[0].select_field_values1, data.masterFields[0].masterTableData1) + '     </span>');
        }
        if (data.masterFields[0] != undefined && data.masterFields[0].field2 != null) {
            fieldLabelList.push(data.masterFields[0].field_label2);
            var labelField = '<label>';
            if (data.masterFields[0].is_mandatory2) {
                labelField = '<label class="required-field">';
            }
            $("#field2").html('<span class="wa-es-form-row wa-es-form-row-verify">' + labelField + data.masterFields[0].field_label2 + '</label> ' + createField(data.masterFields[0].field_input_type2, data.masterFields[0].field_name2, data.masterFields[0].is_mandatory2, data.masterFields[0].select_field_values2, data.masterFields[0].masterTableData2) + '     </span>');
        } else {
            $("#field2").remove();
        }

        if (data.masterFields[0] != undefined && data.masterFields[0].field3 != null) {
            fieldLabelList.push(data.masterFields[0].field_label3);
            var labelField = '<label>';
            if (data.masterFields[0].is_mandatory3) {
                labelField = '<label class="required-field">';
            }
            $("#field3").html('<span class="wa-es-form-row wa-es-form-row-verify">' + labelField + data.masterFields[0].field_label3 + '</label> ' + createField(data.masterFields[0].field_input_type3, data.masterFields[0].field_name3, data.masterFields[0].is_mandatory3, data.masterFields[0].select_field_values3, data.masterFields[0].masterTableData3) + '     </span>');
        } else {
            $("#field3").remove();
        }

        if (data.masterFields[0] != undefined && data.masterFields[0].field4 != null) {
            fieldLabelList.push(data.masterFields[0].field_label4);
            var labelField = '<label>';
            if (data.masterFields[0].is_mandatory4) {
                labelField = '<label class="required-field">';
            }
            $("#field4").html('<span class="wa-es-form-row wa-es-form-row-verify">' + labelField + data.masterFields[0].field_label4 + '</label> ' + createField(data.masterFields[0].field_input_type4, data.masterFields[0].field_name4, data.masterFields[0].is_mandatory4, data.masterFields[0].select_field_values4, data.masterFields[0].masterTableData4) + '     </span>');
        } else {
            $("#field4").remove();
        }

        if (data.masterFields[0] != undefined && data.masterFields[0].field5 != null) {
            fieldLabelList.push(data.masterFields[0].field_label5);
            var labelField = '<label>';
            if (data.masterFields[0].is_mandatory5) {
                labelField = '<label class="required-field">';
            }
            $("#field5").html('<span class="wa-es-form-row wa-es-form-row-verify">' + labelField + data.masterFields[0].field_label5 + '</label> ' + createField(data.masterFields[0].field_input_type5, data.masterFields[0].field_name5, data.masterFields[0].is_mandatory5, data.masterFields[0].select_field_values5, data.masterFields[0].masterTableData5) + '     </span>');
        } else {
            $("#field5").remove();
        }

        //console.log("getFieldDetails data:"+ JSON.stringify(data));

        var data = {
            employerId: $('#employerName').val()
        };
        var postSave = $.ajax({
            url: '/getStatedFieldOfEmployer',
            type: 'post',
            dataType: 'json',
            data: data
        });
        postSave.done(function (data) {
            //console.log("getStatedFieldOfEmployer data:"+ JSON.stringify(data));
            var counter = 6;
            $.each(data.employerFields, function (index, value) {
                if (fieldLabelList.indexOf(value.master_field.field_label) < 0) {
                    $("#field" + counter).html('<span class="wa-es-form-row wa-es-form-row-verify"><label class="required-field">' + value.master_field.field_label + '</label> ' + createField(value.master_field.field_input_type, value.master_field.field_name, 1, value.master_field.select_field_values, value.master_field.masterTableData) + '     </span>');
                    counter++;
                }
            });
            for (var i = counter; i <= 15; i++) {
                $("#field" + counter).remove();
                counter++;
            }

        });

    });


    //for employer stated fields


});

function resetVerifyFields(isDashboard) {
    var defaultFields = '<div class="col-xs-12 col-sm-6 col-lg-6" id="field1"></div>' +
        '<div class="col-xs-12 col-sm-6 col-lg-6" id="field2"></div>' +
        '<div class="col-xs-12 col-sm-6 col-lg-6" id="field3"></div>' +
        '<div class="col-xs-12 col-sm-6 col-lg-6" id="field4"></div>' +
        '<div class="col-xs-12 col-sm-6 col-lg-6" id="field5"></div>' +

        '<div class="col-xs-12 col-sm-6 col-lg-6" id="field6"></div>' +
        '<div class="col-xs-12 col-sm-6 col-lg-6" id="field7"></div>' +
        '<div class="col-xs-12 col-sm-6 col-lg-6" id="field8"></div>' +
        '<div class="col-xs-12 col-sm-6 col-lg-6" id="field9"></div>' +
        '<div class="col-xs-12 col-sm-6 col-lg-6" id="field10"></div>' +
        '<div class="col-xs-12 col-sm-6 col-lg-6" id="field11"></div>' +
        '<div class="col-xs-12 col-sm-6 col-lg-6" id="field12"></div>' +
        '<div class="col-xs-12 col-sm-6 col-lg-6" id="field13"></div>' +
        '<div class="col-xs-12 col-sm-6 col-lg-6" id="field14"></div>' +
        '<div class="col-xs-12 col-sm-6 col-lg-6" id="field15"></div>';

    if (isDashboard) {
        defaultFields = '<field id="field1"></field>' +
            '<field id="field2"></field>' +
            '<field id="field3"></field>' +
            '<field id="field4"></field>' +
            '<field id="field5"></field>' +

            '<field id="field6"></field>' +
            '<field id="field7"></field>' +
            '<field id="field8"></field>' +
            '<field id="field9"></field>' +
            '<field id="field10"></field>' +
            '<field id="field11"></field>' +
            '<field id="field12"></field>' +
            '<field id="field13"></field>' +
            '<field id="field14"></field>' +
            '<field id="field15"></field>';
    }


    $("#verify_fields").html('');
    $("#verify_fields").html(defaultFields);
}

function createField(fieldType, fieldName, isMandatory, selectFieldValues, masterTableData, fieldValue, isNonEditable) {
    let cssClass = 'required-field';
    let isRequired = 'required';
    if (isMandatory == 0) {
        isRequired = '';
        cssClass = 'not-required-field';
    }
    fieldValue = fieldValue != undefined ? fieldValue : "";
    if (isNonEditable) {
        cssClass = 'hidden';
    }
    switch (fieldType) {
        case 'Input':
            return '<input type="text" class=' + cssClass + ' name=' + fieldName + ' id=' + fieldName + ' ' + isRequired + ' value=' + fieldValue + '>';
        case 'Date':
            return '<input type="text" class="datepicker_recurring_start ' + cssClass + '" name=' + fieldName + ' id=' + fieldName + ' ' + isRequired + ' readonly value=' + fieldValue + ' >';
        case 'Select':
            let optionValues = selectFieldValues.split('/');
            // console.log(JSON.stringify(selectFieldValues));
            let optionSelect = "<option value='-1'>Select</option>";
            $.each(optionValues, function (key, optionValue) {
                //console.log(JSON.stringify(optionValue));
                if (fieldValue == optionValue.split(':')[1]) {
                    optionSelect = optionSelect + "<option value='" + optionValue.split(':')[1] + "' selected>" + optionValue.split(':')[0] + "</option>";
                } else {
                    optionSelect = optionSelect + "<option value='" + optionValue.split(':')[1] + "'>" + optionValue.split(':')[0] + "</option>";
                }
            });
            //console.log(JSON.stringify(optionSelect));

            return '<select class=' + cssClass + ' name=' + fieldName + ' id=' + fieldName + ' ' + isRequired + ' value=' + fieldValue + ' >' + optionSelect + '</select>';
        case 'Text':
            return '<input type="text" class=' + cssClass + ' name=' + fieldName + ' id=' + fieldName + ' ' + isRequired + ' value=' + fieldValue + ' >';
        case 'Table':
            let optionSelectTable = "<option value='-1'>Select</option>";
            // console.log("masterTableData",masterTableData)
            //return;
            $.each(masterTableData, function (key, masterData) {
                if (fieldValue == masterData.value) {
                    optionSelectTable = optionSelectTable + "<option value='" + masterData.id + "' selected >" + masterData.value + "</option>";
                } else {
                    optionSelectTable = optionSelectTable + "<option value='" + masterData.id + "'>" + masterData.value + "</option>";
                }
            });
            //console.log(JSON.stringify(optionSelect));

            return '<select class=' + cssClass + ' name=' + fieldName + ' id=' + fieldName + ' ' + isRequired + '>' + optionSelectTable + '</select>';
        default:
            return '<input type="text" class=' + cssClass + ' name=' + fieldName + ' id=' + fieldName + ' value=' + fieldValue + ' >';

    }
}

function generateEmpDynamcForm(employerId) {
    if (employerId != "" && employerId != null && employerId != undefined && employerId > 0) {
        var employerMasterFields = getEmployeeMasterFields(employerId);
    } else {
        $('#wa-employee-dynamic-form').html('');
    }

}

function getEmployeeData(employeeId, isEdit) {
    var data = {
        employeeId: employeeId
    };
    var postSave = $.ajax({
        url: '/employee/details/' + employeeId,
        type: 'post',
        dataType: 'json',
        data: data
    });
    postSave.done(function (data) {
        if (data != undefined) {
            var employerHtml = getEmployerFieldHtml(data, isEdit);
            $('#wa-employee-dynamic-form').html('');
            $('#wa-employee-dynamic-form').html(employerHtml);
        }
    })
}

function getEmployeeMasterFields(employerId) {
    var data = {
        employerId: employerId
    };
    var postSave = $.ajax({
        url: '/employer/masterFields',
        type: 'post',
        dataType: 'json',
        data: data
    });
    postSave.done(function (data) {

        if (data.empMasterFields != undefined) {
            var employerHtml = getEmployerFieldHtml(data.empMasterFields);
            $('#wa-employee-dynamic-form').html('');
            $('#wa-employee-dynamic-form').html(employerHtml);
        }
    })
}

function getEmployerFieldHtml(employerMasterFields, isEdit) {
    var html = "";
    var totalField = employerMasterFields.length;
    for (var i = 0; i < totalField; i++) {
        var currMasterField = employerMasterFields[i].master_field;
        var fieldValue = employerMasterFields[i].field_value;
        //  var isApproved = employerMasterFields[i].employee != undefined && employerMasterFields[i].employee.employee_status_id == 2 ? true: false;
        var isPrimary = currMasterField.duplication_logic_prioity == 1 ? true : false;
        var is_editable = currMasterField.is_editable == 1 ? true : false;
        var isNonEditable = false
        if (isEdit && !is_editable) {
            isNonEditable = true
        }
        var span = "";
        if (currMasterField.field_input_type != 'Document') {
            //console.log("field_label isEdit && isEditable && isPrimary", currMasterField.field_label, isEdit, isNonEditable, isPrimary);
            span += '<div class="col-xs-12 col-sm-6 col-lg-6">';
            span += '<span class="wa-es-form-row">';
            if (currMasterField.is_mandatory) {
                span += '<label class="required-field">' + currMasterField.field_label + '</label>';
            } else {
                span += '<label>' + currMasterField.field_label + '</label>';
            }
            span += createField(currMasterField.field_input_type, currMasterField.field_name, currMasterField.is_mandatory,
                currMasterField.select_field_values, currMasterField.tableResult, fieldValue, isNonEditable);
            if (isNonEditable) {
                span += '<strong >' + fieldValue + '</strong>';
            }

            span += '</span>';
            span += '</div>';
        }
        html += span;
    }
    return html
}

$.datepicker.formatDate = function (formatDate, value) {
    return moment(value).format(wa_inpute_date_format);
};

$(document).on('focus', ".datepicker_recurring_start", function () {
    $(this).datepicker({
        dateFormat: 'dd-mm-yy',
        showButtonPanel: true,
        changeMonth: true,
        changeYear: true,
        showOtherMonths: true,
        selectOtherMonths: true,
        yearRange: "-100:+0",
        closeText: 'Clear',
        beforeShow: function( input ) {
            setTimeout(function() {
                var clearButton = $(input )
                    .datepicker( "widget" )
                    .find( ".ui-datepicker-close" );
                clearButton.unbind("click").bind("click",function(){$.datepicker._clearDate( input );});
            }, 1 );
        }
    });

});

//for restrict to select date before current date
$(document).on('focus', ".datepicker_recurring_start_tax", function () {
    $(this).datepicker({
        dateFormat: 'dd-mm-yy',
        showButtonPanel: true,
        changeMonth: true,
        changeYear: true,
        showOtherMonths: true,
        selectOtherMonths: true,
        yearRange: "-100:+0",
        minDate: 0,
        closeText: 'Clear',
        beforeShow: function( input ) {
            setTimeout(function() {
                var clearButton = $(input )
                    .datepicker( "widget" )
                    .find( ".ui-datepicker-close" );
                clearButton.unbind("click").bind("click",function(){$.datepicker._clearDate( input );});
            }, 1 );
        }
    });

});

$("#datepicker_dateRange").datepicker({
    dateFormat: 'dd-mm-yy',
    numberOfMonths: 2,
    showButtonPanel: true,
    changeMonth: true,
    changeYear: true,
    showOtherMonths: true,
    selectOtherMonths: true,
    yearRange: "-100:+0",
    closeText: 'Clear',
    beforeShow: function( input ) {
        setTimeout(function() {
            var clearButton = $(input )
                .datepicker( "widget" )
                .find( ".ui-datepicker-close" );
            clearButton.unbind("click").bind("click",function(){$.datepicker._clearDate( input );});
        }, 1 );
    },
    onSelect: function (selectedDate) {
        onSelectRangeDatePicker(this, selectedDate)
    },
    onClose: function () {
        onCloseRangeDatePicker(this);
        $(this).hasClass('wa_table_filter') ? drawTableByFilter() : "";
    }
});

function onSelectRangeDatePicker(ele, selectedDate) {
    if (!$(ele).data().datepicker.first) {
        $(ele).data().datepicker.inline = true
        $(ele).data().datepicker.first = selectedDate;
    } else {
        var date1=moment(selectedDate,"DD-MM-YYYY");
        var date2=moment($(ele).data().datepicker.first,"DD-MM-YYYY");
        if (date1.isAfter(date2)) {
            $(ele).val($(ele).data().datepicker.first + " - " + selectedDate);
        } else {
            $(ele).val(selectedDate + " - " + $(ele).data().datepicker.first);
        }
        $(ele).data().datepicker.inline = false;
    }
}

function onCloseRangeDatePicker(ele) {
    delete $(ele).data().datepicker.first;
    $(ele).data().datepicker.inline = false;
    if ($(ele).hasClass("dashboard-datepicker")) {
        window.location.href = "/dashboard?dateRange=" + $(ele).val();
    }
}

function createDownloadUrl(selectedId) {
    if (selectedId > 0) {
        $('.wa-download-button').attr('href', "/employer/download-attachment/" + selectedId);
    } else {
        $('.wa-download-button').attr('href', 'javascript:void(0)');
    }
}
var isFirstTimeLoad = true;
function dataTableConfig(ajaxUrl, dataTableId, TableName) {

    var obj = {
        "bJQueryUI": false,
        "bPaginate": true,
        "bInfo": true,
        "iDisplayStart": 0,
        "bProcessing": true,
        "bServerSide": true,
        "scrollX": false,
        "scrollCollapse": false,
        "bAutoWidth": false,
        "lengthMenu": [[10, 25, 50, 100, 500, 1000], [10, 25, 50, 100, 500, 1000]],
        "dom": '<"top"f>rt<"bottom"lip><"clear">',
        "oLanguage": {
            "sProcessing": "Loading " + TableName + " Data ...",
            "sZeroRecords": "No "+TableName+" Available",
            "sPaginate": {
                "sFirst": "First",
                "sLast": "Last",
                "sNext": "Next"
            },
        },
        "sAjaxSource": ajaxUrl,
        "fnServerData": function (sSource, aoData, fnCallback) {
            dataTableCustomeFilters(aoData, isFirstTimeLoad);
            isFirstTimeLoad = false;
            $(".wa_dtPenEmp_selectAllChekbox:checked").prop("checked", false);
            $.getJSON(sSource, aoData, function (json) {
                fnCallback(json);

            });
        },
        
        "initComplete": function (oSettings, json) {
            var r = $('#' + dataTableId + ' tfoot tr');
            $('#' + dataTableId + ' thead').prepend(r);
            addSubmitForGlobalSearch(this);
            
        },

    };

    return obj;
}

function drawTableByFilter() {
    wa_global_datatable.draw();
}

function dataTableCustomeFilters(aoData, isFirstTimeLoad) {
    var filtersArr = [];
    var requestDTFilter = [];
    for (var i = 0; i > -1; i++) {
        if ($('.customeFilter_' + i).length > 0 || i < 10) {
            filtersArr.push($('.customeFilter_' + i).val());
        } else {
            i = -2;
        }
    }
    aoData.push({"name": "customeFilters", "value": filtersArr});
    if (isFirstTimeLoad) {
        for (var i = 0; i > -1; i++) {
            if ($('.requestDTFilter_' + i).length > 0 || i < 5) {
                requestDTFilter.push($('.requestDTFilter_' + i).val());
            } else {
                i = -2;
            }
        }
    } else {
        requestDTFilter = []
    }
     if($("#dt_ad_allInvoices").length >0){
         aoData.push({"name": "dtMainCondition_invoiceType", "value": $('#wa_dt_invoiceType').val()});  
     }
    else if($("#dt_ad_all_requests").length >0 || $("#dt_ad_all_appeals").length >0){
         aoData.push({ "name" : "filterStatus", "value" :$('#tabStatus').val()});
     }
    
    aoData.push({"name": "requestDTFilter", "value": requestDTFilter});
}



function addCustomeColumnFilter(wa_global_datatable, isInitialFilter) {
    wa_global_datatable.columns().every(function () {
        var that = this;

        $('.cust_filt', this.footer()).on("keyup", function (e) {
            var key = e.which;
            var f_dt = this.value;
            var t = that.search(this.value);
            if (key == 13) {
                t.draw();
            }
        });

         $('.cust_date', this.footer()).datepicker({
                dateFormat: 'dd-M-yy',
                showButtonPanel: true,
                changeMonth: true,
                changeYear: true,
                showOtherMonths: true,
                selectOtherMonths: true,
                yearRange: "-100:+0",
                onSelect: function() { 
                    if ( that.search() !== this.value ) {
                        that.search( this.value ).draw()
                    }
                },
                closeText: 'Clear',
                beforeShow: function( input ) {
                     setTimeout(function() {
                         var clearButton = $(input )
                             .datepicker( "widget" )
                             .find( ".ui-datepicker-close" );
                         clearButton.unbind("click").bind("click",function(){$.datepicker._clearDate( input );});
                     }, 1 );
                 }
        });

        $('.cust_date', this.footer()).on("keyup", function (e) {
            var key = e.which;
            var t = that.search(this.value);
            if (key == 13) {
                t.draw();
            }
        });

        $('.cust_select', this.footer()).on('change', function (e) {
            var t = that.search(this.value);
            t.draw();
        });

    });

    isInitialFilter == true ? wa_global_datatable.draw() : "";

}

function addSubmitForGlobalSearch(ele) {
    var input = $('.dataTables_filter input').unbind();

    $('.dataTables_filter input').on("keyup", function (e) {
        var key = e.which;
        var t = self.search(input.val());
        if (key == 13) {
            t.draw();
        }
    });

    var self = ele.api(),

        $searchButton = $('<button class="btn btn-confirm">')
            .text('search')
            .click(function () {
                self.search(input.val()).draw();
            }),

        $clearButton = $('<button class="btn btn-confirm">')
            .text('clear')
            .click(function () {
                $('.dataTables_filter input').val('');

                $(' .wa_column_filter input').each(function () {
                    $(this).val('');
                })

                $(' .wa_column_filter select').each(function () {
                    $(this).val('');
                })
                
                /*Code added to clear filters */
                $('.clearTopFilters').each(function()
                {
                    $(this).val('');
                })
                /*Code added to clear filters*/
                wa_global_datatable.columns().every(function () {
                    this.search('');
                })

                $('.dataTables_filter input').val('');

                $searchButton.click();
            })

    $('.dataTables_filter').append("&nbsp;&nbsp;", $searchButton, "&nbsp;&nbsp;", $clearButton);
}


function updateEmployeeStatus(employeeId, status) {
    $.ajax({
        url: "/employee/updateStatus",
        type: "POST",
        context: this,
        data: {employeeId: employeeId, status: status},
        dataType: 'json',
        success: function (result) {
            if (result && result.sucess) {
                var statusStr = status == 'Approve' ? "Approved" :
                    status == 'Discard' ? 'Discarded' :
                        status == 'Duplicate' ? "Duplicate" : '';
                var statusStr = statusStr;
                notificationBar('success', 'Success', 'successfully ' + statusStr, 2000);
                $("#row_dataModel_" + employeeId).find('td:last').html(statusStr);
                $('#dataModel_' + employeeId).next('.has-sub-table-toggle').toggle();
            } else {
                notificationBar('danger', 'Error', result.message, 4000);
            }
        },
        error: function (a) {
            console.log("Error occured in status update" + JSON.stringify(a));
            notificationBar('danger', 'Error', 'Faied To Take Action', 4000);
        }
    });
}

function updateDuplicateEmployeeStatus(duplicate_employee_id, new_employee_id, existing_employee_id, employee_status_id) {
    var status = $('.wa_dup_emp_action').val();
    if (status == "") {
        return;
    }
    var data1 = {
        duplicate_employee_id: duplicate_employee_id,
        existing_employee_id: existing_employee_id,
        new_employee_id: new_employee_id,
        employee_status: status
    };

    $.ajax({
        url: "/employee/duplicate/updateStatus",
        type: "POST",
        context: this,
        data: data1,
        dataType: 'json',
        success: function (result) {
            if (result && result.isSuccess) {
                alert("Action Taken");
                window.location.href = "/employees/all/1";
            }
        },
        error: function (a) {
            console.log("Error occured in status update" + JSON.stringify(a));
        }
    });
}

function updateSenExcelStatus(id) {
    $.ajax({
        url: "/employees/excelUploads/wa/markDone",
        type: "POST",
        context: this,
        data: {id: id},
        dataType: 'json',
        success: function (result) {
            if (result && result.isSuccess) {
                var statusStr = 'Done';
                $("#row_dataModel_" + id).find('td:last').html(statusStr);
                $('#dataModel_' + id).next('.has-sub-table-toggle').toggle();
            }
        },
        error: function (a) {
            console.log("Error occured in status update" + JSON.stringify(a));
        }
    });
}

function showDuplicateRecords(duplicate_employee_id) {
    $.ajax({
        url: "/employee/duplicate/compare",
        type: "POST",
        context: this,
        data: {new_employee_id: new_employee_id, existing_employee_id: existing_employee_id},
        dataType: 'json',
        success: function (result) {
            if (result && result.isSuccess) {
                window.location("/employee/duplicate/compare");
            }
        },
        error: function (a) {
            console.log("Error occured in status update" + JSON.stringify(a));
        }
    });
}


function submitEmployeeXlsMpapped() {
    var select = $('select.mappedField').map(function () {
        return this.value
    }).get();
    if (select.indexOf("") >= 0) {
        notificationBar('warning', 'Warning', 'Map All The Field', 5000);
        // alert("select",select)
        return false;
    }

    var sorted_arr = select.slice().sort();
    var results = [];
    var isDuplicate = false;
    for (var i = 0; i < select.length - 1; i++) {
        if (sorted_arr[i + 1] == sorted_arr[i]) {
            results.indexOf(sorted_arr[i]) == -1 ? results.push(sorted_arr[i]) : "";
            isDuplicate = true;
        }
    }

   // console.log(results);
    //console.log("isDuplicate", isDuplicate)
    if (isDuplicate) {
        notificationBar('warning', 'Warning', 'Multiple Mapping : <strong> ' + results + '</strong>', 5000);
        // alert("results",results)
        return false;
    }
   // console.log("form submit")
    $("#wa-mid-form").submit();

}

function submitRequestEdit(responseStatus) {
    $('#responseStatus').val(responseStatus);
    $("#requestEditForm").submit();
}
function getMonth(month) {
    switch (month) {
        case 1:
            return 'Jan';
        case 2:
            return 'Feb';
        case 3:
            return 'Mar';
        case 4:
            return 'Apr';
        case 5:
            return 'May';
        case 6:
            return 'Jun';
        case 7:
            return 'Jul';
        case 8:
            return 'Aug';
        case 9:
            return 'Sep';
        case 10:
            return 'Oct';
        case 11:
            return 'Nov';
        case 12:
            return 'Dec';
        case 'indexOf':
            return '';
        default:
            return '';
    }
}


function uploadRequestDocument() {

    if ($("#requestUploadDoc").length > 0) {
        var nme = document.getElementById("requestUploadDoc");
        //console.log("uploadSearchDocument ", nme.value.length);
        if (nme.value.length <= 0) {
            notificationBar('warning', 'Warning', 'Please select images and pdf file only!', 4000);
            nme.focus();
            return false;
        } else if (!validExt(nme.value, ApplicationConstant.validExt.imagesPdf)) {
            notificationBar('warning', 'Warning', 'Please select images and pdf file only!', 4000);
            nme.focus();
            return false;
        } else {
            //notificationBar('success','success:', 'Uploading ...!',4000);
            $("#requestForm").submit();
        }
    } else {
        $("#requestForm").submit();
    }
}


$(document).on('click', '.has-sub-table-menu', function () {
    var id = $(this).attr('id').split("_")[1];
   // console.log(id);
    $('#span_' + id).toggle();
});

$('.wa_dt_tfoot').toggle();

$(document).on('click', '.dt_toggle_filter', function () {
    $('.wa_dt_tfoot').toggle();
});

$(document).mouseup(function (e) {
    var container = $(".has-sub-table-toggle");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
    }
});

function validateFormFields(formid, exceptionFields) {
    var isFormValid = true;
    var invalidFieldList = ""
    var result = "";
    var current_form = document.getElementById(formid);
    for (var i = 0; i < current_form.elements.length; i++) {
        if (current_form.elements[i].type == "password") {
            result = checkForInvalidPassword(current_form.elements[i].value);
            if (!result) {
                invalidFieldList += current_form.elements[i].id + " , ";
                isFormValid = false;
            }
        }

        else if (current_form.elements[i].type == "text") {
            if (!exceptionFields.includes(current_form.elements[i].id)) {
                result = checkSpecialCharacters(current_form.elements[i].value);
                if (!result) {
                    invalidFieldList += current_form.elements[i].id + " , ";
                    isFormValid = false;
                }
            }
            else {
                result = IsValidUserName(current_form.elements[i].value);
                if (!result) {
                    invalidFieldList += current_form.elements[i].id + " , ";
                    isFormValid = false;
                }
            }
        }
    }
    if (isFormValid) {
        return true;
    }
    else {
        notificationBar('danger', 'Invalid Data', invalidFieldList.toUpperCase(), 8000);
        return false;
    }
}

function checkASCIIValues(value) {
    var testASCII = /[^\x00-\x7F]/g;
    if (testASCII.test(value)) {
   //     console.log("Non ASCII Value Present");
        return true;
    }
    else {
       // console.log("Non ASCII Value Absent");
        return false;
    }

}

function IsValidUserName(fieldValue) {
    //alert(name);
    // var regExpString="/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\\?]/";
    var z1 = /[~^\x00-\x7F`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g;
    //var text=document.getElementById("UserName").value;
    if (z1.test(fieldValue)) {
        //console.log("Contains Special Characters");
        //notificationBar('warning','Warning', 'Text Field Contains Special Characters!!',4000);
        return false;
    }
    else {
        //console.log("Does Not Contain Specail Characters");
        return true;
    }
}
function checkSpecialCharacters(fieldValue) {
    //[^\x00-\x7F]
    var z1 = /[~`0-9^\x00-\x7F!#@$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g;
    if (z1.test(fieldValue)) {
      //  console.log("Contains Special Characters");
        return false;
    }
    else {
      //  console.log("Does Not Contain Special Characters");
        return true;
    }
}

function checkForInvalidPassword(fieldValue) {
    var invalidPassword = /[^\x00-\x7F]/g;
    if (invalidPassword.test(fieldValue)) {
        return false;
    }
    else {
        return true;
    }
}
function IsNumber(id, name) {
    var z1 = /^[0-9]*$/;
    var fieldValue = document.getElementById(id).value;
    if (z1.test(fieldValue)) {
       // console.log("Is Number");
        return true;
    }
    else {
       // console.log("Not A Number");
        notificationBar('warning', 'Warning', 'Number Field Contains Invalid Input', 4000);
        return false;
    }
}

function validateFormForASCII(form_id, validationErrorDiv) {

    $("#" + validationErrorDiv).html("");
    var ASCIIValuePresent = "";
    var fieldValues = "Fields with values :";
    var current_form = document.getElementById(form_id);
    $("#" + validationErrorDiv).html("");
    $("#" + validationErrorDiv).html(fieldValues + "</br>");
    for (var i = 0; i < current_form.elements.length; i++) {
        if (current_form.elements[i].type == "text") {
            if (checkASCIIValues(current_form.elements[i].value)) {
                fieldValues += current_form.elements[i].value + "</br>";
                ASCIIValuePresent = true;
            }
        }
    }
    if (ASCIIValuePresent) {
        $("#" + validationErrorDiv).html(fieldValues + "Have Invalid Data");
        $('#' + validationErrorDiv).show();
        return false;
    }
    else {
        return true;
    }
}

function roundNumber(num, dec) {
    return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
}

$('.wa1-tab-handler a').click(function() {
    var clickedTab = $(this).attr('id');
    $('.wa1-tab-handler a').removeClass('active');
    $(this).addClass('active');
    var status = $(this).attr('id').split('_')[1];
    $('#tabStatus').val(status);
    drawTableByFilter();
});