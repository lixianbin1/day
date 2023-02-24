import{d as B,j as l,E as L,k as P,o as T,c as I,b as d,a as o,e as a,l as i,m as N,v as U,w as u,F as O,p as $,n as F,q as C,s as k,f as G,h as H}from"./index-f0c2c735.js";import{E as j,a as q,b as J}from"./el-table-column-33d51287.js";import{E as K}from"./el-input-96b63bb5.js";import"./el-select-b959c1a2.js";import{E as M}from"./el-date-picker-e12feb7f.js";import"./index-db723d81.js";import"./_Uint8Array-20deef58.js";import"./_initCloneObject-0a3a6f36.js";import"./event-8e91c63d.js";import"./strings-aae4a9f4.js";const Q=p=>($("data-v-e8ebb76b"),p=p(),F(),p),W={class:"reporting"},X=Q(()=>d("h1",null,"Data Correction -Bankruptcy or Public Records",-1)),Y={"mt-6":""},Z={class:"btn-content","mt-6":""},ee={"mt-6":""},te={"mt-6":"",style:{float:"right"}},oe=B({__name:"BankruptcyStatusOrPublicRecord",setup(p){const s=l("ty"),r=l("2023-02-02"),m=l(!1),h=[{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Home"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Home"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"}],_=l(5),g=l(100),y=l(!1),S=l(!1),V=l(!1),R=n=>{console.log(`${n} items per page`)},z=n=>{console.log(`current page: ${n}`)},A=G(),E=n=>{console.log(n);const e=n.id||"abc";A.push(`/bankruptcy/${encodeURIComponent(e)}`)};return(n,e)=>{const b=K,f=M,w=L,v=P,c=j,x=q,D=J;return T(),I(O,null,[d("div",W,[X,d("div",Y,[o(b,{modelValue:a(s),"onUpdate:modelValue":e[0]||(e[0]=t=>i(s)?s.value=t:null),style:{width:"150px","margin-right":"24px"}},null,8,["modelValue"]),o(f,{modelValue:a(r),"onUpdate:modelValue":e[1]||(e[1]=t=>i(r)?r.value=t:null),type:"date",placeholder:"Report Received Date From"},null,8,["modelValue"]),o(f,{modelValue:a(r),"onUpdate:modelValue":e[2]||(e[2]=t=>i(r)?r.value=t:null),type:"date",placeholder:"Report Received Date From"},null,8,["modelValue"])]),d("div",Z,[N(o(b,{modelValue:a(s),"onUpdate:modelValue":e[3]||(e[3]=t=>i(s)?s.value=t:null),placeholder:"Please input",style:{width:"200px"}},null,8,["modelValue"]),[[U,a(m)]]),o(v,{color:"#626aef",dark:a(k),onClick:e[4]||(e[4]=t=>m.value=!a(m))},{default:u(()=>[o(w,{"i-carbon:search":""}),C("Search ")]),_:1},8,["dark"])])]),d("div",ee,[o(x,{data:h,style:{width:"100%"}},{default:u(()=>[o(c,{fixed:"",prop:"date",label:"DCR Reference ld"}),o(c,{prop:"name",label:"DCR ininator"}),o(c,{prop:"time",label:"Rceived Time"}),o(c,{label:"Detaiis",width:"120"},{default:u(t=>[o(v,{size:"small",color:"#626aef",dark:a(k),onClick:ae=>E(t)},{default:u(()=>[C(" View ")]),_:2},1032,["dark","onClick"])]),_:1})]),_:1}),d("div",te,[o(D,{"current-page":a(_),"onUpdate:current-page":e[5]||(e[5]=t=>i(_)?_.value=t:null),"page-size":a(g),"onUpdate:page-size":e[6]||(e[6]=t=>i(g)?g.value=t:null),"page-sizes":[10,20,50,100],small:a(y),disabled:a(V),background:a(S),layout:"sizes, prev, pager, next",total:200,onSizeChange:R,onCurrentChange:z},null,8,["current-page","page-size","small","disabled","background"])])])],64)}}});const _e=H(oe,[["__scopeId","data-v-e8ebb76b"]]);export{_e as default};