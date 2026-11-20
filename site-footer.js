
(function(){
window.SN_X_SVG='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';
window.SN_LI_SVG='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM3.2 21.5h3.5V9.2H3.2v12.3zM9.4 9.2h3.35v1.68h.05c.47-.88 1.6-1.8 3.3-1.8 3.53 0 4.18 2.32 4.18 5.34v6.58h-3.5v-5.83c0-1.39-.03-3.18-1.94-3.18-1.94 0-2.24 1.52-2.24 3.08v5.93H9.4V9.2z"/></svg>';
window.SN_SOCIAL_HTML='<a href="https://x.com/samsungnext" target="_blank" rel="noopener" aria-label="X">'+window.SN_X_SVG+'</a><a href="https://linkedin.com/company/samsung-next" target="_blank" rel="noopener" aria-label="LinkedIn">'+window.SN_LI_SVG+'</a>';
})();

;

(function(){function add(){if(document.querySelector('.sn-gfooter'))return;var w=document.createElement('div');w.innerHTML="<footer class='sn-gfooter'><div class='sn-gf-inner'><div class='sn-gf-top'><div class='sn-gf-brand'><a href='/' class='sn-gf-logo'><img src='https://cdn.prod.website-files.com/69ab197ca148d582724c4ac3/69ec0010a1e9924e6f92aed4_imgi_1_next_stacked_blk_lb_2c.png' alt='Samsung Next' style='height:26px;width:auto'></a><p class='sn-gf-tag'>Corporate venture capital at the intersection of bold founders and Samsung's global ecosystem. Mountain View, CA.</p><div class='sn-gf-social'>"+window.SN_SOCIAL_HTML+"</div></div><div class='sn-gf-col'><h4>Company</h4><a href='/'>About</a><a href='/team'>Team</a><a href='/portfolio'>Portfolio</a><a href='/careers'>Careers</a></div><div class='sn-gf-col'><h4>Sectors</h4><a href='/portfolio'>AI</a><a href='/portfolio'>Services</a><a href='/portfolio'>Health Tech</a><a href='/portfolio'>Robotics</a><a href='/portfolio'>Frontier</a></div><div class='sn-gf-col'><h4>Connect</h4><a href='https://x.com/samsungnext' target='_blank' rel='noopener'>X</a><a href='https://linkedin.com/company/samsung-next' target='_blank' rel='noopener'>LinkedIn</a><a href='/blog'>What's Next (Blog)</a></div></div><div class='sn-gf-bottom'><span>Copyright Samsung</span><span class='sn-gf-legal'><a href='/do-not-sell'>Do Not Sell My Information</a><a href='/legal'>Legal</a><a href='/privacy'>Privacy</a><a href='/careers'>Careers</a></span></div></div></footer>";document.body.appendChild(w.firstElementChild);}if(document.readyState!=='loading')add();else document.addEventListener('DOMContentLoaded',add);})();

;

(function(){function go(){
 if(!document.querySelector('.sn-top')){var b=document.createElement('button');b.className='sn-top';b.setAttribute('aria-label','Back to top');b.innerHTML='↑';b.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});document.body.appendChild(b);var upd=function(){b.classList.toggle('show',(window.scrollY||0)>600);};window.addEventListener('scroll',upd,{passive:true});upd();}
 if(!document.querySelector('.sn-mbtn')){var mb=document.createElement('button');mb.className='sn-mbtn';mb.setAttribute('aria-label','Menu');mb.innerHTML='≡';var ov=document.createElement('div');ov.className='sn-mnav';ov.innerHTML='<a class="sn-mnav-logo" href="/" aria-label="Samsung Next"><img src="https://cdn.prod.website-files.com/69ab197ca148d582724c4ac3/69ec0010a1e9924e6f92aed4_imgi_1_next_stacked_blk_lb_2c.png" alt="Samsung Next" style="height:24px;width:auto"></a><a href="/">Home</a><a href="/portfolio">Portfolio</a><a href="/team">Team</a><a href="/blog">Blog</a><a href="/careers">Join us</a><div class="sn-mnav-social">'+window.SN_SOCIAL_HTML+'</div><div class="sn-mnav-meta">SAMSUNG NEXT · MOUNTAIN VIEW, CA</div>';document.body.appendChild(ov);document.body.appendChild(mb);mb.addEventListener('click',function(){var open=ov.classList.toggle('open');mb.innerHTML=open?'×':'≡';});}
}if(document.readyState!=='loading')go();else document.addEventListener('DOMContentLoaded',go);setTimeout(go,800);})();

;

(function(){function go(){var vh=innerHeight||800;var els=[].slice.call(document.querySelectorAll('.section-head,.focus-cell,.pillar,.approach-card,.t-card,.t-shead,.c-pt,.sn-gf-col,.sn-pf-stat,.transmission,.tx-body,.final-display,.hero-stat'));var io=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add('sn-in');io.unobserve(e.target);}});},{threshold:.1,rootMargin:'0px 0px -6% 0px'});els.forEach(function(el){if(el.getBoundingClientRect().top>vh*0.82){el.classList.add('sn-rv');io.observe(el);}});function cu(el){if(el.getAttribute('data-cu'))return;el.setAttribute('data-cu','1');var txt=el.textContent.trim();var m=txt.match(/^(\D*)([\d.,]+)(\D*)$/);if(!m)return;var pre=m[1],raw=m[2].replace(/,/g,''),num=parseFloat(raw),suf=m[3],dec=(raw.split('.')[1]||'').length,st=null;function step(ts){st=st||ts;var p=Math.min((ts-st)/1300,1),e=1-Math.pow(1-p,3),v=num*e;el.textContent=pre+(dec?v.toFixed(dec):Math.round(v).toLocaleString())+suf;if(p<1)requestAnimationFrame(step);else el.textContent=txt;}requestAnimationFrame(step);}var io2=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){cu(e.target);io2.unobserve(e.target);}});},{threshold:.6});[].slice.call(document.querySelectorAll('.hero-stat .num,.stat-num,.sn-pf-stat-num,.sn-ab-big')).forEach(function(el){if(/\d/.test(el.textContent))io2.observe(el);});}if(document.readyState!='loading')go();else document.addEventListener('DOMContentLoaded',go);setTimeout(go,900);})();

;

(function(){function go(){[].slice.call(document.querySelectorAll('.final,.sn-pf-final,.sn-fw-host')).forEach(function(f){if(f.getAttribute('data-gb'))return;f.setAttribute('data-gb','1');f.addEventListener('pointermove',function(e){var r=f.getBoundingClientRect();var px=(e.clientX-r.left)/r.width*100,py=(e.clientY-r.top)/r.height*100;f.style.setProperty('--mx',px.toFixed(1)+'%');f.style.setProperty('--my',py.toFixed(1)+'%');f.style.setProperty('--mxp',px.toFixed(1));f.style.setProperty('--myp',py.toFixed(1));f.style.setProperty('--glow','1');});f.addEventListener('pointerleave',function(){f.style.setProperty('--glow','0');f.style.setProperty('--mxp','50');f.style.setProperty('--myp','50');});});}if(document.readyState!=='loading')go();else document.addEventListener('DOMContentLoaded',go);setTimeout(go,900);})();

;

(function(){
function fixNav(){
 var rn=document.querySelector('body > .sn-root-nav');
 if(rn&&document.body.firstElementChild!==rn){try{document.body.insertBefore(rn,document.body.firstChild);}catch(e){}}
 [].slice.call(document.querySelectorAll('.sn-nav-inner')).forEach(function(inner){var s=inner.querySelector('.sn-nav-social');if(!s){s=document.createElement('div');s.className='sn-nav-social';inner.appendChild(s);}if(!s.querySelector('svg'))s.innerHTML=window.SN_SOCIAL_HTML;});}
function finZoom(){
 if(window.SN_FZ)return;window.SN_FZ=1;
 function upd(){var vh=innerHeight||800;
  [].slice.call(document.querySelectorAll('.final,.sn-pf-final')).forEach(function(sec){var el=sec.querySelector('.final-display,.sn-pf-final-display');if(!el)return;var r=sec.getBoundingClientRect();var p=Math.min(1,Math.max(0,(vh-r.top)/(vh*0.85)));el.style.transform='scale('+(1.7-0.7*p).toFixed(4)+')';sec.style.setProperty('--fzp',p.toFixed(3));});
 }
 window.addEventListener('scroll',upd,{passive:true});window.addEventListener('resize',upd,{passive:true});upd();
}
function secByLabel(word){var re=new RegExp(word,'i');return [].slice.call(document.querySelectorAll('.section')).filter(function(s){var l=s.querySelector('.section-eyebrow .label');return l&&re.test(l.textContent);})[0];}
window.SN_ALIGN_HERO=function(ebSel){if(innerWidth<=900)return;var te=document.querySelector(ebSel);var th=document.querySelector('h1');if(!te||!th||te.getAttribute('data-gap'))return;te.setAttribute('data-gap','1');var d1=100-Math.round(te.getBoundingClientRect().top+(window.scrollY||0));if(Math.abs(d1)>3){te.style.marginTop=((parseFloat(getComputedStyle(te).marginTop)||0)+d1)+'px';}var gap=Math.round(th.getBoundingClientRect().top-te.getBoundingClientRect().top);var d2=56-gap;if(Math.abs(d2)>3){th.style.paddingTop=((parseFloat(getComputedStyle(th).paddingTop)||0)+d2)+'px';}};
window.SN_HERO_GAP=function(hsels,ns,t){var n=document.querySelector(ns);if(!n||n.getAttribute('data-hg'))return;var hb=null;hsels.forEach(function(s){[].slice.call(document.querySelectorAll(s)).forEach(function(e){var b=e.getBoundingClientRect().bottom;if(hb==null||b>hb)hb=b;});});if(hb==null)return;n.setAttribute('data-hg','1');var tt=innerWidth<=760?Math.round(t*0.66):t;var d=tt-Math.round(n.getBoundingClientRect().top-hb);if(Math.abs(d)>2)n.style.marginTop=((parseFloat(getComputedStyle(n).marginTop)||0)+d)+'px';};
window.SN_MARQ_BUILD=function(list,hl){
 var m=document.querySelector('.sn-marq');if(!m||!list||!list.length)return;
 var arr=list.slice(0);while(arr.length<24){arr=arr.concat(list);}arr=arr.slice(0,28);
 var span=arr.map(function(it){var nm=it.n.toUpperCase().replace(/&/g,'&amp;').replace(/</g,'&lt;');var cl=hl?' class="hl"':'';if(it.w)return '<a href="'+it.w+'" target="_blank" rel="noopener"'+cl+'>'+nm+'</a>';return '<span'+cl+'>'+nm+'</span>';}).join('<span class="sep">·</span>');
 var half='<span class="sep">·</span>'+span;
 m.querySelector('.track').innerHTML=half+half;
};
window.SN_CHIP_PAINT=function(x,on){if(on){x.style.setProperty('background','#00B3E3','important');x.style.setProperty('border-color','#00B3E3','important');x.style.setProperty('color','#fff','important');}else{x.style.removeProperty('background');x.style.removeProperty('border-color');x.style.removeProperty('color');}};
function fixHome(){
 var hd=document.querySelector('.hero-display');
 if(hd&&!hd.getAttribute('data-v3')){hd.innerHTML='The <em>next</em><br>big thing<br>starts here.';hd.setAttribute('data-v3','1');}
 var q2=document.querySelector('.hero-q2');
 if(q2&&q2.getAttribute('data-chips')!=='2'){q2.innerHTML='350+ investments across <button class="sn-chip" data-s="AI">AI</button><button class="sn-chip" data-s="Robotics">Robotics</button><button class="sn-chip" data-s="Health Tech">Health Tech</button><button class="sn-chip" data-s="Services">Services</button><button class="sn-chip" data-s="Frontier">Frontier Tech</button>.<br>Every one of them, a bet on the next big thing.';q2.setAttribute('data-chips','2');}
 var hero0=document.querySelector('.hero');
 if(hero0&&!hero0.querySelector('.sn-hero-bg')){
  var bgw=document.createElement('div');bgw.className='sn-hero-bg';
  try{var cnv=document.createElement('canvas');cnv.width=140;cnv.height=140;var cx=cnv.getContext('2d');var im=cx.createImageData(140,140);for(var gi=0;gi<im.data.length;gi+=4){im.data[gi]=34;im.data[gi+1]=30;im.data[gi+2]=31;im.data[gi+3]=Math.random()<0.5?Math.floor(Math.random()*16):0;}cx.putImageData(im,0,0);var gr=document.createElement('div');gr.className='sn-grain';gr.style.backgroundImage='u'+'rl('+cnv.toDataURL()+')';bgw.appendChild(gr);}catch(e){}
  hero0.insertBefore(bgw,hero0.firstChild);
 }
 var hb=document.querySelector('.hero-bottom');
 if(!document.querySelector('.sn-about-sec')){
  var hero=document.querySelector('.hero');
  if(hero&&hb){
   var lede=hb.querySelector('.hero-lede');
   var ledeTxt=lede?lede.textContent:'Samsung Next is the corporate venture arm of Samsung Electronics. We back founders building the technologies that will define the next decade.';
   var asec=document.createElement('section');asec.className='section sn-about-sec';
   asec.innerHTML='<div class="shell"><div class="section-head"><div class="section-eyebrow"><span class="dot"></span><span class="label">01 / About</span></div><div><h2 class="section-title">Built inside Samsung.<br><em>Investing beyond it.</em></h2><p class="section-sub"></p></div></div><div class="sn-ab-grid"><div class="pillar"><div class="pillar-num">01</div><div class="sn-ab-big">350<em>+</em></div><div class="pillar-title">Companies backed</div><div class="pillar-body">And counting, from first checks to global scale.</div></div><div class="pillar"><div class="pillar-num">02</div><div class="sn-ab-big">2012</div><div class="pillar-title">Investing since</div><div class="pillar-body">More than a decade of partnering with founders worldwide.</div></div><div class="pillar"><div class="pillar-num">03</div><div class="sn-ab-big">5</div><div class="pillar-title">Focus areas</div><div class="pillar-body">One ecosystem of silicon, devices, and global distribution.</div></div></div></div>';
   hero.parentNode.insertBefore(asec,hero.nextSibling);
   asec.querySelector('.section-sub').textContent=ledeTxt;
   hb.parentNode.removeChild(hb);
  }
 }
 [].slice.call(document.querySelectorAll('.section-eyebrow .label')).forEach(function(l){var t=l.textContent;
  if(/^0?1\s*\/\s*Thesis/i.test(t))l.textContent='02 / Thesis';
  else if(/^0?2\s*\/\s*Focus/i.test(t))l.textContent='03 / Focus Areas';
  else if(/^0?3\s*\/\s*Approach/i.test(t))l.textContent='04 / Approach';
 });
 if(q2&&!document.querySelector('.sn-hero-acts')){
  var act=document.createElement('div');act.className='sn-hero-acts';
  act.innerHTML='<a class="sn-hero-cta" href="/portfolio">View our portfolio <span>→</span></a>';
  q2.parentNode.insertBefore(act,q2.nextSibling);
 }
 if(document.querySelector('.hero')&&!document.querySelector('.sn-marq')){
  fetch('https://cdn.prod.website-files.com/69ab197ca148d582724c4ac3/6ae52a605dfe7cb125ae4c50_pf-companies-v3.json').then(function(r){return r.json();}).then(function(data){
   if(document.querySelector('.sn-marq'))return;
   window.SN_PF_DATA=data;
   var SECS=['AI','Robotics','Health Tech','Services','Frontier'];
   var bySec={};SECS.forEach(function(s){bySec[s]=[];});
   data.forEach(function(d){var nm=String(d.n).replace(/\s*\([^)]*\)/g,'').trim();if(bySec[d.s]&&bySec[d.s].length<4&&nm.length>2&&nm.length<=16)bySec[d.s].push({n:nm,s:d.s,w:d.w});});
   var seq=[];for(var r2=0;r2<4;r2++){SECS.forEach(function(s){if(bySec[s][r2])seq.push(bySec[s][r2]);});}
   window.SN_MARQ_BASE=seq;
   var shell=document.querySelector('.hero > .shell');
   if(!shell)return;
   var m=document.createElement('div');m.className='sn-marq';
   m.innerHTML='<div class="track"></div>';
   shell.appendChild(m);
   window.SN_MARQ_BUILD(seq,false);
  });
 }
 if(!window.SN_MARQ_BOUND){window.SN_MARQ_BOUND=1;
  document.addEventListener('click',function(e){var b=e.target.closest('button.sn-chip');if(!b)return;var s=b.getAttribute('data-s');var data=window.SN_PF_DATA;var m=document.querySelector('.sn-marq');if(!m||!data)return;var wasOn=b.classList.contains('on');
   [].slice.call(document.querySelectorAll('.sn-chip')).forEach(function(x){x.classList.remove('on');window.SN_CHIP_PAINT(x,false);});
   if(wasOn){window.SN_MARQ_BUILD(window.SN_MARQ_BASE,false);}
   else{b.classList.add('on');window.SN_CHIP_PAINT(b,true);
    var list=[];
    for(var i=0;i<data.length;i++){var d=data[i];if(d.s===s){var nm=String(d.n).replace(/\s*\([^)]*\)/g,'').trim();if(nm.length>2&&nm.length<=18)list.push({n:nm,s:s,w:d.w});}if(list.length>=24)break;}
    if(list.length)window.SN_MARQ_BUILD(list,true);
   }
  });
 }
 var ebs=[].slice.call(document.querySelectorAll('.hero-stat .hero-eyebrow'));
 var eb=ebs.filter(function(e){return /capital|portfolio since/i.test(e.textContent);})[0];
 if(eb){var st=eb.parentElement;eb.textContent='— PORTFOLIO SINCE';var num=st.querySelector('.num');if(num)num.textContent='2012';var cap=st.querySelector('.cap');if(cap)cap.textContent='BACKING WHAT’S NEXT';}
 var fg=document.querySelector('.focus-grid');
 if(fg){var sec=fg;while(sec&&sec.tagName!=='SECTION')sec=sec.parentElement;
  if(sec){sec.classList.add('sn-fw-host');if(!sec.querySelector('.sn-fw-glow')){var gl=document.createElement('div');gl.className='sn-fw-glow';sec.insertBefore(gl,sec.firstChild);}
   var oldbg=sec.querySelector('.sn-fw-bg');if(oldbg)oldbg.parentNode.removeChild(oldbg);
   if(!sec.getAttribute('data-cl')){sec.setAttribute('data-cl','1');var map=['AI','Robotics','Health Tech','Services','Frontier'];[].slice.call(sec.querySelectorAll('.focus-cell')).forEach(function(c,i){c.addEventListener('click',function(){location.href='/portfolio?sector='+encodeURIComponent(map[i]||'AI');});});}
   var c0=sec.querySelector('.focus-cell:first-child .focus-name');
   if(c0&&!c0.querySelector('.focus-sub')){var aisp=document.createElement('span');aisp.className='focus-sub';aisp.textContent='Foundation Models & Agents';c0.appendChild(aisp);}
  }
  if(!document.getElementById('sn-icon-css')){
   var ist=document.createElement('style');ist.id='sn-icon-css';
   var UU=function(f){return 'u'+'rl(https://cdn.prod.website-files.com/69ab197ca148d582724c4ac3/'+f+')';};
   var SL=function(i){return '.section:has(.focus-grid) .focus-cell:nth-child('+i+')::after';};
   ist.textContent=SL(1)+'{background-image:'+UU('6a74108cc6abf33d9d075b36_sn-icon-ai.svg')+';}'+SL(2)+'{background-image:'+UU('6a74108dcd7962c1fa5d3787_sn-icon-robot.svg')+';}'+SL(3)+'{background-image:'+UU('6a74108df0ddc643dca07165_sn-icon-health.svg')+';}'+SL(4)+'{background-image:'+UU('6a74108dc6abf33d9d075c2a_sn-icon-services.svg')+';}'+SL(5)+'{background-image:'+UU('6a74108e8e417cf7525e885f_sn-icon-frontier.svg')+';}';
   document.head.appendChild(ist);
  }
  var sub=sec?sec.querySelector('.section-sub'):null;if(sub)sub.textContent='We back founders who turn Samsung’s ecosystem of silicon, devices, and global distribution into an unfair advantage.';
  var ft=sec?sec.querySelector('.section-title'):null;if(ft&&/differentiated partner/i.test(ft.textContent))ft.innerHTML='Where deep tech meets<br><em>Samsung’s ecosystem.</em>';
 }
 var s1=secByLabel('Thesis');
 if(s1){var oldq=s1.querySelector('.sn-th-qs');if(oldq)oldq.parentNode.removeChild(oldq);
  if(!s1.querySelector('.sn-th-mini')){var subP=s1.querySelector('.section-sub');
   if(subP){var md=document.createElement('div');md.className='sn-th-mini';
    md.innerHTML='<p class="sn-th-bridge">The question that defines every partnership we make:</p><div class="sn-th-type"><span class="tx"></span><span class="caret"></span></div>';
    subP.parentNode.insertBefore(md,subP.nextSibling);
    var tx=md.querySelector('.tx');
    var full='“If this works, how is it relevant to Samsung?”';
    var run=function(){if(md.getAttribute('data-tw'))return;md.setAttribute('data-tw','1');var i=0;var iv=setInterval(function(){i++;tx.textContent=full.slice(0,i);if(i>=full.length){clearInterval(iv);tx.innerHTML='“If this works, how is it <em>relevant to Samsung</em>?”';}},34);};
    try{var tio=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){tio.disconnect();run();}});},{threshold:.4});tio.observe(md);setTimeout(function(){if(!md.getAttribute('data-tw')&&md.getBoundingClientRect().top<innerHeight)run();},4000);}catch(e){run();}
   }}}
 [].slice.call(document.querySelectorAll('.pillar-body')).forEach(function(p){if(/\$50K to \$25MM/i.test(p.textContent))p.textContent='We invest across all stages, tailored to your team and stage of growth.';});
 var pb=document.querySelector('.final .btn-primary');
 if(pb){if(pb.getAttribute('href')!=='/portfolio')pb.setAttribute('href','/portfolio');if(/pitch us/i.test(pb.textContent))pb.innerHTML='Explore the portfolio <span>→</span>';}
 var fd=document.querySelector('.final .final-display');
 if(fd&&/what if/i.test(fd.textContent)){fd.innerHTML='Let’s build the<br><em>next big thing.</em>';}
 var qb=document.querySelector('.final .qbadge');
 if(qb&&/now taking meetings/i.test(qb.textContent)){qb.innerHTML='<span class="dot"></span> ALWAYS OPEN TO FOUNDERS';}
 var fsec=document.querySelector('.final');
 if(fsec&&!fsec.querySelector('.sn-fw-glow')){var g2=document.createElement('div');g2.className='sn-fw-glow';fsec.insertBefore(g2,fsec.firstChild);}
}
function fixLabels(){
 [].slice.call(document.querySelectorAll('.focus-name')).forEach(function(nm){[].slice.call(nm.childNodes).forEach(function(tn){if(tn.nodeType===3&&tn.nodeValue.indexOf('Digital Health')>-1)tn.nodeValue=tn.nodeValue.replace('Digital Health','Health Tech');});});
 [].slice.call(document.querySelectorAll('button[data-sector="Health"]')).forEach(function(b){if(b.textContent.trim()==='Digital Health')b.textContent='Health Tech';});
 [].slice.call(document.querySelectorAll('.snbl-tab[data-s="Health"]')).forEach(function(b){if(b.textContent.indexOf('Health Tech')<0)b.textContent='Health Tech';});
 [].slice.call(document.querySelectorAll('.filter-tab')).forEach(function(b){if(b.textContent.trim()==='Health')b.textContent='Health Tech';});
 [].slice.call(document.querySelectorAll('.snbl-tag')).forEach(function(e){var s=e.textContent;if(/\bHealth\b/.test(s)&&s.indexOf('Health Tech')<0)e.textContent=s.replace(/\bHealth\b/,'Health Tech');});
 var ba=document.getElementById('snba');
 if(ba){[].slice.call(ba.querySelectorAll('*')).forEach(function(el){if(el.children.length===0&&el.textContent.trim()==='Health')el.textContent='Health Tech';});}
}
function fixTeam(){
 var ts=document.querySelector('.t-sub');
 if(ts)ts.textContent='We are a team of technologists, driven by deep technical curiosity. We believe that to invest in the future, you have to be willing to build it. Our team is becoming uniquely technical because the founders we back deserve partners who speak their language.';
 var th2=document.querySelector('.t-headline');
 if(th2&&th2.getAttribute('data-h3')!=='1'){th2.setAttribute('data-h3','1');th2.innerHTML='The people behind<br><em>the next.</em>';}
 if(document.querySelector('.t-eyebrow'))window.SN_ALIGN_HERO('.t-eyebrow');
 if(document.querySelector('.t-tabs'))window.SN_HERO_GAP(['.t-sub'],'.t-tabs',40);
 var tb2=document.querySelectorAll('.sn-team .t-tab')[1];
 if(tb2&&!window.SN_DF){window.SN_DF=1;tb2.click();}
 var cards=[].slice.call(document.querySelectorAll('.t-card')).filter(function(c){if(/mark\s+kim|maneesh|michael\s+shim|vivian/i.test(c.textContent)){if(c.parentNode)c.parentNode.removeChild(c);return false;}return true;});
 if(cards.length&&!cards.filter(function(c){return /adela\s+seo/i.test(c.textContent);})[0]){
  var src=cards.filter(function(c){return /jinny|jinkyung/i.test(c.textContent);})[0]||cards[cards.length-1];
  if(src){var nc=src.cloneNode(true);
   nc.classList.remove('sn-rv','sn-in');
   var nm2=nc.querySelector('.t-name,h3');if(nm2)nm2.textContent='Adela Seo';
   var rl=nc.querySelector('.t-role');if(rl)rl.textContent='Sr. Exec Assistant';
   var xx=nc.querySelector('.t-x');if(xx&&xx.parentNode)xx.parentNode.removeChild(xx);
   var li2=nc.querySelector('.t-li');if(li2){li2.setAttribute('href','https://www.linkedin.com/in/adelaseo/');li2.setAttribute('aria-label','Adela Seo on LinkedIn');}
   var php=nc.querySelector('.t-photo');if(php){php.removeAttribute('data-real');php.style.backgroundImage='';}
   src.parentNode.insertBefore(nc,src.nextSibling);
   cards.push(nc);
  }
 }
 var hl=cards.filter(function(c){return /helen\s+lin/i.test(c.textContent);})[0];
 if(hl){var hr=hl.querySelector('.t-role');if(hr&&hr.textContent.trim()!=='Head of People')hr.textContent='Head of People';}
 var d=cards.filter(function(c){return /david\s+lee/i.test(c.textContent);})[0];
 if(d){var row=d.querySelector('.t-namerow');if(row){var a=row.querySelector('.t-x');if(!a){a=document.createElement('a');a.className='t-x';a.href='https://x.com/davidlee';a.target='_blank';a.rel='noopener';a.setAttribute('aria-label','David Lee on X');row.appendChild(a);}if(!a.querySelector('svg'))a.innerHTML=window.SN_X_SVG;var li=row.querySelector('.t-li');if(li&&a&&li.nextSibling!==a){row.insertBefore(a,li.nextSibling);}}}
 var gs=document.querySelectorAll('.t-grid');
 if(gs.length>1){var og=gs[gs.length-1];
  var adc=cards.filter(function(c){return /adela\s+seo/i.test(c.textContent);})[0];
  if(adc&&adc.parentElement!==og)og.appendChild(adc);
  [['John Lee','CFO'],['Ignacio Pena','IT'],['May K','Finance'],['Lucy Kim','Administrative Assistant']].forEach(function(pr){
   var pn=pr[0];
   var ex=cards.filter(function(c){return c.textContent.indexOf(pn)>-1;})[0];
   if(ex){var er=ex.querySelector('.t-role');if(er&&er.textContent.trim()!==pr[1])er.textContent=pr[1];return;}
   var b=og.querySelector('.t-card');if(!b)return;var n3=b.cloneNode(true);
   n3.classList.remove('sn-rv','sn-in');
   var e3=n3.querySelector('.t-name,h3');if(e3)e3.textContent=pn;
   var r3=n3.querySelector('.t-role');if(r3)r3.textContent=pr[1];
   var x3=n3.querySelector('.t-x');if(x3)x3.parentNode.removeChild(x3);
   var l3=n3.querySelector('.t-li');if(l3){l3.setAttribute('href','https://linkedin.com/company/samsung-next');l3.setAttribute('aria-label',pn+' on LinkedIn');}
   var f3=n3.querySelector('.t-photo');if(f3){f3.removeAttribute('data-real');f3.removeAttribute('style');}
   og.appendChild(n3);cards.push(n3);
  });
  var opCards=[].slice.call(og.querySelectorAll('.t-card'));
  var nameOf=function(c){var n=c.querySelector('.t-name,h3');return n?n.textContent.trim():'';};
  var rk=function(c){var r=c.querySelector('.t-role');r=r?r.textContent:'';return /\bcfo\b/i.test(r)?0:(/^\s*head of/i.test(r)?1:2);};
  opCards.sort(function(a,b){return (rk(a)-rk(b))||nameOf(a).localeCompare(nameOf(b));});
  opCards.forEach(function(c){og.appendChild(c);});
  var inv=gs[0];var invSec=inv?inv.closest('.t-section'):null;
  if(invSec&&!invSec.getAttribute('data-vo')){invSec.setAttribute('data-vo','1');
   var voRe=/leena|michael\s+shim|jinny|jinkyung|haerim/i;
   var vo=[].slice.call(inv.querySelectorAll('.t-card')).filter(function(c){return voRe.test(c.textContent);});
   vo.sort(function(a,b){var r=function(c){return /leena/i.test(c.textContent)?0:1;};return r(a)-r(b);});
   var sh=invSec.querySelector('.t-shead');
   if(vo.length&&sh){
    var l1=sh.querySelector('.l');if(l1)l1.textContent='Investors';
    var nh=sh.cloneNode(true);nh.classList.remove('sn-rv','sn-in');
    var l2=nh.querySelector('.l');if(l2)l2.textContent='Venture Operations';
    nh.style.marginTop='48px';
    var ng=document.createElement('div');ng.className='t-grid';
    inv.parentNode.insertBefore(nh,inv.nextSibling);
    inv.parentNode.insertBefore(ng,nh.nextSibling);
    vo.forEach(function(c){ng.appendChild(c);});
   }
  }
  var gs2=document.querySelectorAll('.t-grid');
  var hs=document.querySelectorAll('.t-shead');
  [].slice.call(gs2).forEach(function(g,i){var rr=hs[i]?hs[i].querySelector('.r'):null;if(rr)rr.textContent=g.querySelectorAll('.t-card').length+' People';});
 }
 var lastSec=[].slice.call(document.querySelectorAll('.t-section')).pop();
 if(lastSec&&!document.querySelector('.sn-t-careers')){
  var cw=document.createElement('div');cw.className='sn-t-careers';
  cw.innerHTML='<p>The next big thing starts with <em>people.</em></p><a class="sn-hero-cta" href="/careers">View open roles <span>→</span></a>';
  lastSec.appendChild(cw);
 }
 var PH=[[/david\s+lee/i,'6a7ec7d348321f504511ada7_bg-new-13.webp','30%','105%'],[/haerim\s+yun/i,'6a7ec7d213c0b55c7934d3ce_bg-new-8.webp','30%','112%'],[/helen\s+lin/i,'6a7ec7d3b35044839a9a5070_bg-helen.webp','20%','100%'],[/miguel\s+cruz/i,'6a7d67d6502c4d130798ffca_team-photo-4.png','40%','110%'],[/raymond\s+liao/i,'6a7ec7d3ffe226fa13d6e59d_bg-new-19.webp','30%','105%'],[/diane\s+choi/i,'6a7ec7d3dc8daea4f0d8a521_bg-new-17.webp','32%','108%'],[/elaine/i,'6a82a0c8f26acbc50f308eba_elaine-crop.webp','28%','cover'],[/adela\s+seo/i,'6a7ec7d3b35044839a9a505b_bg-new-20.webp','38%','cover'],[/leena/i,'6a7ec7d37786c3fce0bcb02b_bg-new-15.webp','30%','108%'],[/vinod/i,'6a7ec7cba242bdc9a5366fa6_bg-new-1.webp','28%','108%'],[/jinny|jinkyung/i,'6a7ec7d013c0b55c7934d309_bg-new-5.webp','30%','106%'],[/albert/i,'6a7ec7d3ffe226fa13d6e588_bg-new-18.webp','30%','105%'],[/ignacio/i,'6ab4087d63f6f4eb85fa462f_bg-ignacio.webp','18%','cover'],[/andy\s+duong/i,'6a88821341455f146f747e6d_bg-andy6.webp','26%','cover'],[/john\s+lee/i,'6a82a0c89835e22de696cf7f_john-crop.webp','24%','cover'],[/joon\s+kim/i,'6a861bfa23fbf26aba8deffc_bg-joon.webp','26%','cover'],[/may\s+k/i,'6a887d46d6cf2863c7b02953_bg-may.webp','26%','cover'],[/lucy\s+kim/i,'6a888213ca5d762849c54d8f_bg-lucy.webp','26%','cover'],[/ryan\s+park/i,'6a86271300d37c82ffa12421_bg-ryan3.webp','26%','cover']];
 PH.forEach(function(p){var c=cards.filter(function(x){return p[0].test(x.textContent);})[0];if(!c)return;var ph=c.querySelector('.t-photo');if(ph&&ph.getAttribute('data-real')!=='20'){ph.style.backgroundImage="url('https://cdn.prod.website-files.com/69ab197ca148d582724c4ac3/"+p[1]+"')";ph.style.backgroundSize=p[3]||'cover';ph.style.backgroundPosition='center '+p[2];ph.setAttribute('data-real','20');ph.style.removeProperty('filter');}});
}
function fixPf(){
 if(document.querySelector('.sn-pf-meta'))window.SN_ALIGN_HERO('.sn-pf-meta');
 if(document.getElementById('snpf'))window.SN_HERO_GAP(['.sn-pf-sub','.sn-pf-stat'],'#snpf',36);
 var pr=document.querySelector('.sn-pf-result');if(pr)pr.style.display='none';
 var d=document.querySelector('.sn-pf-display');
 if(d&&d.getAttribute('data-d3')!=='1'){d.setAttribute('data-d3','1');d.innerHTML='Companies<br>we believe in<br><em>will define us.</em>';}
 var ps=document.querySelector('.sn-pf-sub');if(ps)ps.textContent='We invest in exceptional founders and startups building in strategic areas. Samsung partnership opportunities await the rare ventures demonstrating breakthrough potential.';
 var fe=document.querySelector('.sn-pf-final-eyebrow');
 if(fe&&!fe.querySelector('.dot'))fe.innerHTML='<span class="dot"></span>FROM FIRST CHECK TO GLOBAL SCALE';
 var fdisp=document.querySelector('.sn-pf-final-display');
 if(fdisp&&!/breakthrough/i.test(fdisp.textContent))fdisp.innerHTML='Your breakthrough,<br><em>backed by Samsung.</em>';
 var pa=document.querySelector('.sn-pf-final-actions');
 if(pa&&pa.getAttribute('data-b2')!=='4'){pa.setAttribute('data-b2','4');pa.innerHTML='<a class="btn-primary" href="/">About us <span>→</span></a><a class="btn-ghost" href="/team">Meet the team</a>';}
 [].slice.call(document.querySelectorAll('.sn-pf-stat')).forEach(function(s){
  if(/active investment/i.test(s.textContent)){var n4=s.querySelector('.sn-pf-stat-num');if(n4&&n4.textContent.trim()!=='352'&&!n4.getAttribute('data-cu'))n4.textContent='352';}
  if(/capital deployed|stage coverage/i.test(s.textContent)){var n=s.querySelector('.sn-pf-stat-num');if(n){n.textContent='Seed → Scale';n.classList.add('sn-txt-stat');}[].slice.call(s.querySelectorAll('*')).forEach(function(el){if(el.children.length===0&&/capital deployed/i.test(el.textContent))el.textContent='Stage coverage';});}
  if(/sector/i.test(s.textContent)){var n2=s.querySelector('.sn-pf-stat-num');if(n2&&n2.textContent.trim()==='6')n2.textContent='5';}
 });}
function dedash(){
 if(location.pathname.indexOf('/blog')===0)return;
 try{
  var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null);
  var n;
  while(n=w.nextNode()){
   var pn=n.parentNode?n.parentNode.nodeName:'';
   if(pn==='SCRIPT'||pn==='STYLE')continue;
   var s=n.nodeValue;
   if(s.indexOf('—')<0)continue;
   var t=s.replace(/(\d\s*)—(\s*\d)/g,'$1$2');
   t=t.replace(/([^\s—])\s*—\s*/g,'$1, ');
   t=t.replace(//g,'—');
   if(t!==s)n.nodeValue=t;
  }
 }catch(e){}
}
function all(){fixNav();fixHome();fixLabels();fixTeam();fixPf();dedash();finZoom();}
if(document.readyState!=='loading')all();else document.addEventListener('DOMContentLoaded',all);
setTimeout(all,400);setTimeout(all,1500);
var moScheduled=false;
try{new MutationObserver(function(){if(moScheduled)return;moScheduled=true;setTimeout(function(){moScheduled=false;fixLabels();dedash();},120);}).observe(document.body,{childList:true,subtree:true});}catch(e){}
})();

;

(function(){
if(location.pathname.replace(/\/$/,'')!=='/portfolio')return;
var U2='https://cdn.prod.website-files.com/69ab197ca148d582724c4ac3/6ae52a605dfe7cb125ae4c50_pf-companies-v3.json';
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function clean(n){var x=String(n).replace(/\s*\([^)]*\)/g,'').trim();return x||n;}
function applySector(){var want=new URLSearchParams(location.search).get('sector');if(!want)return;var tb=document.querySelector('#snpf .snpf-tab[data-s="'+want+'"]');if(tb)tb.click();}
function build(data){
 data.forEach(function(d){d.dn=clean(d.n);});
 var SEC=['AI','Services','Health Tech','Robotics','Frontier','Others'];
 var cnt={};SEC.forEach(function(s){cnt[s]=0;});data.forEach(function(d){if(cnt[d.s]!=null)cnt[d.s]++;});
 var root=document.createElement('section');root.id='snpf';root.setAttribute('data-v2','1');
 var h='<div class="snpf-bar"><div class="snpf-tabs"><button class="snpf-tab on" data-s="all">All <span class="c">'+data.length+'</span></button>';
 SEC.forEach(function(s){h+='<button class="snpf-tab" data-s="'+esc(s)+'">'+esc(s)+' <span class="c">'+cnt[s]+'</span></button>';});
 h+='</div><input class="snpf-search" type="text" placeholder="Search company..." aria-label="Search company"></div><div class="snpf-meta" id="snpf-m"></div><div class="snpf-grid" id="snpf-g"></div>';
 root.innerHTML=h;
 var g=root.querySelector('#snpf-g'),m=root.querySelector('#snpf-m'),si=root.querySelector('.snpf-search');
 var cur='all',q='';
 function render(){
  var list=data.filter(function(d){return (cur==='all'||d.s===cur)&&(!q||d.dn.toLowerCase().indexOf(q)>-1||d.n.toLowerCase().indexOf(q)>-1);});
  g.innerHTML=list.length?list.map(function(d){var fk=(String(d.n).match(/\(([^)]*)\)/)||[])[1];var inr='<div class="nm">'+esc(d.dn)+(fk?' <span class="fka">('+esc(fk)+')</span>':'')+'</div><div class="sec">'+esc(d.s)+'</div>';return d.w?'<a class="snpf-card" href="'+esc(d.w)+'" target="_blank" rel="noopener">'+inr+'<span class="ar">↗</span></a>':'<div class="snpf-card">'+inr+'</div>';}).join(''):'<div class="snpf-empty">No companies found</div>';
  m.textContent='Showing '+list.length+' compan'+(list.length===1?'y':'ies');
 }
 root.querySelector('.snpf-tabs').addEventListener('click',function(e){var b=e.target.closest('.snpf-tab');if(!b)return;root.querySelectorAll('.snpf-tab').forEach(function(x){x.classList.remove('on');});b.classList.add('on');cur=b.getAttribute('data-s');render();});
 si.addEventListener('input',function(){q=this.value.trim().toLowerCase();render();});
 render();
 return root;
}
function boot(){
 fetch(U2).then(function(r){return r.json();}).then(function(data){
  var tries=0;
  var iv=setInterval(function(){
   tries++;
   var v2=document.querySelector('#snpf[data-v2]');
   if(v2){[].slice.call(document.querySelectorAll('#snpf')).forEach(function(s){if(s!==v2)s.parentNode.removeChild(s);});}
   else{
    var did=false;var old=document.getElementById('snpf');
    if(old){old.parentNode.replaceChild(build(data),old);did=true;}
    else if(tries>6){var anchor=document.querySelector('.collection-list-wrapper');if(anchor&&anchor.parentNode){anchor.parentNode.insertBefore(build(data),anchor);did=true;}}
    if(did){setTimeout(applySector,50);setTimeout(function(){window.SN_HERO_GAP(['.sn-pf-sub','.sn-pf-stat'],'#snpf',36);},80);}
   }
   if(tries>50)clearInterval(iv);
  },150);
 });
}
if(document.readyState!=='loading')boot();else document.addEventListener('DOMContentLoaded',boot);
})();

;

(function(){
if(location.pathname.indexOf('/blog')!==0)return;
var slug=new URLSearchParams(location.search).get('post');
if(!slug){
 var tries=0;var iv=setInterval(function(){tries++;
  if(window.SN_ALIGN_HERO&&document.querySelector('.page-eyebrow'))window.SN_ALIGN_HERO('.page-eyebrow');
  if(window.SN_HERO_GAP&&document.getElementById('snbl'))window.SN_HERO_GAP(['.page-sub'],'#snbl',40);
  var tab=document.querySelector('.snbl-tab');
  if(tab&&!document.querySelector('.snbl-search')){
   clearInterval(iv);
   var bar=tab.parentElement;
   var inp=document.createElement('input');inp.className='snbl-search';inp.type='text';inp.placeholder='Search posts...';inp.setAttribute('aria-label','Search posts');
   bar.appendChild(inp);
   function apply(){var q=inp.value.trim().toLowerCase();[].slice.call(document.querySelectorAll('.snbl-card')).forEach(function(c){c.style.display=(!q||c.textContent.toLowerCase().indexOf(q)>-1)?'':'none';});}
   inp.addEventListener('input',apply);
   try{new MutationObserver(function(){if(inp.value)apply();}).observe(document.body,{childList:true,subtree:true});}catch(e){}
  }
  if(tries>60)clearInterval(iv);
 },200);
 return;
}
var U='https://cdn.prod.website-files.com/69ab197ca148d582724c4ac3/6a6eb2e05b71437b805448fb_blog-posts.json';
fetch(U).then(function(r){return r.json();}).then(function(data){
 var i=-1;for(var k=0;k<data.length;k++){if(data[k].s===slug){i=k;break;}}
 if(i<0)return;
 var prev=i>0?data[i-1]:null, next=i<data.length-1?data[i+1]:null;
 var tries=0;
 var iv=setInterval(function(){
  tries++;
  var foot=document.querySelector('#snba .snba-foot');
  if(foot){
   clearInterval(iv);
   var h='';
   if(prev){h+='<a class="snba-btn prev" href="?post='+encodeURIComponent(prev.s)+'">← Previous</a>';}else{h+='<span class="snba-spacer"></span>';}
   h+='<a class="snba-all" href="/blog">All perspectives</a>';
   if(next){h+='<a class="snba-btn next" href="?post='+encodeURIComponent(next.s)+'">Next →</a>';}else{h+='<span class="snba-spacer"></span>';}
   foot.innerHTML=h;
  }
  if(tries>60)clearInterval(iv);
 },150);
});
})();
