/*

****************************************************************
*                   10.20.18 JKlos                             *
*  - Phase Two of Mountain Report. Below Code is functional    *
*  - Minimal Styling Applied and loop created to minimize code *
****************************************************************

var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
// var output = '';
// output  += "*******************<br>"
// output  += "* snow.items[2].resortName * <br>"
// res.send(output)
app.get('/', function (req, res) {
    var url = 'http://feeds.snocountry.net/conditions.php?apiKey=SnoCountry.example&ids=303014,303001,307008';

    request(url, function (err, response, body) {
        if(err){
            console.log('error:', error);
        } else {
            var output = '';
            var snow = JSON.parse(body);
            for (var i = 0; i < snow.items.length; i++) {
                var items  = snow.items[i];
                output += "*******************************************************";
                output += "<h1>" + items.resortName + "</h1>";
                output += "*******************************************************<br><br>";
                output += "Date of Report: " + items.reportDateTime + "<br>";
                output += "Operation Station: " + items.operatingStatus + "<br>";
                output += "Temperature-Low: " + items.weatherToday_Temperature_Low + "F<br>";
                output += "Temperature-High: " + items.weatherToday_Temperature_High + "F<br>";
                output += "Weather Conditions: " + items.weatherToday_Condition + "<br>";
                output += "Windspeed and Direction: " + items.weatherToday_WindSpeed + "mph " + items.weatherToday_WindDirection + "<br><br>";
                output += "<u>Snowfall Predictions</u><br>";
                //output += "~~~~~~~~~~~~~~~~~~~~~~~<br>"
                output += "Expected Snowfall in 24hrs: " + items.predictedSnowFall_24Hours + "in<br>";
                output += "Expected Snowfall in 48hrs: " + items.predictedSnowFall_48Hours + "in<br>";
                output += "Expected Snowfall in 72hrs: " + items.predictedSnowFall_72Hours + "in<br>";
                output += "Expected Snowfall in 7 days: " + items.predictedSnowFall_7days + "in<br><br><br>";

            }
            res.send(output);
        }
    });
})

var request = require('request');
var port = 3000;
app.listen(port, () => console.log('Example app listening on port ' + port)
);

****************************************************************
*             10.20.18 JKlos  Phase 2 End Code                 *
****************************************************************

*/







/*

****************************************************************
*                   10.01.18 JKlos  Phase 1 Start Code         *
*  - Phase One of Mountain Report. Below Code is functional    *
*  - Discovery API Phase and printing out results onto page    *
****************************************************************
*
var url = 'http://feeds.snocountry.net/conditions.php?apiKey=SnoCountry.example&ids=303014,303001,307008';

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
      var snow = JSON.parse(body);
      // for (var i = 0; i < snow.items.length; i++) {
      // 	var items  = snow.items[i];
      // 	console.log('The First resort is: ' + items[0].resortName );
//	console.log(items.resortName);
      //  }
      console.log('************************************');
      console.log('         Arapahoe Basin             ');
      console.log('************************************');
      console.log('Resort: ' + snow.items[0].resortName);
      console.log('Temperature-Low: ' + snow.items[0].weatherToday_Temperature_Low + 'F');
      console.log('Temperature-High: ' + snow.items[0].weatherToday_Temperature_High + 'F');
      console.log('Weather Conditions: ' + snow.items[0].weatherToday_Condition);
      console.log('Windspeed and Direction : ' + snow.items[0].weatherToday_WindSpeed + 'mph, ' + snow.items[0].weatherToday_WindDirection );
      console.log('~~~~~~~~~~~~~~~~~~~~~')
      console.log('   SNOW BABY SNOW');
      console.log('~~~~~~~~~~~~~~~~~~~~~');
      console.log('Total Snowfall Not available with API');
      console.log('Expected Snowfall in 24hrs: ' + snow.items[0].predictedSnowFall_24Hours + ' in');
      console.log('Expected Snowfall in 48hrs: ' + snow.items[0].predictedSnowFall_48Hours + ' in');
      console.log('Expected Snowfall in 72hrs: ' + snow.items[0].predictedSnowFall_72Hours + ' in');
      console.log('Expected Snowfall in 7 days: ' + snow.items[0].predictedSnowFall_7days + ' in');
      console.log ('');
      console.log ('');
      console.log('************************************');
      console.log('         Keystone            ');
      console.log('************************************');
      console.log('Resort: ' + snow.items[1].resortName);
      console.log('Temperature-Low: ' + snow.items[1].weatherToday_Temperature_Low + 'F');
      console.log('Temperature-High: ' + snow.items[1].weatherToday_Temperature_High + 'F');
      console.log('Weather Conditions: ' + snow.items[1].weatherToday_Condition);
      console.log('Windspeed and Direction : ' + snow.items[1].weatherToday_WindSpeed + 'mph, ' + snow.items[1].weatherToday_WindDirection );
      console.log('~~~~~~~~~~~~~~~~~~~~~')
      console.log('   SNOW BABY SNOW');
      console.log('~~~~~~~~~~~~~~~~~~~~~');
      console.log('Total Snowfall Not available with API');
      console.log('Expected Snowfall in 24hrs: ' + snow.items[1].predictedSnowFall_24Hours + ' in');
      console.log('Expected Snowfall in 48hrs: ' + snow.items[1].predictedSnowFall_48Hours + ' in');
      console.log('Expected Snowfall in 72hrs: ' + snow.items[1].predictedSnowFall_72Hours + ' in');
      console.log('Expected Snowfall in 7 days: ' + snow.items[1].predictedSnowFall_7days + ' in');
      console.log ('');
      console.log ('');
      console.log('************************************');
      console.log('         Jackson Hole            ');
      console.log('************************************');
      console.log('Resort: ' + snow.items[2].resortName);
      console.log('Temperature-Low: ' + snow.items[2].weatherToday_Temperature_Low + 'F');
      console.log('Temperature-High: ' + snow.items[2].weatherToday_Temperature_High + 'F');
      console.log('Weather Conditions: ' + snow.items[2].weatherToday_Condition);
      console.log('Windspeed and Direction : ' + snow.items[2].weatherToday_WindSpeed + 'mph, ' + snow.items[1].weatherToday_WindDirection );
      console.log('~~~~~~~~~~~~~~~~~~~~~')
      console.log('   SNOW BABY SNOW');
      console.log('~~~~~~~~~~~~~~~~~~~~~');
      console.log('Total Snowfall Not available with API');
      console.log('Expected Snowfall in 24hrs: ' + snow.items[2].predictedSnowFall_24Hours + ' in');
      console.log('Expected Snowfall in 48hrs: ' + snow.items[2].predictedSnowFall_48Hours + ' in');
      console.log('Expected Snowfall in 72hrs: ' + snow.items[2].predictedSnowFall_72Hours + ' in');
      console.log('Expected Snowfall in 7 days: ' + snow.items[2].predictedSnowFall_7days + ' in');
      console.log ('');
      console.log ('');
  }
});
****************************************************************
*           10.01.18 JKlos  Phase 1 End Code                   *
****************************************************************
*/


