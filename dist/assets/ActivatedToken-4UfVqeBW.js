import{d as i,r as m,a as c,c as l,i as a,I as p,f as _,p as k}from"./index-C2GNx2pT.js";import{_ as d}from"./TokenDisplay.vue_vue_type_script_setup_true_lang-BGuKemUL.js";const u=_("p",{class:"mt-24 text-sm"},null,-1),h=i({__name:"ActivatedToken",props:{tokenData:{}},emits:["howToUse"],setup(o){const e=o,n=m({qrcode_png:e.tokenData.qrcode_png||"",token:e.tokenData.token||"",auth:e.tokenData.auth_token||""});return(s,t)=>{const r=k;return c(),l(p,null,[a(d,{"token-data":n.value},null,8,["token-data"]),a(r,{class:"mt-24",variant:"info",message:"When someone scans the QR Code with a reader, it will trigger the URL tied to your token and fire an alert.","text-link":"More tips?",onClick:t[0]||(t[0]=()=>s.$emit("howToUse"))},null,8,["message"]),u],64)}}});export{h as default};
