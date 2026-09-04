# 🏛️ Society Problem Reporter & Analyzer (SPRS)

**Project Lead / Developer:** Syndid Choudhury  
**Date:** September 4, 2026  
**Project Type:** Client-side Frontend Web Application Prototype  

---

## 📌 Project Overview

The **Society Problem Reporter & Analyzer (SPRS)** is an interactive, civic-tech web platform prototype engineered to bridge the gap between local citizens, civic maintenance teams, and municipality administrators[cite: 6]. 

The application facilitates end-to-end community issue tracking—allowing residents to report local public infrastructure problems (such as road potholes, broken street lights, waste overflow, and water leakages), upvote community priorities, track issue resolution timelines, and analyze civic trends[cite: 3, 6].

---

## 📸 Core Features & Demonstration Highlights

### 🔒 1. Multi-Role Authentication System
The application features dynamic role switching upon authentication, adjusting navigation items and access permissions based on user credentials[cite: 3]:
* **Citizen Account (`citizen@demo.com`)**: Access to issue reporting, voting, tracking personal submissions, and receiving notifications[cite: 3, 6].
* **Local Authority Desk (`authority@demo.com`)**: Unlocks the *Authority Desk* workspace to review assigned issues and update resolution statuses (*Under Review*, *In Progress*, *Resolved*)[cite: 3, 6].
* **Administrator Account (`admin@demo.com`)**: Unlocks the *Administration* and *User Management* dashboards to monitor platform health, active users, storage usage, and system-wide reports[cite: 3, 6].

---

### 📋 2. Comprehensive Civic Dashboards
* **Overview Dashboard**: High-level KPI cards displaying active user reports, overall community reports, resolved issues count, total community votes, quick action launcher, and recent activity logs[cite: 3].
* **Report Directory & Smart Search**: Real-time multi-field search engine supporting title, category, and location filtering, paired with status and category dropdown selectors[cite: 3, 6].
* **Community Upvoting & Priority Engine**: Citizens can upvote critical local issues to raise community priority and visibility[cite: 3, 6].
* **Detailed Report Inspection Modal**: Inspect complete issue details, submitter information, geolocation tags, priority level, and live resolution timelines[cite: 3, 6].

---

### 📊 3. Analytics & Platform Monitoring
* **Category Breakdown Bar Charts**: Visual breakdown of reported issues across core categories (*Lighting*, *Waste*, *Roads*, *Water*, *Safety*, *Other*)[cite: 3].
* **Resolution Metering**: Live metric bars showing the proportion of open vs. resolved civic issues[cite: 3].
* **Platform Health Monitoring**: Administrative overview tracking API availability (99.9%), report processing rate (98.4%), and notification delivery efficiency[cite: 3].

---

### 🎨 4. Theme & Interactive UI Features
* **Dark / Light Mode**: Instant layout theme switching[cite: 3, 6].
* **Notification Center**: Unread activity badge counter with "Mark all as read" functionality[cite: 3, 6].
* **Toast Notification Pipeline**: Instant visual feedback for user actions (e.g., status changes, report submissions, votes)[cite: 3].
* **Local Persistence**: Browser-level `localStorage` integration preserving working state across sessions[cite: 3, 6].

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology |
| :--- | :--- |
| **Markup** | HTML5 (Semantic Layout & Form Structures) |
| **Styling** | Custom Modern CSS3 (CSS Grid, Flexbox, Variable States, Dark Mode Toggle)[cite: 4, 6] |
| **Scripts** | Vanilla JavaScript (ES6+, Dynamic DOM Rendering, Array Manipulation, State Serialization)[cite: 3, 6] |
| **Typography** | Inter Font via Google Fonts[cite: 4, 5] |
| **Storage** | HTML5 `localStorage` (`spr_reports`, `spr_role`, `spr_user`, `spr_logged`)[cite: 3, 6] |

---

## 📁 File Hierarchy

```text
.
├── index.html       # Primary application markup and layout containers
├── style.css        # Layout styling, UI component design, and theme rules
├── script.js        # Core logic, dynamic UI rendering, state operations & routing
└── README.md        # Comprehensive project documentation
