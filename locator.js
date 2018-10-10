/*$.getScript("ipLookup.js");
$.getScript("map.js");*/

var div = $("#map"),
            zoom = 5,
            width = "100%",
            height = "50%";

        RestModule.callRestService(function(json){
            ip = json.ip;
            lat = json.latitude;
            lng = json.longitude;

        $("#ip").text(ip);
        $("#json").text(JSON.stringify(json,null,2));
        });
        console.log(width);
        /*map = MapHandler.createMap(div,43.222897,6.8444381,zoom,width,height);*/
        var map = new GMaps({
            div:$(".col-md-6#map"),
            lat:'43.222897',
            lng:'6.8444381',
            zoom: zoom,
            width: width,
            height: height
            });
        map.addMaker(lat,lng);