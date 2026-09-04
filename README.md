# Smart Public Reporting System (SPRS) - Core Script (`script.js`)

**Author:** Syndid Choudhury  
**Date:** September 4, 2026  
**File:** `script.js`  

---

## 📌 Project Overview

`script.js` powers the core logic and interactivity of the **Smart Public Reporting System (SPRS)**—a client-side web application built for local community issue reporting, voting, and status tracking. 

It provides an end-to-end interface for citizens, local authority desks, and platform administrators to log issues, track progress, manage accounts, and view platform analytics.

---

## 🚀 Key Features

1. **Role-Based Access Control**:
   * **Citizen**: Log issues, view report directory, search/filter submissions, upvote reports, and manage personal submissions.
   * **Local Authority Desk**: Update resolution statuses (*Under Review*, *In Progress*, *Resolved*) and monitor assigned workload.
   * **Administrator**: View system health metrics, monitor user activity, manage user roles, and reset demo data.

2. **Interactive Management**:
   * **Filtering & Search**: Live multi-field filtering by keyword, category (*Lighting*, *Waste*, *Roads*, *Water*, *Safety*, *Other*), and status.
   * **Upvoting System**: Instant upvoting algorithm to highlight priority community issues.
   * **Detailed Modal View**: Inspection popup with resolution timeline and priority metrics.

3. **Data Persistence & Local State**:
   * Pure client-side storage utilizing HTML5 `localStorage` (`spr_reports`, `spr_role`, `spr_user`, `spr_logged`).
   * Default fallback dataset (`seed`) pre-loaded upon initial visit or demo data reset.

4. **UI & Interactive Helpers**:
   * Toast messaging system.
   * Dark/Light theme switching.
   * Live unread notifications badge and notification center.

---

## 📁 Data Structure Overview

### Report Schema
```javascript
{
  id: 101,                  // Unique ID (timestamp for new reports)
  title: "Broken street light",
  desc: "Detailed problem explanation...",
  cat: "Lighting",          // Category: Lighting | Waste | Roads | Water | Safety | Other
  loc: "Road 7, Block B",   // Location detail / Landmark
  status: "In Progress",     // Status: Under Review | In Progress | Resolved
  votes: 24,                // Upvote tally
  author: "You",            // Submitter tag/name
  date: "Sep 1, 2026",      // Formatted date string
  priority: "High"          // Priority tier: High | Medium | Low
}
