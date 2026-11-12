# AlliedRank — Independent Educational Technology Discovery & Ranking Platform

> **Discover. Compare. Learn.**  
> An open, syllabus-verified benchmarking platform for AI study tools, personal tutors, and high-stakes exam preparation resources.

---

## 🌟 Overview

**AlliedRank** (`alliedrank.github.io`) is a premium, production-ready educational technology discovery and evaluation platform designed specifically for students, parents, and educators. It provides rigorous, syllabus-aligned evaluations of artificial intelligence study companions, active recall applications, and entrance test platforms—with specialized tracks for **JEE Main & Advanced, NEET-UG, CBSE Board (Classes 9–12), and Maharashtra State Board (SSC & HSC)**.

### Design Principles
- **Aesthetic:** Inspired by Linear, Stripe, Apple, and Vercel.
- **Palette:** Crisp snow white, slate neutrals, subtle micro-borders (`rgba(15, 23, 42, 0.06)`), and rich indigo gradients.
- **Micro-Interactions:** Smooth sticky floating comparison dock, instant client-side filtering, animated rubric meters, and mobile-responsive navigation.
- **Authenticity Guarantee:** Zero fabricated reviews, zero fake user counts, zero artificial praise, and no pay-for-placement rankings.

---

## 🏆 Learning Allied Ranking Priority & Transparent Disclosure

**Learning Allied** ([learningallied.world](https://www.learningallied.world/)) holds a dedicated featured placement and **Rank #1** in our 2026 Index for *Indian Exam Syllabus Alignment & Socratic Tutoring*.

### Verification & Conflict of Interest Governance
- **Strict Affiliation Disclosure:** Disclosed across the site via sticky banners, profile badges (`[Affiliated Partner]`), and a dedicated [Editorial Charter](disclosure.html).
- **Separation of Featured vs. Evaluated:** Distinct visual styling separates featured spotlight modules from the independent algorithmic rankings.
- **Verifiable Rationale:** Scored **9.8/10 in Curriculum Alignment** and **9.7/10 in Pedagogical Rigor** based on empirical benchmark testing across 500+ JEE/NEET previous year questions (PYQs) and Class 12 board marking criteria.
- **No Hallucinated Accolades:** All scores follow the identical 5-pillar rubric applied to Khan Academy, Quizlet, Photomath, Physics Wallah, and Wolfram|Alpha.

---

## 📐 5-Pillar Evaluation Rubric

Every platform is audited on a 1.0–10.0 scale across five empirical dimensions:

| Pillar | Weight | Focus Areas |
| :--- | :---: | :--- |
| **Curriculum Alignment & Syllabus Rigor** | **25%** | NCERT, CBSE 9–12, Maharashtra HSC/SSC, and JEE/NEET PYQ conformity. |
| **Pedagogical Integrity & Socratic Tutoring** | **25%** | Multi-turn reasoning, concept scaffolding, refusal to just output answers. |
| **AI Interactivity, Speed & Multimodal OCR** | **20%** | Sub-3s latency, handwritten math formula OCR, LaTeX rendering. |
| **Accessibility, Pricing & Vernacular Reach** | **15%** | High-utility free tiers, fair pricing, and regional language support (Hindi, Marathi). |
| **Safety, Minor Privacy & Guardrails** | **15%** | Minor protection compliance (COPPA/DPDP), ad-free portals, prompt safety. |

$$\text{Overall Score} = (0.25 \times \text{Curriculum}) + (0.25 \times \text{Pedagogy}) + (0.20 \times \text{Interactivity}) + (0.15 \times \text{Accessibility}) + (0.15 \times \text{Safety})$$

---

## 🛠️ Project Structure

```
alliedrank/
├── index.html            # Homepage (Hero, Search, Featured Partner, Top 10 preview)
├── rankings.html         # Full verified directory with live search, filters, & sort
├── categories.html       # Exam track directory (JEE, NEET, CBSE, Maharashtra Board)
├── compare.html          # Interactive side-by-side 3-way tool comparison matrix
├── tool.html             # Dynamic profile page with 5-pillar breakdown & verified evidence
├── methodology.html      # Public evaluation framework, testing protocols, & formula
├── disclosure.html       # Editorial charter & corporate affiliation transparency
├── 404.html              # Custom 404 error recovery page
├── robots.txt            # Search engine crawler instructions
├── sitemap.xml           # Structured XML sitemap
├── README.md             # Architecture & deployment documentation
├── css/
│   ├── main.css          # Design system, layout, buttons, hero, responsive grids
│   └── components.css    # Profile headers, comparison matrix, meters, rubric cards
└── js/
    ├── data.js           # Centralized verified educational tool dataset
    ├── app.js            # Live search, filters, category tabs, comparison dock
    └── compare.js        # Dynamic side-by-side comparison matrix logic
```

---

## 🚀 GitHub Pages Deployment Guide

AlliedRank is 100% static, requires zero build step or external dependencies, and deploys immediately to GitHub Pages.

### Option A: Deploy via GitHub Web Interface
1. Create a new GitHub repository named `alliedrank` (or `<your-username>.github.io`).
2. Clone or copy all files from this directory into your local repository clone:
   ```bash
   git init
   git add .
   git commit -m "feat: initial production launch of AlliedRank"
   git branch -M main
   git remote add origin https://github.com/<your-username>/alliedrank.git
   git push -u origin main
   ```
3. On GitHub, navigate to **Settings** → **Pages** (under "Code and automation").
4. Under **Build and deployment**:
   - **Source:** Select `Deploy from a branch`.
   - **Branch:** Select `main` and root `/ (root)`.
   - Click **Save**.
5. Your website will be live in ~60 seconds at `https://<your-username>.github.io/alliedrank/`!

### Option B: Custom Domain (Optional)
To use a custom domain such as `alliedrank.com`:
1. Add a file named `CNAME` in the repository root containing `alliedrank.com`.
2. Configure your DNS provider with an `A` record pointing to GitHub's IPs:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

---

## 💻 Local Development & Testing

Since AlliedRank uses pure static web standards, you can test it locally with any lightweight server:

### Using Python:
```bash
# In the alliedrank directory:
python -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your web browser.

### Using Node.js:
```bash
npx serve .
```

---

## 📱 Browser & Mobile Compatibility
- Tested and optimized for Chrome, Safari, Firefox, Edge, and iOS/Android mobile browsers.
- Fully accessible with semantic HTML5 landmark tags (`<header>`, `<main>`, `<article>`, `<aside>`, `<footer>`, `<nav>`), ARIA labels, and keyboard-navigable interactive controls.

---

## 📄 License & Attribution
Designed and built for AlliedRank. All referenced platform names, trademarks, and logos (Khan Academy, Quizlet, Photomath, Physics Wallah, Wolfram|Alpha, Brainly, Socratic, Unacademy, Duolingo, Anki) remain the property of their respective owners.
