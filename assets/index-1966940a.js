import{d as D,j as l,E as L,k as N,o as R,c as T,b as r,a,e as o,l as d,m as I,v as U,w as m,F as B,p as F,n as G,q as h,s as C,h as P}from"./index-2e7b34e1.js";import{E as $,a as H,b as O}from"./el-table-column-11a8a4a5.js";import{E as j}from"./el-input-60ac01f4.js";import"./el-select-f461a815.js";import{E as q}from"./el-date-picker-e261f158.js";import"./index-910543cf.js";import"./_Uint8Array-7b1073be.js";import"./_initCloneObject-3a9d01b0.js";import"./event-8e91c63d.js";import"./strings-4c62488f.js";const J=i=>(F("data-v-d01a0f85"),i=i(),G(),i),K={class:"reporting"},M=J(()=>r("h1",{style:{"font-size":"30px"},"mb-6":""}," System Report ",-1)),Q={class:"btn-content","mt-6":""},W={"mt-6":""},X={"mt-6":"",style:{float:"right"}},Y=D({__name:"index",setup(i){const n=l("ty"),s=l("2023-02-02"),u=l(!1),y=[{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Home"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Home"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"}],c=l(5),_=l(100),x=l(!1),S=l(!1),V=l(!1),k=p=>{console.log(`${p} items per page`)},z=p=>{console.log(`current page: ${p}`)};return(p,e)=>{const f=j,v=q,w=L,b=N,g=$,A=H,E=O;return R(),T(B,null,[r("div",K,[M,r("div",null,[a(f,{modelValue:o(n),"onUpdate:modelValue":e[0]||(e[0]=t=>d(n)?n.value=t:null),style:{width:"150px","margin-right":"24px"}},null,8,["modelValue"]),a(v,{modelValue:o(s),"onUpdate:modelValue":e[1]||(e[1]=t=>d(s)?s.value=t:null),type:"date",placeholder:"Report Received Date From"},null,8,["modelValue"]),a(v,{modelValue:o(s),"onUpdate:modelValue":e[2]||(e[2]=t=>d(s)?s.value=t:null),type:"date",placeholder:"Report Received Date From"},null,8,["modelValue"])]),r("div",Q,[I(a(f,{modelValue:o(n),"onUpdate:modelValue":e[3]||(e[3]=t=>d(n)?n.value=t:null),placeholder:"Please input",style:{width:"200px"}},null,8,["modelValue"]),[[U,o(u)]]),a(b,{color:"#626aef",dark:o(C),onClick:e[4]||(e[4]=t=>u.value=!o(u))},{default:m(()=>[a(w,{"i-carbon:search":""}),h("Search ")]),_:1},8,["dark"])])]),r("div",W,[a(A,{data:y,style:{width:"100%"}},{default:m(()=>[a(g,{fixed:"",prop:"date",label:"Report ld"}),a(g,{prop:"name",label:"Report Name"}),a(g,{label:"Download",width:"120"},{default:m(()=>[a(b,{size:"small",color:"#626aef",dark:o(C)},{default:m(()=>[h(" Download ")]),_:1},8,["dark"])]),_:1})]),_:1}),r("div",X,[a(E,{"current-page":o(c),"onUpdate:current-page":e[5]||(e[5]=t=>d(c)?c.value=t:null),"page-size":o(_),"onUpdate:page-size":e[6]||(e[6]=t=>d(_)?_.value=t:null),"page-sizes":[10,20,50,100],small:o(x),disabled:o(V),background:o(S),layout:"sizes, prev, pager, next",total:200,onSizeChange:k,onCurrentChange:z},null,8,["current-page","page-size","small","disabled","background"])])])],64)}}});const ie=P(Y,[["__scopeId","data-v-d01a0f85"]]);export{ie as default};
