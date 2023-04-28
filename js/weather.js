


$(function() {
    const cors = 'https://cors-anywhere.herokuapp.com/';
    $.ajax({
        // url:'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-005?Authorization=CWB-2B5A3C1B-45AC-4F0D-B605-B3560F30D7E6&format=JSON&locationName=%E6%A1%83%E5%9C%92%E5%B8%82&elementName=',
        url:'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-005?Authorization=CWB-2B5A3C1B-45AC-4F0D-B605-B3560F30D7E6&elementName=T',
        method: "GET",
        dataType: "json",
        success: function(res) {



            console.log(res);


            // day
            Today = new Date();
            yy = Today.getFullYear();
            mm = Today.getMonth()+1;
            dd = Today.getDate();
            TodayHTML = mm+"/"+dd;

            tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate()+1);
            tomorrow_mm = tomorrow.getMonth()+1;
            tomorrow_dd = tomorrow.getDate();
            tomorrow_html = tomorrow_mm + "/" + tomorrow_dd;

            day_after_tomorrow = new Date();
            day_after_tomorrow.setDate(day_after_tomorrow.getDate()+2);
            day_after_tomorrow_mm = day_after_tomorrow.getMonth()+1;
            day_after_tomorrow_dd = day_after_tomorrow.getDate();
            day_after_tomorrow_html = day_after_tomorrow_mm + "/" + day_after_tomorrow_dd;

            three_day = [TodayHTML,tomorrow_html,day_after_tomorrow_html];

            // console.log(day_after_tomorrow_html);
            // console.log(tomorrow_html);
            // console.log(TodayHTML);
            
            html1 = `<div id="day">`;
            html2 = `</div><div id="weather">`;
            html3 = `</div><div id="temperature">`;
            html4 = `&#176;</div>`;

            for(let t =0;t<2;t++){
            // 取日期字串
            location_m = (res.records.locations[0].location[0].weatherElement[0].time[t].dataTime).substr(6, 1);
            location_d = (res.records.locations[0].location[0].weatherElement[0].time[t].dataTime).substr(8, 2);
            location = location_m + "/" + location_d;
            // 取時間字串
            location_time = (res.records.locations[0].location[0].weatherElement[0].time[t].dataTime).substr(-7, 2);

       
        }
            

            let forecast_html = "";
            let j = 0;

            for(let i=0; i < 3 ; i++ ){
                
                forecast_html = forecast_html + html1 + three_day[j] + html2 + html3 + html4;
                $('#forecast').html(forecast_html);
                j++;
            }

        },
        error: function(err) {
            console.log(err);
        }})
    });
