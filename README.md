# PRIDE Web Commons

Reusable, framework-agnostic **Header**, **Announcement Banner**, and **Footer** Web Components for all EMBL-EBI PRIDE services and websites.

[![GitHub Pages](https://img.shields.io/badge/demo-GitHub%20Pages-blue)](https://pride-archive.github.io/pride-web-commons/)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)

---

## What's Included

1. `<pride-header>`
   - **EMBL-EBI Global Bar**: Official black bar, skip-to-content accessibility link, Hinxton campus selector, and EBI-wide search toggle.
   - **Dynamic Announcement Banner**: Automatically queries and parses `https://www.ebi.ac.uk/pride/banner/index.txt`. Renders maintenance/announcement alerts with close controls.
   - **PRIDE Main Navigation**: Crisp vector PRIDE branding, navigation menus (Archive, Proteins, USI, Tools, Help, About) with accessible dropdowns.
   - **Quick Search**: Accession / keyword search bar that links straight to datasets or archive searches.
   - **User Session**: Automatically detects user authentication (`username`, `token`) with login/register or profile/logout actions.
   - **Mobile Drawer**: Responsive slide-out navigation panel for tablets and mobile screens.
   - **Sticky & Compact**: Smoothly transitions to a compact navbar when scrolling down.

2. `<pride-footer>`
   - **ELIXIR Core Data Resource Banner**: Badge and link to ELIXIR node details.
   - **EMBL-EBI Global Footer**: Complete multi-column footer with services, research, training, licensing, and legal metadata.

3. **Zero Dependencies & Style Isolation**
   - Built on standard **Custom Elements v1** with **Shadow DOM**.
   - Encapsulated styles mean no CSS leakage into or out of your application (compatible with Bootstrap, Tailwind, Material, View UI Plus, etc.).

---

## Quick Start (CDN)

Drop the script into your HTML `<head>` or before `</body>`:

```html
<!-- Load the bundle (via jsDelivr CDN) -->
<script type="module" src="https://cdn.jsdelivr.net/gh/PRIDE-Archive/pride-web-commons@main/dist/pride-web-commons.js"></script>

<!-- Or via GitHub Pages -->
<!-- <script type="module" src="https://pride-archive.github.io/pride-web-commons/pride-web-commons.js"></script> -->
```

And place the tags in your page:

```html
<body>
  <!-- Header: configure active section and search visibility -->
  <pride-header active-section="tools"></pride-header>

  <!-- Service content -->
  <main id="content">
    <h1>Your PRIDE Service</h1>
  </main>

  <!-- Footer -->
  <pride-footer></pride-footer>
</body>
```

---

## Integration in Different Tech Stacks

### 1. Angular (`sdrfedit`)
Add the script to `src/index.html`:
```html
<head>
  <script type="module" src="https://cdn.jsdelivr.net/gh/PRIDE-Archive/pride-web-commons@main/dist/pride-web-commons.js"></script>
</head>
<body>
  <pride-header active-section="tools"></pride-header>
  <sdrf-editor></sdrf-editor>
  <pride-footer></pride-footer>
</body>
```
In your Angular module or standalone component, add `schemas: [CUSTOM_ELEMENTS_SCHEMA]`.

### 2. Python / MkDocs (`pmultiqc`)
In `docs/overrides/main.html`:
```html
{% extends "base.html" %}

{% block extrahead %}
  <script type="module" src="https://cdn.jsdelivr.net/gh/PRIDE-Archive/pride-web-commons@main/dist/pride-web-commons.js"></script>
{% endblock %}

{% block header %}
  <pride-header active-section="tools"></pride-header>
{% endblock %}

{% block footer %}
  {{ super() }}
  <pride-footer></pride-footer>
{% endblock %}
```

### 3. Vue 3 (`pride-web`)
In `src/App.vue`:
```vue
<template>
  <div class="app-root">
    <pride-header :active-section="currentSection" @pride-navigate="onNavigate"></pride-header>
    <router-view></router-view>
    <pride-footer></pride-footer>
  </div>
</template>
```

---

## Component API

### `<pride-header>` Attributes
| Attribute | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `active-section` | `string` | `""` | Highlighted section: `"home"`, `"archive"`, `"proteins"`, `"usi"`, `"tools"`, `"help"`, `"about"`. |
| `hide-search` | `boolean` | `false` | When present or `"true"`, hides the quick search input. |
| `base-url` | `string` | `"https://www.ebi.ac.uk/pride"` | Base URL for internal PRIDE links. |
| `banner-url` | `string` | `"${base-url}/banner/index.txt"` | URL to fetch dynamic alert text from. |
| `username` | `string` | `localStorage.username` | Current username. Shows account dropdown if present. |
| `token` | `string` | `localStorage.token` | Auth token. |

### Custom Events
Listen on the `<pride-header>` or on `window`:
- `pride-search`: Fired when user submits the quick search form. `event.detail.query` contains the search string. If `event.preventDefault()` is called, the default browser navigation is prevented.
- `pride-navigate`: Fired when an internal navigation link is clicked. `event.detail.href` contains the link destination. Call `preventDefault()` if your SPA router wants to handle it client-side.
- `pride-logout`: Fired when user clicks Log out.

### `<pride-footer>` Attributes
| Attribute | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `show-elixir` | `boolean` | `true` | Show/hide the ELIXIR Core Data Resource banner. |
| `show-ebi-footer` | `boolean` | `true` | Show/hide the full EMBL-EBI multi-column global footer. |

---

## Development

```bash
# Install dependencies
npm install

# Start local dev server with interactive demo
npm run dev

# Build library and demo documentation page
npm run build
```

Built assets are generated in `dist/`:
- `pride-web-commons.js` (ES Module for `<script type="module">` or `import`)
- `pride-web-commons.umd.cjs` (UMD bundle)
- `index.html` (Interactive showcase page for GitHub Pages)
