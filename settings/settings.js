function extractDomain(url) { // thanks, lewdew http://stackoverflow.com/a/23945027/1444191
    var domain;
    //find & remove protocol (http, ftp, etc.) and get domain
    if (url.indexOf("://") > -1) {
        domain = url.split('/')[2];
    }
    else {
        domain = url.split('/')[0];
    }

    //find & remove port number
    domain = domain.split(':')[0];

    return domain;
}


$(function(){

  chrome.tabs.getSelected(null, function (tab){

      if (!tab) return;

      if ( typeof Cookies.get('unblocked') === 'undefined'){
        Cookies.set('unblocked', false)
      };

      if ( Cookies.get('unblocked') ){
        $("#unblock-site").html(location).click( function(){
          Cookies.set('unblocked', true);
          location.reload();
        });
        console.log("blocked!");
      } else {
        $("#unblock-site").html("Unblock this site!").click( function(){
          Cookies.set('unblocked', false);
          location.reload();
        });
        console.log("unblocked!");
      };

  });
})
