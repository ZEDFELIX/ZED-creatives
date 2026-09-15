(function(){
  try{
    var host = document.getElementById('site-header');
    if(!host){ return; }
    var words = 'ZED CREATIVES \u2726 BRAND \u2726 IDENTITY \u2726 WEB \u2726 MOTION \u2726 PACKAGING \u2726 PRINT \u2726 ' ;
    var copy = '';
    for(var i=0;i<5;i++){ copy += '<span>'+words+'<\/span>'; }
    var el = document.createElement('div');
    el.className = 'zed-marquee';
    el.setAttribute('aria-hidden','true');
    el.innerHTML = '<div class="zed-track">'+copy+'</div>';
    document.body.insertBefore(el, document.body.firstChild);
  }catch(e){}
})();