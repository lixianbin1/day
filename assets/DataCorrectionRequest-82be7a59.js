import{d as B,j as n,k as U,E as F,o as T,c as q,b as i,a as e,w as s,e as a,l as p,F as M,p as G,n as O,f as W,q as u,s as $,h as j}from"./index-f0c2c735.js";import{E as A,a as H,b as J}from"./el-table-column-33d51287.js";import{E as K}from"./el-input-96b63bb5.js";import"./el-select-b959c1a2.js";import{E as L}from"./el-date-picker-e12feb7f.js";import{u as Q}from"./index-497aa360.js";import"./index-db723d81.js";import"./_Uint8Array-20deef58.js";import"./_initCloneObject-0a3a6f36.js";import"./event-8e91c63d.js";import"./strings-aae4a9f4.js";const X=c=>(G("data-v-6ec59bb7"),c=c(),O(),c),Y={class:"reporting"},Z=X(()=>i("h1",{style:{"font-size":"30px"}}," Positive Mortgage Data Sharing (PMDS)-Mortgage Count Request ",-1)),ee={"mt-6":""},oe={class:"btn-content","mt-6":""},te={"mt-6":""},ae={"mt-6":"",style:{float:"right"}},le=B({__name:"DataCorrectionRequest",setup(c){const m=n(""),_=n(""),g=n(""),S=[{listID:"FPCSTCP00120012020012400005",uploadedBy:"Gregg O'Reilly",datetime:"2022/06/23 16:15:23",downloadStatus:"Not downloaded",followStatus:"Need to follow up"},{listID:"FPCSTCP00120012020012400005",uploadedBy:"Gregg O'Reilly",datetime:"2022/06/23 16:15:23",downloadStatus:"Not downloaded",followStatus:"Need to follow up"},{listID:"FPCSTCP00120012020012400005",uploadedBy:"Gregg O'Reilly",datetime:"2022/06/23 16:15:23",downloadStatus:"Not downloaded",followStatus:"Need to follow up"},{listID:"FPCSTCP00120012020012400005",uploadedBy:"Gregg O'Reilly",datetime:"2022/06/23 16:15:23",downloadStatus:"Not downloaded",followStatus:"Need to follow up"}],f=n(5),b=n(100),y=n(!1),D=n(!1),v=n(!1),k=l=>{console.log(`${l} items per page`)},P=l=>{console.log(`current page: ${l}`)},h=W(),x=l=>{console.log(l),h.push("/PMDS/PMDSEnquiry")},E=()=>{h.push("/PMDS/NewConsentWithdrawal")},N=()=>{console.log("aaa按钮"),Q({password:"123456",username:"admin"}).then(l=>{console.log("查询结果。",l)})},V=()=>{console.log("bbb按钮")};return(l,t)=>{const r=U,I=K,C=L,w=F,d=A,R=H,z=J;return T(),q(M,null,[i("div",Y,[e(r,{onClick:N},{default:s(()=>[u(" 按钮1 ")]),_:1}),e(r,{onClick:V},{default:s(()=>[u(" 按钮2 ")]),_:1}),Z,i("div",ee,[e(I,{modelValue:a(m),"onUpdate:modelValue":t[0]||(t[0]=o=>p(m)?m.value=o:null),style:{width:"220px","margin-right":"24px"},placeholder:"Withdrawal Consent list id"},null,8,["modelValue"]),e(C,{modelValue:a(_),"onUpdate:modelValue":t[1]||(t[1]=o=>p(_)?_.value=o:null),style:{"margin-right":"24px"},type:"date",placeholder:"Upload date from"},null,8,["modelValue"]),e(C,{modelValue:a(g),"onUpdate:modelValue":t[2]||(t[2]=o=>p(g)?g.value=o:null),style:{"margin-right":"24px"},type:"date",placeholder:"Upload date to"},null,8,["modelValue"]),e(r,{color:"#626aef"},{default:s(()=>[e(w,{"i-carbon:search":""}),u("Search ")]),_:1})]),i("div",oe,[e(r,{color:"#626aef",onClick:E},{default:s(()=>[e(w,{"i-carbon:add":""}),u("New Consent Withdrawal ")]),_:1})])]),i("div",te,[e(R,{data:S,style:{width:"100%"}},{default:s(()=>[e(d,{fixed:"",prop:"listID",label:"Withdrawal Consent list id"}),e(d,{prop:"uploadedBy",label:"Uploaded by",width:"130"}),e(d,{prop:"datetime",label:"Rceived datetime",width:"160"}),e(d,{prop:"downloadStatus",label:"Download Status",width:"140"}),e(d,{prop:"followStatus",label:"Follow up Status",width:"140"}),e(d,{label:"Detaiis",width:"120"},{default:s(o=>[e(r,{size:"small",color:"#626aef",dark:a($),onClick:ne=>x(o)},{default:s(()=>[e(w,{"i-carbon:next-outline":""}),u(" View ")]),_:2},1032,["dark","onClick"])]),_:1})]),_:1}),i("div",ae,[e(z,{"current-page":a(f),"onUpdate:current-page":t[3]||(t[3]=o=>p(f)?f.value=o:null),"page-size":a(b),"onUpdate:page-size":t[4]||(t[4]=o=>p(b)?b.value=o:null),"page-sizes":[10,20,50,100],small:a(y),disabled:a(v),background:a(D),layout:"sizes, prev, pager, next",total:200,onSizeChange:k,onCurrentChange:P},null,8,["current-page","page-size","small","disabled","background"])])])],64)}}});const be=j(le,[["__scopeId","data-v-6ec59bb7"]]);export{be as default};