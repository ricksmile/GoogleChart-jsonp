/*!
* �y�z:����pagEmptyTest��������JS�{��
* �s�@��:karl
*/


/*
*  -------------�}�����۰ʰ���------------------------
*/
$(function () {
    //$("table.datalist tr:nth-child(odd)").addClass("altrow");
        //----�w�q���ҭn���檺��k
	    $('.example2').on('click', function () {
	        $.confirm({
	            title: 'Confirm!', 
                content: '<table class="table">'
                                   + '<caption>���լݬ�</caption>'
                                   +'<thead>'
                                     +' <tr>'
                                       +'  <th>�W��</th>'
                                         +'<th>����</th>'
                                     +' </tr>'
                                  +' </thead>'
                                  +' <tbody>'
                                    +'  <tr>'
                                       +'  <td>Tanmay</td>'
                                      +'   <td>Bangalore</td>'
                                     +' </tr>'
                                    +'  <tr>'
                                       +'  <td>Sachin</td>'
                                      +'   <td>Mumbai</td>'
                                    +'  </tr>'
                                  +' </tbody>'
                                +'</table>',
	            confirm: function () {
	                alert('the user clicked confirm');
	            },
	            cancel: function () {
	                alert('the user clicked cancel')
	            },
	            animation: 'rotatey'
	        });
	    });
	});


	/*
	*  -------------function------------------------
	*/
	//Descriptipn:���͹�ܵ���
	//Input����:
	//Output����:��ܵ���
	function bbb(str1) {	
	        $.confirm({
	            title: 'Confirm2222!',
	            content: 'Confirm! Confirm! Confirm!22222',
	            confirm: function () {
	                alert('the user clicked confirm');
	            },
	            cancel: function () {
	                alert('the user clicked cancel')
	            }	     
	    });
	}

//Descriptipn:�z�LJquery TinyMap ���ͦa��
//Input����:
//Output����:�d�ߤ�Gridview
function getDataTable() {
    var strMethodName = "SearchAccount";
    //var strInput01 = $(this).val();
    var strInput01 = "";
    var strInput02 = "";
    var strInput03 = "";
    var strInput04 = "";
    var strInput05 = "";
    var strInput06 = "";
    var strInput07 = "";
    var strInput08 = "";
    var strInput09 = "";
    var strInput10 = "";
    $.ajax({
        type: 'POST',
        datType: "xml",
        url: $("#hfdBaseWebServiceURL").val(),
        data: 'strMethodName=' + strMethodName
                        + '&strInput01=' + strInput01
                        + '&strInput02=' + strInput02
                        + '&strInput03=' + strInput03
                        + '&strInput04=' + strInput04
                        + '&strInput05=' + strInput05
                        + '&strInput06=' + strInput06
                        + '&strInput07=' + strInput07
                        + '&strInput08=' + strInput08
                        + '&strInput09=' + strInput09
                        + '&strInput10=' + strInput10,
        success: function (result) {
            try {
                var t = '<div class="panel panel-default"> '
				      + '<div class="panel-heading">'
					  + '<h3 class="panel-title">'
				      +	'	Panel title'
					  + ' </h3>'
				      + '</div>'
				      + '<div class="panel-body">';
                $(result).find("resultTable").each(
                                function () {
                                    var strEnterpriseID = "", strUserID = "", strUserName = "";
                                    strEnterpriseID = $(this).find("ENTERPRISEID").text();
                                    strUserID = $(this).find("USERID").text();
                                    strUserName = $(this).find("USERNAME").text();
                                    t = t + strUserID + "[" +  strUserName + "]<p>";
                                }
                            );
                t = t + '</div>' +
				      + '<div class="panel-footer">'
					  + 'Panel footer'
				      + '</div>'
			          + '</div>';
                $("#page2").html(t);

            }
            catch (e) {
                alert(e);
                return;
            }
        },
        error: function (result, status) {  // �p�G?���W������?�X???��?�����^?��?
            if (status == 'error') {
                alert("Error" + ":" + result.responseText);
            }
        }
    });
};
//-------------getDataTable End------------------------