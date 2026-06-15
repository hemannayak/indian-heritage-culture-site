# Incredible India | Next-Gen Cultural Heritage & Tourism Portal (Version 2.1)

Welcome to the modernized **Incredible India Portal (Version 2.1)**—a high-fidelity, interactive, and visually stunning web application built to showcase the rich cultural heritage, historical architecture, regional cuisines, and events of India.

Designed to feel like a premium, editorial-grade travel publication (**National Geographic × Luxury Editorial × Airbnb** style), this application combines next-generation interactivity with a curated design system.

---

## 🎨 Premium Visual & UX Features

### 1. Stripe/Linear-Style Navigation Mega Menu
- **Interactive Dropdown**: Hovering over the **Destinations** tab triggers a full-width glassmorphic overlay containing regional categories and spotlight cards.
- **Spotlight State Highlights**: Highlights **Featured** (🏔️ *Himachal Pradesh*), **Trending** (🔥 *Meghalaya* with glowing triggers), and **New** (✨ *Goa*) states.
- **Live Preview Panel**: Hovering over any state dynamically updates a visual card with photos, regional info, and quick facts.
- **Mobile Accordion**: On mobile devices, the menu transforms into a responsive accordion layout.

### 2. Cinematic State Explorer Dashboard (`StateDetails.tsx`)
When a state is selected, it opens an immersive, scroll-driven profile page structured into 8 modules:
1. **Cinematic Hero**: Full-bleed location image scroll, title text, and a thumbnail strip to toggle background views.
2. **Snapshot Dashboard**: Metrics for Area, Population, Primary Language, Airports, and UNESCO Sites.
3. **Historical Story Timeline**: A vertical scroll-connected timeline mapping historic regional eras.
4. **City District Map**: Localized map grid showing district coordinates, local weather, safety index, and attractions.
5. **AI Travel Planner**: Dynamic 4-Day day-by-day itinerary planner customized for traveler types (*Solo, Family, Couple, Adventure, Foodie*).
6. **Experience Scroll Row**: Netflix-style horizontal swipe view of thematic experiences.
7. **Festival Calendar**: Upcoming events slider sorted by month blocks.
8. **Travel Intelligence Desk**: Average cost metrics, crowd indices, and advisory briefs.

### 3. Interactive Map of India
- Filter and discover destinations by regions (*North, South, East, West, Central, North-East*) and types (*States vs Union Territories*).
- Highlights details of selected states (Cuisine, Monuments, Literature, Events) in a side dashboard.
- Includes **360-degree virtual street-view panoramas** nested in modal frames.
- Links directly to the cinematic `StateDetails` dashboard via the **"Explore Cinematic Profile"** button.

### 4. SaaS Transit Ticket & Boarding Pass Planner
- Interactive transit search engine (**Flights, Trains, Buses, Cabs**).
- Generates a customized boarding pass ticket stub on the fly containing transit numbers, safety ratings, seat numbers, gate codes, and simulated barcodes.
- Fully formatted for print using tailored print CSS stylesheet overrides.

---

## 🛠️ Technology Stack
- **Core Framework**: React 19
- **Type Safety**: TypeScript
- **Bundler & Dev Server**: Vite
- **Icons**: Lucide React
- **Styling**: Vanilla CSS Utility System
  - Design variables: obsidian black background, velvet saffron amber, sage emerald, and champagne gold.
  - Custom typography: **Cormorant Garamond** (majestic serif for headings) & **Outfit** (sleek geometric sans-serif for UI).

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation
1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the Vite local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` (or the terminal-provided port) in your browser.

### Build
To compile and bundle the project for production deployment:
   ```bash
   npm run build
   ```
   This generates optimized, statically compiled static assets under the `dist/` directory.
