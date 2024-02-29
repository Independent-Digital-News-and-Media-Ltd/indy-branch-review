var _r=Object.defineProperty;var o=(e,s)=>_r(e,"name",{value:s,configurable:!0});import{R as T}from"./index-b56a0300.js";import{j as Y}from"./jsx-runtime-91e341d4.js";import{S as Vr}from"./warning-solid-24-62e98cc2.js";import{u as J}from"./styled-components.browser.esm-dd68fb2f.js";import{I as Ar}from"./Icon.hoc-1b9291aa.js";var ye=o(e=>e.type==="checkbox","isCheckBoxInput"),le=o(e=>e instanceof Date,"isDateObject"),R=o(e=>e==null,"isNullOrUndefined");const nr=o(e=>typeof e=="object","isObjectType");var S=o(e=>!R(e)&&!Array.isArray(e)&&nr(e)&&!le(e),"isObject"),wr=o(e=>S(e)&&e.target?ye(e.target)?e.target.checked:e.target.value:e,"getEventValue"),Fr=o(e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,"getNodeParentName"),Er=o((e,s)=>e.has(Fr(s)),"isNameInFieldArray"),Sr=o(e=>{const s=e.constructor&&e.constructor.prototype;return S(s)&&s.hasOwnProperty("isPrototypeOf")},"isPlainObject"),Le=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function M(e){let s;const i=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Le&&(e instanceof Blob||e instanceof FileList))&&(i||S(e)))if(s=i?[]:{},!i&&!Sr(e))s=e;else for(const t in e)e.hasOwnProperty(t)&&(s[t]=M(e[t]));else return e;return s}o(M,"cloneObject");var ge=o(e=>Array.isArray(e)?e.filter(Boolean):[],"compact"),F=o(e=>e===void 0,"isUndefined"),g=o((e,s,i)=>{if(!s||!S(e))return i;const t=ge(s.split(/[,[\].]+?/)).reduce((u,l)=>R(u)?u:u[l],e);return F(t)||t===e?F(e[s])?i:e[s]:t},"get"),G=o(e=>typeof e=="boolean","isBoolean");const Ge={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},q={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Z={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},or=T.createContext(null),ut=o(()=>T.useContext(or),"useFormContext"),ct=o(e=>{const{children:s,...i}=e;return T.createElement(or.Provider,{value:i},s)},"FormProvider");var Dr=o((e,s,i,t=!0)=>{const u={defaultValues:s._defaultValues};for(const l in e)Object.defineProperty(u,l,{get:()=>{const f=l;return s._proxyFormState[f]!==q.all&&(s._proxyFormState[f]=!t||q.all),i&&(i[f]=!0),e[f]}});return u},"getProxyFormState"),N=o(e=>S(e)&&!Object.keys(e).length,"isEmptyObject"),kr=o((e,s,i,t)=>{i(e);const{name:u,...l}=e;return N(l)||Object.keys(l).length>=Object.keys(s).length||Object.keys(l).find(f=>s[f]===(!t||q.all))},"shouldRenderFormState"),Ce=o(e=>Array.isArray(e)?e:[e],"convertToArrayPayload");function Cr(e){const s=T.useRef(e);s.current=e,T.useEffect(()=>{const i=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{i&&i.unsubscribe()}},[e.disabled])}o(Cr,"useSubscribe");var $=o(e=>typeof e=="string","isString"),Rr=o((e,s,i,t,u)=>$(e)?(t&&s.watch.add(e),g(i,e,u)):Array.isArray(e)?e.map(l=>(t&&s.watch.add(l),g(i,l))):(t&&(s.watchAll=!0),i),"generateWatchOutput"),Ue=o(e=>/^\w*$/.test(e),"isKey"),ar=o(e=>ge(e.replace(/["|']|\]/g,"").split(/\.|\[/)),"stringToPath"),A=o((e,s,i)=>{let t=-1;const u=Ue(s)?[s]:ar(s),l=u.length,f=l-1;for(;++t<l;){const x=u[t];let _=i;if(t!==f){const O=e[x];_=S(O)||Array.isArray(O)?O:isNaN(+u[t+1])?{}:[]}e[x]=_,e=e[x]}return e},"set"),Ir=o((e,s,i,t,u)=>s?{...i[e],types:{...i[e]&&i[e].types?i[e].types:{},[t]:u||!0}}:{},"appendErrors"),Je=o(e=>({isOnSubmit:!e||e===q.onSubmit,isOnBlur:e===q.onBlur,isOnChange:e===q.onChange,isOnAll:e===q.all,isOnTouch:e===q.onTouched}),"getValidationModes"),Ke=o((e,s,i)=>!i&&(s.watchAll||s.watch.has(e)||[...s.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),"isWatched");const fe=o((e,s,i,t)=>{for(const u of i||Object.keys(e)){const l=g(e,u);if(l){const{_f:f,...x}=l;if(f){if(f.refs&&f.refs[0]&&s(f.refs[0],u)&&!t)break;if(f.ref&&s(f.ref,f.name)&&!t)break;fe(x,s)}else S(x)&&fe(x,s)}}},"iterateFieldsByAction");var Tr=o((e,s,i)=>{const t=ge(g(e,i));return A(t,"root",s[i]),A(e,i,t),e},"updateFieldArrayRootError"),Me=o(e=>e.type==="file","isFileInput"),ee=o(e=>typeof e=="function","isFunction"),xe=o(e=>{if(!Le)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},"isHTMLElement"),be=o(e=>$(e),"isMessage"),Ne=o(e=>e.type==="radio","isRadioInput"),me=o(e=>e instanceof RegExp,"isRegex");const Qe={value:!1,isValid:!1},Xe={value:!0,isValid:!0};var lr=o(e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(i=>i&&i.checked&&!i.disabled).map(i=>i.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!F(e[0].attributes.value)?F(e[0].value)||e[0].value===""?Xe:{value:e[0].value,isValid:!0}:Xe:Qe}return Qe},"getCheckboxValue");const er={isValid:!1,value:null};var ur=o(e=>Array.isArray(e)?e.reduce((s,i)=>i&&i.checked&&!i.disabled?{isValid:!0,value:i.value}:s,er):er,"getRadioValue");function rr(e,s,i="validate"){if(be(e)||Array.isArray(e)&&e.every(be)||G(e)&&!e)return{type:i,message:be(e)?e:"",ref:s}}o(rr,"getValidateError");var ae=o(e=>S(e)&&!me(e)?e:{value:e,message:""},"getValueAndMessage"),tr=o(async(e,s,i,t,u)=>{const{ref:l,refs:f,required:x,maxLength:_,minLength:O,min:ie,max:E,pattern:p,validate:K,name:L,valueAsNumber:he,mount:Ae,disabled:Q}=e._f,b=g(s,L);if(!Ae||Q)return{};const j=f?f[0]:l,z=o(m=>{t&&j.reportValidity&&(j.setCustomValidity(G(m)?"":m||""),j.reportValidity())},"setCustomValidity"),D={},ue=Ne(l),ne=ye(l),we=ue||ne,B=(he||Me(l))&&F(l.value)&&F(b)||xe(l)&&l.value===""||b===""||Array.isArray(b)&&!b.length,re=Ir.bind(null,L,i,D),H=o((m,v,w,I=Z.maxLength,U=Z.minLength)=>{const P=m?v:w;D[L]={type:m?I:U,message:P,ref:l,...re(m?I:U,P)}},"getMinMaxMessage");if(u?!Array.isArray(b)||!b.length:x&&(!we&&(B||R(b))||G(b)&&!b||ne&&!lr(f).isValid||ue&&!ur(f).isValid)){const{value:m,message:v}=be(x)?{value:!!x,message:x}:ae(x);if(m&&(D[L]={type:Z.required,message:v,ref:j,...re(Z.required,v)},!i))return z(v),D}if(!B&&(!R(ie)||!R(E))){let m,v;const w=ae(E),I=ae(ie);if(!R(b)&&!isNaN(b)){const U=l.valueAsNumber||b&&+b;R(w.value)||(m=U>w.value),R(I.value)||(v=U<I.value)}else{const U=l.valueAsDate||new Date(b),P=o(pe=>new Date(new Date().toDateString()+" "+pe),"convertTimeToDate"),te=l.type=="time",ce=l.type=="week";$(w.value)&&b&&(m=te?P(b)>P(w.value):ce?b>w.value:U>new Date(w.value)),$(I.value)&&b&&(v=te?P(b)<P(I.value):ce?b<I.value:U<new Date(I.value))}if((m||v)&&(H(!!m,w.message,I.message,Z.max,Z.min),!i))return z(D[L].message),D}if((_||O)&&!B&&($(b)||u&&Array.isArray(b))){const m=ae(_),v=ae(O),w=!R(m.value)&&b.length>+m.value,I=!R(v.value)&&b.length<+v.value;if((w||I)&&(H(w,m.message,v.message),!i))return z(D[L].message),D}if(p&&!B&&$(b)){const{value:m,message:v}=ae(p);if(me(m)&&!b.match(m)&&(D[L]={type:Z.pattern,message:v,ref:l,...re(Z.pattern,v)},!i))return z(v),D}if(K){if(ee(K)){const m=await K(b,s),v=rr(m,j);if(v&&(D[L]={...v,...re(Z.validate,v.message)},!i))return z(v.message),D}else if(S(K)){let m={};for(const v in K){if(!N(m)&&!i)break;const w=rr(await K[v](b,s),j,v);w&&(m={...w,...re(v,w.message)},z(w.message),i&&(D[L]=m))}if(!N(m)&&(D[L]={ref:j,...m},!i))return D}}return z(!0),D},"validateField");function Or(e,s){const i=s.slice(0,-1).length;let t=0;for(;t<i;)e=F(e)?t++:e[s[t++]];return e}o(Or,"baseGet");function Lr(e){for(const s in e)if(e.hasOwnProperty(s)&&!F(e[s]))return!1;return!0}o(Lr,"isEmptyArray");function C(e,s){const i=Array.isArray(s)?s:Ue(s)?[s]:ar(s),t=i.length===1?e:Or(e,i),u=i.length-1,l=i[u];return t&&delete t[l],u!==0&&(S(t)&&N(t)||Array.isArray(t)&&Lr(t))&&C(e,i.slice(0,-1)),e}o(C,"unset");var Re=o(()=>{let e=[];return{get observers(){return e},next:o(u=>{for(const l of e)l.next&&l.next(u)},"next"),subscribe:o(u=>(e.push(u),{unsubscribe:()=>{e=e.filter(l=>l!==u)}}),"subscribe"),unsubscribe:o(()=>{e=[]},"unsubscribe")}},"createSubject"),_e=o(e=>R(e)||!nr(e),"isPrimitive");function se(e,s){if(_e(e)||_e(s))return e===s;if(le(e)&&le(s))return e.getTime()===s.getTime();const i=Object.keys(e),t=Object.keys(s);if(i.length!==t.length)return!1;for(const u of i){const l=e[u];if(!t.includes(u))return!1;if(u!=="ref"){const f=s[u];if(le(l)&&le(f)||S(l)&&S(f)||Array.isArray(l)&&Array.isArray(f)?!se(l,f):l!==f)return!1}}return!0}o(se,"deepEqual");var cr=o(e=>e.type==="select-multiple","isMultipleSelect"),Ur=o(e=>Ne(e)||ye(e),"isRadioOrCheckbox"),Ie=o(e=>xe(e)&&e.isConnected,"live"),dr=o(e=>{for(const s in e)if(ee(e[s]))return!0;return!1},"objectHasFunction");function Ve(e,s={}){const i=Array.isArray(e);if(S(e)||i)for(const t in e)Array.isArray(e[t])||S(e[t])&&!dr(e[t])?(s[t]=Array.isArray(e[t])?[]:{},Ve(e[t],s[t])):R(e[t])||(s[t]=!0);return s}o(Ve,"markFieldsDirty");function fr(e,s,i){const t=Array.isArray(e);if(S(e)||t)for(const u in e)Array.isArray(e[u])||S(e[u])&&!dr(e[u])?F(s)||_e(i[u])?i[u]=Array.isArray(e[u])?Ve(e[u],[]):{...Ve(e[u])}:fr(e[u],R(s)?{}:s[u],i[u]):i[u]=!se(e[u],s[u]);return i}o(fr,"getDirtyFieldsFromDefaultValues");var ve=o((e,s)=>fr(e,s,Ve(s)),"getDirtyFields"),yr=o((e,{valueAsNumber:s,valueAsDate:i,setValueAs:t})=>F(e)?e:s?e===""?NaN:e&&+e:i&&$(e)?new Date(e):t?t(e):e,"getFieldValueAs");function Te(e){const s=e.ref;if(!(e.refs?e.refs.every(i=>i.disabled):s.disabled))return Me(s)?s.files:Ne(s)?ur(e.refs).value:cr(s)?[...s.selectedOptions].map(({value:i})=>i):ye(s)?lr(e.refs).value:yr(F(s.value)?e.ref.value:s.value,e)}o(Te,"getFieldValue");var Mr=o((e,s,i,t)=>{const u={};for(const l of e){const f=g(s,l);f&&A(u,l,f._f)}return{criteriaMode:i,names:[...e],fields:u,shouldUseNativeValidation:t}},"getResolverOptions"),de=o(e=>F(e)?e:me(e)?e.source:S(e)?me(e.value)?e.value.source:e.value:e,"getRuleValue"),Nr=o(e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),"hasValidation");function sr(e,s,i){const t=g(e,i);if(t||Ue(i))return{error:t,name:i};const u=i.split(".");for(;u.length;){const l=u.join("."),f=g(s,l),x=g(e,l);if(f&&!Array.isArray(f)&&i!==l)return{name:i};if(x&&x.type)return{name:l,error:x};u.pop()}return{name:i}}o(sr,"schemaErrorLookup");var qr=o((e,s,i,t,u)=>u.isOnAll?!1:!i&&u.isOnTouch?!(s||e):(i?t.isOnBlur:u.isOnBlur)?!e:(i?t.isOnChange:u.isOnChange)?e:!0,"skipValidation"),Br=o((e,s)=>!ge(g(e,s)).length&&C(e,s),"unsetEmptyArray");const Pr={mode:q.onSubmit,reValidateMode:q.onChange,shouldFocusError:!0};function Wr(e={},s){let i={...Pr,...e},t={submitCount:0,isDirty:!1,isLoading:ee(i.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:i.errors||{},disabled:i.disabled||!1},u={},l=S(i.values)||S(i.defaultValues)?M(i.values||i.defaultValues)||{}:{},f=i.shouldUnregister?{}:M(l),x={action:!1,mount:!1,watch:!1},_={mount:new Set,unMount:new Set,array:new Set,watch:new Set},O,ie=0;const E={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},p={values:Re(),array:Re(),state:Re()},K=Je(i.mode),L=Je(i.reValidateMode),he=i.criteriaMode===q.all,Ae=o(r=>n=>{clearTimeout(ie),ie=setTimeout(r,n)},"debounce"),Q=o(async r=>{if(E.isValid||r){const n=i.resolver?N((await B()).errors):await H(u,!0);n!==t.isValid&&p.state.next({isValid:n})}},"_updateValid"),b=o(r=>E.isValidating&&p.state.next({isValidating:r}),"_updateIsValidating"),j=o((r,n=[],a,y,d=!0,c=!0)=>{if(y&&a){if(x.action=!0,c&&Array.isArray(g(u,r))){const h=a(g(u,r),y.argA,y.argB);d&&A(u,r,h)}if(c&&Array.isArray(g(t.errors,r))){const h=a(g(t.errors,r),y.argA,y.argB);d&&A(t.errors,r,h),Br(t.errors,r)}if(E.touchedFields&&c&&Array.isArray(g(t.touchedFields,r))){const h=a(g(t.touchedFields,r),y.argA,y.argB);d&&A(t.touchedFields,r,h)}E.dirtyFields&&(t.dirtyFields=ve(l,f)),p.state.next({name:r,isDirty:v(r,n),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else A(f,r,n)},"_updateFieldArray"),z=o((r,n)=>{A(t.errors,r,n),p.state.next({errors:t.errors})},"updateErrors"),D=o(r=>{t.errors=r,p.state.next({errors:t.errors,isValid:!1})},"_setErrors"),ue=o((r,n,a,y)=>{const d=g(u,r);if(d){const c=g(f,r,F(a)?g(l,r):a);F(c)||y&&y.defaultChecked||n?A(f,r,n?c:Te(d._f)):U(r,c),x.mount&&Q()}},"updateValidAndValue"),ne=o((r,n,a,y,d)=>{let c=!1,h=!1;const V={name:r},k=!!(g(u,r)&&g(u,r)._f.disabled);if(!a||y){E.isDirty&&(h=t.isDirty,t.isDirty=V.isDirty=v(),c=h!==V.isDirty);const W=k||se(g(l,r),n);h=!!(!k&&g(t.dirtyFields,r)),W||k?C(t.dirtyFields,r):A(t.dirtyFields,r,!0),V.dirtyFields=t.dirtyFields,c=c||E.dirtyFields&&h!==!W}if(a){const W=g(t.touchedFields,r);W||(A(t.touchedFields,r,a),V.touchedFields=t.touchedFields,c=c||E.touchedFields&&W!==a)}return c&&d&&p.state.next(V),c?V:{}},"updateTouchAndDirty"),we=o((r,n,a,y)=>{const d=g(t.errors,r),c=E.isValid&&G(n)&&t.isValid!==n;if(e.delayError&&a?(O=Ae(()=>z(r,a)),O(e.delayError)):(clearTimeout(ie),O=null,a?A(t.errors,r,a):C(t.errors,r)),(a?!se(d,a):d)||!N(y)||c){const h={...y,...c&&G(n)?{isValid:n}:{},errors:t.errors,name:r};t={...t,...h},p.state.next(h)}b(!1)},"shouldRenderByError"),B=o(async r=>i.resolver(f,i.context,Mr(r||_.mount,u,i.criteriaMode,i.shouldUseNativeValidation)),"_executeSchema"),re=o(async r=>{const{errors:n}=await B(r);if(r)for(const a of r){const y=g(n,a);y?A(t.errors,a,y):C(t.errors,a)}else t.errors=n;return n},"executeSchemaAndUpdateState"),H=o(async(r,n,a={valid:!0})=>{for(const y in r){const d=r[y];if(d){const{_f:c,...h}=d;if(c){const V=_.array.has(c.name),k=await tr(d,f,he,i.shouldUseNativeValidation&&!n,V);if(k[c.name]&&(a.valid=!1,n))break;!n&&(g(k,c.name)?V?Tr(t.errors,k,c.name):A(t.errors,c.name,k[c.name]):C(t.errors,c.name))}h&&await H(h,n,a)}}return a.valid},"executeBuiltInValidation"),m=o(()=>{for(const r of _.unMount){const n=g(u,r);n&&(n._f.refs?n._f.refs.every(a=>!Ie(a)):!Ie(n._f.ref))&&Ee(r)}_.unMount=new Set},"_removeUnmounted"),v=o((r,n)=>(r&&n&&A(f,r,n),!se(qe(),l)),"_getDirty"),w=o((r,n,a)=>Rr(r,_,{...x.mount?f:F(n)?l:$(r)?{[r]:n}:n},a,n),"_getWatch"),I=o(r=>ge(g(x.mount?f:l,r,e.shouldUnregister?g(l,r,[]):[])),"_getFieldArray"),U=o((r,n,a={})=>{const y=g(u,r);let d=n;if(y){const c=y._f;c&&(!c.disabled&&A(f,r,yr(n,c)),d=xe(c.ref)&&R(n)?"":n,cr(c.ref)?[...c.ref.options].forEach(h=>h.selected=d.includes(h.value)):c.refs?ye(c.ref)?c.refs.length>1?c.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(d)?!!d.find(V=>V===h.value):d===h.value)):c.refs[0]&&(c.refs[0].checked=!!d):c.refs.forEach(h=>h.checked=h.value===d):Me(c.ref)?c.ref.value="":(c.ref.value=d,c.ref.type||p.values.next({name:r,values:{...f}})))}(a.shouldDirty||a.shouldTouch)&&ne(r,d,a.shouldTouch,a.shouldDirty,!0),a.shouldValidate&&Fe(r)},"setFieldValue"),P=o((r,n,a)=>{for(const y in n){const d=n[y],c=`${r}.${y}`,h=g(u,c);(_.array.has(r)||!_e(d)||h&&!h._f)&&!le(d)?P(c,d,a):U(c,d,a)}},"setValues"),te=o((r,n,a={})=>{const y=g(u,r),d=_.array.has(r),c=M(n);A(f,r,c),d?(p.array.next({name:r,values:{...f}}),(E.isDirty||E.dirtyFields)&&a.shouldDirty&&p.state.next({name:r,dirtyFields:ve(l,f),isDirty:v(r,c)})):y&&!y._f&&!R(c)?P(r,c,a):U(r,c,a),Ke(r,_)&&p.state.next({...t}),p.values.next({name:r,values:{...f}}),!x.mount&&s()},"setValue"),ce=o(async r=>{const n=r.target;let a=n.name,y=!0;const d=g(u,a),c=o(()=>n.type?Te(d._f):wr(r),"getCurrentFieldValue"),h=o(V=>{y=Number.isNaN(V)||V===g(f,a,V)},"_updateIsFieldValueUpdated");if(d){let V,k;const W=c(),oe=r.type===Ge.BLUR||r.type===Ge.FOCUS_OUT,br=!Nr(d._f)&&!i.resolver&&!g(t.errors,a)&&!d._f.deps||qr(oe,g(t.touchedFields,a),t.isSubmitted,L,K),De=Ke(a,_,oe);A(f,a,W),oe?(d._f.onBlur&&d._f.onBlur(r),O&&O(0)):d._f.onChange&&d._f.onChange(r);const ke=ne(a,W,oe,!1),xr=!N(ke)||De;if(!oe&&p.values.next({name:a,type:r.type,values:{...f}}),br)return E.isValid&&Q(),xr&&p.state.next({name:a,...De?{}:ke});if(!oe&&De&&p.state.next({...t}),b(!0),i.resolver){const{errors:Ye}=await B([a]);if(h(W),y){const mr=sr(t.errors,u,a),Ze=sr(Ye,u,mr.name||a);V=Ze.error,a=Ze.name,k=N(Ye)}}else V=(await tr(d,f,he,i.shouldUseNativeValidation))[a],h(W),y&&(V?k=!1:E.isValid&&(k=await H(u,!0)));y&&(d._f.deps&&Fe(d._f.deps),we(a,k,V,ke))}},"onChange"),pe=o((r,n)=>{if(g(t.errors,n)&&r.focus)return r.focus(),1},"_focusInput"),Fe=o(async(r,n={})=>{let a,y;const d=Ce(r);if(b(!0),i.resolver){const c=await re(F(r)?r:d);a=N(c),y=r?!d.some(h=>g(c,h)):a}else r?(y=(await Promise.all(d.map(async c=>{const h=g(u,c);return await H(h&&h._f?{[c]:h}:h)}))).every(Boolean),!(!y&&!t.isValid)&&Q()):y=a=await H(u);return p.state.next({...!$(r)||E.isValid&&a!==t.isValid?{}:{name:r},...i.resolver||!r?{isValid:a}:{},errors:t.errors,isValidating:!1}),n.shouldFocus&&!y&&fe(u,pe,r?d:_.mount),y},"trigger"),qe=o(r=>{const n={...l,...x.mount?f:{}};return F(r)?n:$(r)?g(n,r):r.map(a=>g(n,a))},"getValues"),Be=o((r,n)=>({invalid:!!g((n||t).errors,r),isDirty:!!g((n||t).dirtyFields,r),isTouched:!!g((n||t).touchedFields,r),error:g((n||t).errors,r)}),"getFieldState"),gr=o(r=>{r&&Ce(r).forEach(n=>C(t.errors,n)),p.state.next({errors:r?t.errors:{}})},"clearErrors"),Pe=o((r,n,a)=>{const y=(g(u,r,{_f:{}})._f||{}).ref;A(t.errors,r,{...n,ref:y}),p.state.next({name:r,errors:t.errors,isValid:!1}),a&&a.shouldFocus&&y&&y.focus&&y.focus()},"setError"),hr=o((r,n)=>ee(r)?p.values.subscribe({next:a=>r(w(void 0,n),a)}):w(r,n,!0),"watch"),Ee=o((r,n={})=>{for(const a of r?Ce(r):_.mount)_.mount.delete(a),_.array.delete(a),n.keepValue||(C(u,a),C(f,a)),!n.keepError&&C(t.errors,a),!n.keepDirty&&C(t.dirtyFields,a),!n.keepTouched&&C(t.touchedFields,a),!i.shouldUnregister&&!n.keepDefaultValue&&C(l,a);p.values.next({values:{...f}}),p.state.next({...t,...n.keepDirty?{isDirty:v()}:{}}),!n.keepIsValid&&Q()},"unregister"),We=o(({disabled:r,name:n,field:a,fields:y,value:d})=>{if(G(r)){const c=r?void 0:F(d)?Te(a?a._f:g(y,n)._f):d;A(f,n,c),ne(n,c,!1,!1,!0)}},"_updateDisabledField"),Se=o((r,n={})=>{let a=g(u,r);const y=G(n.disabled);return A(u,r,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:r}},name:r,mount:!0,...n}}),_.mount.add(r),a?We({field:a,disabled:n.disabled,name:r,value:n.value}):ue(r,!0,n.value),{...y?{disabled:n.disabled}:{},...i.progressive?{required:!!n.required,min:de(n.min),max:de(n.max),minLength:de(n.minLength),maxLength:de(n.maxLength),pattern:de(n.pattern)}:{},name:r,onChange:ce,onBlur:ce,ref:d=>{if(d){Se(r,n),a=g(u,r);const c=F(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,h=Ur(c),V=a._f.refs||[];if(h?V.find(k=>k===c):c===a._f.ref)return;A(u,r,{_f:{...a._f,...h?{refs:[...V.filter(Ie),c,...Array.isArray(g(l,r))?[{}]:[]],ref:{type:c.type,name:r}}:{ref:c}}}),ue(r,!1,void 0,c)}else a=g(u,r,{}),a._f&&(a._f.mount=!1),(i.shouldUnregister||n.shouldUnregister)&&!(Er(_.array,r)&&x.action)&&_.unMount.add(r)}}},"register"),$e=o(()=>i.shouldFocusError&&fe(u,pe,_.mount),"_focusError"),pr=o(r=>{G(r)&&(p.state.next({disabled:r}),fe(u,(n,a)=>{let y=r;const d=g(u,a);d&&G(d._f.disabled)&&(y||(y=d._f.disabled)),n.disabled=y},0,!1))},"_disableForm"),je=o((r,n)=>async a=>{let y;a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let d=M(f);if(p.state.next({isSubmitting:!0}),i.resolver){const{errors:c,values:h}=await B();t.errors=c,d=h}else await H(u);if(C(t.errors,"root"),N(t.errors)){p.state.next({errors:{}});try{await r(d,a)}catch(c){y=c}}else n&&await n({...t.errors},a),$e(),setTimeout($e);if(p.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:N(t.errors)&&!y,submitCount:t.submitCount+1,errors:t.errors}),y)throw y},"handleSubmit"),vr=o((r,n={})=>{g(u,r)&&(F(n.defaultValue)?te(r,M(g(l,r))):(te(r,n.defaultValue),A(l,r,M(n.defaultValue))),n.keepTouched||C(t.touchedFields,r),n.keepDirty||(C(t.dirtyFields,r),t.isDirty=n.defaultValue?v(r,M(g(l,r))):v()),n.keepError||(C(t.errors,r),E.isValid&&Q()),p.state.next({...t}))},"resetField"),ze=o((r,n={})=>{const a=r?M(r):l,y=M(a),d=r&&!N(r)?y:l;if(n.keepDefaultValues||(l=a),!n.keepValues){if(n.keepDirtyValues)for(const c of _.mount)g(t.dirtyFields,c)?A(d,c,g(f,c)):te(c,g(d,c));else{if(Le&&F(r))for(const c of _.mount){const h=g(u,c);if(h&&h._f){const V=Array.isArray(h._f.refs)?h._f.refs[0]:h._f.ref;if(xe(V)){const k=V.closest("form");if(k){k.reset();break}}}}u={}}f=e.shouldUnregister?n.keepDefaultValues?M(l):{}:M(d),p.array.next({values:{...d}}),p.values.next({values:{...d}})}_={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!x.mount&&s(),x.mount=!E.isValid||!!n.keepIsValid||!!n.keepDirtyValues,x.watch=!!e.shouldUnregister,p.state.next({submitCount:n.keepSubmitCount?t.submitCount:0,isDirty:n.keepDirty?t.isDirty:!!(n.keepDefaultValues&&!se(r,l)),isSubmitted:n.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:n.keepDirtyValues?n.keepDefaultValues&&f?ve(l,f):t.dirtyFields:n.keepDefaultValues&&r?ve(l,r):{},touchedFields:n.keepTouched?t.touchedFields:{},errors:n.keepErrors?t.errors:{},isSubmitSuccessful:n.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},"_reset"),He=o((r,n)=>ze(ee(r)?r(f):r,n),"reset");return{control:{register:Se,unregister:Ee,getFieldState:Be,handleSubmit:je,setError:Pe,_executeSchema:B,_getWatch:w,_getDirty:v,_updateValid:Q,_removeUnmounted:m,_updateFieldArray:j,_updateDisabledField:We,_getFieldArray:I,_reset:ze,_resetDefaultValues:o(()=>ee(i.defaultValues)&&i.defaultValues().then(r=>{He(r,i.resetOptions),p.state.next({isLoading:!1})}),"_resetDefaultValues"),_updateFormState:o(r=>{t={...t,...r}},"_updateFormState"),_disableForm:pr,_subjects:p,_proxyFormState:E,_setErrors:D,get _fields(){return u},get _formValues(){return f},get _state(){return x},set _state(r){x=r},get _defaultValues(){return l},get _names(){return _},set _names(r){_=r},get _formState(){return t},set _formState(r){t=r},get _options(){return i},set _options(r){i={...i,...r}}},trigger:Fe,register:Se,handleSubmit:je,watch:hr,setValue:te,getValues:qe,reset:He,resetField:vr,clearErrors:gr,unregister:Ee,setError:Pe,setFocus:o((r,n={})=>{const a=g(u,r),y=a&&a._f;if(y){const d=y.refs?y.refs[0]:y.ref;d.focus&&(d.focus(),n.shouldSelect&&d.select())}},"setFocus"),getFieldState:Be}}o(Wr,"createFormControl");function dt(e={}){const s=T.useRef(),i=T.useRef(),[t,u]=T.useState({isDirty:!1,isValidating:!1,isLoading:ee(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:ee(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Wr(e,()=>u(f=>({...f}))),formState:t});const l=s.current.control;return l._options=e,Cr({subject:l._subjects.state,next:f=>{kr(f,l._proxyFormState,l._updateFormState,!0)&&u({...l._formState})}}),T.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),T.useEffect(()=>{if(l._proxyFormState.isDirty){const f=l._getDirty();f!==t.isDirty&&l._subjects.state.next({isDirty:f})}},[l,t.isDirty]),T.useEffect(()=>{e.values&&!se(e.values,i.current)?(l._reset(e.values,l._options.resetOptions),i.current=e.values,u(f=>({...f}))):l._resetDefaultValues()},[e.values,l]),T.useEffect(()=>{e.errors&&l._setErrors(e.errors)},[e.errors,l]),T.useEffect(()=>{l._state.mount||(l._updateValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),T.useEffect(()=>{e.shouldUnregister&&l._subjects.values.next({values:l._getWatch()})},[e.shouldUnregister,l]),s.current.formState=Dr(t,l),s.current}o(dt,"useForm");const $r=o(e=>`${e}-hint`,"hintId"),jr=o(e=>`${e}-error`,"errorId"),ft=o(e=>e.charAt(0).toUpperCase()+e.slice(1),"capitalise"),zr={letters:new RegExp("[A-Za-z]","g"),digits:new RegExp("[0-9]","g")},yt=o((e,s)=>{if(!s)return e==null?void 0:e.length;const i=zr[s];return(e.match(i)||[]).length},"count"),gt=o(e=>typeof e=="string"?e.replace(/\s{2,}/g," ").trim():e||"","parseString"),Hr=o((e,s)=>e.fields.reduce((i,t)=>{const u=e.validate(t,s[t],s)||[];return u.length>0?{...i,[t]:u}:i},{}),"getAllErrors"),ht=o(e=>s=>{const i=Hr(e,s);return{values:s,errors:i}},"resolver");var X=(e=>(e.DEFAULT="default",e.ERROR="error",e.SUCCESS="success",e))(X||{});const ir=o((e,s,i)=>({inactive:{[X.DEFAULT]:`1px solid ${e.color.semiotic.inactive};`,[X.ERROR]:`2px solid ${e.color.semiotic.error}`,[X.SUCCESS]:`2px solid ${e.color.semiotic.success}`},focused:{[X.DEFAULT]:`2px solid ${e.color.semiotic.info}`,[X.ERROR]:`2px solid ${e.color.semiotic.error}`,[X.SUCCESS]:`2px solid ${e.color.semiotic.info}`}})[i][s],"getBorderStyle"),pt=J.input.withConfig({componentId:"sc-10zubip-0"})(["display:block;width:100%;height:var(--input-height);box-sizing:border-box;padding-top:","px;padding-right:","px;padding-bottom:","px;padding-left:","px;border:none;border-radius:var(--border-radius);background-color:",";font:",";&:focus,&:focus-visible{border:none;outline:none;}&:disabled{background-color:",";color:",";}"],({theme:e})=>e.spacing.x1,({theme:e})=>e.spacing.x2,({theme:e})=>e.spacing.x1,({theme:e})=>e.spacing.x2,({theme:e})=>e.color.ink.inverted,({theme:e})=>e.textStyle.formInput.base,({theme:e})=>e.color.semiotic.disabled,({theme:e})=>e.color.ink.inverted),Yr=J.div.withConfig({componentId:"sc-10zubip-1"})(["--input-height:","px;--border-radius:4px;align-items:center;margin-bottom:","px;color:",";font:",";"],({theme:e})=>e.dimension.btn.height,({theme:e})=>e.spacing.x1,({theme:e})=>e.color.ink.base,({theme:e})=>e.textStyle.formInput.base),Zr=J.label.withConfig({componentId:"sc-10zubip-2"})(["margin-bottom:0;font:",";"],({theme:e})=>e.textStyle.formInput.label),Gr=J.span.withConfig({componentId:"sc-10zubip-3"})(["margin-right:","px;color:",";"],({theme:e})=>e.spacing.x0_25,({theme:e})=>e.color.semiotic.error),Jr=J.p.withConfig({componentId:"sc-10zubip-4"})(["margin-top:","px;margin-bottom:0;font:",";"],({theme:e})=>e.spacing.x0_25,({theme:e})=>e.textStyle.formInput.helpText),Oe=J.div.withConfig({componentId:"sc-10zubip-5"})(["position:relative;width:100%;margin-top:","px;border-radius:var(--border-radius);outline:",";&:focus-within{border:none;outline:",";}"],({theme:e})=>e.spacing.x1,({theme:e,$state:s})=>ir(e,s,"inactive"),({theme:e,$state:s})=>ir(e,s,"focused")),Kr=J.div.withConfig({componentId:"sc-10zubip-6"})(["margin-top:","px;margin-bottom:","px;"],({theme:e})=>e.spacing.x0_5,({theme:e})=>e.spacing.x2),Qr=J.div.withConfig({componentId:"sc-10zubip-7"})(["display:flex;gap:","px;color:",";font:",";"],({theme:e})=>e.spacing.x0_5,e=>e.theme.color.semiotic.error,({theme:e})=>e.textStyle.formInput.error),Xr=J(Ar).withConfig({componentId:"sc-10zubip-8"})(["flex-shrink:0;"]),vt=o(({id:e,label:s,helpText:i,className:t,message:u,state:l,required:f,children:x})=>Y.jsxs(Yr,{className:t,children:[Y.jsx(Zr,{htmlFor:e,children:s}),f&&Y.jsx(Gr,{"aria-hidden":!0,children:"*"}),i&&Y.jsx(Jr,{id:$r(e),children:i}),Y.jsx(Oe,{$state:l,children:x}),Y.jsx(Kr,{"aria-live":"assertive",children:l===X.ERROR&&u&&Y.jsxs(Qr,{children:[Y.jsx(Xr,{svg:Vr,size:"small"}),Y.jsx("span",{id:jr(e),children:u})]})})]}),"FormInputWrapper");try{Oe.displayName="InputWrapper",Oe.__docgenInfo={description:"",displayName:"InputWrapper",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"Style guide: Text fields should always have a label",name:"label",required:!0,type:{name:"string"}},helpText:{defaultValue:null,description:"Style guide: Input constraints can be displayed here e.g. for Expiry Date: MM/YY",name:"helpText",required:!1,type:{name:"string"}},message:{defaultValue:null,description:`When controlled={true}, the message that will display on error
Otherwise, the state must be manually set to InputState.ERROR`,name:"message",required:!1,type:{name:"string"}},state:{defaultValue:null,description:`The state of the input - defines border style, and whether to show
error messages`,name:"state",required:!0,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"success"'}]}},required:{defaultValue:null,description:`Whether to display the asterisk indicating a required field
Note: This is purely a VISUAL indicator, and does not affect validation`,name:"required",required:!1,type:{name:"boolean"}},controlled:{defaultValue:null,description:`Whether the input's validation (errors and state) are controlled by
react-hook-form (requiring use of FormProvider from
@indy /ui/Form)`,name:"controlled",required:!1,type:{name:"boolean"}}}}}catch{}export{pt as B,ct as F,X as I,ft as a,ut as b,yt as c,vt as d,jr as e,ir as g,$r as h,gt as p,ht as r,dt as u};
//# sourceMappingURL=InputWrapper-91d5dced.js.map
