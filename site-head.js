
document.addEventListener('DOMContentLoaded',function(){
 function fixArrows(){[].slice.call(document.querySelectorAll('.focus-arrow,#snpf .ar,.snpf-card .ar')).forEach(function(a){var t=a.textContent;if(t&&t.indexOf('︎')<0)a.textContent=t.replace(/\s+$/,'')+'︎';});}
 function fixP3(){
  var sup=window.CSS&&CSS.supports&&CSS.supports('color','color(display-p3 0 0 0)');
  var P=sup?'color(display-p3 0 .75 1)':'#00BFF2';
  [].slice.call(document.querySelectorAll('.hero-display em,.section-title em,.final-display em,.sn-pf-display em,.sn-pf-final-display em,.page-headline em,.t-headline em,.sn-t-careers p em,.focus-arrow,.sn-ab-big em')).forEach(function(e){e.style.setProperty('color',P,'important');});
 }
 function run(){fixArrows();fixP3();}
 run();setTimeout(run,1200);setTimeout(run,3000);
 try{new MutationObserver(function(){run();}).observe(document.body,{childList:true,subtree:true});}catch(e){}
});
