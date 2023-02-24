import{aD as Ne,aE as Pe,am as Te,U as q,a4 as Z,aa as re,d as z,aF as ee,I as te,J as K,j as S,N as B,a2 as ae,ae as de,o as se,c as ne,Y as ue,e as R,af as Se,$ as ve,aG as O,aH as W,aI as we,aJ as Ee,V as I,C as be,aK as xe,a as c,l as V,aL as Re,aM as $e,aN as ke,a3 as L,aO as fe,aP as Oe,aQ as Be,aR as De,X as me,al as Fe,W as Me,aC as oe,aS as ze,aT as ie,av as Ae,aU as Ve,v as Ie,x as Ue,ag as Le,a0 as qe,aV as Ke,m as We,b as m,w as A,s as He,aW as je,A as U,B as Je,y as Xe,z as Ye,h as Ge}from"./index-eaeb84b6.js";const H=Symbol("tabsRootContextKey"),Qe=(e,a,v)=>Pe(e.subTree).filter(t=>{var s;return Te(t)&&((s=t.type)==null?void 0:s.name)===a&&!!t.component}).map(t=>t.component.uid).map(t=>v[t]).filter(t=>!!t),Ze=(e,a)=>{const v={},y=Ne([]);return{children:y,addChild:s=>{v[s.uid]=s,y.value=Qe(e,a,v)},removeChild:s=>{delete v[s],y.value=y.value.filter(C=>C.uid!==s)}}},et=q({tabs:{type:Z(Array),default:()=>re([])}}),pe="ElTabBar",tt=z({name:pe}),at=z({...tt,props:et,setup(e,{expose:a}){const v=e,y=W(),l=ee(H);l||te(pe,"<el-tabs><el-tab-bar /></el-tabs>");const t=K("tabs"),s=S(),C=S(),d=()=>{let _=0,r=0;const b=["top","bottom"].includes(l.props.tabPosition)?"width":"height",f=b==="width"?"x":"y",$=f==="x"?"left":"top";return v.tabs.every(x=>{var D,n;const g=(n=(D=y.parent)==null?void 0:D.refs)==null?void 0:n[`tab-${x.uid}`];if(!g)return!1;if(!x.active)return!0;_=g[`offset${O($)}`],r=g[`client${O(b)}`];const N=window.getComputedStyle(g);return b==="width"&&(v.tabs.length>1&&(r-=Number.parseFloat(N.paddingLeft)+Number.parseFloat(N.paddingRight)),_+=Number.parseFloat(N.paddingLeft)),!1}),{[b]:`${r}px`,transform:`translate${O(f)}(${_}px)`}},p=()=>C.value=d();return B(()=>v.tabs,async()=>{await ae(),p()},{immediate:!0}),de(s,()=>p()),a({ref:s,update:p}),(_,r)=>(se(),ne("div",{ref_key:"barRef",ref:s,class:ue([R(t).e("active-bar"),R(t).is(R(l).props.tabPosition)]),style:Se(C.value)},null,6))}});var st=ve(at,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const nt=q({panes:{type:Z(Array),default:()=>re([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),lt={tabClick:(e,a,v)=>v instanceof Event,tabRemove:(e,a)=>a instanceof Event},ce="ElTabNav",ot=z({name:ce,props:nt,emits:lt,setup(e,{expose:a,emit:v}){const y=W(),l=ee(H);l||te(ce,"<el-tabs><tab-nav /></el-tabs>");const t=K("tabs"),s=we(),C=Ee(),d=S(),p=S(),_=S(),r=S(!1),b=S(0),f=S(!1),$=S(!0),x=I(()=>["top","bottom"].includes(l.props.tabPosition)?"width":"height"),D=I(()=>({transform:`translate${x.value==="width"?"X":"Y"}(-${b.value}px)`})),n=()=>{if(!d.value)return;const o=d.value[`offset${O(x.value)}`],u=b.value;if(!u)return;const i=u>o?u-o:0;b.value=i},g=()=>{if(!d.value||!p.value)return;const o=p.value[`offset${O(x.value)}`],u=d.value[`offset${O(x.value)}`],i=b.value;if(o-i<=u)return;const w=o-i>u*2?i+u:o-u;b.value=w},N=async()=>{const o=p.value;if(!r.value||!_.value||!d.value||!o)return;await ae();const u=_.value.querySelector(".is-active");if(!u)return;const i=d.value,w=["top","bottom"].includes(l.props.tabPosition),T=u.getBoundingClientRect(),P=i.getBoundingClientRect(),k=w?o.offsetWidth-P.width:o.offsetHeight-P.height,E=b.value;let h=E;w?(T.left<P.left&&(h=E-(P.left-T.left)),T.right>P.right&&(h=E+T.right-P.right)):(T.top<P.top&&(h=E-(P.top-T.top)),T.bottom>P.bottom&&(h=E+(T.bottom-P.bottom))),h=Math.max(h,0),b.value=Math.min(h,k)},F=()=>{if(!p.value||!d.value)return;const o=p.value[`offset${O(x.value)}`],u=d.value[`offset${O(x.value)}`],i=b.value;if(u<o){const w=b.value;r.value=r.value||{},r.value.prev=w,r.value.next=w+u<o,o-w<u&&(b.value=o-u)}else r.value=!1,i>0&&(b.value=0)},j=o=>{const u=o.code,{up:i,down:w,left:T,right:P}=L;if(![i,w,T,P].includes(u))return;const k=Array.from(o.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),E=k.indexOf(o.target);let h;u===T||u===i?E===0?h=k.length-1:h=E-1:E<k.length-1?h=E+1:h=0,k[h].focus({preventScroll:!0}),k[h].click(),le()},le=()=>{$.value&&(f.value=!0)},J=()=>f.value=!1;return B(s,o=>{o==="hidden"?$.value=!1:o==="visible"&&setTimeout(()=>$.value=!0,50)}),B(C,o=>{o?setTimeout(()=>$.value=!0,50):$.value=!1}),de(_,F),be(()=>setTimeout(()=>N(),0)),xe(()=>F()),a({scrollToActiveTab:N,removeFocus:J}),B(()=>e.panes,()=>y.update(),{flush:"post"}),()=>{const o=r.value?[c("span",{class:[t.e("nav-prev"),t.is("disabled",!r.value.prev)],onClick:n},[c(V,null,{default:()=>[c(Re,null,null)]})]),c("span",{class:[t.e("nav-next"),t.is("disabled",!r.value.next)],onClick:g},[c(V,null,{default:()=>[c($e,null,null)]})])]:null,u=e.panes.map((i,w)=>{var T,P,k,E;const h=i.uid,X=i.props.disabled,Y=(P=(T=i.props.name)!=null?T:i.index)!=null?P:`${w}`,G=!X&&(i.isClosable||e.editable);i.index=`${w}`;const ye=G?c(V,{class:"is-icon-close",onClick:M=>v("tabRemove",i,M)},{default:()=>[c(ke,null,null)]}):null,ge=((E=(k=i.slots).label)==null?void 0:E.call(k))||i.props.label,Ce=!X&&i.active?0:-1;return c("div",{ref:`tab-${h}`,class:[t.e("item"),t.is(l.props.tabPosition),t.is("active",i.active),t.is("disabled",X),t.is("closable",G),t.is("focus",f.value)],id:`tab-${Y}`,key:`tab-${h}`,"aria-controls":`pane-${Y}`,role:"tab","aria-selected":i.active,tabindex:Ce,onFocus:()=>le(),onBlur:()=>J(),onClick:M=>{J(),v("tabClick",i,Y,M)},onKeydown:M=>{G&&(M.code===L.delete||M.code===L.backspace)&&v("tabRemove",i,M)}},[ge,ye])});return c("div",{ref:_,class:[t.e("nav-wrap"),t.is("scrollable",!!r.value),t.is(l.props.tabPosition)]},[o,c("div",{class:t.e("nav-scroll"),ref:d},[c("div",{class:[t.e("nav"),t.is(l.props.tabPosition),t.is("stretch",e.stretch&&["top","bottom"].includes(l.props.tabPosition))],ref:p,style:D.value,role:"tablist",onKeydown:j},[e.type?null:c(st,{tabs:[...e.panes]},null),u])])])}}}),it=q({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:Z(Function),default:()=>!0},stretch:Boolean}),Q=e=>Fe(e)||Me(e),ct={[fe]:e=>Q(e),tabClick:(e,a)=>a instanceof Event,tabChange:e=>Q(e),edit:(e,a)=>["remove","add"].includes(a),tabRemove:e=>Q(e),tabAdd:()=>!0};var rt=z({name:"ElTabs",props:it,emits:ct,setup(e,{emit:a,slots:v,expose:y}){var l,t;const s=K("tabs"),{children:C,addChild:d,removeChild:p}=Ze(W(),"ElTabPane"),_=S(),r=S((t=(l=e.modelValue)!=null?l:e.activeName)!=null?t:"0"),b=n=>{r.value=n,a(fe,n),a("tabChange",n)},f=async n=>{var g,N,F;if(!(r.value===n||oe(n)))try{await((g=e.beforeLeave)==null?void 0:g.call(e,n,r.value))!==!1&&(b(n),(F=(N=_.value)==null?void 0:N.removeFocus)==null||F.call(N))}catch{}},$=(n,g,N)=>{n.props.disabled||(f(g),a("tabClick",n,N))},x=(n,g)=>{n.props.disabled||oe(n.props.name)||(g.stopPropagation(),a("edit",n.props.name,"remove"),a("tabRemove",n.props.name))},D=()=>{a("edit",void 0,"add"),a("tabAdd")};return Oe({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},I(()=>!!e.activeName)),B(()=>e.activeName,n=>f(n)),B(()=>e.modelValue,n=>f(n)),B(r,async()=>{var n;await ae(),(n=_.value)==null||n.scrollToActiveTab()}),Be(H,{props:e,currentName:r,registerPane:d,unregisterPane:p}),y({currentName:r}),()=>{const n=e.editable||e.addable?c("span",{class:s.e("new-tab"),tabindex:"0",onClick:D,onKeydown:F=>{F.code===L.enter&&D()}},[c(V,{class:s.is("icon-plus")},{default:()=>[c(De,null,null)]})]):null,g=c("div",{class:[s.e("header"),s.is(e.tabPosition)]},[n,c(ot,{ref:_,currentName:r.value,editable:e.editable,type:e.type,panes:C.value,stretch:e.stretch,onTabClick:$,onTabRemove:x},null)]),N=c("div",{class:s.e("content")},[me(v,"default")]);return c("div",{class:[s.b(),s.m(e.tabPosition),{[s.m("card")]:e.type==="card",[s.m("border-card")]:e.type==="border-card"}]},[...e.tabPosition!=="bottom"?[g,N]:[N,g]])}}});const dt=q({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),ut=["id","aria-hidden","aria-labelledby"],_e="ElTabPane",vt=z({name:_e}),bt=z({...vt,props:dt,setup(e){const a=e,v=W(),y=ze(),l=ee(H);l||te(_e,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const t=K("tab-pane"),s=S(),C=I(()=>a.closable||l.props.closable),d=ie(()=>{var f;return l.currentName.value===((f=a.name)!=null?f:s.value)}),p=S(d.value),_=I(()=>{var f;return(f=a.name)!=null?f:s.value}),r=ie(()=>!a.lazy||p.value||d.value);B(d,f=>{f&&(p.value=!0)});const b=Ae({uid:v.uid,slots:y,props:a,paneName:_,active:d,index:s,isClosable:C});return be(()=>{l.registerPane(b)}),Ve(()=>{l.unregisterPane(b.uid)}),(f,$)=>R(r)?Ie((se(),ne("div",{key:0,id:`pane-${R(_)}`,class:ue(R(t).b()),role:"tabpanel","aria-hidden":!R(d),"aria-labelledby":`tab-${R(_)}`},[me(f.$slots,"default")],10,ut)),[[Ue,R(d)]]):Le("v-if",!0)}});var he=ve(bt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const ft=qe(rt,{TabPane:he}),mt=Ke(he);const pt=e=>(Xe("data-v-541f23ba"),e=e(),Ye(),e),_t={class:"pmds-enquiry"},ht={class:"pmds"},yt=je('<h1 class="text-30px mb-6" data-v-541f23ba> PMDS Enquiry </h1><div class="item" data-v-541f23ba><div class="title" data-v-541f23ba> Target CRA： </div><div class="content" data-v-541f23ba> CRA01 </div></div><div class="item" data-v-541f23ba><div class="title" data-v-541f23ba> Date Format： </div><div class="content" data-v-541f23ba> TUDF </div></div><div class="item" data-v-541f23ba><div class="title" data-v-541f23ba> Number Of Record： </div><div class="content" data-v-541f23ba> 15 </div></div><div class="item" data-v-541f23ba><div class="title" data-v-541f23ba> Remark： </div><div class="content" data-v-541f23ba> Chan Tai Man </div></div><div class="item" data-v-541f23ba><div class="title" data-v-541f23ba> File： </div><div class="content" data-v-541f23ba> FPCSTCP0012023010109000012345678911.zip </div></div>',6),gt={"mt-8":""},Ct=pt(()=>m("div",{class:"pmds no-border-top"},[m("div",null,[m("h1",{class:"text-26px mb-6"}," Enquiry Upload Response ")]),m("div",{class:"item"},[m("div",{class:"title"}," Original Msg ID： "),m("div",{class:"content"}," 1233456789012345 ")]),m("div",{class:"item"},[m("div",{class:"title"}," Return Code： "),m("div",{class:"content"}," CRPOOOOO ")]),m("div",{class:"item"},[m("div",{class:"title"}," Return Description： "),m("div",{class:"content"}," SUCCESS ")]),m("div",{class:"item"},[m("div",{class:"title"}," File Name： "),m("div",{class:"content"}," FPCSTCP001202301010900000123456789 ")]),m("div",{class:"item"},[m("div",{class:"title"}," File Rersion： "),m("div",{class:"content"}," 1 ")])],-1)),Nt=z({__name:"PMDSEnquiry",setup(e){const a=S("first"),v=(y,l)=>{console.log(y,l)};return(y,l)=>{const t=V,s=We,C=mt,d=ft;return se(),ne("div",_t,[m("div",ht,[yt,m("div",gt,[c(s,{color:"#626aef",dark:R(Je),class:"ml-200px"},{default:A(()=>[c(t,{"i-octicon-arrow-down-16":""}),U(" Download ")]),_:1},8,["dark"])])]),c(d,{modelValue:R(a),"onUpdate:modelValue":l[0]||(l[0]=p=>He(a)?a.value=p:null),"mt-8":"",type:"card",class:"demo-tabs",onTabClick:v},{default:A(()=>[c(C,{label:"CRP Process Result（1）",name:"first"},{default:A(()=>[Ct]),_:1}),c(C,{label:"CRA Process Result（0）",name:"second"},{default:A(()=>[U(" Config ")]),_:1}),c(C,{label:"PMDS Report（0）",name:"third"},{default:A(()=>[U(" Role ")]),_:1}),c(C,{label:"Follow Up（0）",name:"fourth"},{default:A(()=>[U(" Task ")]),_:1})]),_:1},8,["modelValue"])])}}});const Tt=Ge(Nt,[["__scopeId","data-v-541f23ba"]]);export{Tt as default};
