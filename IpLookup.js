var RestModule = function () {
    var jsonURL = "http://api.ipstack.com/check?access_key=69831435fe030d57806f11e629aff841";
    
    function callRestService(successFn) {
        $.getJSON(jsonURL, successFn);
    }
    
    return {
        callRestService: callRestService
    }
}();
