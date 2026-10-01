
(function(){
var nav=document.getElementById('nav'),mb=document.getElementById('mb');
mb.onclick=function(){var o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o)};
function closeNav(){nav.classList.remove('open');mb.setAttribute('aria-expanded',false)}
nav.onclick=function(e){if(e.target.tagName==='A')closeNav()};
document.querySelectorAll('form.enq').forEach(function(f){
var v=function(n){return f.elements[n].value.trim()};
function err(n,m){f.querySelector('[data-e='+n+']').textContent=m;return !m}
f.addEventListener('submit',function(e){e.preventDefault();if(v('hp'))return;
var n=v('n'),p=v('p'),em=v('e'),ok=true;
ok=err('n',n.length>1?'':'Enter your name.')&&ok;
ok=err('p',/^[+\d][\d\s()-]{7,}$/.test(p)?'':'Enter a phone number we can reach you on.')&&ok;
ok=err('e',!em||/^\S+@\S+\.\S+$/.test(em)?'':'Enter a valid email address.')&&ok;
if(!ok)return;
var b='Name: '+n+'\nPhone: '+p+(em?'\nEmail: '+em:'')+'\nSupport needed: '+v('t')+'\n\n'+v('m');
f.parentNode.querySelector('.ok').style.display='block';
location.href='mailto:armstrongtanyannah@gmail.com?subject='+encodeURIComponent('Website enquiry from '+n)+'&body='+encodeURIComponent(b)})});
})();
