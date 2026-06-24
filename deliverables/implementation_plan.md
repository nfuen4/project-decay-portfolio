# Portfolio Implementation Plan: Transcarent Early Re-engagement website ("Project Decay")

This document details the plan for building a highly polished, single-page portfolio prototype website tomorrow, **Sunday, June 21st, 2026**. The website will serve as a visual showcase of the **Transcarent Early-Intervention Re-Engagement Engine ("Project Decay")**, translating the strategic brief, lifecycle metrics, and generated Stitch UI screens into a premium B2B digital health portfolio asset.

## Strategic Constraints & Token Limits
*   **Target Launch Time:** Sunday, June 21st, at **9:00 AM** (triggered via scheduled task).
*   **Token Budget Cap:** Designed to take **no more than 25%** of the weekly total token limit.
*   **Strategy to Achieve Cap:** We will avoid repetitive regenerations by using clean vanilla JS/CSS layouts, loading assets directly from the local artifact directories, and limiting tool calls to single contiguous files where possible.

---

## 🎨 Visual Design & Aesthetics ("Digital Curator")
*   **Theme:** Modern Clinical Editorial / Premium Healthcare Concierge.
*   **Typography:** Google Fonts pairing: **Manrope** for display headlines, **Public Sans** for clean, readable body copy (mirroring the Stitch design system).
*   **Color Palette (Empathetic Guardian):**
    *   *Primary (Navy):* `#002b49`
    *   *Secondary (Teal Accent):* `#006c51`
    *   *Backgrounds:* Soft layered grays (`#f8f9fa` to `#f3f4f5`) instead of borders.
    *   *Borders:* Strict **"No-Line" Rule** (tonal background sheets and low-opacity shadows only).
*   **Interactive Features:**
    *   Asymmetrical bento-style layouts for timelines.
    *   A slider or toggle to contrast **"30 Days SaaS Standard"** vs. **"14-21 Days Behavioral Decay Sweet Spot."**
    *   Embedded previews of the generated Stitch screens (Day 14 Modal, Day 17 Streak, Day 21 Care Guide, CS Dashboard) using carousels or mock device frames.

---

## ⚙️ Step-by-Step Task Checklist (Tomorrow)

### Phase 1: Setup & Environment (9:00 AM - 9:30 AM)
- [ ] Create the project files directory (`/scratch/project-decay-portfolio/`).
- [ ] Establish initial `index.html` structure and basic SEO meta tags.
- [ ] Create `index.css` defining the brand color tokens, typography scales, and CSS transition classes.

### Phase 2: Core Narrative & Architecture (9:30 AM - 11:30 AM)
- [ ] **Hero Section:** Clear B2B product headline ("Behavioral Decay: Rescuing Digital Health Habits Before They Churn") with high-impact introductory stats.
- [ ] **Comparison Interaction:** Build a toggle switch allowing recruiters/viewers to switch between standard reactive re-engagement and our predictive decay model.
- [ ] **Timeline Storyboard:** Display the 3-stage user journey (SMS nudge, personalized streak email, Care Guide call) with clean, asymmetric layouts.
- [ ] **Embedded Assets Showcase:** Integrate the four Stitch screens using an interactive device mock tab system.

### Phase 3: Polish & Deployment (11:30 AM - 12:00 PM)
- [ ] Eliminate any 1px solid lines or borders. Update styling to use soft tonal shifts.
- [ ] Validate responsive layouts on simulated mobile viewport widths.
- [ ] Launch local developer mock server to verify UI behavior.

---

## 📈 Verification Plan
*   **Functional Testing:** Ensure comparison toggle shifts states smoothly. Verify the screen slider/tab system works without script errors.
*   **Visual Check:** Ensure no solid borders exist and typography weights align with Public Sans and Manrope.
*   **HIPAA & Compliance Check:** Ensure no biometric metrics are shown in the placeholder data on the portfolio page.
