import{d as l,a as r,c as i,i as d,j as _,h as p,a1 as u,q as m}from"./index-k31JX26l.js";const f={class:"flex justify-center"},k=l({__name:"TokenDisplay",props:{tokenData:{}},setup(s){const a=s;async function c(){var o,e;const n={fmt:"msexcel",auth:(o=a.tokenData)==null?void 0:o.auth,token:(e=a.tokenData)==null?void 0:e.token};try{const t=await u(n);window.location.href=t.request.responseURL}catch(t){console.log(t,"File download failed")}finally{console.log("Download ready")}}return(n,o)=>{const e=m;return r(),i("div",f,[d(e,{class:"mt-16",onClick:c},{default:_(()=>[p("Download your MS Excel file")]),_:1})])}}});export{k as _};
