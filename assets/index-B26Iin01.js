(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();let a=document.getElementsByClassName("img")[0];var r=["asset/1.jpg","asset/2.png","asset/3.jpg","asset/4.png","asset/5.jpg","asset/6.jpg"],o=0;o=Math.floor(Math.random()*r.length);a.src=r[o];const g=document.querySelectorAll(".download"),m=document.getElementsByClassName("previous")[0],h=document.getElementsByClassName("play")[0],f=document.getElementsByClassName("next")[0],p=document.getElementsByClassName("shareWebsite")[0],v=document.getElementsByClassName("shareImage")[0];m.addEventListener("click",()=>{E()});h.addEventListener("click",()=>{y()});f.addEventListener("click",()=>{u()});p.addEventListener("click",()=>{L()});v.addEventListener("click",()=>{B()});function u(){o=(o+1)%r.length,a.src=r[o],console.log(o)}function y(){setInterval(()=>{u()},3e3)}var c=o;function E(){c=(c-1+r.length)%r.length,a.src=r[c]}function B(){navigator.share?navigator.share({title:"Check out this image!",text:"Take a look at this beautiful image!",url:a.src}).then(()=>console.log("Image shared successfully!")).catch(s=>console.error("Error sharing image:",s)):alert("Sharing is not supported on this device.")}function L(){navigator.share?navigator.share({title:"Check out this image!",text:"Take a look at this beautiful image!",url:window.location.href}).then(()=>console.log("Image shared successfully!")).catch(s=>console.error("Error sharing image:",s)):alert("Sharing is not supported on this device.")}g.forEach(s=>{s.addEventListener("click",k)});function k(){const s=a.src,n=document.createElement("a");n.href=s,n.download="image.jpg",n.click()}
