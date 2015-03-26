//-------------getDataTable Start------------------------
//Descriptipn:透過Jquery TinyMap 產生地圖
//Input說明:
//Output說明:查詢之Gridview
function getDataTable(strSelectedID) {
    var strMethodName = "SearchAccount";
    //var strInput01 = $(this).val();
    var strInput01 = strSelectedID;
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
                var t = "<table id='member' class='CSSTableGenerator' width='400px'><tr>" +
	                               "<td><strong>ENTERPRISEID</strong></td> <td> " +
	                               "<strong>USERID</strong></td> <td> " +
	                               "<strong>USER_MASTER</strong></td><tr> ";
                $(result).find("resultTable").each(
                                function () {
                                    var strEnterpriseID = "", strUserID = "", strUserName = "";
                                    strEnterpriseID = $(this).find("ENTERPRISEID").text();
                                    strUserID = $(this).find("USERID").text();
                                    strUserName = $(this).find("USERNAME").text();
                                    t = t + "<tr><td>" + strEnterpriseID + "</td><td>" + strUserID + "</td><td>" + strUserName + "</td></tr>";
                                }
                            );
                t = t + " </table> ";
                $("#jsonDiv").html(t);
                
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


//-------------getMap start------------------------
//Descriptipn:透過Jquery TinyMap 產生地圖  
//Input說明:
//Output說明:Google地圖定位點      
function getMap() {
    var map = $('#map'),
            m = {};

    map.tinyMap({
        'center': { 'x': '225.04151536540612', 'y': '121.56354904174805' },
        'zoom': 14,
        'marker': [
                            {
                                'addr': ['25.04151536540612', '121.56354904174805'],
                                'text': '25.04151536540612, 121.56354904174805'
                            }
                        ],
        'event': {
            'idle': function () {

                // 取得 tinyMap instance
                m = map.data('tinyMap');

                // 取得 markers 及其 infoWindow
                var marker = m._markers[0] || {},
                infoWindow = marker.infoWindow || {};

                if ('function' === typeof infoWindow.open) {
                    // 開啟 infoWindow
                    infoWindow.open(m.map, marker);
                }
            }
        }
    });
};
//-------------getMap End------------------------
