import{aZ as Ne,bT as Te,bO as Pe,ag as L,ah as J,an as re,d as F,U as ee,az as te,a8 as K,j as S,Z as B,a0 as ae,aS as de,o as se,c as ne,a9 as ue,e as R,af as Se,ae as ve,a1 as W,bU as we,bV as Ee,V as U,aK as be,aL as xe,a as c,E as V,av as Re,aw as $e,bc as ke,bj as q,bf as Oe,ai as Be,bW as De,ab as fe,Q as Me,R as ze,W as oe,a7 as Fe,bX as ie,be as Ae,aM as Ve,m as Ue,v as Ie,ac as qe,ak as Le,al as Ke,k as We,b as m,w as A,l as je,bY as He,q as I,s as Xe,p as Ye,n as Ze,h as Qe}from"./index-61c3b68a.js";import{c as O}from"./strings-33f01e84.js";import{U as me}from"./event-8e91c63d.js";const j=Symbol("tabsRootContextKey"),Ge=(e,a,v)=>Te(e.subTree).filter(t=>{var s;return Pe(t)&&((s=t.type)==null?void 0:s.name)===a&&!!t.component}).map(t=>t.component.uid).map(t=>v[t]).filter(t=>!!t),Je=(e,a)=>{const v={},y=Ne([]);return{children:y,addChild:s=>{v[s.uid]=s,y.value=Ge(e,a,v)},removeChild:s=>{delete v[s],y.value=y.value.filter(C=>C.uid!==s)}}},et=L({tabs:{type:J(Array),default:()=>re([])}}),pe="ElTabBar",tt=F({name:pe}),at=F({...tt,props:et,setup(e,{expose:a}){const v=e,y=W(),l=ee(j);l||te(pe,"<el-tabs><el-tab-bar /></el-tabs>");const t=K("tabs"),s=S(),C=S(),d=()=>{let _=0,r=0;const b=["top","bottom"].includes(l.props.tabPosition)?"width":"height",f=b==="width"?"x":"y",$=f==="x"?"left":"top";return v.tabs.every(x=>{var D,n;const g=(n=(D=y.parent)==null?void 0:D.refs)==null?void 0:n[`tab-${x.uid}`];if(!g)return!1;if(!x.active)return!0;_=g[`offset${O($)}`],r=g[`client${O(b)}`];const N=window.getComputedStyle(g);return b==="width"&&(v.tabs.length>1&&(r-=Number.parseFloat(N.paddingLeft)+Number.parseFloat(N.paddingRight)),_+=Number.parseFloat(N.paddingLeft)),!1}),{[b]:`${r}px`,transform:`translate${O(f)}(${_}px)`}},p=()=>C.value=d();return B(()=>v.tabs,async()=>{await ae(),p()},{immediate:!0}),de(s,()=>p()),a({ref:s,update:p}),(_,r)=>(se(),ne("div",{ref_key:"barRef",ref:s,class:ue([R(t).e("active-bar"),R(t).is(R(l).props.tabPosition)]),style:Se(C.value)},null,6))}});var st=ve(at,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const nt=L({panes:{type:J(Array),default:()=>re([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),lt={tabClick:(e,a,v)=>v instanceof Event,tabRemove:(e,a)=>a instanceof Event},ce="ElTabNav",ot=F({name:ce,props:nt,emits:lt,setup(e,{expose:a,emit:v}){const y=W(),l=ee(j);l||te(ce,"<el-tabs><tab-nav /></el-tabs>");const t=K("tabs"),s=we(),C=Ee(),d=S(),p=S(),_=S(),r=S(!1),b=S(0),f=S(!1),$=S(!0),x=U(()=>["top","bottom"].includes(l.props.tabPosition)?"width":"height"),D=U(()=>({transform:`translate${x.value==="width"?"X":"Y"}(-${b.value}px)`})),n=()=>{if(!d.value)return;const o=d.value[`offset${O(x.value)}`],u=b.value;if(!u)return;const i=u>o?u-o:0;b.value=i},g=()=>{if(!d.value||!p.value)return;const o=p.value[`offset${O(x.value)}`],u=d.value[`offset${O(x.value)}`],i=b.value;if(o-i<=u)return;const w=o-i>u*2?i+u:o-u;b.value=w},N=async()=>{const o=p.value;if(!r.value||!_.value||!d.value||!o)return;await ae();const u=_.value.querySelector(".is-active");if(!u)return;const i=d.value,w=["top","bottom"].includes(l.props.tabPosition),P=u.getBoundingClientRect(),T=i.getBoundingClientRect(),k=w?o.offsetWidth-T.width:o.offsetHeight-T.height,E=b.value;let h=E;w?(P.left<T.left&&(h=E-(T.left-P.left)),P.right>T.right&&(h=E+P.right-T.right)):(P.top<T.top&&(h=E-(T.top-P.top)),P.bottom>T.bottom&&(h=E+(P.bottom-T.bottom))),h=Math.max(h,0),b.value=Math.min(h,k)},M=()=>{if(!p.value||!d.value)return;const o=p.value[`offset${O(x.value)}`],u=d.value[`offset${O(x.value)}`],i=b.value;if(u<o){const w=b.value;r.value=r.value||{},r.value.prev=w,r.value.next=w+u<o,o-w<u&&(b.value=o-u)}else r.value=!1,i>0&&(b.value=0)},H=o=>{const u=o.code,{up:i,down:w,left:P,right:T}=q;if(![i,w,P,T].includes(u))return;const k=Array.from(o.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),E=k.indexOf(o.target);let h;u===P||u===i?E===0?h=k.length-1:h=E-1:E<k.length-1?h=E+1:h=0,k[h].focus({preventScroll:!0}),k[h].click(),le()},le=()=>{$.value&&(f.value=!0)},X=()=>f.value=!1;return B(s,o=>{o==="hidden"?$.value=!1:o==="visible"&&setTimeout(()=>$.value=!0,50)}),B(C,o=>{o?setTimeout(()=>$.value=!0,50):$.value=!1}),de(_,M),be(()=>setTimeout(()=>N(),0)),xe(()=>M()),a({scrollToActiveTab:N,removeFocus:X}),B(()=>e.panes,()=>y.update(),{flush:"post"}),()=>{const o=r.value?[c("span",{class:[t.e("nav-prev"),t.is("disabled",!r.value.prev)],onClick:n},[c(V,null,{default:()=>[c(Re,null,null)]})]),c("span",{class:[t.e("nav-next"),t.is("disabled",!r.value.next)],onClick:g},[c(V,null,{default:()=>[c($e,null,null)]})])]:null,u=e.panes.map((i,w)=>{var P,T,k,E;const h=i.uid,Y=i.props.disabled,Z=(T=(P=i.props.name)!=null?P:i.index)!=null?T:`${w}`,Q=!Y&&(i.isClosable||e.editable);i.index=`${w}`;const ye=Q?c(V,{class:"is-icon-close",onClick:z=>v("tabRemove",i,z)},{default:()=>[c(ke,null,null)]}):null,ge=((E=(k=i.slots).label)==null?void 0:E.call(k))||i.props.label,Ce=!Y&&i.active?0:-1;return c("div",{ref:`tab-${h}`,class:[t.e("item"),t.is(l.props.tabPosition),t.is("active",i.active),t.is("disabled",Y),t.is("closable",Q),t.is("focus",f.value)],id:`tab-${Z}`,key:`tab-${h}`,"aria-controls":`pane-${Z}`,role:"tab","aria-selected":i.active,tabindex:Ce,onFocus:()=>le(),onBlur:()=>X(),onClick:z=>{X(),v("tabClick",i,Z,z)},onKeydown:z=>{Q&&(z.code===q.delete||z.code===q.backspace)&&v("tabRemove",i,z)}},[ge,ye])});return c("div",{ref:_,class:[t.e("nav-wrap"),t.is("scrollable",!!r.value),t.is(l.props.tabPosition)]},[o,c("div",{class:t.e("nav-scroll"),ref:d},[c("div",{class:[t.e("nav"),t.is(l.props.tabPosition),t.is("stretch",e.stretch&&["top","bottom"].includes(l.props.tabPosition))],ref:p,style:D.value,role:"tablist",onKeydown:H},[e.type?null:c(st,{tabs:[...e.panes]},null),u])])])}}}),it=L({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:J(Function),default:()=>!0},stretch:Boolean}),G=e=>Me(e)||ze(e),ct={[me]:e=>G(e),tabClick:(e,a)=>a instanceof Event,tabChange:e=>G(e),edit:(e,a)=>["remove","add"].includes(a),tabRemove:e=>G(e),tabAdd:()=>!0};var rt=F({name:"ElTabs",props:it,emits:ct,setup(e,{emit:a,slots:v,expose:y}){var l,t;const s=K("tabs"),{children:C,addChild:d,removeChild:p}=Je(W(),"ElTabPane"),_=S(),r=S((t=(l=e.modelValue)!=null?l:e.activeName)!=null?t:"0"),b=n=>{r.value=n,a(me,n),a("tabChange",n)},f=async n=>{var g,N,M;if(!(r.value===n||oe(n)))try{await((g=e.beforeLeave)==null?void 0:g.call(e,n,r.value))!==!1&&(b(n),(M=(N=_.value)==null?void 0:N.removeFocus)==null||M.call(N))}catch{}},$=(n,g,N)=>{n.props.disabled||(f(g),a("tabClick",n,N))},x=(n,g)=>{n.props.disabled||oe(n.props.name)||(g.stopPropagation(),a("edit",n.props.name,"remove"),a("tabRemove",n.props.name))},D=()=>{a("edit",void 0,"add"),a("tabAdd")};return Oe({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},U(()=>!!e.activeName)),B(()=>e.activeName,n=>f(n)),B(()=>e.modelValue,n=>f(n)),B(r,async()=>{var n;await ae(),(n=_.value)==null||n.scrollToActiveTab()}),Be(j,{props:e,currentName:r,registerPane:d,unregisterPane:p}),y({currentName:r}),()=>{const n=e.editable||e.addable?c("span",{class:s.e("new-tab"),tabindex:"0",onClick:D,onKeydown:M=>{M.code===q.enter&&D()}},[c(V,{class:s.is("icon-plus")},{default:()=>[c(De,null,null)]})]):null,g=c("div",{class:[s.e("header"),s.is(e.tabPosition)]},[n,c(ot,{ref:_,currentName:r.value,editable:e.editable,type:e.type,panes:C.value,stretch:e.stretch,onTabClick:$,onTabRemove:x},null)]),N=c("div",{class:s.e("content")},[fe(v,"default")]);return c("div",{class:[s.b(),s.m(e.tabPosition),{[s.m("card")]:e.type==="card",[s.m("border-card")]:e.type==="border-card"}]},[...e.tabPosition!=="bottom"?[g,N]:[N,g]])}}});const dt=L({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),ut=["id","aria-hidden","aria-labelledby"],_e="ElTabPane",vt=F({name:_e}),bt=F({...vt,props:dt,setup(e){const a=e,v=W(),y=Fe(),l=ee(j);l||te(_e,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const t=K("tab-pane"),s=S(),C=U(()=>a.closable||l.props.closable),d=ie(()=>{var f;return l.currentName.value===((f=a.name)!=null?f:s.value)}),p=S(d.value),_=U(()=>{var f;return(f=a.name)!=null?f:s.value}),r=ie(()=>!a.lazy||p.value||d.value);B(d,f=>{f&&(p.value=!0)});const b=Ae({uid:v.uid,slots:y,props:a,paneName:_,active:d,index:s,isClosable:C});return be(()=>{l.registerPane(b)}),Ve(()=>{l.unregisterPane(b.uid)}),(f,$)=>R(r)?Ue((se(),ne("div",{key:0,id:`pane-${R(_)}`,class:ue(R(t).b()),role:"tabpanel","aria-hidden":!R(d),"aria-labelledby":`tab-${R(_)}`},[fe(f.$slots,"default")],10,ut)),[[Ie,R(d)]]):qe("v-if",!0)}});var he=ve(bt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const ft=Le(rt,{TabPane:he}),mt=Ke(he);const pt=e=>(Ye("data-v-541f23ba"),e=e(),Ze(),e),_t={class:"pmds-enquiry"},ht={class:"pmds"},yt=He('<h1 class="text-30px mb-6" data-v-541f23ba> PMDS Enquiry </h1><div class="item" data-v-541f23ba><div class="title" data-v-541f23ba> Target CRA： </div><div class="content" data-v-541f23ba> CRA01 </div></div><div class="item" data-v-541f23ba><div class="title" data-v-541f23ba> Date Format： </div><div class="content" data-v-541f23ba> TUDF </div></div><div class="item" data-v-541f23ba><div class="title" data-v-541f23ba> Number Of Record： </div><div class="content" data-v-541f23ba> 15 </div></div><div class="item" data-v-541f23ba><div class="title" data-v-541f23ba> Remark： </div><div class="content" data-v-541f23ba> Chan Tai Man </div></div><div class="item" data-v-541f23ba><div class="title" data-v-541f23ba> File： </div><div class="content" data-v-541f23ba> FPCSTCP0012023010109000012345678911.zip </div></div>',6),gt={"mt-8":""},Ct=pt(()=>m("div",{class:"pmds no-border-top"},[m("div",null,[m("h1",{class:"text-26px mb-6"}," Enquiry Upload Response ")]),m("div",{class:"item"},[m("div",{class:"title"}," Original Msg ID： "),m("div",{class:"content"}," 1233456789012345 ")]),m("div",{class:"item"},[m("div",{class:"title"}," Return Code： "),m("div",{class:"content"}," CRPOOOOO ")]),m("div",{class:"item"},[m("div",{class:"title"}," Return Description： "),m("div",{class:"content"}," SUCCESS ")]),m("div",{class:"item"},[m("div",{class:"title"}," File Name： "),m("div",{class:"content"}," FPCSTCP001202301010900000123456789 ")]),m("div",{class:"item"},[m("div",{class:"title"}," File Rersion： "),m("div",{class:"content"}," 1 ")])],-1)),Nt=F({__name:"PMDSEnquiry",setup(e){const a=S("first"),v=(y,l)=>{console.log(y,l)};return(y,l)=>{const t=V,s=We,C=mt,d=ft;return se(),ne("div",_t,[m("div",ht,[yt,m("div",gt,[c(s,{color:"#626aef",dark:R(Xe),class:"ml-200px"},{default:A(()=>[c(t,{"i-octicon-arrow-down-16":""}),I(" Download ")]),_:1},8,["dark"])])]),c(d,{modelValue:R(a),"onUpdate:modelValue":l[0]||(l[0]=p=>je(a)?a.value=p:null),"mt-8":"",type:"card",class:"demo-tabs",onTabClick:v},{default:A(()=>[c(C,{label:"CRP Process Result（1）",name:"first"},{default:A(()=>[Ct]),_:1}),c(C,{label:"CRA Process Result（0）",name:"second"},{default:A(()=>[I(" Config ")]),_:1}),c(C,{label:"PMDS Report（0）",name:"third"},{default:A(()=>[I(" Role ")]),_:1}),c(C,{label:"Follow Up（0）",name:"fourth"},{default:A(()=>[I(" Task ")]),_:1})]),_:1},8,["modelValue"])])}}});const wt=Qe(Nt,[["__scopeId","data-v-541f23ba"]]);export{wt as default};
