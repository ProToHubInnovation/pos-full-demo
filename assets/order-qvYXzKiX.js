import"./modulepreload-polyfill-B5Qt9EMX.js";const v=[{id:"product-padthai",sku:"PAD-THAI-01",name:"ผัดไทยกุ้งสด (Pad Thai Prawns)",price:120,category:"mains",imageUrl:"/images/pad_thai.png",description:"Authentic Thai stir-fried rice noodles with fresh prawns, tofu, bean sprouts, crushed peanuts, and lime."},{id:"product-greencurry",sku:"GREEN-CURRY-01",name:"แกงเขียวหวานไก่ (Chicken Green Curry)",price:140,category:"curry",imageUrl:"/images/green_curry.png",description:"Aromatic Thai green curry with tender chicken, eggplants, sweet basil, and fresh red chilies."},{id:"product-somtum",sku:"SOM-TUM-01",name:"ส้มตำไทย (Som Tum Papaya Salad)",price:85,category:"salad",imageUrl:"/images/som_tum.png",description:"Traditional spicy, sweet, and sour green papaya salad with cherry tomatoes, green beans, and peanuts."},{id:"product-mangostickyrice",sku:"MANGO-STICKY-01",name:"ข้าวเหนียวมะม่วง (Mango Sticky Rice)",price:100,category:"dessert",imageUrl:"/images/mango_sticky_rice.png",description:"Sweet ripe yellow mango served with warm coconut sticky rice and rich coconut cream sauce."}],C="protohub-pos.customer-cart",O="protohub-pos.customer-orders";let a={},L="all";window.addEventListener("DOMContentLoaded",()=>{q()});function q(){M(),D(),I(),w(),N(),S()}function M(){try{const t=localStorage.getItem(C);t&&(a=JSON.parse(t))}catch(t){console.error("Failed to load cart from Local Storage",t),a={}}}function T(){try{localStorage.setItem(C,JSON.stringify(a))}catch(t){console.error("Failed to save cart to Local Storage",t)}}function k(){try{const t=localStorage.getItem(O);return t?JSON.parse(t):[]}catch(t){return console.error("Failed to load orders from Local Storage",t),[]}}function x(t){try{localStorage.setItem(O,JSON.stringify(t))}catch(n){console.error("Failed to save orders to Local Storage",n)}}function D(){const t=document.querySelectorAll(".category-btn");t.forEach(n=>{n.addEventListener("click",()=>{t.forEach(e=>e.classList.remove("active")),n.classList.add("active"),L=n.dataset.category||"all",I()})})}function I(){const t=document.getElementById("menu-grid");if(!t)return;const n=L==="all"?v:v.filter(e=>e.category===L);t.innerHTML=n.map(e=>{const r=a[e.id]||0;return`
      <div class="food-card" data-product-id="${e.id}">
        <div class="food-image-container">
          <img class="food-image" src="${e.imageUrl}" alt="${e.name}" loading="lazy" />
        </div>
        <div class="food-info">
          <h3>${b(e.name)}</h3>
          <p class="food-desc">${b(e.description)}</p>
          <div class="food-footer">
            <span class="food-price">฿${e.price}</span>
            <div class="control-container">
              ${r>0?A(e.id,r):F(e.id)}
            </div>
          </div>
        </div>
      </div>
    `}).join("")}function F(t){return`<button class="add-btn" data-action="add" data-id="${t}">+</button>`}function A(t,n){return`
    <div class="qty-control">
      <button class="qty-btn" data-action="dec" data-id="${t}">-</button>
      <span class="qty-value">${n}</span>
      <button class="qty-btn" data-action="inc" data-id="${t}">+</button>
    </div>
  `}function w(){const t=document.getElementById("cart-badge-count"),n=document.getElementById("cart-bar-total"),e=document.getElementById("bottom-cart-bar");let r=0,c=0;for(const[u,i]of Object.entries(a)){const d=v.find(o=>o.id===u);d&&(r+=i,c+=d.price*i)}const s=c*.07,p=c+s;t&&(t.textContent=String(r)),n&&(n.textContent=`฿${p.toFixed(2)}`),r>0?e?.classList.remove("hidden"):(e?.classList.add("hidden"),E("basket-drawer-overlay"));const y=document.getElementById("basket-items-list");if(y){const u=Object.entries(a).map(([i,d])=>{const o=v.find(l=>l.id===i);return o?`
        <div class="basket-item">
          <div class="item-details">
            <h4>${b(o.name)}</h4>
            <p>฿${o.price} &times; ${d}</p>
          </div>
          <div class="control-container">
            ${A(i,d)}
          </div>
        </div>
      `:""}).join("");y.innerHTML=u||'<p style="text-align: center; color: var(--text-muted); margin: 20px 0;">Your basket is empty</p>'}const g=document.getElementById("summary-subtotal"),f=document.getElementById("summary-vat"),h=document.getElementById("summary-total");g&&(g.textContent=`฿${c.toFixed(2)}`),f&&(f.textContent=`฿${s.toFixed(2)}`),h&&(h.textContent=`฿${p.toFixed(2)}`)}function S(){const t=document.getElementById("history-items-list");if(!t)return;const n=k();if(n.length===0){t.innerHTML='<p style="text-align: center; color: var(--text-muted); margin: 40px 0;">No order history found</p>';return}t.innerHTML=n.map(e=>{const r=new Date(e.createdAt).toLocaleString(),c=e.items.map(s=>`${s.name} (${s.qty})`).join(", ");return`
      <div class="history-card">
        <div class="history-card-header">
          <strong>Order ${e.orderId}</strong>
          <span>${e.synced?"🟢 Synced":"🟡 Local Offline"}</span>
        </div>
        <div class="history-card-body">
          <p style="font-size: 11px; color: var(--text-muted); margin-bottom: 6px;">${r}</p>
          <p>${b(c)}</p>
        </div>
        <div class="history-card-footer">
          <span>฿${e.grandTotal.toFixed(2)}</span>
        </div>
      </div>
    `}).join("")}function N(){document.getElementById("basket-toggle")?.addEventListener("click",()=>B("basket-drawer-overlay")),document.getElementById("basket-close")?.addEventListener("click",()=>E("basket-drawer-overlay")),document.getElementById("history-toggle")?.addEventListener("click",()=>{S(),B("history-drawer-overlay")}),document.getElementById("history-close")?.addEventListener("click",()=>E("history-drawer-overlay")),document.getElementById("success-close")?.addEventListener("click",()=>{H("success-modal")}),document.getElementById("checkout-submit")?.addEventListener("click",async()=>{await R()}),document.body.addEventListener("click",t=>{const n=t.target.closest("button[data-action]");if(!n)return;const e=n.dataset.action,r=n.dataset.id;!e||!r||(e==="add"||e==="inc"?a[r]=(a[r]||0)+1:e==="dec"&&(a[r]>1?a[r]--:delete a[r]),T(),I(),w())})}function B(t){document.getElementById(t)?.classList.remove("hidden")}function E(t){document.getElementById(t)?.classList.add("hidden")}function j(t){document.getElementById(t)?.classList.remove("hidden")}function H(t){document.getElementById(t)?.classList.add("hidden")}async function R(){let t=0;const n=[];for(const[o,l]of Object.entries(a)){const m=v.find($=>$.id===o);m&&(t+=m.price*l,n.push({productId:o,name:m.name,qty:l,price:m.price}))}if(n.length===0)return;const e=t*.07,r=t+e,c=Math.floor(1e5+Math.random()*9e5),s=`TX-${c}`,p=new Date().toISOString(),y={orderId:s,createdAt:p,items:n,grandTotal:r,synced:!1},g=k();g.unshift(y),x(g),a={},T(),I(),w(),E("basket-drawer-overlay");const f=document.getElementById("receipt-id"),h=document.getElementById("receipt-date"),u=document.getElementById("receipt-items"),i=document.getElementById("receipt-total");f&&(f.textContent=`Order ID: ${s}`),h&&(h.textContent=`Date: ${new Date(p).toLocaleString()}`),i&&(i.textContent=`฿${r.toFixed(2)}`),u&&(u.innerHTML=n.map(o=>`
        <div class="receipt-item-row">
          <span>${b(o.name)} x${o.qty}</span>
          <span>฿${(o.price*o.qty).toFixed(2)}</span>
        </div>
      `).join("")),j("success-modal");const d={saleId:s,branchId:"branch-hq",terminalId:"mobile-customer",userId:"customer",items:n.map(o=>({productId:o.productId,qty:o.qty,price:o.price,discount:0})),payments:[{method:"qr",amount:r,refNo:`QR-${c}`}]};try{if((await fetch("http://127.0.0.1:4000/sales",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(d)})).ok){y.synced=!0;const l=k(),m=l.find($=>$.orderId===s);m&&(m.synced=!0,x(l))}}catch(o){console.warn("API server replication failed, order remains offline-local.",o)}S()}function b(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}
