import{V as c,aX as Ae,a1 as De,j as V,R as ge,ag as Le,P as Oe,ah as G,am as xe,an as Ke,Q as J,d as Ee,aY as He,a7 as je,Y as We,a6 as Ue,a5 as Xe,X as Ye,a8 as we,aZ as ee,a_ as Ze,a$ as Qe,b0 as qe,b1 as Ge,aS as Je,Z as te,a0 as M,$ as Se,aK as et,b2 as tt,m as at,v as ot,o as p,c as g,ac as v,F as ae,a9 as h,e as t,ab as H,b as P,i as w,w as B,ad as j,E as R,b3 as oe,a as nt,b4 as st,b5 as lt,b6 as rt,t as W,af as it,ae as ut,aD as ct,a3 as Ce,ak as dt}from"./index-2e7b34e1.js";import{U as ne}from"./event-8e91c63d.js";const pt=o=>/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(o),ft=["class","style"],vt=/^on[A-Z]/,mt=(o={})=>{const{excludeListeners:m=!1,excludeKeys:s}=o,a=c(()=>((s==null?void 0:s.value)||[]).concat(ft)),l=De();return l?c(()=>{var r;return Ae(Object.entries((r=l.proxy)==null?void 0:r.$attrs).filter(([u])=>!a.value.includes(u)&&!(m&&vt.test(u))))}):c(()=>({}))};function ht(o){const m=V();function s(){if(o.value==null)return;const{selectionStart:l,selectionEnd:r,value:u}=o.value;if(l==null||r==null)return;const x=u.slice(0,Math.max(0,l)),d=u.slice(Math.max(0,r));m.value={selectionStart:l,selectionEnd:r,value:u,beforeTxt:x,afterTxt:d}}function a(){if(o.value==null||m.value==null)return;const{value:l}=o.value,{beforeTxt:r,afterTxt:u,selectionStart:x}=m.value;if(r==null||u==null||x==null)return;let d=l.length;if(l.endsWith(u))d=l.length-u.length;else if(l.startsWith(r))d=r.length;else{const y=r[x-1],S=l.indexOf(y,x-1);S!==-1&&(d=S+1)}o.value.setSelectionRange(d,d)}return[s,a]}let b;const yt=`
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,bt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function gt(o){const m=window.getComputedStyle(o),s=m.getPropertyValue("box-sizing"),a=Number.parseFloat(m.getPropertyValue("padding-bottom"))+Number.parseFloat(m.getPropertyValue("padding-top")),l=Number.parseFloat(m.getPropertyValue("border-bottom-width"))+Number.parseFloat(m.getPropertyValue("border-top-width"));return{contextStyle:bt.map(u=>`${u}:${m.getPropertyValue(u)}`).join(";"),paddingSize:a,borderSize:l,boxSizing:s}}function Ie(o,m=1,s){var a;b||(b=document.createElement("textarea"),document.body.appendChild(b));const{paddingSize:l,borderSize:r,boxSizing:u,contextStyle:x}=gt(o);b.setAttribute("style",`${x};${yt}`),b.value=o.value||o.placeholder||"";let d=b.scrollHeight;const y={};u==="border-box"?d=d+r:u==="content-box"&&(d=d-l),b.value="";const S=b.scrollHeight-l;if(ge(m)){let f=S*m;u==="border-box"&&(f=f+l+r),d=Math.max(f,d),y.minHeight=`${f}px`}if(ge(s)){let f=S*s;u==="border-box"&&(f=f+l+r),d=Math.min(f,d)}return y.height=`${d}px`,(a=b.parentNode)==null||a.removeChild(b),b=void 0,y}const xt=Le({id:{type:String,default:void 0},size:Oe,disabled:Boolean,modelValue:{type:G([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:G([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:xe},prefixIcon:{type:xe},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:G([Object,Array,String]),default:()=>Ke({})}}),wt={[ne]:o=>J(o),input:o=>J(o),change:o=>J(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},St=["role"],Ct=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form"],It=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form"],Et=Ee({name:"ElInput",inheritAttrs:!1}),kt=Ee({...Et,props:xt,emits:wt,setup(o,{expose:m,emit:s}){const a=o,l=He(),r=je(),u=c(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=l["aria-haspopup"],e["aria-owns"]=l["aria-owns"],e["aria-expanded"]=l["aria-expanded"]),e}),x=c(()=>[a.type==="textarea"?le.b():n.b(),n.m(ke.value),n.is("disabled",E.value),n.is("exceed",Ve.value),{[n.b("group")]:r.prepend||r.append,[n.bm("group","append")]:r.append,[n.bm("group","prepend")]:r.prepend,[n.m("prefix")]:r.prefix||a.prefixIcon,[n.m("suffix")]:r.suffix||a.suffixIcon||a.clearable||a.showPassword,[n.bm("suffix","password-clear")]:L.value&&Y.value},l.class]),d=c(()=>[n.e("wrapper"),n.is("focus",N.value)]),y=mt({excludeKeys:c(()=>Object.keys(u.value))}),{form:S,formItem:f}=We(),{inputId:se}=Ue(a,{formItemContext:f}),ke=Xe(),E=Ye(),n=we("input"),le=we("textarea"),A=ee(),k=ee(),N=V(!1),U=V(!1),F=V(!1),D=V(!1),re=V(),X=ee(a.inputStyle),T=c(()=>A.value||k.value),ie=c(()=>{var e;return(e=S==null?void 0:S.statusIcon)!=null?e:!1}),$=c(()=>(f==null?void 0:f.validateState)||""),ue=c(()=>$.value&&Ze[$.value]),ze=c(()=>D.value?Qe:qe),Pe=c(()=>[l.style,a.inputStyle]),ce=c(()=>[a.inputStyle,X.value,{resize:a.resize}]),C=c(()=>Ge(a.modelValue)?"":String(a.modelValue)),L=c(()=>a.clearable&&!E.value&&!a.readonly&&!!C.value&&(N.value||U.value)),Y=c(()=>a.showPassword&&!E.value&&!a.readonly&&!!C.value&&(!!C.value||N.value)),z=c(()=>a.showWordLimit&&!!y.value.maxlength&&(a.type==="text"||a.type==="textarea")&&!E.value&&!a.readonly&&!a.showPassword),Z=c(()=>Array.from(C.value).length),Ve=c(()=>!!z.value&&Z.value>Number(y.value.maxlength)),Ne=c(()=>!!r.suffix||!!a.suffixIcon||L.value||a.showPassword||z.value||!!$.value&&ie.value),[Fe,Te]=ht(A);Je(k,e=>{if(!z.value||a.resize!=="both")return;const i=e[0],{width:I}=i.contentRect;re.value={right:`calc(100% - ${I+15+6}px)`}});const O=()=>{const{type:e,autosize:i}=a;if(!(!ct||e!=="textarea"))if(i){const I=Ce(i)?i.minRows:void 0,q=Ce(i)?i.maxRows:void 0;X.value={...Ie(k.value,I,q)}}else X.value={minHeight:Ie(k.value).minHeight}},_=()=>{const e=T.value;!e||e.value===C.value||(e.value=C.value)},Q=async e=>{Fe();let{value:i}=e.target;if(a.formatter&&(i=a.parser?a.parser(i):i,i=a.formatter(i)),!F.value){if(i===C.value){_();return}s(ne,i),s("input",i),await M(),_(),Te()}},de=e=>{s("change",e.target.value)},pe=e=>{s("compositionstart",e),F.value=!0},fe=e=>{var i;s("compositionupdate",e);const I=(i=e.target)==null?void 0:i.value,q=I[I.length-1]||"";F.value=!pt(q)},ve=e=>{s("compositionend",e),F.value&&(F.value=!1,Q(e))},$e=()=>{D.value=!D.value,K()},K=async()=>{var e;await M(),(e=T.value)==null||e.focus()},_e=()=>{var e;return(e=T.value)==null?void 0:e.blur()},me=e=>{N.value=!0,s("focus",e)},he=e=>{var i;N.value=!1,s("blur",e),a.validateEvent&&((i=f==null?void 0:f.validate)==null||i.call(f,"blur").catch(I=>Se()))},Me=e=>{U.value=!1,s("mouseleave",e)},Be=e=>{U.value=!0,s("mouseenter",e)},ye=e=>{s("keydown",e)},Re=()=>{var e;(e=T.value)==null||e.select()},be=()=>{s(ne,""),s("change",""),s("clear"),s("input","")};return te(()=>a.modelValue,()=>{var e;M(()=>O()),a.validateEvent&&((e=f==null?void 0:f.validate)==null||e.call(f,"change").catch(i=>Se()))}),te(C,()=>_()),te(()=>a.type,async()=>{await M(),_(),O()}),et(()=>{!a.formatter&&a.parser,_(),M(O)}),m({input:A,textarea:k,ref:T,textareaStyle:ce,autosize:tt(a,"autosize"),focus:K,blur:_e,select:Re,clear:be,resizeTextarea:O}),(e,i)=>at((p(),g("div",oe(t(u),{class:t(x),style:t(Pe),role:e.containerRole,onMouseenter:Be,onMouseleave:Me}),[v(" input "),e.type!=="textarea"?(p(),g(ae,{key:0},[v(" prepend slot "),e.$slots.prepend?(p(),g("div",{key:0,class:h(t(n).be("group","prepend"))},[H(e.$slots,"prepend")],2)):v("v-if",!0),P("div",{class:h(t(d))},[v(" prefix slot "),e.$slots.prefix||e.prefixIcon?(p(),g("span",{key:0,class:h(t(n).e("prefix"))},[P("span",{class:h(t(n).e("prefix-inner")),onClick:K},[H(e.$slots,"prefix"),e.prefixIcon?(p(),w(t(R),{key:0,class:h(t(n).e("icon"))},{default:B(()=>[(p(),w(j(e.prefixIcon)))]),_:1},8,["class"])):v("v-if",!0)],2)],2)):v("v-if",!0),P("input",oe({id:t(se),ref_key:"input",ref:A,class:t(n).e("inner")},t(y),{type:e.showPassword?D.value?"text":"password":e.type,disabled:t(E),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:a.form,onCompositionstart:pe,onCompositionupdate:fe,onCompositionend:ve,onInput:Q,onFocus:me,onBlur:he,onChange:de,onKeydown:ye}),null,16,Ct),v(" suffix slot "),t(Ne)?(p(),g("span",{key:1,class:h(t(n).e("suffix"))},[P("span",{class:h(t(n).e("suffix-inner")),onClick:K},[!t(L)||!t(Y)||!t(z)?(p(),g(ae,{key:0},[H(e.$slots,"suffix"),e.suffixIcon?(p(),w(t(R),{key:0,class:h(t(n).e("icon"))},{default:B(()=>[(p(),w(j(e.suffixIcon)))]),_:1},8,["class"])):v("v-if",!0)],64)):v("v-if",!0),t(L)?(p(),w(t(R),{key:1,class:h([t(n).e("icon"),t(n).e("clear")]),onMousedown:lt(t(rt),["prevent"]),onClick:be},{default:B(()=>[nt(t(st))]),_:1},8,["class","onMousedown"])):v("v-if",!0),t(Y)?(p(),w(t(R),{key:2,class:h([t(n).e("icon"),t(n).e("password")]),onClick:$e},{default:B(()=>[(p(),w(j(t(ze))))]),_:1},8,["class"])):v("v-if",!0),t(z)?(p(),g("span",{key:3,class:h(t(n).e("count"))},[P("span",{class:h(t(n).e("count-inner"))},W(t(Z))+" / "+W(t(y).maxlength),3)],2)):v("v-if",!0),t($)&&t(ue)&&t(ie)?(p(),w(t(R),{key:4,class:h([t(n).e("icon"),t(n).e("validateIcon"),t(n).is("loading",t($)==="validating")])},{default:B(()=>[(p(),w(j(t(ue))))]),_:1},8,["class"])):v("v-if",!0)],2)],2)):v("v-if",!0)],2),v(" append slot "),e.$slots.append?(p(),g("div",{key:1,class:h(t(n).be("group","append"))},[H(e.$slots,"append")],2)):v("v-if",!0)],64)):(p(),g(ae,{key:1},[v(" textarea "),P("textarea",oe({id:t(se),ref_key:"textarea",ref:k,class:t(le).e("inner")},t(y),{tabindex:e.tabindex,disabled:t(E),readonly:e.readonly,autocomplete:e.autocomplete,style:t(ce),"aria-label":e.label,placeholder:e.placeholder,form:a.form,onCompositionstart:pe,onCompositionupdate:fe,onCompositionend:ve,onInput:Q,onFocus:me,onBlur:he,onChange:de,onKeydown:ye}),null,16,It),t(z)?(p(),g("span",{key:0,style:it(re.value),class:h(t(n).e("count"))},W(t(Z))+" / "+W(t(y).maxlength),7)):v("v-if",!0)],64))],16,St)),[[ot,e.type!=="hidden"]])}});var zt=ut(kt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const Nt=dt(zt);export{Nt as E,pt as i};
