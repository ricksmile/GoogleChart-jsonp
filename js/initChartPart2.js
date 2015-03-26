google.load('visualization', '1.1', {
    'packages': ['table', 'map', 'bar', 'sankey', 'corechart']
});


$(document).ready(function () {
    

    //處理共用資料
    var url = 'https://spreadsheets.google.com/pub?key=1xf3o_CvvBcANf5JR2StP1rb0r90NcooGsZKFhx4ONrU&gid=1228445212';
    var query = new google.visualization.Query(url);
    query.send(getGeoData);
}); //end $(document).ready(function () {

//獲取共用資料
function getGeoData(data) {
    if (data.isError()) {
        alert('Error in query');
    }

    //建立物件
    var geoDataObj = new CreateGeoDataObj();

    //取得共同資料
    geoDataObj.geoData = data.getDataTable();

    //給底圖使用的座標資料
    var geoView = new google.visualization.DataView(geoDataObj.geoData);
    geoView.setColumns([0, 1]);

    //給表格使用的資料(未來)
    var geoTable = new google.visualization.DataView(geoDataObj.geoData);
    geoTable.setColumns([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,19,20,21,22,23,24,25,26]);

    //給圖表使用的資料(未來)
    var geoChart = new google.visualization.DataView(geoDataObj.geoData);
    geoChart.setColumns([4, 5, 6]);



    //建立表格
    var table = geoDataObj.createTableObj(geoTable, 'table_div');
    
    //建立地圖
    var map = geoDataObj.createMapObj(geoView, 'map_div');

    //建立人口折線圖
    geoDataObj.createSLineChartPopulationObj('新北市', geoTable, 'chart1_div');

    //建立人口折線圖下拉式選單
    selectCountyType(geoDataObj, geoTable, 'chart1_div');

    //建立人口圓餅圖
    geoDataObj.createPieChartPopulationObj(1,geoTable,'chart2_div');

    //建立人口圓餅圖下拉式選單
    selectPieChartType(geoDataObj,geoTable, 'chart2_div');
    

    //建立地圖觸發事件
    google.visualization.events.addListener(map, 'select', function () {
        var county = geoTable.getFormattedValue(map.getSelection()[0].row, 0);
        //觸發人口折線圖
        geoDataObj.createSLineChartPopulationObj(county, geoTable, 'chart1_div');
        //觸發表格
        table.setSelection(map.getSelection());

    });


    //建立表格觸發事件
    google.visualization.events.addListener(table, 'select', function () {
        var county = geoTable.getFormattedValue(table.getSelection()[0].row, 0);
        //觸發人口折線圖
        geoDataObj.createSLineChartPopulationObj(county, geoTable, 'chart1_div');
        //觸發地圖
        map.setSelection(table.getSelection());

    });

  

} //end getGeoData

//建立人口圓餅圖下拉式選單
function selectPieChartType(geoDataObj,geoTable, chartId) {
    $("#year_select").change(function () {
        //alert($('#year_select option:selected').val());
        var year = $('#year_select option:selected').val();
        geoDataObj.createPieChartPopulationObj(year, geoTable, chartId);
    });

} //end function selectPieChartType


//建立縣市下拉式選單
function selectCountyType(geoDataObj, geoTable, chartId) {
    $("#county_select").change(function () {
        var county = $('#county_select option:selected').text();
        geoDataObj.createSLineChartPopulationObj(county, geoTable, chartId);
    });

} //end function selectPieChartType




//https://spreadsheets.google.com/pub?key=1xf3o_CvvBcANf5JR2StP1rb0r90NcooGsZKFhx4ONrU
//DSS
//var url = 'https://spreadsheets.google.com/pub?key=1xf3o_CvvBcANf5JR2StP1rb0r90NcooGsZKFhx4ONrU&gid=2133606341';
    