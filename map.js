var MapHandler = function (){
 
    function createMap(container,latitude,longitude,zoomIn,width,height){
            map = new GMaps({
                    div:container,
                    lat:latitude,
                    lng:longitude,
                    zoom: zoomIn,
                    width: width,
                    height: height 
            });
            return map;
    };

    return{
            createMap : createMap
    }
}();