$(function() {
    // 解決跨域同源的問題
    const cors = 'https://cors-anywhere.herokuapp.com/';
    $.ajax({
        //臺灣各縣市鄉鎮未來1週逐12小時天氣預報
        //locationName記得加上項目去篩選，否則一次撈取就是大批資料
        //請求資料的網址
        url:'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-005?Authorization=CWB-2B5A3C1B-45AC-4F0D-B605-B3560F30D7E6&elementName=T',
        //請求資料的方式(Ex:POST / GET / PUT...等)
        method: "GET",
        // 請求資料的類型(Ex:xml, json, script, or html...等)
        //不指定也可以
        dataType: "json",
        //rest自已取
        //data: 如果需要傳送資料出去時，則將資料設定在這裡
        success: function(res) {
            //res這個變數代表已傳入全部的資料
            console.log(res);


            // console.log("鄉鎮市為"+ res.records.locations[0].locationsName);
            // console.log("區為" + res.records.locations[0].location[0].locationName);
            // console.log("溫度為"+ res.records.locations[0].location[0].weatherElement[0].time[0].elementValue[0].value);

            $('#city_name').html(res.records.locations[0].locationsName);
            $('#district').html(res.records.locations[0].location[0].locationName);
            $('#tempture').html(res.records.locations[0].location[0].weatherElement[0].time[0].elementValue[0].value+'&#176;');


            //拆html架構
            //重復性的東西最好用vue
            let week = ['MON','TUE','WEN','THU','FRI'];
            //用反引號避免雙括號的問題
            const html1 = `<div class="d-flex flex-column block first-block">
            <small class="text-muted mb-0">`;
            const html2 = `</small><div class="text-center">
              <img class="symbol-img" src="`;
            const html3=`" /></div><h6><strong>`;
            const html4=`&#176;</strong></h6></div>`;

            //宣告一個空字串，儲存所有html
            let weather_html = '';
            //星期的陣列
            let j = 0 ;
            let icon = '';
            //迴圈取得溫度、圖片更換的判斷，組合成html
            for(let i=0; i < 10 ; i+=2 ){
                let tempture = res.records.locations[0].location[0].weatherElement[0].time[i].elementValue[0].value;
                //只有是或否的ＩＦ判斷，可以使用三元運算子
                icon = (tempture > 18) ? "https://i.imgur.com/Shrg84B.png" : "https://i.imgur.com/BeWfUuG.png";

                weather_html = weather_html + html1 + week[j] + html2 + icon + html3 +  tempture + html4;
                console.log(weather_html);
                $('#weekday').html(weather_html);
                //星期加1
                j++;
            }

        },
        error: function(err) {
            console.log(err);
        }})
    });
