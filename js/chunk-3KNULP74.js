import{a as $,b as q}from"./chunk-2HV7XBQ4.js";$();q();var A=class{constructor(){this.queue=[]}add(o){return this.queue.push(new E(o)),this}play(){this.queue.forEach(o=>o.play())}},P={targets:null,duration:1/0,easing:"linear",delay:0,begin:null,update:null,complete:null},F=()=>{let t={linear:()=>s=>s},o={Sine:()=>s=>1-Math.cos(s*Math.PI/2),Expo:()=>s=>s?Math.pow(2,10*s-10):0,Circ:()=>s=>1-Math.sqrt(1-s*s),Back:()=>s=>s*s*(3*s-2),Bounce:()=>s=>{let i,a=4;for(;s<((i=Math.pow(2,--a))-1)/11;);return 1/Math.pow(4,3-a)-7.5625*Math.pow((i*3-2)/22-s,2)}};return["Quad","Cubic","Quart","Quint"].forEach((s,i)=>{o[s]=()=>a=>Math.pow(a,i+2)}),Object.keys(o).forEach(s=>{let i=o[s];t["easeIn"+s]=i,t["easeOut"+s]=()=>a=>1-i()(1-a),t["easeInOut"+s]=()=>a=>a<.5?i()(a*2)/2:1-i()(a*-2+2)/2,t["easeOutIn"+s]=()=>a=>a<.5?(1-i()(1-a*2))/2:(i()(a*2-1)+1)/2}),t},x=F(),S=["translateX","translateY","translateZ"],j=(t,o)=>t instanceof HTMLElement?"transform"in t.style&&S.includes(o)?"transform":o in t.style?"style":"attribute":"attribute",C=t=>{let o=Date.now()+t.delay,s=o+t.duration,i=!!t.targets,a=[],T=()=>{if(i){Array.isArray(t.targets)||(t.targets=[t.targets]);for(let r of t.targets){let l={};for(let n in t.dest){let e=t.dest[n],u=j(r,n);if(Array.isArray(e))if(e.length===2&&typeof e[0]!="object")u==="transform"?r.style.transform=`${n}(${typeof e[0]=="string"?e[0]:e[0]+"px"})`:u==="style"?r.style[n]=e[0]:r[n]=e[0],l[n]=e[0],t.dest[n]=e[1];else{let p=0;for(let f of e)f.startTimeStamp=p,p+=f.duration;l[n]=r[n]}else u==="transform"?l[n]=r.style.transform.match(new RegExp(`${n}\\((\\w+)\\)`))[1]:u==="style"?l[n]=r.style[n]:l[n]=r[n]}a.push(l)}}},d=(r,l,n,e,u,p=!1)=>{let f;if(typeof e=="string")if(f=e.endsWith("%")?"%":e.endsWith("px")?"px":null,f)e=parseFloat(e);else throw new TypeError("string value must ends with '%' or 'px'");let c=p?e:(e-l)*n+l;f&&(c+=f);let h=j(r,u);h==="transform"?r.style.transform=`${u}(${c}${f?"":"px"})`:h==="style"?r.style[u]=c:r[u]=c},g=(r,l,n=!1)=>{t.targets.forEach((e,u)=>{Object.keys(t.dest).forEach(p=>{let f=parseFloat(a[u][p]),c=t.dest[p];if(typeof c=="object")if(Array.isArray(c)){let h=0;for(;h<c.length&&l-o>=c[h].startTimeStamp;)h++;let{value:y,duration:b,easing:M=t.easing,startTimeStamp:I}=c[h-1];f=h<=1?f:c[h-2].value;let O=x[M]()((l-o-I)/b);l<=o+b+I?d(e,f,O,y,p):n&&d(e,f,O,y,p,n)}else{let{value:h,duration:y,easing:b=t.easing}=c,M=x[b]()((l-o)/y);l<=o+y?d(e,f,M,h,p):n&&d(e,f,M,h,p,n)}else typeof c=="function"&&(c=c(e,u)),d(e,f,r,c,p,n)})})},w=()=>{let r=Date.now();if(r>s)g(1,r,!0),typeof t.complete=="function"&&t.complete(t.targets),t.isPlay=!1;else{if(r>=o){let l=x[t.easing]()((r-o)/t.duration);i&&g(l,r),typeof t.update=="function"&&t.update(t.targets)}requestAnimationFrame(w)}};T(),typeof t.begin=="function"&&t.begin(t.targets),w()},E=class{constructor(o=P){o={...P,...o};let{targets:s,duration:i,easing:a,delay:T,begin:d,update:g,complete:w,...r}=o;this.targets=s,this.duration=i,this.easing=a,this.delay=T,this.begin=d,this.update=g,this.complete=w,this.dest=r||{},this.tl=null,this.isPlay=!1}timeline(){return this.tl||(this.tl=new A),this.tl}play(){this.isPlay||(this.isPlay=!0,C(this))}},K=t=>new E(t);K.random=(t,o)=>Math.floor(Math.random()*(o-t+1))+t;export{K as a};
