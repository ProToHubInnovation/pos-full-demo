import"./modulepreload-polyfill-B5Qt9EMX.js";const b="/pos-full-demo/".replace(/\/$/,""),v=[{id:"product-padthai",sku:"PAD-THAI-01",name:"ผัดไทยกุ้งสด (Pad Thai Prawns)",price:120,category:"mains",imageUrl:`${b}/images/pad_thai.png`,description:"Authentic Thai stir-fried rice noodles with fresh prawns, tofu, bean sprouts, crushed peanuts, and lime."},{id:"product-greencurry",sku:"GREEN-CURRY-01",name:"แกงเขียวหวานไก่ (Chicken Green Curry)",price:140,category:"curry",imageUrl:`${b}/images/green_curry.png`,description:"Aromatic Thai green curry with tender chicken, eggplants, sweet basil, and fresh red chilies."},{id:"product-somtum",sku:"SOM-TUM-01",name:"ส้มตำไทย (Som Tum Papaya Salad)",price:85,category:"salad",imageUrl:`${b}/images/som_tum.png`,description:"Traditional spicy, sweet, and sour green papaya salad with cherry tomatoes, green beans, and peanuts."},{id:"product-mangostickyrice",sku:"MANGO-STICKY-01",name:"ข้าวเหนียวมะม่วง (Mango Sticky Rice)",price:100,category:"dessert",imageUrl:`${b}/images/mango_sticky_rice.png`,description:"Sweet ripe yellow mango served with warm coconut sticky rice and rich coconut cream sauce."}],O="protohub-pos.customer-cart",T="protohub-pos.customer-orders";let a={},k="all";window.addEventListener("DOMContentLoaded",()=>{M()});function M(){D(),F(),$(),S(),j(),x()}function D(){try{const t=localStorage.getItem(O);t&&(a=JSON.parse(t))}catch(t){console.error("Failed to load cart from Local Storage",t),a={}}}function A(){try{localStorage.setItem(O,JSON.stringify(a))}catch(t){console.error("Failed to save cart to Local Storage",t)}}function w(){try{const t=localStorage.getItem(T);return t?JSON.parse(t):[]}catch(t){return console.error("Failed to load orders from Local Storage",t),[]}}function B(t){try{localStorage.setItem(T,JSON.stringify(t))}catch(n){console.error("Failed to save orders to Local Storage",n)}}function F(){const t=document.querySelectorAll(".category-btn");t.forEach(n=>{n.addEventListener("click",()=>{t.forEach(e=>e.classList.remove("active")),n.classList.add("active"),k=n.dataset.category||"all",$()})})}function $(){const t=document.getElementById("menu-grid");if(!t)return;const n=k==="all"?v:v.filter(e=>e.category===k);t.innerHTML=n.map(e=>{const r=a[e.id]||0;return`
      <div class="food-card" data-product-id="${e.id}">
        <div class="food-image-container">
          <img class="food-image" src="${e.imageUrl}" alt="${e.name}" loading="lazy" />
        </div>
        <div class="food-info">
          <h3>${E(e.name)}</h3>
          <p class="food-desc">${E(e.description)}</p>
          <div class="food-footer">
            <span class="food-price">฿${e.price}</span>
            <div class="control-container">
              ${r>0?q(e.id,r):N(e.id)}
            </div>
          </div>
        </div>
      </div>
    `}).join("")}function N(t){return`<button class="add-btn" data-action="add" data-id="${t}">+</button>`}function q(t,n){return`
    <div class="qty-control">
      <button class="qty-btn" data-action="dec" data-id="${t}">-</button>
      <span class="qty-value">${n}</span>
      <button class="qty-btn" data-action="inc" data-id="${t}">+</button>
    </div>
  `}function S(){const t=document.getElementById("cart-badge-count"),n=document.getElementById("cart-bar-total"),e=document.getElementById("bottom-cart-bar");let r=0,c=0;for(const[u,i]of Object.entries(a)){const d=v.find(o=>o.id===u);d&&(r+=i,c+=d.price*i)}const s=c*.07,p=c+s;t&&(t.textContent=String(r)),n&&(n.textContent=`฿${p.toFixed(2)}`),r>0?e?.classList.remove("hidden"):(e?.classList.add("hidden"),I("basket-drawer-overlay"));const y=document.getElementById("basket-items-list");if(y){const u=Object.entries(a).map(([i,d])=>{const o=v.find(l=>l.id===i);return o?`
        <div class="basket-item">
          <div class="item-details">
            <h4>${E(o.name)}</h4>
            <p>฿${o.price} &times; ${d}</p>
          </div>
          <div class="control-container">
            ${q(i,d)}
          </div>
        </div>
      `:""}).join("");y.innerHTML=u||'<p style="text-align: center; color: var(--text-muted); margin: 20px 0;">Your basket is empty</p>'}const g=document.getElementById("summary-subtotal"),f=document.getElementById("summary-vat"),h=document.getElementById("summary-total");g&&(g.textContent=`฿${c.toFixed(2)}`),f&&(f.textContent=`฿${s.toFixed(2)}`),h&&(h.textContent=`฿${p.toFixed(2)}`)}function x(){const t=document.getElementById("history-items-list");if(!t)return;const n=w();if(n.length===0){t.innerHTML='<p style="text-align: center; color: var(--text-muted); margin: 40px 0;">No order history found</p>';return}t.innerHTML=n.map(e=>{const r=new Date(e.createdAt).toLocaleString(),c=e.items.map(s=>`${s.name} (${s.qty})`).join(", ");return`
      <div class="history-card">
        <div class="history-card-header">
          <strong>Order ${e.orderId}</strong>
          <span>${e.synced?"🟢 Synced":"🟡 Local Offline"}</span>
        </div>
        <div class="history-card-body">
          <p style="font-size: 11px; color: var(--text-muted); margin-bottom: 6px;">${r}</p>
          <p>${E(c)}</p>
        </div>
        <div class="history-card-footer">
          <span>฿${e.grandTotal.toFixed(2)}</span>
        </div>
      </div>
    `}).join("")}function j(){document.getElementById("basket-toggle")?.addEventListener("click",()=>C("basket-drawer-overlay")),document.getElementById("basket-close")?.addEventListener("click",()=>I("basket-drawer-overlay")),document.getElementById("history-toggle")?.addEventListener("click",()=>{x(),C("history-drawer-overlay")}),document.getElementById("history-close")?.addEventListener("click",()=>I("history-drawer-overlay")),document.getElementById("success-close")?.addEventListener("click",()=>{R("success-modal")}),document.getElementById("checkout-submit")?.addEventListener("click",async()=>{await U()}),document.body.addEventListener("click",t=>{const n=t.target.closest("button[data-action]");if(!n)return;const e=n.dataset.action,r=n.dataset.id;!e||!r||(e==="add"||e==="inc"?a[r]=(a[r]||0)+1:e==="dec"&&(a[r]>1?a[r]--:delete a[r]),A(),$(),S())})}function C(t){document.getElementById(t)?.classList.remove("hidden")}function I(t){document.getElementById(t)?.classList.add("hidden")}function H(t){document.getElementById(t)?.classList.remove("hidden")}function R(t){document.getElementById(t)?.classList.add("hidden")}async function U(){let t=0;const n=[];for(const[o,l]of Object.entries(a)){const m=v.find(L=>L.id===o);m&&(t+=m.price*l,n.push({productId:o,name:m.name,qty:l,price:m.price}))}if(n.length===0)return;const e=t*.07,r=t+e,c=Math.floor(1e5+Math.random()*9e5),s=`TX-${c}`,p=new Date().toISOString(),y={orderId:s,createdAt:p,items:n,grandTotal:r,synced:!1},g=w();g.unshift(y),B(g),a={},A(),$(),S(),I("basket-drawer-overlay");const f=document.getElementById("receipt-id"),h=document.getElementById("receipt-date"),u=document.getElementById("receipt-items"),i=document.getElementById("receipt-total");f&&(f.textContent=`Order ID: ${s}`),h&&(h.textContent=`Date: ${new Date(p).toLocaleString()}`),i&&(i.textContent=`฿${r.toFixed(2)}`),u&&(u.innerHTML=n.map(o=>`
        <div class="receipt-item-row">
          <span>${E(o.name)} x${o.qty}</span>
          <span>฿${(o.price*o.qty).toFixed(2)}</span>
        </div>
      `).join("")),H("success-modal");const d={saleId:s,branchId:"branch-hq",terminalId:"mobile-customer",userId:"customer",items:n.map(o=>({productId:o.productId,qty:o.qty,price:o.price,discount:0})),payments:[{method:"qr",amount:r,refNo:`QR-${c}`}]};try{if((await fetch("http://127.0.0.1:4000/sales",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(d)})).ok){y.synced=!0;const l=w(),m=l.find(L=>L.orderId===s);m&&(m.synced=!0,B(l))}}catch(o){console.warn("API server replication failed, order remains offline-local.",o)}x()}function E(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}
