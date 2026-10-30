const projects=[
["250 Sims Avenue","repair","assets/projects/250-sims-avenue.jpg"],
["Amber Gardens","repair","assets/projects/amber-gardens.jpg"],
["Aspen Heights","repair","assets/projects/aspen-heights.jpg"],
["Balestier Point Condo","painting","assets/projects/balestier-point.jpg"],
["Block 70 at Waterbank @ Dakota","repair","assets/projects/waterbank-dakota.jpg"],
["Centris @ Jurong West Central 3","repair","assets/projects/centris.jpg"],
["Champions Green (New Build HDB)","painting","assets/projects/champions-green.jpg"],
["Crystal Mansions","painting","assets/projects/crystal-mansions.jpg"],
["Eastwood Green Condo","repair","assets/projects/eastwood-green.jpg"],
["Eastwood Regency Condo","painting","assets/projects/eastwood-regency.jpg"],
["Electrical Installation · Tengah Park C8","electrical","assets/projects/tengah-park-c8.jpg"],
["Electrical Installation · Ulu Pandan C2","electrical","assets/projects/ulu-pandan-c2.jpg"],
["Electrical Installation · YSN C9 & C10","electrical","assets/projects/yishun-ysn.jpg"],
["Electrical Works · Tengah C3/C7","electrical","assets/projects/tengah-c3-c7.jpg"],
["GRID","repair","assets/projects/grid.jpg"],
["ICON Village","painting","assets/projects/icon-village.jpg"],
["Jackson Square @ Toa Payoh","painting","assets/projects/jackson-square.jpg"],
["Kwang Wai Shiu Hospital","painting","assets/projects/kwang-wai-shiu.jpg"],
["Lakeshore Condo","painting","assets/projects/lakeshore.jpg"],
["Mera Spring Condominium","repair","assets/projects/mera-spring.jpg"],
["Moda Condo","painting","assets/projects/moda-condo.jpg"],
["NUS High School","painting","assets/projects/nus-high-school.jpg"],
["Paterson Linc","painting","assets/projects/paterson-linc.jpg"],
["627 HDB Jurong West","repair","assets/projects/jurong-west-627.jpg"],
["Parkway Parade Shopping Centre","repair","assets/projects/parkway-parade.jpg"],
["Singtel Data Centre","repair","assets/projects/singtel-data-centre.jpg"],
["Stratum Condo","repair","assets/projects/stratum-condo.jpg"],
["Whampoa · 17 blocks","repair","assets/projects/whampoa.jpg"],
["RF360 Techview, Kaki Bukit","demolition","assets/projects/rf360-techview.jpg"],
["Shaw Plaza (Twin Heights)","repair","assets/projects/shaw-plaza.jpg"],
["Sky Terrace @ Dawson (HDB)","painting","assets/projects/sky-terrace-dawson.jpg"],
["Sommerville Park","repair","assets/projects/sommerville-park.jpg"],
["Southaven II","repair","assets/projects/southaven-ii.jpg"],
["Singapore University of Technology and Design","painting","assets/projects/sutd.jpg"],
["Swiss Club Singapore","painting","assets/projects/swiss-club.jpg"],
["Teresse Condominium","painting","assets/projects/teresse-condo.jpg"],
["The Atria @ Meyer","painting","assets/projects/atria-meyer.jpg"],
["The Verv @ River Valley","painting","assets/projects/the-verv.jpg"],
["Tower 19 @ Cape Royale","repair","assets/projects/tower-19-cape-royale.jpg"],
["Tresalveo Condo","painting","assets/projects/tresalveo.jpg"],
["Woodheaven @ Woodgrove","repair","assets/projects/woodheaven.jpg"]
];
const label={demolition:"Demolition & reinstatement",electrical:"Electrical installation",painting:"Painting works",repair:"Repair & redecoration"};
const grid=document.getElementById("project-grid");
if(grid){
 projects.forEach(([name,type,src])=>{
  const card=document.createElement("article");card.className="project-card";card.dataset.category=type;
  card.innerHTML='<img loading="lazy" src="'+src+'" alt="'+name.replaceAll('"','&quot;')+' project photo"><div class="project-card-text"><small>'+label[type]+'</small><b>'+name+'</b></div>';
  grid.appendChild(card);
 });
}
const filters=[...document.querySelectorAll(".filter")];
filters.forEach(btn=>btn.addEventListener("click",()=>{
 filters.forEach(x=>x.classList.toggle("active",x===btn));
 const filter=btn.dataset.filter;let count=0;
 document.querySelectorAll(".project-card").forEach(card=>{const show=filter==="all"||card.dataset.category===filter;card.hidden=!show;if(show)count++;});
 document.getElementById("visible-count").textContent=String(count);
}));
const toggle=document.querySelector(".nav-toggle"),nav=document.querySelector(".nav-links");
toggle?.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));toggle.setAttribute("aria-label",open?"Close navigation":"Open navigation");});
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle?.setAttribute("aria-expanded","false");}));
document.getElementById("files")?.addEventListener("change",event=>{
 const files=[...event.target.files].map(f=>f.name);
 document.getElementById("selected-files").textContent=files.length?"Selected: "+files.join(", "):"";
});
document.getElementById("quote-form")?.addEventListener("submit",event=>{
 event.preventDefault();
 const form=new FormData(event.currentTarget);
 const names=[...document.getElementById("files").files].map(f=>f.name);
 const subject="Project assessment request - "+(form.get("service")||"Whoosh Singapore");
 const body=[
  "Name: "+form.get("name"),
  "Company: "+(form.get("company")||""),
  "Email: "+form.get("email"),
  "Phone: "+form.get("phone"),
  "Service: "+form.get("service"),
  "Location: "+(form.get("location")||""),
  "",
  "Project details:",
  form.get("details"),
  "",
  "Files selected: "+(names.length?names.join(", "):"None"),
  names.length?"Please attach the selected files to this email before sending.":""
 ].join("\n");
 window.location.href="mailto:md@whooshsingapore.com?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body);
});

