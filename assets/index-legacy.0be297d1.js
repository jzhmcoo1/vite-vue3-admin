!function(){var e=document.createElement("style");e.innerHTML=".sys-server-stat-container[data-v-ed595d20]{padding:20px;column-count:2;column-gap:10px}.sys-server-stat-container .stat-card[data-v-ed595d20]{margin-bottom:10px;break-inside:avoid;transform:translateZ(0)}.sys-server-stat-container .stat-card .disk-info[data-v-ed595d20]{width:100%;display:flex;flex-direction:row}.sys-server-stat-container .stat-card .disk-info--item[data-v-ed595d20]{width:50%}\n",document.head.appendChild(e),System.register(["./index-legacy.f7bd82b9.js","./vendor-legacy.89403358.js"],(function(e){"use strict";var t,a,l,r,s,o,d,n,u,i,c,f,p,m,v,b,y,_,k,h,g,C,I,w,z,L,x,O,M,P;return{setters:[function(e){t=e.y,a=e.M,l=e._,r=e.N},function(e){s=e.bH,o=e.bI,d=e.c3,n=e.d,u=e.l,i=e.b,c=e.A,f=e.aM,p=e.aN,m=e.P,v=e.cO,b=e.k,y=e.j,_=e.o,k=e.cN,h=e.c,g=e.y,C=e.z,I=e.bw,w=e.h,z=e.t,L=e.bz,x=e.ad,O=e.F,M=e.f,P=e.e}],execute:function(){var j={},S=o.exports;Object.defineProperty(j,"__esModule",{value:!0}),j.progressStatuses=q=j.progressProps=void 0;var N=S(s),V=d,$=(0,V.tuple)("normal","exception","active","success");j.progressStatuses=$;var F=(0,V.tuple)("line","circle","dashboard"),H=(0,V.tuple)("default","small"),q=j.progressProps=function(){return{prefixCls:N.default.string,type:N.default.oneOf(F),percent:N.default.number,format:{type:Function},status:N.default.oneOf($),showInfo:N.default.looseBool,strokeWidth:N.default.number,strokeLinecap:N.default.oneOf((0,V.tuple)("butt","round","square")),strokeColor:{type:[String,Object]},trailColor:N.default.string,width:N.default.number,success:{type:Object,default:function(){return{}}},gapDegree:N.default.number,gapPosition:N.default.oneOf((0,V.tuple)("top","bottom","left","right")),size:N.default.oneOf(H),steps:N.default.number,successPercent:N.default.number}};const A=n({props:{...q(),strokeColor:{type:[String,Object,Function]}},setup(e){const t=e,a=u((()=>"function"==typeof t.strokeColor?{...t,strokeColor:t.strokeColor(t.percent)}:{...t,strokeColor:t.strokeColor}));return(e,t)=>(i(),c(m(v),f(p(m(a))),null,16))}});const B={class:"sys-server-stat-container"},D={class:"disk-info"},E={class:"disk-info--item"},G={class:"disk-info"},T={class:"disk-info--item"},U=n({name:"SystemMonitorServe",setup(e){let l=-1;const s=b({runtime:{os:"",arch:"",nodeVersion:"",npmVersion:""},disk:{size:0,used:0,available:0},memory:{total:0,available:0},cpu:{manufacturer:"",brand:"",physicalCores:0,model:"",speed:0,rawCurrentLoad:0,rawCurrentLoadIdle:0,coresLoad:[]}}),{runtime:o,disk:d,memory:n,cpu:f}=y(s),p=u((()=>({size:r(d.value.size),used:r(d.value.used),available:r(d.value.available)}))),v=u((()=>({total:r(n.value.total),free:r(n.value.available),used:r(n.value.total-n.value.available)}))),j=u((()=>d.value.size<=0?0:Math.floor(d.value.used/d.value.size*100))),S=u((()=>n.value.total<=0?0:Math.floor((n.value.total-n.value.available)/n.value.total*100))),N=u((()=>`${f.value.manufacturer} ${f.value.brand} @ ${f.value.speed}GHz`)),V=async()=>{const e=await t({url:a.stat,method:"get"});o.value=e.runtime,d.value=e.disk,n.value=e.memory,f.value=e.cpu};V();const $=e=>e<30?"#5cb87a":e<70?"#e6a23c":"#f53f3f",F=(e,t)=>t<=0?0:Math.floor(e/t*100);return _((()=>{l=setInterval(V,1e4)})),k((()=>{clearInterval(l)})),(e,t)=>(i(),h("div",B,[g(m(x),{class:"stat-card",title:"运行环境"},{default:C((()=>[g(m(I),{column:1,"label-style":{width:"50%"}},{default:C((()=>[g(m(I).Item,{label:"操作系统"},{default:C((()=>[w(z(m(o).os),1)])),_:1}),g(m(I).Item,{label:"系统架构"},{default:C((()=>[w(z(m(o).arch),1)])),_:1}),g(m(I).Item,{label:"Node版本"},{default:C((()=>[g(m(L),{color:"processing",size:"small"},{default:C((()=>[w("v"+z(m(o).nodeVersion),1)])),_:1})])),_:1}),g(m(I).Item,{label:"NPM版本"},{default:C((()=>[g(m(L),{color:"processing",size:"small"},{default:C((()=>[w("v"+z(m(o).npmVersion),1)])),_:1})])),_:1})])),_:1})])),_:1}),g(m(x),{class:"stat-card",title:"CPU"},{default:C((()=>[g(m(I),{column:1,"label-style":{width:"50%"},"content-style":{width:"50%"}},{default:C((()=>[g(m(I).Item,{label:"详细"},{default:C((()=>[w(z(m(N)),1)])),_:1}),g(m(I).Item,{label:"负载"},{default:C((()=>[g(A,{percent:F(m(f).rawCurrentLoad,m(f).rawCurrentLoadIdle+m(f).rawCurrentLoad),strokeColor:$},null,8,["percent"])])),_:1}),(i(!0),h(O,null,M(m(f).coresLoad,((e,t)=>(i(),c(m(I).Item,{key:t,label:`核心${t+1} 负载`},{default:C((()=>[g(A,{percent:F(e.rawLoad,e.rawLoad+e.rawLoadIdle),strokeColor:$},null,8,["percent"])])),_:2},1032,["label"])))),128))])),_:1})])),_:1}),g(m(x),{class:"stat-card",title:"磁盘"},{default:C((()=>[P("div",D,[g(m(I),{class:"disk-info--item",column:1},{default:C((()=>[g(m(I).Item,{label:"总空间"},{default:C((()=>[w(z(m(p).size),1)])),_:1}),g(m(I).Item,{label:"已用空间"},{default:C((()=>[w(z(m(p).used),1)])),_:1}),g(m(I).Item,{label:"可用空间"},{default:C((()=>[w(z(m(p).available),1)])),_:1})])),_:1}),P("div",E,[g(A,{type:"dashboard",percent:m(j),width:100,strokeColor:$},null,8,["percent"])])])])),_:1}),g(m(x),{class:"stat-card",title:"内存"},{default:C((()=>[P("div",G,[g(m(I),{class:"disk-info--item",column:1},{default:C((()=>[g(m(I).Item,{label:"总内存"},{default:C((()=>[w(z(m(v).total),1)])),_:1}),g(m(I).Item,{label:"已用内存"},{default:C((()=>[w(z(m(v).used),1)])),_:1}),g(m(I).Item,{label:"可用内存"},{default:C((()=>[w(z(m(v).free),1)])),_:1})])),_:1}),P("div",T,[g(A,{type:"dashboard",percent:m(S),width:100,strokeColor:$},null,8,["percent"])])])])),_:1})]))}});e("default",l(U,[["__scopeId","data-v-ed595d20"]]))}}}))}();