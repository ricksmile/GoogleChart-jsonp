/*!
* 描述:對應pagEmptyTest網頁相關JS程式
* 製作者:karl
*/


/*
*  -------------開機完自動執行------------------------
*/
$(function () {
    //$("table.datalist tr:nth-child(odd)").addClass("altrow");
        //----定義標籤要執行的方法
	    $('.example2').on('click', function () {
	        $.confirm({
	            title: 'Confirm!', 
                content: '<table class="table">'
                                   + '<caption>測試看看</caption>'
                                   +'<thead>'
                                     +' <tr>'
                                       +'  <th>名稱</th>'
                                         +'<th>城市</th>'
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
	//Descriptipn:產生對話視窗
	//Input說明:
	//Output說明:對話視窗
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

//Descriptipn:透過Jquery TinyMap 產生地圖
//Input說明:
//Output說明:查詢之Gridview
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
        error: function (result, status) {  // 如果?有上面的捕?出???行?里的回?函?
            if (status == 'error') {
                alert("Error" + ":" + result.responseText);
            }
        }
    });
};
//-------------getDataTable End------------------------