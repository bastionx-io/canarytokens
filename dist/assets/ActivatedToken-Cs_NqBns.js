import{d as c,r as i,a as m,c as p,i as e,f as _,h as d,I as f,p as u}from"./index-CJrokphj.js";import{_ as l}from"./TokenDisplay.vue_vue_type_script_setup_true_lang-BA6RN04_.js";import{_ as k}from"./ButtonActivateTokenTips.vue_vue_type_script_setup_true_lang-BCatY3sB.js";const h={class:"mt-24 text-sm"},$=c({__name:"ActivatedToken",props:{tokenData:{}},emits:["howToUse"],setup(o){const t=o,s=i({token:t.tokenData.token||"",auth:t.tokenData.auth_token||""});return(n,a)=>{const r=u;return m(),p(f,null,[e(l,{"token-data":s.value},null,8,["token-data"]),_("p",h,[d(" You'll get an alert whenever this document is opened with Acrobat Reader, regardless of the user's security preferences in Reader. "),e(k,{onHowToUse:a[0]||(a[0]=g=>n.$emit("howToUse"))})]),e(r,{class:"mt-24",variant:"info",message:"You can rename the document without affecting its operation."})],64)}}});export{$ as default};
