# PROJECT BRIEF: Early-Intervention Re-Engagement Engine ("Project Decay")
## Transcarent | Lifecycle Marketing & Product Analytics Collaboration

> **Portfolio Context:** Digital Health B2B2C Member Engagement
> **Core Theme:** Shifting from the standard 30-day "silent dormancy" threshold to proactive, predictive behavioral decay triggers (14-to-21-day velocity drops).
> **Author:** Nevin Fuentes, CRM & Lifecycle Marketing Lead

---

## 1. Executive Summary & Strategic Rationale

Digital health applications experience steep user engagement cliffs, with industry benchmarks showing **70% to 90% of members churning within the first 90 days**. In a B2B2C model like Transcarent’s—where self-insured employers pay for access, but revenue and renewals depend on members actively utilizing the platform—re-engagement is not just a marketing exercise; it is a **business-retention imperative**.

Historically, standard SaaS re-engagement programs define "churn" or "lapse" at **30 days of complete silence** (zero logins). By that point, the member has abandoned the habit loop, may have uninstalled the app, and is often unreachable or expensive to reactivate. 

**"Project Decay"** re-architects this approach. By utilizing a continuous **Churn Propensity Model**, we target the **behavioral decay phase**—the 14-to-21-day window *before* a member lapses completely at day 30. Intervening when engagement frequency drops (rather than after it hits zero) allows us to rescue habits before they are broken.

---

## 2. Research & Timeline Analysis: 30 Days vs. 14/21 Days

To determine the optimal intervention day, we evaluated the standard 30-day window against a targeted decay window:

| Timeline | Classification | System Nature | Member Mindset | Re-Engagement Cost | Effectiveness / Recovery Rate |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **30 Days (Standard)** | Dormancy / Reactive Churn | Standard SaaS MAU Metric | *Disengaged:* Habit is broken; the user has checked out but may still have the app. | **High** (Requires generic value-proposition sells) | **Medium (15% – 25% recovery)** |
| **14–21 Days (New Target)** | **Behavioral Decay** (Sweet Spot) | **Real-Time Event Stream** | *Slipping:* Habit is fading due to friction, plateau, or lack of perceived value. | **Low** (Needs subtle, hyper-targeted clinical nudges) | **High (45% – 60% recovery)** |

### Why 14 to 21 Days is the Optimal Intervention Window
1. **The Velocity of Decay:** User session tracking shows that users do not drop from daily usage to zero overnight. Instead, they exhibit a predictable decay: login frequency drops from 3× per week to 1× per week, session length drops from 4 minutes to under 30 seconds, and they stop opening push notifications. This decline peaks between days 7 and 14.
2. **Preventing Notification Fatigue:** Intervening too early (e.g., day 3 or 7) risks annoying active users who are simply having a busy week. Intervening too late (day 30+) means notification permissions may have been revoked. The **14-to-21-day window** strikes the perfect balance of statistical confidence (the user is actually lapsing) and engagement receptivity.
3. **The Habit Hook:** In behavioral health, a habit starts to erode after 7–10 days of non-reinforcement. At day 14, the habit is salvageable. At day 30, it is gone.

---

## 3. Project Brief: Bridging the Gap

### Problem Statement
> **How might we** detect member engagement decay *before* they lapse at Day 30, so that we can deliver contextual, clinical interventions that re-establish their health management habit loop?

### The Opportunity (Gap 15)
Our current re-engagement campaign fires at Day 30 of silence using a scheduled static query pull. It treats all inactive members identically. We have an opportunity to replace this with an **Early Lapse Prediction Model** running continuously on behavioral cadence signals.

### Key Objectives
*   **Reduce 90-day member churn** by **15%** across pilot employer groups.
*   **Increase Day-30 to Day-60 retention** from **18% to 32%** in the Weight Health and Surgery Care programs.
*   **Establish real-time event integration** between product telemetry (Amplitude/Segment) and our ESP (Braze).

---

## 4. Implementation Methodology (Hybrid Agile/Waterfall)

This project will be executed using a **Hybrid Methodology**, blending Agile flexibility with Predictive/Waterfall structure where compliance requires it.

*   **Waterfall (Predictive Phases):** Data pipeline architecture, HIPAA compliance reviews, and integration security sign-offs. These have rigid dependencies and must be completed in a linear sequence.
*   **Agile (Iterative Phases):** UI/UX asset generation, predictive model tuning (Data Science sprints), and lifecycle campaign journey logic. These will be tested and refined over 2-week sprints.

---

## 5. Lifecycle Marketing Intervention Strategy

When the Churn Propensity Model flags a member’s risk score as **"High Risk"** (typically between Days 14 and 21 of decay), the Lifecycle Marketing team triggers a multi-channel **Habit Rescue Journey**.

```
[Decay Signal Detected] 
       ↓
[Day 14: SMS / Push] ──(Engaged?)──→ [Back to Active]
       ↓ (No)
[Day 17: Email Progress] ──(Engaged?)──→ [Back to Active]
       ↓ (No)
[Day 21: Care Guide Call] ──→ [Re-navigated / Handed Off]
```

### The Journey Interventions

#### 🎯 Phase 1 (Day 14 of Decay): The Low-Friction Re-entry
*   **Trigger:** Churn Risk Score > 0.70 AND no app opens in 14 days.
*   **Channel:** Push Notification (Primary) / SMS (Secondary).
*   **Concept:** The "Micro-Win." A 10-second check-in instead of a long log.

#### 🎯 Phase 2 (Day 17 of Decay): The Evidencing Value Recall
*   **Trigger:** Risk Score remains high; Day 14 push not opened.
*   **Channel:** Personalized Email.
*   **Concept:** Visualizing progress and the "Sunk Cost" of their habit with a note from a Clinical Coach.

#### 🎯 Phase 3 (Day 21 of Decay): The Human-Augmented Pivot
*   **Trigger:** Risk Score remains high; Day 17 email unengaged.
*   **Channel:** Care Guide personal SMS / Outbound Call.
*   **Concept:** Active clinical barrier identification (e.g., side effects with medication).

---

## 6. Creative Brief: New Asset Generation

To execute this plan, we require **new creative assets**. Existing templates do not support the real-time dynamic nature of this intervention.

**Requirements:**
*   **Brand Alignment:** Must strictly adhere to the Transcarent design system (colors, typography, header logos).
*   **Tone:** Empathetic, supportive, non-punitive, and clinically professional.
*   **Deliverables Needed:**
    1.  **Day 14 Mobile Modal UI:** A clean, low-friction mobile screen asking "How is your energy level today?" with three clear state buttons.
    2.  **Day 17 Email Template UI:** An email showing a user's past 3-week streak with a stylized chart and coach avatar.
    3.  **Day 21 SMS/Dashboard UI:** A Care Guide interface showing contextual outreach options.
    4.  **Internal Churn Propensity Dashboard UI:** Data visualization for the CS and Lifecycle teams.

*(Note: These visual assets are being generated via Stitch MCP to accompany this portfolio narrative).*

---

## 7. Cross-Functional Collaboration Model

Executing this predictive engine requires a collaborative model involving five core teams:

```
┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
│     PRODUCT     │ ────> │  DATA SCIENCE   │ ────> │    LIFECYCLE    │
│  (Telemetry &   │       │  (Propensity    │       │   (Automation   │
│   Taxonomy)     │       │   Model & Risk) │       │   & Journeys)   │
└─────────────────┘       └─────────────────┘       └─────────────────┘
         ▲                                                   │
         │ (Data Flows via Webhook/CDP)                      │ (Member Reach)
         ▼                                                   ▼
┌─────────────────┐                                 ┌─────────────────┐
│   ENGINEERING   │                                 │    CUSTOMER     │
│   (Pipelines &  │                                 │     SUCCESS     │
│   Data Joins)   │                                 │ (QBRs & ROI)    │
└─────────────────┘                                 └─────────────────┘
```

---

## 8. RACI Matrix for Project Implementation

| Phase / Deliverable | Data Science | Product | Engineering | Lifecycle Marketing | CS |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **1. Event Tracking Taxonomy** | C | **A** | R | I | I |
| **2. Churn Propensity Model Build** | **A** | C | R | I | I |
| **3. Real-Time Data Pipeline Setup** | C | I | **A** | R | I |
| **4. Asset Generation & Copy** | I | C | I | **A** | I |
| **5. Trigger Integration & QA** | I | C | R | **A** | I |
| **6. QBR Dashboard & Reporting** | R | I | I | R | **A** |

*This brief forms the blueprint for Transcarent’s Next-Gen Lifecycle Strategy, proving that in digital health, timing is not just about the calendar—it is about behavioral velocity.*
