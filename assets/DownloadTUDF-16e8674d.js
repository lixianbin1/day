import{d as T,j as l,E as U,k as L,o as F,c as I,b as i,a as t,e as a,l as r,m as N,v as B,w as u,F as P,p as $,n as G,q as C,s as h,f as H,h as O}from"./index-f0c2c735.js";import{E as j,a as q,b as J}from"./el-table-column-33d51287.js";import{E as K}from"./el-input-96b63bb5.js";import"./el-select-b959c1a2.js";import{E as M}from"./el-date-picker-e12feb7f.js";import"./index-db723d81.js";import"./_Uint8Array-20deef58.js";import"./_initCloneObject-0a3a6f36.js";import"./event-8e91c63d.js";import"./strings-aae4a9f4.js";const Q=p=>($("data-v-4d19eb83"),p=p(),G(),p),W={class:"reporting"},X=Q(()=>i("h1",null,"Data Correction -Bankruptcy or Public Records",-1)),Y={"mt-6":""},Z={class:"btn-content","mt-6":""},ee={"mt-6":""},oe={"mt-6":"",style:{float:"right"}},te=T({__name:"DownloadTUDF",setup(p){const s=l("ty"),d=l("2023-02-02"),m=l(!1),k=[{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Home"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Home"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"}],_=l(5),g=l(100),D=l(!1),y=l(!1),V=l(!1),w=n=>{console.log(`${n} items per page`)},S=n=>{console.log(`current page: ${n}`)},z=H(),A=n=>{console.log(n);const e=n.id||"abc";z.push(`/bankruptcy/${encodeURIComponent(e)}`)};return(n,e)=>{const f=K,v=M,E=U,b=L,c=j,R=q,x=J;return F(),I(P,null,[i("div",W,[X,i("div",Y,[t(f,{modelValue:a(s),"onUpdate:modelValue":e[0]||(e[0]=o=>r(s)?s.value=o:null),style:{width:"150px","margin-right":"24px"}},null,8,["modelValue"]),t(v,{modelValue:a(d),"onUpdate:modelValue":e[1]||(e[1]=o=>r(d)?d.value=o:null),type:"date",placeholder:"Report Received Date From"},null,8,["modelValue"]),t(v,{modelValue:a(d),"onUpdate:modelValue":e[2]||(e[2]=o=>r(d)?d.value=o:null),type:"date",placeholder:"Report Received Date From"},null,8,["modelValue"])]),i("div",Z,[N(t(f,{modelValue:a(s),"onUpdate:modelValue":e[3]||(e[3]=o=>r(s)?s.value=o:null),placeholder:"Please input",style:{width:"200px"}},null,8,["modelValue"]),[[B,a(m)]]),t(b,{color:"#626aef",dark:a(h),onClick:e[4]||(e[4]=o=>m.value=!a(m))},{default:u(()=>[t(E,{"i-carbon:search":""}),C("Search ")]),_:1},8,["dark"])])]),i("div",ee,[t(R,{data:k,style:{width:"100%"}},{default:u(()=>[t(c,{fixed:"",prop:"date",label:"DCR Reference ld"}),t(c,{prop:"name",label:"DCR ininator"}),t(c,{prop:"time",label:"Rceived Time"}),t(c,{label:"Detaiis",width:"120"},{default:u(o=>[t(b,{size:"small",color:"#626aef",dark:a(h),onClick:ae=>A(o)},{default:u(()=>[C(" View ")]),_:2},1032,["dark","onClick"])]),_:1})]),_:1}),i("div",oe,[t(x,{"current-page":a(_),"onUpdate:current-page":e[5]||(e[5]=o=>r(_)?_.value=o:null),"page-size":a(g),"onUpdate:page-size":e[6]||(e[6]=o=>r(g)?g.value=o:null),"page-sizes":[10,20,50,100],small:a(D),disabled:a(V),background:a(y),layout:"sizes, prev, pager, next",total:200,onSizeChange:w,onCurrentChange:S},null,8,["current-page","page-size","small","disabled","background"])])])],64)}}});const _e=O(te,[["__scopeId","data-v-4d19eb83"]]);export{_e as default};
