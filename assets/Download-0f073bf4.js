import{d as h,j as r,k,E as y,o as w,c as C,b as e,a as t,w as s,e as c,l as D,bY as x,p as E,n as B,q as a,f as I,s as p,h as R}from"./index-f0c2c735.js";import{E as S}from"./el-input-96b63bb5.js";import{E as V}from"./el-progress-3eac2d64.js";import"./event-8e91c63d.js";import"./index-db723d81.js";const l=d=>(E("data-v-e2d5544b"),d=d(),B(),d),g={class:"data-correction"},P=l(()=>e("h1",null,"Data Correction Request (DCR) Download File",-1)),F={class:"btn-content","mt-6":""},N=x('<div class="item" data-v-e2d5544b><div class="title" data-v-e2d5544b> Transaction ID： </div><div class="content" data-v-e2d5544b> 123e4567-e89b-12d3-a456-556642440000 </div></div><div class="item" data-v-e2d5544b><div class="title" data-v-e2d5544b> Subject： </div><div class="content" data-v-e2d5544b> Kenny Chan&#39;s request </div></div><div class="item" data-v-e2d5544b><div class="title" data-v-e2d5544b> Uploaded by： </div><div class="content" data-v-e2d5544b> Barbara Lockman </div></div><div class="item" data-v-e2d5544b><div class="title" data-v-e2d5544b> Upload datetime： </div><div class="content" data-v-e2d5544b> 2021/06/12 09:36:51 </div></div><div class="item" data-v-e2d5544b><div class="title" data-v-e2d5544b> Approved By： </div><div class="content" data-v-e2d5544b> Andrew Jenkins </div></div><div class="item" data-v-e2d5544b><div class="title" data-v-e2d5544b> Approve datetime： </div><div class="content" data-v-e2d5544b> 2021/06/12 09:36:51 </div></div><div class="item" data-v-e2d5544b><div class="title" data-v-e2d5544b> Status： </div><div class="content" data-v-e2d5544b> CRP Responded-f </div></div><div class="item" data-v-e2d5544b><div class="title" data-v-e2d5544b> File： </div><div class="content" data-v-e2d5544b> FPCSTCP0012023010109000012345678911.zip </div></div>',8),U={class:"item"},q=l(()=>e("div",{class:"title"},[e("span",{style:{color:"red"}},"*"),a(" Private Key File： ")],-1)),A={class:"content"},K={class:"item"},T=l(()=>e("div",{class:"title"},[e("span",{style:{color:"red"}},"*"),a(" Key File Password： ")],-1)),j={class:"content"},z={"mt-8":"",style:{"text-align":"center"}},J=h({__name:"Download",props:{id:null},setup(d){console.log(d);const o=r("123e4567-e89b-12d3-a456-556642440000");r("Option2");const n=I(),_=()=>{console.log(n),n.replace("/CreditDataCorrection")};return(O,v)=>{const i=k,b=V,m=S,u=y;return w(),C("div",g,[P,e("div",F,[t(i,{color:"#626aef",dark:c(p),onClick:_},{default:s(()=>[a(" Back ")]),_:1},8,["dark"])]),N,e("div",U,[q,e("div",A,[t(b,{ref:"uploadRef",class:"upload-demo",action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15","auto-upload":!1},{trigger:s(()=>[t(i,{type:"primary"},{default:s(()=>[a("upload file")]),_:1})]),_:1},512)])]),e("div",K,[T,e("div",j,[t(m,{modelValue:c(o),"onUpdate:modelValue":v[0]||(v[0]=f=>D(o)?o.value=f:null),placeholder:"Please input",style:{width:"200px"}},null,8,["modelValue"])])]),e("div",z,[t(i,{color:"#626aef",dark:c(p)},{default:s(()=>[t(u,{"i-octicon-arrow-down-16":""}),a(" Download ")]),_:1},8,["dark"])])])}}});const W=R(J,[["__scopeId","data-v-e2d5544b"]]);export{W as default};