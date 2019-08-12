/*
*****************************************************************
*                   10.23.18 JKlos                              *
*  - Phase Three of Mountain Report. Below code is functional   *
*  - Bootstrap CSS Styling Applied. Data aggregated into tables *
*  - Read Only Page. Cannot Choose what mountains to display    *
*  - No Null Handling. Page is not interactive                  *
*****************************************************************
* */

//MEAN STACK !!!
var express = require('express')
var app = express()

app.get('/', function (req, res) {
    //30314 = Keystone
    //303001 = Arapahoe Basin
    //303007 = Breckenridge
    //307008 = Jackson Hole Mountain Resort
    //303023 = Vail Mountaiode n Resort
    //URL to see all CO IDs http://feeds.snocountry.net/getResortList.php?apiKey=SnoCountry.exnoample&states=co
    // Change the state above to see other states
    var url = 'http://feeds.snocountry.net/conditions.php?apiKey=SnoCountry.example&ids=307008,303023,303007';

    request(url, function (err, response, body) {
        if(err){
            console.log('error:', error);
        } else {
            var output = '';
            var snow = JSON.parse(body);
            output += "<html lang=\"en\"> " +
                " <head> " +
                    "<meta charset=\"utf-8\">" +
                    "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">" +
                     <!-- Bootstrap CSS -->
                     "<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" integrity=\"sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB\" crossorigin=\"anonymous\">" +
                     "<title> Mountain Report </title>" +
                "</head>";

            for (var i = 0; i < snow.items.length; i++) {
                var items  = snow.items[i];

                if(items.openDownHillTrails = null){
                    items.openDownHillTrails = 'NONE';
                }

                output +=
                    " <body>" +
                        "<div class=\"container pt-3\">" +
                        "<div class=\"card\"> "+
                        "<div class=\"card-body\">";

                output +=
                    //"<h1>" + items.resortName + "</h1>" +
                    "<h1>" + "<a target=\"_blank\" href=" + items.webSiteLink + ">" + items.resortName + "</a>"  + "</h1>" +
                    //"<h1>" + "<a href=\"google.com\" Primary link</a>" + "</h1>" +
                    "<table class=\"table table-bordered table-striped table-hover \">" +
                        "<thead <tr class=\"table-info\">" +
                            "<th scope=\"col\">Status</th>\n" +
                            "<th scope=\in>  Location   </th>\n" +
                            "<th scope=\"col\">Trails Open</th>\n" +
                            "<th scope=\"col\">Lifts Open</th>\n" +
                            "<th scope=\"col\">Last Snow Date</th>\n" +
                            "<th scope=\"col\">Last Snow Amount</th>\n" +
                            "<th scope=\"col\">resortType</th>\n" +
                        "</thead>" +
                        "<tr>" +
                            "<td>" + items.operatingStatus + "</td>" +
                            "<td>" + items.state + ", " + items.country + "</td>" +
                            "<td>" + items.openDownHillTrails +"</td>" +
                            "<td>" + items.openDownHillLifts +"</td>" +
                            "<td>" + items.lastSnowFallDate + "</td>" +
                            "<td>" + items.lastSnowFallAmount +  "in</td>" +
                            "<td>" + items.resortType + "</td>" +
                        "</tr>" +
                    "</table>";

                output += "<h5> Predicted Snowfall Report: </h5>";

                output +=
                    "<table class=\"table table-bordered table-striped table-hover \">" +
                        "<thead class=\"table-primary\">" +
                            "<th scope=\"col\">24 Hours</th>\n" +
                            "<th scope=\"col\">48 Hours</th>\n" +
                            "<th scope=\"col\">72 Hours</th>\n" +
                            "<th scope=\"col\">7 Days</th>\n" +
                            "<th scope=\"col\">Base Depth</th>\n" +
                            "<th scope=\"col\">Season Total</th>\n" +
                        "</thead>" +
                        "<tr>" +
                            "<td>" + items.predictedSnowFall_24Hours + "in" + "</td>" +
                            "<td>" + items.predictedSnowFall_48Hours + "in" + "</td>" +
                            " <td>" + items.predictedSnowFall_72Hours + "in" + "</td>" +
                            " <td>" + items.predictedSnowFall_7days + "in" + "</td>" +
                            " <td>" + items.avgBaseDepthMax + "in" + "</td>" +
                            " <td>" + items.seasonTotal + "in" + "</td>" +
                        "</tr>" +
                    "</table>";

                output += "<h5> 5 Day Temperature Report: </h5>";

                output +=
                    "<table class=\"table table-bordered table-striped table-hover \">" +
                        "<caption>Date of Report: "+ items.reportDateTime + "</caption>" +
                        "<thead class=\"table-warning\">" +
                            "<th scope=\"col\">Condition - Day</th>\n" +
                            "<th scope=\"col\">Day 1 (Of Report)</th>\n" +
                            "<th scope=\"col\">Day 2</th>\n" +
                            "<th scope=\"col\">Day 3</th>\n" +
                            "<th scope=\"col\">Day 4</th>\n" +
                            "<th scope=\"col\">Day 5</th>\n" +
                        "</thead>" +
                        "<tr>" +
                            "<th> Temperature Low </th>" +
                                "<td>" + items.weatherToday_Temperature_Low + "&#186;F</td>" +
                                "<td>" + items.weatherTomorrow_Temperature_Low + "&#186;F</td>" +
                                "<td>" + items.weatherDayAfterTomorrow_Temperature_Low + "&#186;F</td>" +
                                "<td>" + items.weatherDay4_Temperature_Low + "&#186;F</td>" +
                                "<td>" + items.weatherDay5_Temperature_Low + "&#186;F</td>" +
                        "</tr>" +
                        "<tr>" +
                            "<th> Temperature High </th>" +
                                "<td>" + items.weatherToday_Temperature_High + "&#186;F</td>" +
                                "<td>" + items.weatherTomorrow_Temperature_High + "&#186;F</td>" +
                                "<td>" + items.weatherDayAfterTomorrow_Temperature_High + "&#186;F</td>" +
                                "<td>" + items.weatherDay4_Temperature_High + "&#186;F</td>" +
                                "<td>" + items.weatherDay5_Temperature_High + "&#186;F</td>" +
                        "</tr>" +
                        "<tr>" +
                            "<th> Temperature Condition </th>" +
                                "<td>" + items.weatherToday_Condition + "</td>" +
                                "<td>" + items.weatherTomorrow_Condition + "</td>" +
                                "<td>" + items.weatherDayAfterTomorrow_Condition + "</td>" +
                                "<td>" + items.weatherDay4_Condition + "</td>" +
                                "<td>" + items.weatherDay5_Condition + "</td>" +
                        "</tr>" +
                        "<tr>" +
                            "<th> Windspeed </th>" +
                                "<td>" + items.weatherToday_WindSpeed + "mph " + items.weatherToday_WindDirection + "</td>" +
                                "<td>" + items.weatherTomorrow_WindSpeed + "mph " + items.weatherToday_WindDirection +  "</td>" +
                                "<td>" + items.weatherDayAfterTomorrow_WindSpeed + "mph " + items.weatherToday_WindDirection +  "</td>" +
                                "<td>" + items.weatherDay4_WindSpeed + "mph " + items.weatherToday_WindDirection +  "</td>" +
                                "<td>" + items.weatherDay5_WindSpeed + "mph " + items.weatherToday_WindDirection +  "</td>" +
                        "</tr>" +
                    "</table>";

                output +=
                        "</div> <!-- card-body -->" +
                        "</div> <!-- card -->" +
                        "</div> <!-- container -->" +
                    "</body>" ;
            }
            output += "</html>";

            res.send(output);
        }
    });
})

var request = require('request');
var port = 3000;
app.listen(port, () => console.log('Example app listening on port ' + port)
);

// ****************************************************************
// *           10.23.18 JKlos  Phase 3 End Code                   *
// ****************************************************************
