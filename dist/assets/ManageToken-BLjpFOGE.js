import{_ as k}from"./TokenDisplay.vue_vue_type_script_setup_true_lang-DZ04cY73.js";import{d as p,r as d,a as s,c as m,b as _}from"./index-CJrokphj.js";import"./BaseCodeSnippet.vue_vue_type_script_setup_true_lang-CS7lgGg_.js";const l={key:0},v=p({__name:"ManageToken",props:{tokenBackendResponse:{}},setup(r){var n,o,t;const a=r,e=d({token:(t=(o=(n=a.tokenBackendResponse)==null?void 0:n.canarydrop)==null?void 0:o.canarytoken)==null?void 0:t._value,hostname:a.tokenBackendResponse.canarydrop.generated_hostname||""}),c=`${e.value.token}@${e.value.hostname.split(/\.(.+)/)[1]}`;return(i,u)=>e.value?(s(),_(k,{key:1,"token-data":c})):(s(),m("div",l,"Error loading"))}});export{v as default};
