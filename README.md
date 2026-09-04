# 🎨 Frontend Stylesheet Documentation

**Developer / Contributor:** Jamiul (`jamiul`)[cite: 5]  
**File:** `style.css`[cite: 8]  
**Role:** Complete User Interface Styling & Visual System Design[cite: 8]  

---

## 📌 Stylesheet Overview

This document provides a breakdown of the custom CSS styling implemented by Jamiul for the application[cite: 8]. The stylesheet defines the visual identity, responsive typography, CSS Grid and Flexbox structures, dynamic UI states, component cards, custom forms, and modal overlays[cite: 8].

---

## 🎨 Core Design System & Styling Rules

* **Typography & Reset:** Built on the Inter font family with universal box-sizing (`box-sizing: border-box`) and explicit input inheritance rules[cite: 8].
* **Layout Engine:** Custom two-column auth grid, sticky desktop header with fixed navigation sidebar, and multi-column grid layouts for dashboards[cite: 8].
* **Component UI System:** Includes styled KPI cards, custom form controls, notification toast pipelines, bar chart indicators, and modal dialogs[cite: 8].
* **Status Badge Styling:** Distinct color-coded status pills for review (`#2865b5`), in-progress (`#ad6d08`), resolved (`#14885c`), and rejected (`#c54f59`) states[cite: 8].
* **Responsive Breakpoints:** 
  * `@media (max-width: 1050px)`: Collapses two-column grids into single columns and hides background art panels[cite: 8].
  * `@media (max-width: 760px)`: Collapses the navigation sidebar into an icon-only mode and adjusts layout spacing for mobile viewports[cite: 8].

---

## 📂 CSS Component Structure

| CSS Class / Selector | Component Purpose | Key Features |
| :--- | :--- | :--- |
| `.auth`, `.auth-art`, `.auth-panel` | Authentication Layout | CSS Grid structure, background gradients, and art statistics layout[cite: 8]. |
| `aside`, `nav`, `.user` | Navigation Sidebar | Fixed left-aligned navigation with active states (`nav button.active`) and sub-labels[cite: 8]. |
| `header`, `.search`, `.bell` | Top Navigation Header | Sticky position header, search bar styling, and notification bell indicators[cite: 8]. |
| `.card`, `.stat`, `.twocol` | Dashboard Cards | Elevated card containers with drop shadows (`box-shadow`), KPI displays, and background accents[cite: 8]. |
| `.status` | Status Badges | Dynamic color palettes for report resolution states[cite: 8]. |
| `.chart`, `.bar` | Data Visualization | Flexbox-driven bar charts with gradient fills (`#70b7ff` to `#1268d8`) and inline labels[cite: 8]. |
| `.modalwrap`, `.modal` | Overlay Windows | Fixed backdrop with centered modal card for detail views[cite: 8]. |
| `#toast` | Notification Alerts | Fixed position popups with smooth CSS transition state toggling (`#toast.show`)[cite: 8]. |

---

## 🛠️ Usage

Ensure this CSS file is linked inside your HTML document's `<head>` tag:

```html
<link rel="stylesheet" href="style.css" />
