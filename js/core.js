
    function core(url){
        this.url = url;
        this.responseData={};
        return this;
    };
    
    core.prototype.post = function(data){
        var request = $.ajax({
          type: "POST",
          contentType: "application/json",
          url: this.url,
          data: JSON.stringify(data)
        });
 
        return request;
    };