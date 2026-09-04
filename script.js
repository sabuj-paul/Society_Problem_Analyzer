const seed = [
  {
    id: 101,
    title: "Broken street light near Gate 2",
    desc: "The street light has been out for several nights, making the road difficult to use after dark.",
    cat: "Lighting",
    loc: "Road 7, Block B",
    status: "In Progress",
    votes: 24,
    author: "You",
    date: "Sep 1, 2026",
    priority: "High",
  },
  
  {
    id: 102,
    title: "Overflowing waste bin",
    desc: "The public waste bin near the community market is full and needs collection.",
    cat: "Waste",
    loc: "Community Market",
    status: "Under Review",
    votes: 31,
    author: "Nadia Rahman",
    date: "Aug 30, 2026",
    priority: "High",
  },
  {
    id: 103,
    title: "Pothole on main road",
    desc: "A large pothole is affecting cars and bicycles along the main entrance road.",
    cat: "Roads",
    loc: "Main Entrance",
    status: "Resolved",
    votes: 48,
    author: "Imran Hossain",
    date: "Aug 25, 2026",
    priority: "High",
  },
  {
    id: 104,
    title: "Water leakage from public pipe",
    desc: "Water has been leaking continuously beside the playground.",
    cat: "Water",
    loc: "Green Park",
    status: "Under Review",
    votes: 17,
    author: "You",
    date: "Aug 23, 2026",
    priority: "Medium",
  },
  {
    id: 105,
    title: "Damaged footpath tiles",
    desc: "Several tiles are broken beside the bus stop and should be repaired.",
    cat: "Roads",
    loc: "Central Bus Stop",
    status: "Resolved",
    votes: 12,
    author: "Sadia Akter",
    date: "Aug 20, 2026",
    priority: "Medium",
  },
  {
    id: 106,
    title: "Missing warning sign",
    desc: "A warning sign is missing near the construction area.",
    cat: "Safety",
    loc: "Block C",
    status: "Under Review",
    votes: 8,
    author: "Tanvir Hasan",
    date: "Aug 18, 2026",
    priority: "Medium",
  },
];
let reports = JSON.parse(localStorage.getItem("spr_reports") || "null") || seed,
  role = localStorage.getItem("spr_role") || "Citizen",
  user = JSON.parse(localStorage.getItem("spr_user") || "null") || {
    name: "Jordan Doe",
    email: "citizen@demo.com",
    role: "Citizen",
  };
let notes = [
  {
    title: "Report status updated",
    text: "Broken street light near Gate 2 is now In Progress.",
    time: "12 minutes ago",
    unread: true,
  },
  {
    title: "Your report was received",
    text: "Water leakage from public pipe was submitted successfully.",
    time: "8 days ago",
    unread: true,
  },
  {
    title: "Community priority changed",
    text: "Pothole on main road reached 48 votes.",
    time: "8 days ago",
    unread: true,
  },
];
const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)];
const cats = ["Lighting", "Waste", "Roads", "Water", "Safety", "Other"];
function save() {
  localStorage.setItem("spr_reports", JSON.stringify(reports));
  localStorage.setItem("spr_role", role);
  localStorage.setItem("spr_user", JSON.stringify(user));
}
function toast(x) {
  let t = $("#toast");
  t.textContent = x;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2200);
}
function ini(n) {
  return n
    .split(" ")
    .map((x) => x[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
function stat(s) {
  return s === "Resolved"
    ? "resolved"
    : s === "In Progress"
      ? "progress"
      : "review";
}
function pill(s) {
  return `<span class="status ${stat(s)}">${s}</span>`;
}
function icon(c) {
  return (
    {
      Lighting: "💡",
      Waste: "♻",
      Roads: "🛣️",
      Water: "💧",
      Safety: "🛡️",
      Other: "📍",
    }[c] || "📍"
  );
}
function shell(k, t, d, b = "") {
  return `<div class="title"><div><small class="eyebrow">${k}</small><h2>${t}</h2><p>${d}</p></div>${b}</div>`;
}
function row(r) {
  return `<div class="row"><div class="ico">${icon(r.cat)}</div><div class="grow"><b>${r.title}</b><small>${r.loc} · ${r.date}</small></div>${pill(r.status)}<small>▲ ${r.votes}</small></div>`;
}
function card(r) {
  return `<article class="card report"><div class="head"><div><small class="eyebrow">${r.cat}</small><h3>${r.title}</h3></div>${pill(r.status)}</div><p>${r.desc}</p><div class="meta"><span>📍 ${r.loc}</span><span>👤 ${r.author}</span><span>📅 ${r.date}</span></div><div class="foot"><span class="status review">${r.priority} priority</span><div><button data-view="${r.id}">Details</button> <button class="vote" data-vote="${r.id}">▲ ${r.votes} Vote</button></div></div></article>`;
}
function dashboard() {
  let mine = reports.filter((r) => r.author === "You"),
    res = reports.filter((r) => r.status === "Resolved");
  $("#dashboard").innerHTML =
    shell(
      "Overview",
      `Good morning, ${user.name.split(" ")[0]} 👋`,
      "Track community issues, submit reports, and help prioritize what matters.",
      '<button class="primary" data-page="new">＋ New Report</button>',
    ) +
    `<div class="grid stats"><div class="card stat"><small>My reports</small><strong>${mine.length}</strong><small class="green">Active submissions</small></div><div class="card stat"><small>Community reports</small><strong>${reports.length}</strong><small class="green">Across all categories</small></div><div class="card stat"><small>Resolved issues</small><strong>${res.length}</strong><small class="green">Positive progress</small></div><div class="card stat"><small>Total votes</small><strong>${reports.reduce((a, r) => a + r.votes, 0)}</strong><small class="green">Community engagement</small></div></div><div class="grid twocol"><div class="card"><div class="head"><h3>Recent community reports</h3><button data-page="reports">View all →</button></div>${reports.slice(0, 5).map(row).join("")}</div><div class="grid"><div class="card"><div class="head"><h3>Quick actions</h3></div><div class="grid quick"><button data-page="new">📝 Submit issue<small>Report a community problem</small></button><button data-page="my">◫ My reports<small>Track submissions</small></button><button data-page="notifications">🔔 Notifications<small>${notes.filter((n) => n.unread).length} unread</small></button><button data-page="analytics">📊 Analytics<small>Community trends</small></button></div></div><div class="card"><div class="head"><h3>Latest activity</h3></div><div class="kpi"><span>Report submitted</span><small>Water leakage · 8 days ago</small></div><div class="kpi"><span>Issue resolved</span><small>Pothole on main road · 8 days ago</small></div><div class="kpi"><span>Community voting</span><small>Waste report reached 31 votes</small></div></div></div></div>`;
}
function reportsPage(my = false) {
  let arr = my ? reports.filter((r) => r.author === "You") : reports;
  let title = my ? "My reports" : "Report directory";
  $(my ? "#my" : "#reports").innerHTML =
    shell(
      my ? "Citizen" : "Community",
      title,
      "Search, filter, vote, and inspect reported community problems.",
      my
        ? ""
        : '<button class="primary" data-page="new">＋ New Report</button>',
    ) +
    `<div class="card"><div class="filters"><input id="${my ? "myq" : "q"}" placeholder="Search by title, category or location…"><select id="${my ? "mys" : "s"}"><option value="">All statuses</option><option>Under Review</option><option>In Progress</option><option>Resolved</option></select><select id="${my ? "myc" : "c"}"><option value="">All categories</option>${cats.map((c) => `<option>${c}</option>`).join("")}</select></div><div id="${my ? "mygrid" : "grid"}" class="reportgrid">${arr.map(card).join("")}</div></div>`;
  let q = $("#" + (my ? "myq" : "q")),
    s = $("#" + (my ? "mys" : "s")),
    c = $("#" + (my ? "myc" : "c")),
    g = $("#" + (my ? "mygrid" : "grid"));
  function filter() {
    let z = reports.filter(
      (r) =>
        (!my || r.author === "You") &&
        (!q.value ||
          `${r.title} ${r.cat} ${r.loc}`
            .toLowerCase()
            .includes(q.value.toLowerCase())) &&
        (!s.value || r.status === s.value) &&
        (!c.value || r.cat === c.value),
    );
    g.innerHTML = z.length
      ? z.map(card).join("")
      : '<div class="card" style="grid-column:1/-1;text-align:center">No reports found</div>';
  }
  q.oninput = s.onchange = c.onchange = filter;
}
function newPage() {
  $("#new").innerHTML =
    shell(
      "Citizen",
      "Submit a community report",
      "Give the local authority enough information to review and resolve the issue.",
    ) +
    `<div class="card"><form id="reportForm"><div class="formgrid"><div class="fieldgroup full"><label>Report title *</label><input name="title" required placeholder="e.g. Broken street light near Gate 2"></div><div class="fieldgroup"><label>Category *</label><select name="cat" required><option value="">Select category</option>${cats.map((c) => `<option>${c}</option>`).join("")}</select></div><div class="fieldgroup"><label>Location *</label><input name="loc" required placeholder="Road, block, landmark…"></div><div class="fieldgroup full"><label>Description *</label><textarea name="desc" required placeholder="Describe the problem and its impact…"></textarea></div><div class="fieldgroup full"><label>Image evidence</label><div class="upload">📷 Add an optional photo<input type="file" accept="image/*"></div></div></div><div class="actions"><button class="primary">Submit report →</button></div></form></div>`;
  $("#reportForm").onsubmit = (e) => {
    e.preventDefault();
    let f = new FormData(e.target),
      r = {
        id: Date.now(),
        title: f.get("title"),
        cat: f.get("cat"),
        loc: f.get("loc"),
        desc: f.get("desc"),
        status: "Under Review",
        votes: 0,
        author: "You",
        date: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
        priority: "Medium",
      };
    reports.unshift(r);
    notes.unshift({
      title: "Report submitted",
      text: r.title + " was sent for review.",
      time: "Just now",
      unread: true,
    });
    save();
    toast("Report submitted successfully");
    go("my");
  };
}
function notifications() {
  $("#notifications").innerHTML =
    shell(
      "Updates",
      "Notifications",
      "Status changes and community activity related to your reports.",
    ) +
    `<div class="card"><div class="head"><h3>Recent updates</h3><button id="read">Mark all as read</button></div>${notes.map((n) => `<div class="notice ${n.unread ? "unread" : ""}"><div>🔔</div><div><b>${n.title}</b><p>${n.text}</p><small>${n.time}</small></div></div>`).join("")}</div>`;
  $("#read").onclick = () => {
    notes.forEach((n) => (n.unread = false));
    notifications();
    badge();
    toast("Notifications marked as read");
  };
}
function analytics() {
  $("#analytics").innerHTML =
    shell(
      "Insights",
      "Community analytics",
      "Understand issue volume, resolution progress and community participation.",
    ) +
    `<div class="grid twocol"><div class="card"><div class="head"><h3>Reports by category</h3></div><div class="chart">${cats
      .map((c) => {
        let n = reports.filter((r) => r.cat === c).length;
        return `<div class="bar" style="height:${35 + (n / Math.max(1, ...cats.map((x) => reports.filter((r) => r.cat === x).length))) * 150}px"><span>${c}</span></div>`;
      })
      .join(
        "",
      )}</div></div><div class="card"><div class="head"><h3>Resolution summary</h3></div>${[
      "Under Review",
      "In Progress",
      "Resolved",
    ]
      .map((s) => {
        let n = reports.filter((r) => r.status === s).length;
        return `<div class="kpi"><span>${s}</span><span class="meter"><i style="width:${reports.length ? (100 * n) / reports.length : 0}%"></i></span><b>${n}</b></div>`;
      })
      .join("")}</div></div>`;
}
function authority() {
  $("#authority").innerHTML =
    shell(
      "Local authority",
      "Authority desk",
      "Review reports and update their resolution status.",
    ) +
    `<div class="grid stats"><div class="card stat"><small>Assigned</small><strong>${reports.length}</strong></div><div class="card stat"><small>Needs review</small><strong>${reports.filter((r) => r.status === "Under Review").length}</strong></div><div class="card stat"><small>In progress</small><strong>${reports.filter((r) => r.status === "In Progress").length}</strong></div><div class="card stat"><small>Resolved</small><strong>${reports.filter((r) => r.status === "Resolved").length}</strong></div></div><div class="card tablewrap"><table class="table"><tr><th>Report</th><th>Category</th><th>Location</th><th>Votes</th><th>Status</th><th>Update</th></tr>${reports.map((r) => `<tr><td>${r.title}</td><td>${r.cat}</td><td>${r.loc}</td><td>${r.votes}</td><td>${pill(r.status)}</td><td><select data-status="${r.id}"><option ${r.status === "Under Review" ? "selected" : ""}>Under Review</option><option ${r.status === "In Progress" ? "selected" : ""}>In Progress</option><option ${r.status === "Resolved" ? "selected" : ""}>Resolved</option></select></td></tr>`).join("")}</table></div>`;
  $$("[data-status]").forEach(
    (x) =>
      (x.onchange = () => {
        let r = reports.find((y) => y.id == x.dataset.status);
        r.status = x.value;
        notes.unshift({
          title: "Report status updated",
          text: r.title + " is now " + r.status + ".",
          time: "Just now",
          unread: true,
        });
        save();
        authority();
        badge();
        toast("Status updated");
      }),
  );
}
function admin() {
  $("#admin").innerHTML =
    shell(
      "Administration",
      "Admin dashboard",
      "Monitor platform health, reports, moderation activity and performance.",
    ) +
    `<div class="grid stats"><div class="card stat"><small>Registered users</small><strong>128</strong><small class="green">+8 this month</small></div><div class="card stat"><small>Reports monitored</small><strong>${reports.length}</strong></div><div class="card stat"><small>Open issues</small><strong>${reports.filter((r) => r.status !== "Resolved").length}</strong></div><div class="card stat"><small>System health</small><strong>99.9%</strong></div></div><div class="grid twocol"><div class="card tablewrap"><div class="head"><h3>Report monitoring</h3><button id="reset">Reset demo data</button></div><table class="table"><tr><th>Report</th><th>Author</th><th>Status</th><th>Priority</th><th>Votes</th></tr>${reports.map((r) => `<tr><td>${r.title}</td><td>${r.author}</td><td>${pill(r.status)}</td><td>${r.priority}</td><td>${r.votes}</td></tr>`).join("")}</table></div><div class="card"><div class="head"><h3>Platform health</h3></div><div class="kpi">API availability <b>99.9%</b></div><div class="kpi">Report processing <b>98.4%</b></div><div class="kpi">Notification delivery <b>99.7%</b></div><div class="kpi">Storage usage <b>42%</b></div></div></div>`;
  $("#reset").onclick = () => {
    reports = JSON.parse(JSON.stringify(seed));
    save();
    renderAll();
    toast("Demo data reset");
  };
}
function users() {
  $("#users").innerHTML =
    shell(
      "Administration",
      "User management",
      "Review accounts and role assignments.",
    ) +
    `<div class="card tablewrap"><div class="head"><h3>Registered users</h3><button class="primary" id="add">＋ Add user</button></div><table class="table"><tr><th>User</th><th>Email</th><th>Role</th><th>Status</th><th>Action</th></tr>${[
      ["Jordan Doe", "citizen@demo.com", "Citizen"],
      ["Nadia Rahman", "nadia@example.com", "Citizen"],
      ["Authority Desk", "authority@demo.com", "Local Authority"],
      ["System Admin", "admin@demo.com", "Administrator"],
    ]
      .map(
        (u) =>
          `<tr><td>${u[0]}</td><td>${u[1]}</td><td>${u[2]}</td><td>Active</td><td><button data-manage>Manage</button></td></tr>`,
      )
      .join("")}</table></div>`;
  $("#add").onclick = () => toast("Add-user dialog would open here");
  $$("[data-manage]").forEach(
    (x) => (x.onclick = () => toast("User management action opened")),
  );
}
function badge() {
  let n = notes.filter((x) => x.unread).length;
  $("#badge").textContent = n;
  $("#badge").style.display = n ? "" : "none";
}
function apply() {
  let adm = role === "Administrator",
    auth = role !== "Citizen";
  $$(".authority").forEach((x) => x.classList.toggle("hidden", !auth));
  $$(".admin").forEach((x) => x.classList.toggle("hidden", !adm));
  $("#sideName").textContent = user.name;
  $("#sideRole").textContent = role;
  $("#sideAvatar").textContent = ini(user.name);
  $("#topAvatar").textContent = ini(user.name);
}
function renderAll() {
  dashboard();
  reportsPage(false);
  reportsPage(true);
  newPage();
  notifications();
  analytics();
  authority();
  admin();
  users();
  apply();
  badge();
}
function go(p) {
  let el = $("#" + p);
  if (!el || el.classList.contains("hidden")) return;
  $$(".page").forEach((x) => x.classList.remove("active"));
  el.classList.add("active");
  $$("nav button").forEach((x) =>
    x.classList.toggle("active", x.dataset.page === p),
  );
  window.scrollTo(0, 0);
}
function openReport(id) {
  let r = reports.find((x) => x.id == id);
  $("#modalbody").innerHTML =
    `<small class="eyebrow">${r.cat} · REPORT #${r.id}</small><h2>${r.title}</h2><p style="color:#748196;font-size:11px">${r.desc}</p><div class="detailgrid"><div class="detail"><small>Location</small><b>${r.loc}</b></div><div class="detail"><small>Submitted by</small><b>${r.author}</b></div><div class="detail"><small>Priority</small><b>${r.priority}</b></div><div class="detail"><small>Community votes</small><b>▲ ${r.votes}</b></div></div><h3 style="font-size:13px">Resolution timeline</h3><p>${pill(r.status)} Current status</p>`;
  $("#modal").classList.add("open");
}
$("#login").onsubmit = (e) => {
  e.preventDefault();
  let em = $("#email").value.toLowerCase();
  let rr = em.includes("admin")
    ? "Administrator"
    : em.includes("authority")
      ? "Local Authority"
      : "Citizen";
  role = rr === "Local Authority" ? "Authority" : rr;
  user = {
    name:
      rr === "Administrator"
        ? "System Admin"
        : rr === "Local Authority"
          ? "Authority Desk"
          : "Jordan Doe",
    email: em,
    role: rr,
  };
  localStorage.setItem("spr_logged", "1");
  save();
  $("#auth").classList.add("hidden");
  $("#app").classList.remove("hidden");
  renderAll();
  toast("Signed in successfully");
};
$("#signup").onsubmit = (e) => {
  e.preventDefault();
  let f = new FormData(e.target);
  user = { name: f.get("name"), email: f.get("email"), role: f.get("role") };
  role = user.role === "Local Authority" ? "Authority" : user.role;
  localStorage.setItem("spr_logged", "1");
  save();
  $("#auth").classList.add("hidden");
  $("#app").classList.remove("hidden");
  renderAll();
  toast("Account created");
};
$("#register").onclick = () => {
  $("#loginBox").classList.add("hidden");
  $("#registerBox").classList.remove("hidden");
};
$("#backlogin").onclick = () => {
  $("#registerBox").classList.add("hidden");
  $("#loginBox").classList.remove("hidden");
};
$("#showpw").onclick = () => {
  let p = $("#password");
  p.type = p.type === "password" ? "text" : "password";
  $("#showpw").textContent = p.type === "password" ? "Show" : "Hide";
};
$("#forgot").onclick = () =>
  toast("Demo: password reset email would be sent here");
$("#logout").onclick = () => {
  localStorage.removeItem("spr_logged");
  $("#app").classList.add("hidden");
  $("#auth").classList.remove("hidden");
  toast("Logged out");
};
$("#theme").onclick = () => document.body.classList.toggle("dark");
$("#globalSearch").oninput = (e) => {
  if (e.target.value) {
    go("reports");
    setTimeout(() => {
      $("#q").value = e.target.value;
      $("#q").oninput();
    }, 0);
  }
};
document.addEventListener("click", (e) => {
  let p = e.target.closest("[data-page]");
  if (p) go(p.dataset.page);
  let v = e.target.closest("[data-view]");
  if (v) openReport(v.dataset.view);
  let vo = e.target.closest("[data-vote]");
  if (vo) {
    let r = reports.find((x) => x.id == vo.dataset.vote);
    r.votes++;
    save();
    toast("Vote recorded");
    renderAll();
    go("reports");
  }
  if (e.target.id === "close" || e.target.id === "modal")
    $("#modal").classList.remove("open");
});
if (localStorage.getItem("spr_logged") === "1") {
  $("#auth").classList.add("hidden");
  $("#app").classList.remove("hidden");
  renderAll();
} else {
  go("dashboard");
}
