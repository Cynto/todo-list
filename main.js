(()=>{"use strict";const e=class{constructor(e){this.title=e}},t={projectsContainer:document.querySelector(".projects-container")},n=((()=>{const d=t.projectsContainer,o=document.createElement("div");o.textContent="+",o.classList.add("project-div"),o.setAttribute("style","font-size: 50px; justify-content: center; font-weight: bolder;"),d.appendChild(o);const c=new e("Default");let i=[];i.push(c),o.addEventListener("click",(()=>{const t=document.createElement("input");t.type="text",d.appendChild(t),d.removeChild(o);const c=document.createElement("div");c.setAttribute("style","width: 60%; margin-left: 30px; margin-top: 0; cursor: default; align-items: baseline; display: flex; justify-content: center;"),d.appendChild(c);const l=document.createElement("button");l.textContent="✓",c.appendChild(l),l.addEventListener("click",(()=>{const l=t.value;let s=i.map((e=>e.title));if(""!=l&&!1===s.includes(l)){const s=new e(l);i.push(s);for(let e=0;e<i.length;e++)i[e].dataProject=e;d.removeChild(c),d.removeChild(t),n.renderNames(i),console.log(i),d.appendChild(o)}}));const s=document.createElement("button");s.textContent="✕",c.appendChild(s),s.addEventListener("click",(()=>{d.removeChild(c),d.removeChild(t),d.appendChild(o)}))}))})(),{renderNames:e=>{const n=t.projectsContainer;for(;n.hasChildNodes();)n.removeChild(n.firstChild);const d=document.createElement("h2");d.textContent="Projects",n.appendChild(d);for(let t=0;t<e.length;t++){const d=document.createElement("div");d.classList.add("project-div"),n.appendChild(d);const o=document.createElement("i");o.classList.add("fas","fa-list"),d.appendChild(o);const c=document.createElement("a");c.textContent=e[t].title,d.appendChild(c)}}})})();