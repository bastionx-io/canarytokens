import{d as c,r as m,a as _,c as p,i as t,I as l,f as s,p as d}from"./index-C2GNx2pT.js";import{_ as h}from"./TokenDisplay.vue_vue_type_script_setup_true_lang-ClHo4L8O.js";import{_ as k}from"./ButtonActivateTokenTips.vue_vue_type_script_setup_true_lang-ByFG9nLX.js";import"./BaseCodeSnippet.vue_vue_type_script_setup_true_lang-_edp5TVX.js";const f=s("p",{class:"mt-16 text-sm"}," This token is triggered when someone uses this Service Principal Login to access Azure programmatically (through the API). ",-1),u=s("p",{class:"mt-16 text-sm"}," The Service Principal Login is unique. i.e. there is no chance of somebody guessing these credentials. ",-1),$=c({__name:"ActivatedToken",props:{tokenData:{}},emits:["howToUse"],setup(o){const e=o,n=m({token:e.tokenData.token||"",auth:e.tokenData.auth_token||"",appId:e.tokenData.app_id||"",displayName:e.tokenData.cert_name||"",fileWithCertAndPrivateKey:e.tokenData.cert_file_name||"",tenant:e.tokenData.tenant_id||""});return(i,a)=>{const r=d;return _(),p(l,null,[t(h,{"token-data":n.value},null,8,["token-data"]),f,u,t(k,{onHowToUse:a[0]||(a[0]=g=>i.$emit("howToUse"))}),t(r,{class:"mt-24",variant:"info",message:"If this token fires, it is a clear indication that this set of keys has 'leaked'"})],64)}}});export{$ as default};
