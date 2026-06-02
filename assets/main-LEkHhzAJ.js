import"./modulepreload-polyfill-B5Qt9EMX.js";const D={dashboard:"dashboard.view",products:"products.view",sales:"sales.view",shifts:"shifts.view",reconciliation:"reconciliation.view",settings:"settings.view","access-denied":void 0};function U(e,a){return e.permissions.includes(a)}function y(e,a){const s=D[a];return s?U(e,s):!0}function $(e){return y(e,"dashboard")}function L(e){const a=e.replace(/^#/,"").trim();switch(a){case"dashboard":case"products":case"sales":case"shifts":case"reconciliation":case"settings":case"access-denied":return a;default:return"dashboard"}}function x(e){return Object.keys(D).filter(a=>a!=="access-denied"&&y(e,a))}function N(){return{title:"Access Denied",body:"Your account is valid, but you do not have permission to access this section.",actions:[{id:"dashboard",label:"Back to Dashboard"},{id:"logout",label:"Sign Out"}]}}function j(){return{title:"Dashboard",subtitle:"Track branch posture, sync health, and operational exceptions from one backoffice command surface.",summaryCards:[{id:"sales-today",label:"Sales Today",value:"0",note:"No completed receipts yet",tone:"neutral"},{id:"open-reconciliation",label:"Open Reconciliation",value:"0",note:"Inventory and sync issues",tone:"warning"},{id:"active-shifts",label:"Active Shifts",value:"1",note:"Live terminals reporting",tone:"success"},{id:"flagged-events",label:"Flagged Events",value:"0",note:"Requires operations review",tone:"danger"}],quickActions:[{id:"review-sales",label:"Review Sales",description:"Trace receipts, payments, and sync state.",href:"#sales"},{id:"watch-shifts",label:"Monitor Shifts",description:"Inspect opened tills and cashier coverage.",href:"#shifts"},{id:"resolve-issues",label:"Resolve Issues",description:"Jump straight into reconciliation work.",href:"#reconciliation"}],activityFeed:[{id:"sync-window",label:"Sync posture",value:"All terminals aligned",status:"Stable"},{id:"branch-coverage",label:"Branch coverage",value:"BRANCH-001 · POS-01 online",status:"Watching"},{id:"cashier-watch",label:"Cashier watch",value:"1 open shift · 0 variances",status:"Healthy"}]}}function H(e,a=[]){return{title:"ProtoHub POS Backoffice",subtitle:"Operational control for sales traceability, shift oversight, product maintenance, and reconciliation.",cardTitle:"Backoffice Sign In",cardSubtitle:"Use an approved backoffice account to continue. Cashier accounts can sign in, but they will not receive admin console access.",fields:[{id:"username",label:"Username or Email",type:"text"},{id:"password",label:"Password",type:"password"},{id:"deviceCode",label:"Device Code",type:"text"}],audienceBadges:["Admin","Manager","Inventory","Auditor"],trustPoints:["Permission-aware navigation and page guards","Direct access to reconciliation and shift review","Connected to the same local-first sales data as desktop POS"],securityNote:"This workspace is for branch and platform operators. Activity here should be traceable to a named account.",secondaryActions:[{id:"docs",label:"Open API Docs"},{id:"support",label:"Need access?"}],testUsers:a,errorMessage:e}}function _(e){return{title:"Products",subtitle:"Maintain pricing, barcode coverage, and active catalog posture without losing branch context.",summaryCards:[{id:"catalog-size",label:"Catalog Size",value:String(e.length)},{id:"active-products",label:"Active",value:String(e.filter(a=>a.isActive).length)},{id:"barcode-coverage",label:"Barcode Coverage",value:String(e.filter(a=>a.barcodes.length>0).length)}],products:e}}function K(e){return{title:"Reconciliation Issues",issues:e}}function V(e=[],a={}){const s=e.map(Q);return{title:"Sales Traceability",subtitle:"Review receipts, payment trails, sync state, and inventory side effects from one place.",activeFilters:a,summaryCards:[{id:"sales-today",label:"Sales Loaded",value:String(s.length)},{id:"pending-sync-sales",label:"Pending Sync",value:String(s.filter(i=>i.syncStatus!=="synced").length)},{id:"needs-reconciliation",label:"Needs Reconciliation",value:String(s.filter(i=>i.inventoryStatus==="reconciliation_required").length)}],sales:s,actions:["View Details","View Receipt","Refund","Open Reconciliation"]}}function Q(e){return{id:e.id,receiptNo:e.receiptNo,soldAt:G(e.soldAt),branch:e.branchId,terminal:e.terminalId,cashier:J(e.userId),itemCount:e.itemCount,grandTotal:e.grandTotal.toFixed(2),paymentMethod:e.paymentMethod,syncStatus:e.syncStatus,inventoryStatus:e.inventoryStatus}}function J(e){return e.split(/[-_]/).filter(Boolean).map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join(" ")}function G(e){return e.replace("T"," ").replace(".000Z","Z")}function W(e,a){return{title:"Backoffice Settings",subtitle:"Configure store identity, notification defaults, and service access used by the branch.",sections:[{id:"store-profile",title:"Store Profile",description:"Base identity and tax details used across receipts and reports.",fields:[{key:"storeName",label:"Store Name",value:e.storeProfile.storeName,editable:!0,inputType:"text"},{key:"branchCode",label:"Branch Code",value:e.storeProfile.branchCode,editable:!0,inputType:"text"},{key:"taxId",label:"Tax ID",value:e.storeProfile.taxId,editable:!0,inputType:"text"}]},{id:"notifications",title:"Notifications",description:"Choose where operational alerts should surface for the team.",fields:[{key:"emailNotifications",label:"Email Notifications",value:S(e.notifications.emailNotifications),editable:!0,inputType:"checkbox",checked:e.notifications.emailNotifications},{key:"slackNotifications",label:"Slack Notifications",value:S(e.notifications.slackNotifications),editable:!0,inputType:"checkbox",checked:e.notifications.slackNotifications},{key:"cloudBackup",label:"Cloud Backup",value:S(e.notifications.cloudBackup),editable:!0,inputType:"checkbox",checked:e.notifications.cloudBackup}]},{id:"service-access",title:"Service Access",description:"Operational endpoints and license state that support backoffice tooling.",fields:[{key:"swaggerUiUrl",label:"Swagger UI",value:e.serviceAccess.swaggerUiUrl},{key:"apiDocsUrl",label:"OpenAPI JSON",value:e.serviceAccess.apiDocsUrl},{key:"activeLicenseKey",label:"Active License Key",value:e.serviceAccess.activeLicenseKey},{key:"syncMode",label:"Sync Mode",value:e.serviceAccess.syncMode}]}],actions:["Save Settings","Generate API Key","Verify API Key"],feedbackMessage:a}}function S(e){return e?"Enabled":"Disabled"}function Y(e=[],a={}){const s=e.map(z);return{title:"Shifts & Staff Oversight",subtitle:"Track open tills, shift cash positions, and who is currently operating each terminal.",activeFilters:a,summaryCards:[{id:"open-shifts",label:"Open Shifts",value:String(s.filter(i=>i.status==="opened").length)},{id:"closed-today",label:"Closed Shifts",value:String(s.filter(i=>i.status==="closed").length)},{id:"variance-alerts",label:"Awaiting Close Amount",value:String(s.filter(i=>i.status==="closed"&&i.closeAmount==="-").length)}],shifts:s,actions:["View Shift","Force Close Shift","View Related Sales"]}}function z(e){return{id:e.id,openedBy:e.openedBy,branch:e.branchId,terminal:e.terminalId,openAmount:e.openAmount.toFixed(2),closeAmount:e.closeAmount===void 0?"-":e.closeAmount.toFixed(2),openedAt:T(e.openedAt),closedAt:e.closedAt?T(e.closedAt):"-",status:e.status}}function T(e){return e.replace("T"," ").replace(".000Z","Z")}function Z(e){return`
    <main class="shell shell-backoffice">
      <aside class="sidebar sidebar-command">
        <div class="sidebar-brand sidebar-brand-rich">
          <span class="sidebar-orb" aria-hidden="true"></span>
          <p class="eyebrow">ProtoHub POS</p>
          <h1>Backoffice</h1>
          <p>Operate sales, shifts, and exceptions from one command surface.</p>
        </div>
        <section class="sidebar-account card sidebar-account-card">
          <div>
            <span class="eyebrow">Signed in</span>
            <strong>${t(e.auth.user.name)}</strong>
          </div>
          <p>${t(e.auth.user.roleName)}</p>
          <div class="chip-row">
            <span class="chip chip-dark">${t(e.auth.user.branchId??"Global")}</span>
            <span class="chip chip-dark">${e.auth.permissions.length} permissions</span>
          </div>
        </section>
        <div class="sidebar-section-label">Navigation</div>
        <nav class="sidebar-nav">
          ${e.visibleRoutes.map((a,s)=>`
                <a class="nav-link ${a===e.activeRoute?"nav-link-active":""}" href="#${a}">
                  <span class="nav-link-meta">${String(s+1).padStart(2,"0")}</span>
                  <span>${t(f(a))}</span>
                </a>
              `).join("")}
        </nav>
        <section class="sidebar-status card sidebar-status-card">
          <span class="eyebrow">System Posture</span>
          <strong>Local-first runtime ready</strong>
          <p>Backoffice is prepared to trace sync, stock, and cashier activity across terminals.</p>
        </section>
        <div class="sidebar-actions">
          <button class="secondary-button" type="button" data-logout-button>
            Sign Out
          </button>
        </div>
      </aside>
      <section class="workspace">
        <header class="topbar hero hero-command">
          <div class="hero-command-grid">
            <div class="hero-command-copy">
              <p class="eyebrow">Admin Access</p>
              <h2>Run the branch without losing the signal.</h2>
              <p class="panel-copy">
                Watch sync posture, inventory exceptions, and cashier coverage with one permission-aware control room.
              </p>
              <div class="chip-row">
                <span class="chip">${t(e.auth.user.roleName)}</span>
                <span class="chip">${t(e.auth.user.branchId??"Global access")}</span>
                <span class="chip">Route ${t(f(e.activeRoute))}</span>
              </div>
            </div>
            <div class="hero-command-rail">
              <article class="card command-stat-card">
                <span>Operator</span>
                <strong>${t(e.auth.user.name)}</strong>
                <p>${t(e.auth.user.username)}</p>
              </article>
              <article class="card command-stat-card">
                <span>Permissions</span>
                <strong>${e.auth.permissions.length}</strong>
                <p>Granted routes and actions</p>
              </article>
              <article class="card command-stat-card">
                <span>Session</span>
                <strong>Online</strong>
                <p>Backoffice session is active</p>
              </article>
            </div>
          </div>
        </header>
        ${se(e)}
      </section>
    </main>
  `}function X(e){return`
    <main class="shell shell-login">
      <section class="hero login-hero login-showcase">
        <div class="login-showcase-copy">
          <p class="eyebrow">ProtoHub POS</p>
          <h1>${t(e.title)}</h1>
          <p class="panel-copy">${t(e.subtitle)}</p>
        </div>
        <div class="login-badge-row">
          ${e.audienceBadges.map(a=>`<span class="chip">${t(a)}</span>`).join("")}
        </div>
        <div class="login-trust-grid">
          ${e.trustPoints.map(a=>`
                <article class="card login-trust-card">
                  <span class="eyebrow">Backoffice</span>
                  <strong>${t(a)}</strong>
                </article>
              `).join("")}
        </div>
        <section class="login-test-users">
          <div class="panel-head">
            <div>
              <h2>Test Roles</h2>
              <p class="panel-copy">Pick a demo account to preview page access and action permissions.</p>
            </div>
          </div>
          <div class="login-user-grid">
            ${e.testUsers.map(a=>`
                  <article class="card login-user-card">
                    <div class="login-user-head">
                      <strong>${t(a.name)}</strong>
                      <span class="chip">${t(a.roleName)}</span>
                    </div>
                    <p class="panel-copy">${t(a.username)} · ${a.backofficeAccess?"Backoffice access":"No backoffice access"}</p>
                    <ul class="permission-list">
                      ${a.permissions.slice(0,4).map(s=>`<li>${t(s)}</li>`).join("")}
                    </ul>
                    <div class="action-row">
                      <button
                        type="button"
                        data-login-preset="${r(a.username)}"
                      >
                        Continue as ${t(a.roleName)}
                      </button>
                    </div>
                  </article>
                `).join("")}
          </div>
        </section>
        <p class="login-security-note">${t(e.securityNote)}</p>
      </section>
      <section class="panel login-card">
        <div class="login-card-head">
          <h2>${t(e.cardTitle)}</h2>
          <p class="panel-copy">${t(e.cardSubtitle)}</p>
        </div>
        <form class="login-form" data-login-form>
          ${e.fields.map(a=>`
                <label>
                  <span>${t(a.label)}</span>
                  <input
                    name="${r(a.id)}"
                    type="${r(a.type)}"
                    ${a.id==="deviceCode"?'value="backoffice-web"':""}
                  />
                </label>
              `).join("")}
          ${e.errorMessage?`<p class="error-banner">${t(e.errorMessage)}</p>`:""}
          <div class="action-row">
            <button type="submit">Sign In</button>
          </div>
        </form>
        <div class="login-secondary-actions">
          ${e.secondaryActions.map(a=>`
                <button
                  class="text-action"
                  type="button"
                  data-login-secondary-action="${r(a.id)}"
                >
                  ${t(a.label)}
                </button>
              `).join("")}
        </div>
      </section>
    </main>
  `}function M(e){return`
    <main class="shell shell-login">
      <section class="hero">
        <p class="eyebrow">ProtoHub POS</p>
        <h1>${t(e.title)}</h1>
      </section>
      <section class="panel">
        <p class="panel-copy">${t(e.body)}</p>
        <div class="action-row">
          ${e.actions.map(a=>`
                <button type="button" data-access-denied-action="${r(a.id)}">
                  ${t(a.label)}
                </button>
              `).join("")}
        </div>
      </section>
    </main>
  `}function ee(e){return`
    <main class="shell">
      <section class="hero">
        <p class="eyebrow">ProtoHub POS</p>
        <h1>Backoffice is waiting for the API</h1>
      </section>

      <section class="panel">
        <h2>Connection Error</h2>
        <p>${t(e)}</p>
      </section>
    </main>
  `}function ae(e){return`
    <main class="shell shell-backoffice shell-backoffice-loading">
      <aside class="sidebar sidebar-command">
        <div class="sidebar-brand sidebar-brand-rich">
          <span class="sidebar-orb" aria-hidden="true"></span>
          <p class="eyebrow">ProtoHub POS</p>
          <h1>Backoffice</h1>
          <p>Refreshing the current command surface.</p>
        </div>
        <section class="sidebar-account card sidebar-account-card">
          <div>
            <span class="eyebrow">Signed in</span>
            <strong>${t(e.auth.user.name)}</strong>
          </div>
          <p>${t(e.auth.user.roleName)}</p>
          <div class="chip-row">
            <span class="chip chip-dark">${t(e.auth.user.branchId??"Global")}</span>
          </div>
        </section>
        <div class="sidebar-section-label">Navigation</div>
        <nav class="sidebar-nav">
          ${e.visibleRoutes.map((a,s)=>`
                <a class="nav-link ${a===e.activeRoute?"nav-link-active":""}" href="#${a}">
                  <span class="nav-link-meta">${String(s+1).padStart(2,"0")}</span>
                  <span>${t(f(a))}</span>
                </a>
              `).join("")}
        </nav>
      </aside>
      <section class="workspace">
        <header class="topbar hero hero-command">
          <div class="hero-command-grid">
            <div class="hero-command-copy">
              <p class="eyebrow">Loading Route</p>
              <h2>${t(f(e.activeRoute))}</h2>
              <p class="panel-copy">Fetching the latest backoffice data and permissions for this surface.</p>
            </div>
            <div class="hero-command-rail">
              ${Array.from({length:3},()=>E()).join("")}
            </div>
          </div>
        </header>
        <section class="panel loading-panel">
          <div class="loading-grid">
            ${Array.from({length:6},()=>E()).join("")}
          </div>
        </section>
      </section>
    </main>
  `}function se(e){switch(e.activeRoute){case"dashboard":return te(e.dashboard);case"products":return ie(e.products);case"sales":return ne(e.sales);case"shifts":return re(e.shifts);case"reconciliation":return oe(e.reconciliation);case"settings":return le(e.settings);case"access-denied":return""}}function te(e){return`
    <section class="panel panel-dashboard">
      <div class="panel-head dashboard-head">
        <div>
          <p class="eyebrow">Operations Overview</p>
          <h2>${t(e.title)}</h2>
          <p class="panel-copy">${t(e.subtitle)}</p>
        </div>
      </div>
      <div class="dashboard-command-grid">
        <article class="card dashboard-spotlight">
          <span class="eyebrow">Control Brief</span>
          <h3>Keep retail operations calm while the data moves fast.</h3>
          <p>
            The backoffice should surface the few signals that matter first: sales movement, shift coverage, and
            reconciliation risk.
          </p>
          <div class="dashboard-action-grid">
            ${e.quickActions.map(a=>`
                  <a class="dashboard-action-card" href="${r(a.href)}">
                    <strong>${t(a.label)}</strong>
                    <span>${t(a.description)}</span>
                  </a>
                `).join("")}
          </div>
        </article>
        <article class="card dashboard-presence-card">
          <div class="dashboard-presence-head">
            <span class="eyebrow">Live Posture</span>
            <strong>Operational pulse</strong>
          </div>
          <ul class="dashboard-activity-list">
            ${e.activityFeed.map(a=>`
                  <li>
                    <div>
                      <span>${t(a.label)}</span>
                      <strong>${t(a.value)}</strong>
                    </div>
                    <em>${t(a.status)}</em>
                  </li>
                `).join("")}
          </ul>
        </article>
      </div>
      <div class="dashboard-metric-grid">
        ${e.summaryCards.map(a=>`
              <article class="card dashboard-metric-card dashboard-metric-${r(a.tone)}">
                <span>${t(a.label)}</span>
                <strong>${t(a.value)}</strong>
                <p>${t(a.note)}</p>
              </article>
            `).join("")}
      </div>
      <div class="dashboard-bottom-grid">
        <article class="card dashboard-note-card">
          <span class="eyebrow">Priority</span>
          <strong>Start with reconciliation before expanding operators.</strong>
          <p>
            When local-first terminals are healthy, the next operational risk is usually stock variance or unresolved
            payment follow-up. Keep those queues short.
          </p>
        </article>
        <article class="card dashboard-note-card">
          <span class="eyebrow">Coverage</span>
          <strong>Use permissions to keep the surface sharp.</strong>
          <p>
            Admins can see the full command surface, while inventory and auditors should only land on the routes they
            can act on.
          </p>
        </article>
      </div>
    </section>
  `}function ie(e){return`
    <section class="panel section-panel">
      <div class="section-head">
        <div>
          <p class="eyebrow">Catalog Control</p>
          <h2>${t(e.title)}</h2>
          <p class="panel-copy">${t(e.subtitle)}</p>
        </div>
      </div>
      <div class="section-hero-grid">
        <article class="card section-spotlight-card">
          <span class="eyebrow">Catalog Brief</span>
          <h3>Keep every product shelf-ready, scannable, and priced with intent.</h3>
          <p>
            Use this surface to trace barcode coverage, keep inactive items out of the path, and maintain a clean
            catalog for terminals.
          </p>
        </article>
        <div class="section-summary-grid">
          ${e.summaryCards.map(a=>`
                <article class="card compact-card section-summary-card">
                  <span>${t(a.label)}</span>
                  <strong>${t(a.value)}</strong>
                </article>
              `).join("")}
        </div>
      </div>
      <ul class="operations-list product-list">
        ${e.products.map(a=>`
              <li class="operations-row product-row">
                <div class="operations-primary">
                  <span>${t(a.sku)}</span>
                  <strong>${t(a.name)}</strong>
                </div>
                <div class="operations-meta chip-row">
                  ${a.barcodes.length?a.barcodes.slice(0,2).map(s=>`<span class="chip chip-muted">${t(s)}</span>`).join(""):'<span class="chip chip-muted">No barcode</span>'}
                </div>
                <div class="operations-value">
                  <span>Price</span>
                  <strong>${t(String(a.price))}</strong>
                </div>
                <div class="operations-status">
                  <span class="status-pill ${a.isActive?"status-pill-success":"status-pill-warning"}">
                    ${a.isActive?"Active":"Inactive"}
                  </span>
                </div>
              </li>
            `).join("")}
      </ul>
    </section>
  `}function ne(e){return`
    <section class="panel section-panel">
      <div class="section-head">
        <div>
          <p class="eyebrow">Transaction Traceability</p>
          <h2>${t(e.title)}</h2>
          <p class="panel-copy">${t(e.subtitle)}</p>
        </div>
        <div class="chip-row">
          ${e.actions.slice(0,3).map(a=>`<span class="chip chip-muted">${t(a)}</span>`).join("")}
        </div>
      </div>
      <div class="section-hero-grid section-hero-grid-narrow">
        <article class="card section-spotlight-card">
          <span class="eyebrow">Review Lens</span>
          <h3>Trace the receipt, then inspect the sync and inventory aftermath.</h3>
          <p>
            This queue is for auditability. Keep filters narrow, move quickly from receipt to terminal, and flag any
            reconciliation risk before it spreads.
          </p>
        </article>
        <form class="card filter-surface" data-sales-filter-form>
          <label>
            <span>Branch</span>
            <input name="branchId" value="${r(e.activeFilters.branchId??"")}" />
          </label>
          <label>
            <span>Terminal</span>
            <input name="terminalId" value="${r(e.activeFilters.terminalId??"")}" />
          </label>
          <label>
            <span>Cashier</span>
            <input name="userId" value="${r(e.activeFilters.userId??"")}" />
          </label>
          <label>
            <span>Receipt No</span>
            <input name="receiptNo" value="${r(e.activeFilters.receiptNo??"")}" />
          </label>
          <label>
            <span>Sync Status</span>
            <select name="syncStatus">
              ${C([{value:"",label:"All"},{value:"synced",label:"Synced"},{value:"pending",label:"Pending"},{value:"flagged",label:"Flagged"},{value:"failed",label:"Failed"}],e.activeFilters.syncStatus??"")}
            </select>
          </label>
          <div class="form-actions">
            <button type="submit">Apply Filters</button>
          </div>
        </form>
      </div>
      <div class="section-summary-grid">
        ${e.summaryCards.map(a=>q(a.label,a.value)).join("")}
      </div>
      <ul class="operations-list">
        ${e.sales.map(a=>`
              <li class="operations-row sales-row">
                <div class="operations-primary">
                  <span>${t(a.receiptNo)}</span>
                  <strong>${t(a.cashier)}</strong>
                </div>
                <div class="operations-value">
                  <span>${t(a.soldAt)}</span>
                  <strong>${t(`${a.branch} / ${a.terminal}`)}</strong>
                </div>
                <div class="operations-value">
                  <span>${t(`${a.itemCount} items`)}</span>
                  <strong>${t(a.grandTotal)}</strong>
                </div>
                <div class="operations-meta">
                  <span>${t(a.paymentMethod)}</span>
                  <div class="chip-row">
                    ${I(a.syncStatus)}
                    ${I(a.inventoryStatus)}
                  </div>
                </div>
              </li>
            `).join("")}
      </ul>
    </section>
  `}function re(e){return`
    <section class="panel section-panel">
      <div class="section-head">
        <div>
          <p class="eyebrow">Shift Oversight</p>
          <h2>${t(e.title)}</h2>
          <p class="panel-copy">${t(e.subtitle)}</p>
        </div>
        <div class="chip-row">
          ${e.actions.slice(0,3).map(a=>`<span class="chip chip-muted">${t(a)}</span>`).join("")}
        </div>
      </div>
      <div class="section-hero-grid section-hero-grid-narrow">
        <article class="card section-spotlight-card">
          <span class="eyebrow">Operator Coverage</span>
          <h3>Watch tills, owners, and open cash positions before the day drifts.</h3>
          <p>
            Shift oversight should feel like a ledger, not a list. Keep open tills visible and close anomalies
            immediately.
          </p>
        </article>
        <form class="card filter-surface" data-shifts-filter-form>
          <label>
            <span>Branch</span>
            <input name="branchId" value="${r(e.activeFilters.branchId??"")}" />
          </label>
          <label>
            <span>Terminal</span>
            <input name="terminalId" value="${r(e.activeFilters.terminalId??"")}" />
          </label>
          <label>
            <span>Cashier</span>
            <input name="userId" value="${r(e.activeFilters.userId??"")}" />
          </label>
          <label>
            <span>Status</span>
            <select name="status">
              ${C([{value:"",label:"All"},{value:"opened",label:"Opened"},{value:"closed",label:"Closed"}],e.activeFilters.status??"")}
            </select>
          </label>
          <div class="form-actions">
            <button type="submit">Apply Filters</button>
          </div>
        </form>
      </div>
      <div class="section-summary-grid">
        ${e.summaryCards.map(a=>q(a.label,a.value)).join("")}
      </div>
      <ul class="operations-list">
        ${e.shifts.map(a=>`
              <li class="operations-row shift-row">
                <div class="operations-primary">
                  <span>${t(a.id)}</span>
                  <strong>${t(a.openedBy)}</strong>
                </div>
                <div class="operations-status">
                  <span>${t(`${a.branch} / ${a.terminal}`)}</span>
                  ${I(a.status)}
                </div>
                <div class="operations-value">
                  <span>${t(`Open ${a.openAmount}`)}</span>
                  <strong>${t(`Close ${a.closeAmount}`)}</strong>
                </div>
                <div class="operations-value">
                  <span>${t(a.openedAt)}</span>
                  <strong>${t(a.closedAt)}</strong>
                </div>
              </li>
            `).join("")}
      </ul>
    </section>
  `}function q(e,a){return`
    <article class="card compact-card section-summary-card">
      <span>${t(e)}</span>
      <strong>${t(a)}</strong>
    </article>
  `}function I(e){const a=ce(e);return`<span class="status-pill status-pill-${r(a)}">${t(e.replaceAll("_"," "))}</span>`}function ce(e){return e==="synced"||e==="ok"||e==="opened"?"success":e==="pending"||e==="closed"?"warning":e==="flagged"||e==="failed"?"danger":"neutral"}function E(){return`
    <article class="card loading-card">
      <span class="loading-bar loading-bar-short"></span>
      <span class="loading-bar loading-bar-wide"></span>
      <span class="loading-bar loading-bar-medium"></span>
    </article>
  `}function oe(e){return`
    <section class="panel">
      <h2>${t(e.title)}</h2>
      <p class="panel-copy">Resolve stock or sync exceptions generated by local-first desktop terminals.</p>
      <ul>
        ${e.issues.map(a=>`
              <li>
                <span>${t(a.saleId)}</span>
                <strong>${t(a.reason)}</strong>
                <em>${t(a.status)}</em>
              </li>
            `).join("")}
      </ul>
    </section>
  `}function le(e){return`
    <section class="panel">
      <div class="panel-head">
        <div>
          <h2>${t(e.title)}</h2>
          <p class="panel-copy">${t(e.subtitle)}</p>
        </div>
      </div>
      <form class="settings-form" data-settings-form>
        <div class="settings-grid">
          ${e.sections.map(a=>`
                <article class="card settings-card">
                  <span>${t(a.title)}</span>
                  <p>${t(a.description)}</p>
                  <dl class="settings-fields">
                    ${a.fields.map(s=>`
                          <div class="kv">
                            <dt>${t(s.label)}</dt>
                            <dd>
                              ${s.editable?de(s):t(s.value)}
                            </dd>
                          </div>
                        `).join("")}
                  </dl>
                </article>
              `).join("")}
        </div>
        ${e.feedbackMessage?`<p class="feedback-banner">${t(e.feedbackMessage)}</p>`:""}
        <div class="action-row">
          ${e.actions.map((a,s)=>`<button type="${s===0?"submit":"button"}">${t(a)}</button>`).join("")}
        </div>
      </form>
    </section>
  `}function de(e){return e.inputType==="checkbox"?`<label class="checkbox-field"><input type="checkbox" name="${r(e.key)}" ${e.checked?"checked":""} /><span>${t(e.value)}</span></label>`:`<input name="${r(e.key)}" value="${r(e.value)}" />`}function C(e,a){return e.map(s=>`<option value="${r(s.value)}" ${s.value===a?"selected":""}>${t(s.label)}</option>`).join("")}function f(e){switch(e){case"dashboard":return"Dashboard";case"products":return"Products";case"sales":return"Sales";case"shifts":return"Shifts";case"reconciliation":return"Reconciliation";case"settings":return"Settings";case"access-denied":return"Access Denied"}}function r(e){return e.replaceAll("&","&amp;").replaceAll('"',"&quot;").replaceAll("<","&lt;").replaceAll(">","&gt;")}function t(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;")}const B="demo.seed.version",w="1.1.0",d={users:"demo.users",products:"demo.products",sales:"demo.sales",shifts:"demo.shifts",settings:"demo.settings"},ue=[{id:"user-admin",username:"admin",name:"Admin User",roleName:"admin",branchId:"branch-hq",permissions:["dashboard.view","products.view","sales.view","shifts.view","reconciliation.view","settings.view"],testPassword:"demo",backofficeAccess:!0,_password:"demo"},{id:"user-manager",username:"manager",name:"Branch Manager",roleName:"manager",branchId:"branch-hq",permissions:["dashboard.view","sales.view","shifts.view","reconciliation.view"],testPassword:"demo",backofficeAccess:!0,_password:"demo"},{id:"user-cashier",username:"cashier",name:"Front Cashier",roleName:"cashier",branchId:"branch-hq",permissions:["dashboard.view"],testPassword:"demo",backofficeAccess:!1,_password:"demo"}],pe=[{id:"product-padthai",sku:"PAD-THAI-01",name:"ผัดไทยกุ้งสด (Pad Thai Prawns)",price:120,barcodes:[],isActive:!0,stock:50,imageUrl:"/images/pad_thai.png"},{id:"product-greencurry",sku:"GREEN-CURRY-01",name:"แกงเขียวหวานไก่ (Chicken Green Curry)",price:140,barcodes:[],isActive:!0,stock:30,imageUrl:"/images/green_curry.png"},{id:"product-somtum",sku:"SOM-TUM-01",name:"ส้มตำไทย (Som Tum Papaya Salad)",price:85,barcodes:[],isActive:!0,stock:40,imageUrl:"/images/som_tum.png"},{id:"product-mangostickyrice",sku:"MANGO-STICKY-01",name:"ข้าวเหนียวมะม่วง (Mango Sticky Rice)",price:100,barcodes:[],isActive:!0,stock:25,imageUrl:"/images/mango_sticky_rice.png"},{id:"product-tomkha",sku:"TOM-KHA-01",name:"ต้มข่าไก่ (Tom Kha Gai)",price:130,barcodes:[],isActive:!0,stock:20,imageUrl:null},{id:"product-springroll",sku:"SPRING-ROLL-01",name:"ปอเปี๊ยะทอด (Spring Rolls)",price:65,barcodes:[],isActive:!0,stock:8,imageUrl:null}];function he(e){return`RCP-${String(e).padStart(5,"0")}`}function A(e,a=10){const s=new Date;return s.setDate(s.getDate()-e),s.setHours(a,Math.floor(Math.random()*59),0,0),s.toISOString()}const me=[{daysBack:0,items:[{productId:"product-padthai",qty:2,price:120},{productId:"product-somtum",qty:1,price:85}],payMethod:"qr",cashier:"user-cashier",syncStatus:"synced",inventoryStatus:"ok"},{daysBack:0,items:[{productId:"product-greencurry",qty:1,price:140},{productId:"product-mangostickyrice",qty:2,price:100}],payMethod:"cash",cashier:"user-cashier",syncStatus:"synced",inventoryStatus:"ok"},{daysBack:0,items:[{productId:"product-tomkha",qty:3,price:130}],payMethod:"card",cashier:"user-manager",syncStatus:"pending",inventoryStatus:"ok"},{daysBack:1,items:[{productId:"product-padthai",qty:1,price:120},{productId:"product-springroll",qty:2,price:65},{productId:"product-mangostickyrice",qty:1,price:100}],payMethod:"qr",cashier:"user-cashier",syncStatus:"synced",inventoryStatus:"ok"},{daysBack:1,items:[{productId:"product-greencurry",qty:2,price:140},{productId:"product-somtum",qty:2,price:85}],payMethod:"cash",cashier:"user-cashier",syncStatus:"synced",inventoryStatus:"reconciliation_required"},{daysBack:1,items:[{productId:"product-tomkha",qty:2,price:130}],payMethod:"card",cashier:"user-manager",syncStatus:"synced",inventoryStatus:"ok"},{daysBack:2,items:[{productId:"product-padthai",qty:3,price:120},{productId:"product-greencurry",qty:1,price:140}],payMethod:"qr",cashier:"user-cashier",syncStatus:"synced",inventoryStatus:"ok"},{daysBack:2,items:[{productId:"product-mangostickyrice",qty:3,price:100},{productId:"product-springroll",qty:4,price:65}],payMethod:"cash",cashier:"user-admin",syncStatus:"synced",inventoryStatus:"ok"},{daysBack:3,items:[{productId:"product-somtum",qty:2,price:85},{productId:"product-tomkha",qty:1,price:130}],payMethod:"qr",cashier:"user-cashier",syncStatus:"synced",inventoryStatus:"ok"},{daysBack:3,items:[{productId:"product-padthai",qty:1,price:120},{productId:"product-greencurry",qty:2,price:140},{productId:"product-mangostickyrice",qty:1,price:100}],payMethod:"card",cashier:"user-manager",syncStatus:"synced",inventoryStatus:"reconciliation_required"},{daysBack:4,items:[{productId:"product-padthai",qty:4,price:120}],payMethod:"qr",cashier:"user-cashier",syncStatus:"synced",inventoryStatus:"ok"},{daysBack:4,items:[{productId:"product-springroll",qty:3,price:65},{productId:"product-somtum",qty:2,price:85}],payMethod:"cash",cashier:"user-cashier",syncStatus:"synced",inventoryStatus:"ok"},{daysBack:5,items:[{productId:"product-greencurry",qty:2,price:140},{productId:"product-tomkha",qty:2,price:130}],payMethod:"card",cashier:"user-manager",syncStatus:"synced",inventoryStatus:"ok"},{daysBack:6,items:[{productId:"product-mangostickyrice",qty:2,price:100},{productId:"product-padthai",qty:2,price:120}],payMethod:"qr",cashier:"user-cashier",syncStatus:"synced",inventoryStatus:"ok"},{daysBack:6,items:[{productId:"product-greencurry",qty:3,price:140}],payMethod:"cash",cashier:"user-admin",syncStatus:"failed",inventoryStatus:"ok"}];function ve(){return me.map((e,a)=>{const s=1e3+a,i=e.items.reduce((m,h)=>m+h.qty,0),n=Math.round(e.items.reduce((m,h)=>m+h.price*h.qty*1.07,0)*100)/100;return{id:`sale-demo-${s}`,receiptNo:he(s),soldAt:A(e.daysBack,10+a),branchId:"branch-hq",terminalId:"pos-main",userId:e.cashier,itemCount:i,grandTotal:n,paymentMethod:e.payMethod,syncStatus:e.syncStatus,inventoryStatus:e.inventoryStatus}})}function ge(){const e=[];for(let a=0;a<7;a++){const s=a%3===0?"user-manager":"user-cashier",i=A(a,9),n=a>0?A(a,18):void 0;e.push({id:`shift-demo-${a}`,branchId:"branch-hq",terminalId:"pos-main",userId:s,status:a===0?"opened":"closed",openAmount:1e3,closeAmount:n?Math.round((Math.random()*3e3+800)*100)/100:void 0,openedAt:i,closedAt:n,openedBy:s})}return e}const ye={storeProfile:{storeName:"ProtoHub HQ (Demo)",branchCode:"HQ-01",taxId:"1234567890123"},notifications:{emailNotifications:!0,slackNotifications:!1,cloudBackup:!0},serviceAccess:{apiDocsUrl:"http://localhost:4000/docs",swaggerUiUrl:"http://localhost:4000/ui",activeLicenseKey:"DEMO-LICENSE-KEY",syncMode:"local-first"}};function be(){try{if(localStorage.getItem(B)===w)return;localStorage.setItem(d.users,JSON.stringify(ue)),localStorage.setItem(d.products,JSON.stringify(pe)),localStorage.setItem(d.sales,JSON.stringify(ve())),localStorage.setItem(d.shifts,JSON.stringify(ge())),localStorage.setItem(d.settings,JSON.stringify(ye)),localStorage.setItem(B,w),console.info("[Demo] Seed data initialised — version",w)}catch(e){console.error("[Demo] Failed to seed demo data",e)}}const fe=180;function g(e=fe){return new Promise(a=>setTimeout(a,e))}function b(e,a){try{const s=localStorage.getItem(e);return s?JSON.parse(s):a}catch{return a}}function Se(e,a){localStorage.setItem(e,JSON.stringify(a))}function we(){return{async login(e){await g();const s=b(d.users,[]).find(n=>n.username===e.username&&n._password===e.password);if(!s)throw new Error("Invalid credentials. Try admin/demo, manager/demo or cashier/demo.");const i=new Date(Date.now()+480*60*1e3).toISOString();return{accessToken:`demo-access-token-${s.id}`,refreshToken:`demo-refresh-token-${s.id}`,offlineSessionExpiresAt:i,user:{id:s.id,username:s.username,name:s.name,roleName:s.roleName,branchId:s.branchId},permissions:s.permissions}},async getTestUsers(){return await g(60),b(d.users,[])},async getProducts(){return await g(),b(d.products,[])},async getSales(e={}){await g();let a=b(d.sales,[]);if(e.branchId&&(a=a.filter(s=>s.branchId===e.branchId)),e.userId&&(a=a.filter(s=>s.userId===e.userId)),e.syncStatus&&(a=a.filter(s=>s.syncStatus===e.syncStatus)),e.dateFrom){const s=new Date(e.dateFrom).getTime();a=a.filter(i=>new Date(i.soldAt).getTime()>=s)}if(e.dateTo){const s=new Date(e.dateTo).getTime();a=a.filter(i=>new Date(i.soldAt).getTime()<=s)}return a.sort((s,i)=>new Date(i.soldAt).getTime()-new Date(s.soldAt).getTime())},async getShifts(e={}){await g();let a=b(d.shifts,[]);return e.status&&(a=a.filter(s=>s.status===e.status)),e.branchId&&(a=a.filter(s=>s.branchId===e.branchId)),e.userId&&(a=a.filter(s=>s.userId===e.userId)),a.sort((s,i)=>new Date(i.openedAt).getTime()-new Date(s.openedAt).getTime())},async getSettings(){return await g(80),b(d.settings,{storeProfile:{storeName:"Demo Branch",branchCode:"DEMO-01",taxId:"0000000000000"},notifications:{emailNotifications:!1,slackNotifications:!1,cloudBackup:!1},serviceAccess:{apiDocsUrl:"",swaggerUiUrl:"",activeLicenseKey:"DEMO",syncMode:"local-first"}})},async saveSettings(e){return await g(),Se(d.settings,e),e},async getReconciliationIssues(){return await g(),b(d.sales,[]).filter(s=>s.inventoryStatus==="reconciliation_required").map(s=>({id:`issue-${s.id}`,saleId:s.id,reason:`Sale ${s.receiptNo} has unresolved inventory discrepancy.`,status:"open"}))},async getDeviceBootstrap(e){return await g(60),{deviceId:"demo-device",branchId:"branch-hq",terminalId:"pos-demo",productVersion:"1.0.0",permissionVersion:"1.0.0"}},async ackSyncEvent(e){return await g(60),{eventId:e,status:"accepted",syncedAt:new Date().toISOString()}}}}const P="protohub-pos.backoffice-auth";async function ke(){const e=document.querySelector("#app");if(!e)throw new Error("Expected #app root element");be();const a=we(),s={authState:Me(),salesQuery:{},shiftsQuery:{}};window.addEventListener("hashchange",()=>{u(e,a,s)}),await u(e,a,s)}ke();async function u(e,a,s){try{if(!s.authState){const c=await a.getTestUsers();e.innerHTML=X(H(s.loginError,c)),$e(e,a,s,c);return}if(!$(s.authState)){e.innerHTML=M(N()),R(e,a,s);return}const i=L(window.location.hash);if(!y(s.authState,i)){e.innerHTML=M(N()),R(e,a,s);return}const n=x(s.authState);e.innerHTML=ae({auth:s.authState,activeRoute:i,visibleRoutes:n});const[m,h,v,o,p]=await Promise.all([y(s.authState,"products")?a.getProducts():Promise.resolve([]),y(s.authState,"sales")?a.getSales(s.salesQuery):Promise.resolve([]),y(s.authState,"shifts")?a.getShifts(s.shiftsQuery):Promise.resolve([]),y(s.authState,"settings")?a.getSettings():Promise.resolve(Ee()),y(s.authState,"reconciliation")?a.getReconciliationIssues():Promise.resolve([])]);e.innerHTML=Z({auth:s.authState,activeRoute:i,visibleRoutes:n,dashboard:j(),products:_(m),reconciliation:K(p),sales:V(h,s.salesQuery),shifts:Y(v,s.shiftsQuery),settings:W(o,s.settingsFeedback)}),Ie(e,a,s,o)}catch(i){e.innerHTML=ee(i instanceof Error?i.message:"Unknown error while loading the backoffice shell.")}}function $e(e,a,s,i){const n=e.querySelector("[data-login-form]"),m=e.querySelectorAll("[data-login-preset]"),h=e.querySelectorAll("[data-login-secondary-action]");n?.addEventListener("submit",async v=>{v.preventDefault();const o=new FormData(n),p=Ae(o);if(!p){s.loginError="Username, password, and device code are required.",await u(e,a,s);return}try{const c=await a.login(p);s.authState=c,s.loginError=void 0,s.settingsFeedback=void 0,O(c),$(c)?window.location.hash||(window.location.hash="#dashboard"):window.location.hash="#access-denied",await u(e,a,s)}catch(c){s.loginError=c instanceof Error?c.message:"Unable to sign in.",await u(e,a,s)}}),m.forEach(v=>{v.addEventListener("click",async()=>{const o=v.dataset.loginPreset,p=i.find(c=>c.username===o);if(!(!n||!p)){k(n,"username",p.username),k(n,"password",p.testPassword),k(n,"deviceCode","backoffice-web");try{const c=await a.login({username:p.username,password:p.testPassword,deviceCode:"backoffice-web"});s.authState=c,s.loginError=void 0,O(c),$(c)?window.location.hash="#dashboard":window.location.hash="#access-denied",await u(e,a,s)}catch(c){s.loginError=c instanceof Error?c.message:"Unable to sign in.",await u(e,a,s)}}})}),h.forEach(v=>{v.addEventListener("click",()=>{const o=v.dataset.loginSecondaryAction;if(o==="docs"){window.open("http://127.0.0.1:4000/docs","_blank");return}o==="support"&&(s.loginError="Use a demo admin, manager, inventory, or auditor account to test backoffice access.",u(e,a,s))})})}function Ie(e,a,s,i){const n=e.querySelector("[data-sales-filter-form]"),m=e.querySelector("[data-shifts-filter-form]"),h=e.querySelector("[data-settings-form]");e.querySelector("[data-logout-button]")?.addEventListener("click",async()=>{F(),s.authState=void 0,s.salesQuery={},s.shiftsQuery={},s.settingsFeedback=void 0,window.location.hash="",await u(e,a,s)}),n?.addEventListener("submit",async o=>{o.preventDefault(),s.salesQuery=Pe(new FormData(n)),s.settingsFeedback=void 0,await u(e,a,s)}),m?.addEventListener("submit",async o=>{o.preventDefault(),s.shiftsQuery=Ne(new FormData(m)),s.settingsFeedback=void 0,await u(e,a,s)}),h?.addEventListener("submit",async o=>{o.preventDefault();const p=Te(new FormData(h),i);await a.saveSettings(p),s.settingsFeedback="Settings saved successfully.",await u(e,a,s)})}function R(e,a,s){e.querySelectorAll("[data-access-denied-action]").forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.accessDeniedAction;if(n==="logout"){F(),s.authState=void 0,s.loginError=void 0,window.location.hash="",u(e,a,s);return}n==="dashboard"&&(window.location.hash="#dashboard")})})}function Ae(e){const a=l(e,"username"),s=l(e,"password"),i=l(e,"deviceCode");if(!(!a||!s||!i))return{username:a,password:s,deviceCode:i}}function Pe(e){return{branchId:l(e,"branchId"),terminalId:l(e,"terminalId"),userId:l(e,"userId"),receiptNo:l(e,"receiptNo"),syncStatus:l(e,"syncStatus")}}function Ne(e){return{branchId:l(e,"branchId"),terminalId:l(e,"terminalId"),userId:l(e,"userId"),status:l(e,"status")}}function Te(e,a){return{storeProfile:{storeName:l(e,"storeName")??a.storeProfile.storeName,branchCode:l(e,"branchCode")??a.storeProfile.branchCode,taxId:l(e,"taxId")??a.storeProfile.taxId},notifications:{emailNotifications:e.get("emailNotifications")==="on",slackNotifications:e.get("slackNotifications")==="on",cloudBackup:e.get("cloudBackup")==="on"},serviceAccess:a.serviceAccess}}function l(e,a){const s=e.get(a);if(typeof s!="string")return;const i=s.trim();return i.length>0?i:void 0}function Me(){const e=window.localStorage.getItem(P);if(e)try{return JSON.parse(e)}catch{return}}function O(e){window.localStorage.setItem(P,JSON.stringify(e))}function F(){window.localStorage.removeItem(P)}function Ee(){return{storeProfile:{storeName:"Unavailable",branchCode:"-",taxId:"-"},notifications:{emailNotifications:!1,slackNotifications:!1,cloudBackup:!1},serviceAccess:{apiDocsUrl:"/openapi.json",swaggerUiUrl:"/docs",activeLicenseKey:"Not available",syncMode:"local-first"}}}function k(e,a,s){const i=e.elements.namedItem(a);i instanceof HTMLInputElement&&(i.value=s)}
