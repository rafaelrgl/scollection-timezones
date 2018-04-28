SCollectionApi.addRoute('getbyname', {
    authRequired: false
}, {
    post: {
        action: function() {
            var _this = this.bodyParams;
            var response = {};
            var errCode = 500;
            var data = [];
            response.statusCode = 200;
            if(_this.q){
                var query = {
                    $or: [
                        {name: { "$regex": _this.q, "$options": "i" }}
                    ]
                };
            }else{
                var query = { };
            }
            //console.log(JSON.stringify(query, null, 2));
            var options = {sort: { country_name : 1 }, limit: 10};

            scollection.TimeZones.find(query, options).forEach(function(item){
                data.push({text: item.name, id: item._id, data: item});
            });
            var count = scollection.TimeZones.find(query).count();
            response = {
                statusCode: 200,
                body: {
                    message: 'Query Succesfully',
                    data: data,
                    total_count: count
                }
            }
            return response;
        }
    }
});
