var mr=Object.defineProperty;var n=(e,s)=>mr(e,"name",{value:s,configurable:!0});import{R as I}from"./index-b56a0300.js";import{j as H}from"./jsx-runtime-91e341d4.js";import{S as _r}from"./warning-solid-24-62e98cc2.js";import{u as G}from"./styled-components.browser.esm-dd68fb2f.js";import{I as Vr}from"./Icon.hoc-1b9291aa.js";var ye=n(e=>e.type==="checkbox","isCheckBoxInput"),ae=n(e=>e instanceof Date,"isDateObject"),C=n(e=>e==null,"isNullOrUndefined");const ir=n(e=>typeof e=="object","isObjectType");var w=n(e=>!C(e)&&!Array.isArray(e)&&ir(e)&&!ae(e),"isObject"),Fr=n(e=>w(e)&&e.target?ye(e.target)?e.target.checked:e.target.value:e,"getEventValue"),Ar=n(e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,"getNodeParentName"),wr=n((e,s)=>e.has(Ar(s)),"isNameInFieldArray"),Er=n(e=>{const s=e.constructor&&e.constructor.prototype;return w(s)&&s.hasOwnProperty("isPrototypeOf")},"isPlainObject"),Oe=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function M(e){let s;const r=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Oe&&(e instanceof Blob||e instanceof FileList))&&(r||w(e)))if(s=r?[]:{},!r&&!Er(e))s=e;else for(const a in e)e.hasOwnProperty(a)&&(s[a]=M(e[a]));else return e;return s}n(M,"cloneObject");var ge=n(e=>Array.isArray(e)?e.filter(Boolean):[],"compact"),F=n(e=>e===void 0,"isUndefined"),y=n((e,s,r)=>{if(!s||!w(e))return r;const a=ge(s.split(/[,[\].]+?/)).reduce((u,o)=>C(u)?u:u[o],e);return F(a)||a===e?F(e[s])?r:e[s]:a},"get"),Z=n(e=>typeof e=="boolean","isBoolean");const Ze={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},P={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Y={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},nr=I.createContext(null),ut=n(()=>I.useContext(nr),"useFormContext"),ct=n(e=>{const{children:s,...r}=e;return I.createElement(nr.Provider,{value:r},s)},"FormProvider");var Dr=n((e,s,r,a=!0)=>{const u={defaultValues:s._defaultValues};for(const o in e)Object.defineProperty(u,o,{get:()=>{const h=o;return s._proxyFormState[h]!==P.all&&(s._proxyFormState[h]=!a||P.all),r&&(r[h]=!0),e[h]}});return u},"getProxyFormState"),N=n(e=>w(e)&&!Object.keys(e).length,"isEmptyObject"),Sr=n((e,s,r,a)=>{r(e);const{name:u,...o}=e;return N(o)||Object.keys(o).length>=Object.keys(s).length||Object.keys(o).find(h=>s[h]===(!a||P.all))},"shouldRenderFormState"),ke=n(e=>Array.isArray(e)?e:[e],"convertToArrayPayload");function kr(e){const s=I.useRef(e);s.current=e,I.useEffect(()=>{const r=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}n(kr,"useSubscribe");var j=n(e=>typeof e=="string","isString"),Rr=n((e,s,r,a,u)=>j(e)?(a&&s.watch.add(e),y(r,e,u)):Array.isArray(e)?e.map(o=>(a&&s.watch.add(o),y(r,o))):(a&&(s.watchAll=!0),r),"generateWatchOutput"),Le=n(e=>/^\w*$/.test(e),"isKey"),ar=n(e=>ge(e.replace(/["|']|\]/g,"").split(/\.|\[/)),"stringToPath"),V=n((e,s,r)=>{let a=-1;const u=Le(s)?[s]:ar(s),o=u.length,h=o-1;for(;++a<o;){const v=u[a];let q=r;if(a!==h){const W=e[v];q=w(W)||Array.isArray(W)?W:isNaN(+u[a+1])?{}:[]}e[v]=q,e=e[v]}return e},"set"),Cr=n((e,s,r,a,u)=>s?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[a]:u||!0}}:{},"appendErrors"),Ge=n(e=>({isOnSubmit:!e||e===P.onSubmit,isOnBlur:e===P.onBlur,isOnChange:e===P.onChange,isOnAll:e===P.all,isOnTouch:e===P.onTouched}),"getValidationModes"),Je=n((e,s,r)=>!r&&(s.watchAll||s.watch.has(e)||[...s.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length)))),"isWatched");const fe=n((e,s,r,a)=>{for(const u of r||Object.keys(e)){const o=y(e,u);if(o){const{_f:h,...v}=o;if(h){if(h.refs&&h.refs[0]&&s(h.refs[0],u)&&!a)break;if(h.ref&&s(h.ref,h.name)&&!a)break;fe(v,s)}else w(v)&&fe(v,s)}}},"iterateFieldsByAction");var Ir=n((e,s,r)=>{const a=ge(y(e,r));return V(a,"root",s[r]),V(e,r,a),e},"updateFieldArrayRootError"),Ue=n(e=>e.type==="file","isFileInput"),X=n(e=>typeof e=="function","isFunction"),me=n(e=>{if(!Oe)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},"isHTMLElement"),xe=n(e=>j(e),"isMessage"),Me=n(e=>e.type==="radio","isRadioInput"),_e=n(e=>e instanceof RegExp,"isRegex");const Ke={value:!1,isValid:!1},Qe={value:!0,isValid:!0};var lr=n(e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!F(e[0].attributes.value)?F(e[0].value)||e[0].value===""?Qe:{value:e[0].value,isValid:!0}:Qe:Ke}return Ke},"getCheckboxValue");const Xe={isValid:!1,value:null};var or=n(e=>Array.isArray(e)?e.reduce((s,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:s,Xe):Xe,"getRadioValue");function er(e,s,r="validate"){if(xe(e)||Array.isArray(e)&&e.every(xe)||Z(e)&&!e)return{type:r,message:xe(e)?e:"",ref:s}}n(er,"getValidateError");var ne=n(e=>w(e)&&!_e(e)?e:{value:e,message:""},"getValueAndMessage"),rr=n(async(e,s,r,a,u)=>{const{ref:o,refs:h,required:v,maxLength:q,minLength:W,min:A,max:b,pattern:he,validate:J,name:T,valueAsNumber:Ae,mount:K,disabled:le}=e._f,x=y(s,T);if(!K||le)return{};const $=h?h[0]:o,z=n(p=>{a&&$.reportValidity&&($.setCustomValidity(Z(p)?"":p||""),$.reportValidity())},"setCustomValidity"),E={},te=Me(o),ve=ye(o),ee=te||ve,se=(Ae||Ue(o))&&F(o.value)&&F(x)||me(o)&&o.value===""||x===""||Array.isArray(x)&&!x.length,L=Cr.bind(null,T,r,E),pe=n((p,m,D,R=Y.maxLength,B=Y.minLength)=>{const U=p?m:D;E[T]={type:p?R:B,message:U,ref:o,...L(p?R:B,U)}},"getMinMaxMessage");if(u?!Array.isArray(x)||!x.length:v&&(!ee&&(se||C(x))||Z(x)&&!x||ve&&!lr(h).isValid||te&&!or(h).isValid)){const{value:p,message:m}=xe(v)?{value:!!v,message:v}:ne(v);if(p&&(E[T]={type:Y.required,message:m,ref:$,...L(Y.required,m)},!r))return z(m),E}if(!se&&(!C(A)||!C(b))){let p,m;const D=ne(b),R=ne(A);if(!C(x)&&!isNaN(x)){const B=o.valueAsNumber||x&&+x;C(D.value)||(p=B>D.value),C(R.value)||(m=B<R.value)}else{const B=o.valueAsDate||new Date(x),U=n(ce=>new Date(new Date().toDateString()+" "+ce),"convertTimeToDate"),oe=o.type=="time",ue=o.type=="week";j(D.value)&&x&&(p=oe?U(x)>U(D.value):ue?x>D.value:B>new Date(D.value)),j(R.value)&&x&&(m=oe?U(x)<U(R.value):ue?x<R.value:B<new Date(R.value))}if((p||m)&&(pe(!!p,D.message,R.message,Y.max,Y.min),!r))return z(E[T].message),E}if((q||W)&&!se&&(j(x)||u&&Array.isArray(x))){const p=ne(q),m=ne(W),D=!C(p.value)&&x.length>+p.value,R=!C(m.value)&&x.length<+m.value;if((D||R)&&(pe(D,p.message,m.message),!r))return z(E[T].message),E}if(he&&!se&&j(x)){const{value:p,message:m}=ne(he);if(_e(p)&&!x.match(p)&&(E[T]={type:Y.pattern,message:m,ref:o,...L(Y.pattern,m)},!r))return z(m),E}if(J){if(X(J)){const p=await J(x,s),m=er(p,$);if(m&&(E[T]={...m,...L(Y.validate,m.message)},!r))return z(m.message),E}else if(w(J)){let p={};for(const m in J){if(!N(p)&&!r)break;const D=er(await J[m](x,s),$,m);D&&(p={...D,...L(m,D.message)},z(D.message),r&&(E[T]=p))}if(!N(p)&&(E[T]={ref:$,...p},!r))return E}}return z(!0),E},"validateField");function Tr(e,s){const r=s.slice(0,-1).length;let a=0;for(;a<r;)e=F(e)?a++:e[s[a++]];return e}n(Tr,"baseGet");function Or(e){for(const s in e)if(e.hasOwnProperty(s)&&!F(e[s]))return!1;return!0}n(Or,"isEmptyArray");function k(e,s){const r=Array.isArray(s)?s:Le(s)?[s]:ar(s),a=r.length===1?e:Tr(e,r),u=r.length-1,o=r[u];return a&&delete a[o],u!==0&&(w(a)&&N(a)||Array.isArray(a)&&Or(a))&&k(e,r.slice(0,-1)),e}n(k,"unset");var Re=n(()=>{let e=[];return{get observers(){return e},next:n(u=>{for(const o of e)o.next&&o.next(u)},"next"),subscribe:n(u=>(e.push(u),{unsubscribe:()=>{e=e.filter(o=>o!==u)}}),"subscribe"),unsubscribe:n(()=>{e=[]},"unsubscribe")}},"createSubject"),Ve=n(e=>C(e)||!ir(e),"isPrimitive");function re(e,s){if(Ve(e)||Ve(s))return e===s;if(ae(e)&&ae(s))return e.getTime()===s.getTime();const r=Object.keys(e),a=Object.keys(s);if(r.length!==a.length)return!1;for(const u of r){const o=e[u];if(!a.includes(u))return!1;if(u!=="ref"){const h=s[u];if(ae(o)&&ae(h)||w(o)&&w(h)||Array.isArray(o)&&Array.isArray(h)?!re(o,h):o!==h)return!1}}return!0}n(re,"deepEqual");var ur=n(e=>e.type==="select-multiple","isMultipleSelect"),Lr=n(e=>Me(e)||ye(e),"isRadioOrCheckbox"),Ce=n(e=>me(e)&&e.isConnected,"live"),Ur=n(e=>w(e)&&Object.values(e).some(s=>s),"objectHasTruthyValue"),cr=n(e=>{for(const s in e)if(X(e[s]))return!0;return!1},"objectHasFunction");function Fe(e,s={}){const r=Array.isArray(e);if(w(e)||r)for(const a in e)Array.isArray(e[a])||w(e[a])&&!cr(e[a])?(s[a]=Array.isArray(e[a])?[]:{},Fe(e[a],s[a])):C(e[a])||(s[a]=!0);return s}n(Fe,"markFieldsDirty");function dr(e,s,r){const a=Array.isArray(e);if(w(e)||a)for(const u in e)Array.isArray(e[u])||w(e[u])&&!cr(e[u])?F(s)||Ve(r[u])?r[u]=Array.isArray(e[u])?Fe(e[u],[]):{...Fe(e[u])}:dr(e[u],C(s)?{}:s[u],r[u]):r[u]=!re(e[u],s[u]);return r}n(dr,"getDirtyFieldsFromDefaultValues");var be=n((e,s)=>dr(e,s,Fe(s)),"getDirtyFields"),fr=n((e,{valueAsNumber:s,valueAsDate:r,setValueAs:a})=>F(e)?e:s?e===""?NaN:e&&+e:r&&j(e)?new Date(e):a?a(e):e,"getFieldValueAs");function Ie(e){const s=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):s.disabled))return Ue(s)?s.files:Me(s)?or(e.refs).value:ur(s)?[...s.selectedOptions].map(({value:r})=>r):ye(s)?lr(e.refs).value:fr(F(s.value)?e.ref.value:s.value,e)}n(Ie,"getFieldValue");var Mr=n((e,s,r,a)=>{const u={};for(const o of e){const h=y(s,o);h&&V(u,o,h._f)}return{criteriaMode:r,names:[...e],fields:u,shouldUseNativeValidation:a}},"getResolverOptions"),de=n(e=>F(e)?e:_e(e)?e.source:w(e)?_e(e.value)?e.value.source:e.value:e,"getRuleValue"),Nr=n(e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),"hasValidation");function tr(e,s,r){const a=y(e,r);if(a||Le(r))return{error:a,name:r};const u=r.split(".");for(;u.length;){const o=u.join("."),h=y(s,o),v=y(e,o);if(h&&!Array.isArray(h)&&r!==o)return{name:r};if(v&&v.type)return{name:o,error:v};u.pop()}return{name:r}}n(tr,"schemaErrorLookup");var qr=n((e,s,r,a,u)=>u.isOnAll?!1:!r&&u.isOnTouch?!(s||e):(r?a.isOnBlur:u.isOnBlur)?!e:(r?a.isOnChange:u.isOnChange)?e:!0,"skipValidation"),Br=n((e,s)=>!ge(y(e,s)).length&&k(e,s),"unsetEmptyArray");const Pr={mode:P.onSubmit,reValidateMode:P.onChange,shouldFocusError:!0};function Wr(e={}){let s={...Pr,...e},r={submitCount:0,isDirty:!1,isLoading:X(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},a={},u=w(s.defaultValues)||w(s.values)?M(s.defaultValues||s.values)||{}:{},o=s.shouldUnregister?{}:M(u),h={action:!1,mount:!1,watch:!1},v={mount:new Set,unMount:new Set,array:new Set,watch:new Set},q,W=0;const A={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},b={values:Re(),array:Re(),state:Re()},he=Ge(s.mode),J=Ge(s.reValidateMode),T=s.criteriaMode===P.all,Ae=n(t=>i=>{clearTimeout(W),W=setTimeout(t,i)},"debounce"),K=n(async t=>{if(A.isValid||t){const i=s.resolver?N((await ee()).errors):await L(a,!0);i!==r.isValid&&b.state.next({isValid:i})}},"_updateValid"),le=n((t,i)=>{(A.isValidating||A.validatingFields)&&(i.forEach(l=>{V(r.validatingFields,l,t)}),r.isValidating=Ur(r.validatingFields),b.state.next({validatingFields:r.validatingFields,isValidating:r.isValidating}))},"_updateIsValidating"),x=n((t,i=[],l,f,d=!0,c=!0)=>{if(f&&l){if(h.action=!0,c&&Array.isArray(y(a,t))){const g=l(y(a,t),f.argA,f.argB);d&&V(a,t,g)}if(c&&Array.isArray(y(r.errors,t))){const g=l(y(r.errors,t),f.argA,f.argB);d&&V(r.errors,t,g),Br(r.errors,t)}if(A.touchedFields&&c&&Array.isArray(y(r.touchedFields,t))){const g=l(y(r.touchedFields,t),f.argA,f.argB);d&&V(r.touchedFields,t,g)}A.dirtyFields&&(r.dirtyFields=be(u,o)),b.state.next({name:t,isDirty:p(t,i),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else V(o,t,i)},"_updateFieldArray"),$=n((t,i)=>{V(r.errors,t,i),b.state.next({errors:r.errors})},"updateErrors"),z=n(t=>{r.errors=t,b.state.next({errors:r.errors,isValid:!1})},"_setErrors"),E=n((t,i,l,f)=>{const d=y(a,t);if(d){const c=y(o,t,F(l)?y(u,t):l);F(c)||f&&f.defaultChecked||i?V(o,t,i?c:Ie(d._f)):R(t,c),h.mount&&K()}},"updateValidAndValue"),te=n((t,i,l,f,d)=>{let c=!1,g=!1;const _={name:t},S=!!(y(a,t)&&y(a,t)._f.disabled);if(!l||f){A.isDirty&&(g=r.isDirty,r.isDirty=_.isDirty=p(),c=g!==_.isDirty);const O=S||re(y(u,t),i);g=!!(!S&&y(r.dirtyFields,t)),O||S?k(r.dirtyFields,t):V(r.dirtyFields,t,!0),_.dirtyFields=r.dirtyFields,c=c||A.dirtyFields&&g!==!O}if(l){const O=y(r.touchedFields,t);O||(V(r.touchedFields,t,l),_.touchedFields=r.touchedFields,c=c||A.touchedFields&&O!==l)}return c&&d&&b.state.next(_),c?_:{}},"updateTouchAndDirty"),ve=n((t,i,l,f)=>{const d=y(r.errors,t),c=A.isValid&&Z(i)&&r.isValid!==i;if(e.delayError&&l?(q=Ae(()=>$(t,l)),q(e.delayError)):(clearTimeout(W),q=null,l?V(r.errors,t,l):k(r.errors,t)),(l?!re(d,l):d)||!N(f)||c){const g={...f,...c&&Z(i)?{isValid:i}:{},errors:r.errors,name:t};r={...r,...g},b.state.next(g)}le(!1,Object.keys(r.validatingFields).filter(g=>g===t))},"shouldRenderByError"),ee=n(async t=>s.resolver(o,s.context,Mr(t||v.mount,a,s.criteriaMode,s.shouldUseNativeValidation)),"_executeSchema"),se=n(async t=>{const{errors:i}=await ee(t);if(t)for(const l of t){const f=y(i,l);f?V(r.errors,l,f):k(r.errors,l)}else r.errors=i;return i},"executeSchemaAndUpdateState"),L=n(async(t,i,l={valid:!0})=>{for(const f in t){const d=t[f];if(d){const{_f:c,...g}=d;if(c){const _=v.array.has(c.name),S=await rr(d,o,T,s.shouldUseNativeValidation&&!i,_);if(S[c.name]&&(l.valid=!1,i))break;!i&&(y(S,c.name)?_?Ir(r.errors,S,c.name):V(r.errors,c.name,S[c.name]):k(r.errors,c.name))}g&&await L(g,i,l)}}return l.valid},"executeBuiltInValidation"),pe=n(()=>{for(const t of v.unMount){const i=y(a,t);i&&(i._f.refs?i._f.refs.every(l=>!Ce(l)):!Ce(i._f.ref))&&we(t)}v.unMount=new Set},"_removeUnmounted"),p=n((t,i)=>(t&&i&&V(o,t,i),!re(Ne(),u)),"_getDirty"),m=n((t,i,l)=>Rr(t,v,{...h.mount?o:F(i)?u:j(t)?{[t]:i}:i},l,i),"_getWatch"),D=n(t=>ge(y(h.mount?o:u,t,e.shouldUnregister?y(u,t,[]):[])),"_getFieldArray"),R=n((t,i,l={})=>{const f=y(a,t);let d=i;if(f){const c=f._f;c&&(!c.disabled&&V(o,t,fr(i,c)),d=me(c.ref)&&C(i)?"":i,ur(c.ref)?[...c.ref.options].forEach(g=>g.selected=d.includes(g.value)):c.refs?ye(c.ref)?c.refs.length>1?c.refs.forEach(g=>(!g.defaultChecked||!g.disabled)&&(g.checked=Array.isArray(d)?!!d.find(_=>_===g.value):d===g.value)):c.refs[0]&&(c.refs[0].checked=!!d):c.refs.forEach(g=>g.checked=g.value===d):Ue(c.ref)?c.ref.value="":(c.ref.value=d,c.ref.type||b.values.next({name:t,values:{...o}})))}(l.shouldDirty||l.shouldTouch)&&te(t,d,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&ce(t)},"setFieldValue"),B=n((t,i,l)=>{for(const f in i){const d=i[f],c=`${t}.${f}`,g=y(a,c);(v.array.has(t)||!Ve(d)||g&&!g._f)&&!ae(d)?B(c,d,l):R(c,d,l)}},"setValues"),U=n((t,i,l={})=>{const f=y(a,t),d=v.array.has(t),c=M(i);V(o,t,c),d?(b.array.next({name:t,values:{...o}}),(A.isDirty||A.dirtyFields)&&l.shouldDirty&&b.state.next({name:t,dirtyFields:be(u,o),isDirty:p(t,c)})):f&&!f._f&&!C(c)?B(t,c,l):R(t,c,l),Je(t,v)&&b.state.next({...r}),b.values.next({name:h.mount?t:void 0,values:{...o}})},"setValue"),oe=n(async t=>{const i=t.target;let l=i.name,f=!0;const d=y(a,l),c=n(()=>i.type?Ie(d._f):Fr(t),"getCurrentFieldValue"),g=n(_=>{f=Number.isNaN(_)||_===y(o,l,_)},"_updateIsFieldValueUpdated");if(d){let _,S;const O=c(),ie=t.type===Ze.BLUR||t.type===Ze.FOCUS_OUT,pr=!Nr(d._f)&&!s.resolver&&!y(r.errors,l)&&!d._f.deps||qr(ie,y(r.touchedFields,l),r.isSubmitted,J,he),De=Je(l,v,ie);V(o,l,O),ie?(d._f.onBlur&&d._f.onBlur(t),q&&q(0)):d._f.onChange&&d._f.onChange(t);const Se=te(l,O,ie,!1),br=!N(Se)||De;if(!ie&&b.values.next({name:l,type:t.type,values:{...o}}),pr)return A.isValid&&K(),br&&b.state.next({name:l,...De?{}:Se});if(!ie&&De&&b.state.next({...r}),le(!0,[l]),s.resolver){const{errors:He}=await ee([l]);if(g(O),f){const xr=tr(r.errors,a,l),Ye=tr(He,a,xr.name||l);_=Ye.error,l=Ye.name,S=N(He)}}else _=(await rr(d,o,T,s.shouldUseNativeValidation))[l],g(O),f&&(_?S=!1:A.isValid&&(S=await L(a,!0)));f&&(d._f.deps&&ce(d._f.deps),ve(l,S,_,Se))}},"onChange"),ue=n((t,i)=>{if(y(r.errors,i)&&t.focus)return t.focus(),1},"_focusInput"),ce=n(async(t,i={})=>{let l,f;const d=ke(t);if(le(!0,d),s.resolver){const c=await se(F(t)?t:d);l=N(c),f=t?!d.some(g=>y(c,g)):l}else t?(f=(await Promise.all(d.map(async c=>{const g=y(a,c);return await L(g&&g._f?{[c]:g}:g)}))).every(Boolean),!(!f&&!r.isValid)&&K()):f=l=await L(a);return b.state.next({...!j(t)||A.isValid&&l!==r.isValid?{}:{name:t},...s.resolver||!t?{isValid:l}:{},errors:r.errors,isValidating:!1}),i.shouldFocus&&!f&&fe(a,ue,t?d:v.mount),f},"trigger"),Ne=n(t=>{const i={...u,...h.mount?o:{}};return F(t)?i:j(t)?y(i,t):t.map(l=>y(i,l))},"getValues"),qe=n((t,i)=>({invalid:!!y((i||r).errors,t),isDirty:!!y((i||r).dirtyFields,t),isTouched:!!y((i||r).touchedFields,t),isValidating:!!y((i||r).validatingFields,t),error:y((i||r).errors,t)}),"getFieldState"),yr=n(t=>{t&&ke(t).forEach(i=>k(r.errors,i)),b.state.next({errors:t?r.errors:{}})},"clearErrors"),Be=n((t,i,l)=>{const f=(y(a,t,{_f:{}})._f||{}).ref;V(r.errors,t,{...i,ref:f}),b.state.next({name:t,errors:r.errors,isValid:!1}),l&&l.shouldFocus&&f&&f.focus&&f.focus()},"setError"),gr=n((t,i)=>X(t)?b.values.subscribe({next:l=>t(m(void 0,i),l)}):m(t,i,!0),"watch"),we=n((t,i={})=>{for(const l of t?ke(t):v.mount)v.mount.delete(l),v.array.delete(l),i.keepValue||(k(a,l),k(o,l)),!i.keepError&&k(r.errors,l),!i.keepDirty&&k(r.dirtyFields,l),!i.keepTouched&&k(r.touchedFields,l),!i.keepIsValidating&&k(r.validatingFields,l),!s.shouldUnregister&&!i.keepDefaultValue&&k(u,l);b.values.next({values:{...o}}),b.state.next({...r,...i.keepDirty?{isDirty:p()}:{}}),!i.keepIsValid&&K()},"unregister"),Pe=n(({disabled:t,name:i,field:l,fields:f,value:d})=>{if(Z(t)){const c=t?void 0:F(d)?Ie(l?l._f:y(f,i)._f):d;V(o,i,c),te(i,c,!1,!1,!0)}},"_updateDisabledField"),Ee=n((t,i={})=>{let l=y(a,t);const f=Z(i.disabled);return V(a,t,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:t}},name:t,mount:!0,...i}}),v.mount.add(t),l?Pe({field:l,disabled:i.disabled,name:t,value:i.value}):E(t,!0,i.value),{...f?{disabled:i.disabled}:{},...s.progressive?{required:!!i.required,min:de(i.min),max:de(i.max),minLength:de(i.minLength),maxLength:de(i.maxLength),pattern:de(i.pattern)}:{},name:t,onChange:oe,onBlur:oe,ref:d=>{if(d){Ee(t,i),l=y(a,t);const c=F(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,g=Lr(c),_=l._f.refs||[];if(g?_.find(S=>S===c):c===l._f.ref)return;V(a,t,{_f:{...l._f,...g?{refs:[..._.filter(Ce),c,...Array.isArray(y(u,t))?[{}]:[]],ref:{type:c.type,name:t}}:{ref:c}}}),E(t,!1,void 0,c)}else l=y(a,t,{}),l._f&&(l._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(wr(v.array,t)&&h.action)&&v.unMount.add(t)}}},"register"),We=n(()=>s.shouldFocusError&&fe(a,ue,v.mount),"_focusError"),hr=n(t=>{Z(t)&&(b.state.next({disabled:t}),fe(a,(i,l)=>{let f=t;const d=y(a,l);d&&Z(d._f.disabled)&&(f||(f=d._f.disabled)),i.disabled=f},0,!1))},"_disableForm"),je=n((t,i)=>async l=>{let f;l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let d=M(o);if(b.state.next({isSubmitting:!0}),s.resolver){const{errors:c,values:g}=await ee();r.errors=c,d=g}else await L(a);if(k(r.errors,"root"),N(r.errors)){b.state.next({errors:{}});try{await t(d,l)}catch(c){f=c}}else i&&await i({...r.errors},l),We(),setTimeout(We);if(b.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:N(r.errors)&&!f,submitCount:r.submitCount+1,errors:r.errors}),f)throw f},"handleSubmit"),vr=n((t,i={})=>{y(a,t)&&(F(i.defaultValue)?U(t,M(y(u,t))):(U(t,i.defaultValue),V(u,t,M(i.defaultValue))),i.keepTouched||k(r.touchedFields,t),i.keepDirty||(k(r.dirtyFields,t),r.isDirty=i.defaultValue?p(t,M(y(u,t))):p()),i.keepError||(k(r.errors,t),A.isValid&&K()),b.state.next({...r}))},"resetField"),$e=n((t,i={})=>{const l=t?M(t):u,f=M(l),d=N(t),c=d?u:f;if(i.keepDefaultValues||(u=l),!i.keepValues){if(i.keepDirtyValues)for(const g of v.mount)y(r.dirtyFields,g)?V(c,g,y(o,g)):U(g,y(c,g));else{if(Oe&&F(t))for(const g of v.mount){const _=y(a,g);if(_&&_._f){const S=Array.isArray(_._f.refs)?_._f.refs[0]:_._f.ref;if(me(S)){const O=S.closest("form");if(O){O.reset();break}}}}a={}}o=e.shouldUnregister?i.keepDefaultValues?M(u):{}:M(c),b.array.next({values:{...c}}),b.values.next({values:{...c}})}v={mount:i.keepDirtyValues?v.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},h.mount=!A.isValid||!!i.keepIsValid||!!i.keepDirtyValues,h.watch=!!e.shouldUnregister,b.state.next({submitCount:i.keepSubmitCount?r.submitCount:0,isDirty:d?!1:i.keepDirty?r.isDirty:!!(i.keepDefaultValues&&!re(t,u)),isSubmitted:i.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:d?[]:i.keepDirtyValues?i.keepDefaultValues&&o?be(u,o):r.dirtyFields:i.keepDefaultValues&&t?be(u,t):{},touchedFields:i.keepTouched?r.touchedFields:{},errors:i.keepErrors?r.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},"_reset"),ze=n((t,i)=>$e(X(t)?t(o):t,i),"reset");return{control:{register:Ee,unregister:we,getFieldState:qe,handleSubmit:je,setError:Be,_executeSchema:ee,_getWatch:m,_getDirty:p,_updateValid:K,_removeUnmounted:pe,_updateFieldArray:x,_updateDisabledField:Pe,_getFieldArray:D,_reset:$e,_resetDefaultValues:n(()=>X(s.defaultValues)&&s.defaultValues().then(t=>{ze(t,s.resetOptions),b.state.next({isLoading:!1})}),"_resetDefaultValues"),_updateFormState:n(t=>{r={...r,...t}},"_updateFormState"),_disableForm:hr,_subjects:b,_proxyFormState:A,_setErrors:z,get _fields(){return a},get _formValues(){return o},get _state(){return h},set _state(t){h=t},get _defaultValues(){return u},get _names(){return v},set _names(t){v=t},get _formState(){return r},set _formState(t){r=t},get _options(){return s},set _options(t){s={...s,...t}}},trigger:ce,register:Ee,handleSubmit:je,watch:gr,setValue:U,getValues:Ne,reset:ze,resetField:vr,clearErrors:yr,unregister:we,setError:Be,setFocus:n((t,i={})=>{const l=y(a,t),f=l&&l._f;if(f){const d=f.refs?f.refs[0]:f.ref;d.focus&&(d.focus(),i.shouldSelect&&d.select())}},"setFocus"),getFieldState:qe}}n(Wr,"createFormControl");function dt(e={}){const s=I.useRef(),r=I.useRef(),[a,u]=I.useState({isDirty:!1,isValidating:!1,isLoading:X(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:X(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Wr(e),formState:a});const o=s.current.control;return o._options=e,kr({subject:o._subjects.state,next:h=>{Sr(h,o._proxyFormState,o._updateFormState,!0)&&u({...o._formState})}}),I.useEffect(()=>o._disableForm(e.disabled),[o,e.disabled]),I.useEffect(()=>{if(o._proxyFormState.isDirty){const h=o._getDirty();h!==a.isDirty&&o._subjects.state.next({isDirty:h})}},[o,a.isDirty]),I.useEffect(()=>{e.values&&!re(e.values,r.current)?(o._reset(e.values,o._options.resetOptions),r.current=e.values,u(h=>({...h}))):o._resetDefaultValues()},[e.values,o]),I.useEffect(()=>{e.errors&&o._setErrors(e.errors)},[e.errors,o]),I.useEffect(()=>{o._state.mount||(o._updateValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),I.useEffect(()=>{e.shouldUnregister&&o._subjects.values.next({values:o._getWatch()})},[e.shouldUnregister,o]),s.current.formState=Dr(a,o),s.current}n(dt,"useForm");const jr=n(e=>`${e}-hint`,"hintId"),$r=n(e=>`${e}-error`,"errorId"),ft=n(e=>e.charAt(0).toUpperCase()+e.slice(1),"capitalise"),zr={letters:new RegExp("[A-Za-z]","g"),digits:new RegExp("[0-9]","g")},yt=n((e,s)=>{if(!s)return e==null?void 0:e.length;const r=zr[s];return(e.match(r)||[]).length},"count"),gt=n(e=>typeof e=="string"?e.replace(/\s{2,}/g," ").trim():e||"","parseString"),Hr=n((e,s)=>e.fields.reduce((r,a)=>{const u=e.validate(a,s[a],s)||[];return u.length>0?{...r,[a]:u}:r},{}),"getAllErrors"),ht=n(e=>s=>{const r=Hr(e,s);return{values:s,errors:r}},"resolver");var Q=(e=>(e.DEFAULT="default",e.ERROR="error",e.SUCCESS="success",e))(Q||{});const sr=n((e,s,r)=>({inactive:{[Q.DEFAULT]:`1px solid ${e.color.semiotic.inactive};`,[Q.ERROR]:`2px solid ${e.color.semiotic.error}`,[Q.SUCCESS]:`2px solid ${e.color.semiotic.success}`},focused:{[Q.DEFAULT]:`2px solid ${e.color.semiotic.info}`,[Q.ERROR]:`2px solid ${e.color.semiotic.error}`,[Q.SUCCESS]:`2px solid ${e.color.semiotic.info}`}})[r][s],"getBorderStyle"),vt=G.input.withConfig({componentId:"sc-10zubip-0"})(["display:block;width:100%;height:var(--input-height);box-sizing:border-box;padding-top:","px;padding-right:","px;padding-bottom:","px;padding-left:","px;border:none;border-radius:var(--border-radius);background-color:",";font:",";&:focus,&:focus-visible{border:none;outline:none;}&:disabled{background-color:",";color:",";}"],({theme:e})=>e.spacing.x1,({theme:e})=>e.spacing.x2,({theme:e})=>e.spacing.x1,({theme:e})=>e.spacing.x2,({theme:e})=>e.color.ink.inverted,({theme:e})=>e.textStyle.formInput.base,({theme:e})=>e.color.semiotic.disabled,({theme:e})=>e.color.ink.inverted),Yr=G.div.withConfig({componentId:"sc-10zubip-1"})(["--input-height:","px;--border-radius:4px;align-items:center;margin-bottom:","px;color:",";font:",";"],({theme:e})=>e.dimension.btn.height,({theme:e})=>e.spacing.x1,({theme:e})=>e.color.ink.base,({theme:e})=>e.textStyle.formInput.base),Zr=G.label.withConfig({componentId:"sc-10zubip-2"})(["margin-bottom:0;font:",";"],({theme:e})=>e.textStyle.formInput.label),Gr=G.span.withConfig({componentId:"sc-10zubip-3"})(["margin-right:","px;color:",";"],({theme:e})=>e.spacing.x0_25,({theme:e})=>e.color.semiotic.error),Jr=G.p.withConfig({componentId:"sc-10zubip-4"})(["margin-top:","px;margin-bottom:0;font:",";"],({theme:e})=>e.spacing.x0_25,({theme:e})=>e.textStyle.formInput.helpText),Te=G.div.withConfig({componentId:"sc-10zubip-5"})(["position:relative;width:100%;margin-top:","px;border-radius:var(--border-radius);outline:",";&:focus-within{border:none;outline:",";}"],({theme:e})=>e.spacing.x1,({theme:e,$state:s})=>sr(e,s,"inactive"),({theme:e,$state:s})=>sr(e,s,"focused")),Kr=G.div.withConfig({componentId:"sc-10zubip-6"})(["margin-top:","px;margin-bottom:","px;"],({theme:e})=>e.spacing.x0_5,({theme:e})=>e.spacing.x2),Qr=G.div.withConfig({componentId:"sc-10zubip-7"})(["display:flex;gap:","px;color:",";font:",";"],({theme:e})=>e.spacing.x0_5,e=>e.theme.color.semiotic.error,({theme:e})=>e.textStyle.formInput.error),Xr=G(Vr).withConfig({componentId:"sc-10zubip-8"})(["flex-shrink:0;"]),pt=n(({id:e,label:s,helpText:r,className:a,message:u,state:o,required:h,children:v})=>H.jsxs(Yr,{className:a,children:[H.jsx(Zr,{htmlFor:e,children:s}),h&&H.jsx(Gr,{"aria-hidden":!0,children:"*"}),r&&H.jsx(Jr,{id:jr(e),children:r}),H.jsx(Te,{$state:o,children:v}),H.jsx(Kr,{"aria-live":"assertive",children:o===Q.ERROR&&u&&H.jsxs(Qr,{children:[H.jsx(Xr,{svg:_r,size:"small"}),H.jsx("span",{id:$r(e),children:u})]})})]}),"FormInputWrapper");try{Te.displayName="InputWrapper",Te.__docgenInfo={description:"",displayName:"InputWrapper",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"Style guide: Text fields should always have a label",name:"label",required:!0,type:{name:"string"}},helpText:{defaultValue:null,description:"Style guide: Input constraints can be displayed here e.g. for Expiry Date: MM/YY",name:"helpText",required:!1,type:{name:"string"}},message:{defaultValue:null,description:`When controlled={true}, the message that will display on error
Otherwise, the state must be manually set to InputState.ERROR`,name:"message",required:!1,type:{name:"string"}},state:{defaultValue:null,description:`The state of the input - defines border style, and whether to show
error messages`,name:"state",required:!0,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"success"'}]}},required:{defaultValue:null,description:`Whether to display the asterisk indicating a required field
Note: This is purely a VISUAL indicator, and does not affect validation`,name:"required",required:!1,type:{name:"boolean"}},controlled:{defaultValue:null,description:`Whether the input's validation (errors and state) are controlled by
react-hook-form (requiring use of FormProvider from
@indy /ui/Form)`,name:"controlled",required:!1,type:{name:"boolean"}}}}}catch{}export{vt as B,ct as F,Q as I,ft as a,ut as b,yt as c,pt as d,$r as e,sr as g,jr as h,gt as p,ht as r,dt as u};
//# sourceMappingURL=InputWrapper-7902d41f.js.map
