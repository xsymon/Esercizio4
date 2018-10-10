var div = "#map",
            zoom = 5,
            width = "50%",
            height = "100%",
            lat,
            lng;

        RestModule.callRestService(function(json){
            ip = json.ip;
            lat = json.latitude;
            lng = json.longitude;

            $("#ip").text(ip);
            $("#json").text(JSON.stringify(json,null,2));

            map = MapHandler.createMap(div,43.222897,6.8444381,zoom,width,height);
            map.addMarker({
                lat,lng
            });
        });
        