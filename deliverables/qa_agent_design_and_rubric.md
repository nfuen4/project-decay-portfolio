# Creative Health QA Agent: Design & Evaluation Rubric

This document outlines the architecture for the proposed **Creative Health QA Subagent** and provides the evaluation criteria (Rubric) you can use to "QA the QA" and determine if this agent is ready to scale to other projects.

---

## Part 1: Agent Architecture & System Prompt Design

To ensure this agent operates at the level of a senior creative director and healthcare compliance officer, it will be defined with the following core characteristics:

### **Agent Role:** `Creative Health QA Director`
**Objective:** Act as the final Quality Management checkpoint for all copy and visual assets generated for Transcarent or similar digital health initiatives.

**Core Competencies (System Prompt Inclusions):**
1. **Digital Health Empathy:** Mastery of clinical tone. Recognizes and flags "salesy," aggressive, or anxiety-inducing language. Ensures the tone is that of a "Trusted Digital Curator."
2. **Strategic Business Alignment:** Understands the B2B2C model. Evaluates if the asset successfully bridges the gap between member engagement and employer ROI (e.g., reducing 30-day lapse rates).
3. **Design System Mastery:** Strict adherence to Transcarent visual rules (e.g., the "No-Line" rule, Tonal Layering, specific typography).
4. **Project Management QA Standards:** Operates using PMBOK Quality Control principles—checking for defect prevention, variance from the creative brief, and strict requirement traceability.

---

## Part 2: The "QA the QA" Criteria Set (Your Evaluation Rubric)

When the agent reviews our generated assets (like the Day 14 "Micro-Win" UI we just created), use the following criteria to grade the agent's effectiveness. A successful agent will consistently identify issues or validate successes across these five dimensions:

### 1. The Empathy & Tone Filter
*   **What to look for in the agent's feedback:** Does the agent catch language that feels too transactional? Does it suggest copy that lowers the user's cognitive load and anxiety?
*   **Pass Criteria:** The agent actively corrects words like "Submit," "Buy," or "Urgent" to softer, clinically appropriate alternatives like "Check In," "View Options," or "Update."

### 2. The Strategic Intent Alignment
*   **What to look for in the agent's feedback:** Does the agent remember *why* the asset exists? (e.g., "This asset is meant to rescue a lapsing habit at Day 14.")
*   **Pass Criteria:** The agent points out if a design has too much friction or requires too much reading, correctly identifying that high friction defeats the purpose of an "Early Decay Intervention."

### 3. Visual & Brand System Adherence
*   **What to look for in the agent's feedback:** Does the agent strictly enforce the design system rules provided in the brief?
*   **Pass Criteria:** The agent flags unauthorized colors (e.g., pure red/black), incorrect typography usage, or the use of harsh 1px borders instead of the required "Tonal Layering."

### 4. Compliance & Risk Awareness (PHI Safe)
*   **What to look for in the agent's feedback:** Does the agent flag potentially sensitive medical language that shouldn't appear on a standard push notification or unauthenticated screen?
*   **Pass Criteria:** The agent successfully identifies areas where clinical data might be over-exposed and suggests safer, generalized language (e.g., changing "Your Wegovy dose" to "Your medication plan").

### 5. Actionability of Feedback (PM Standard)
*   **What to look for in the agent's feedback:** Is the feedback vague ("Make it pop more") or highly specific ("Change the button hex to #171169 and reduce the body copy to 16px")?
*   **Pass Criteria:** The agent formats its QA report as a structured punch-list with clear "Pass/Fail/Requires Revision" tags, making it immediately actionable for a designer or developer.

---

## Next Steps

> [!IMPORTANT]
> **User Review Required:** 
> Please review the QA Rubric above. If these standards align with your expectations for the QA agent, click **Proceed**. 
> 
> Once approved, I will use the `define_subagent` tool to officially create the **Creative Health QA Director** agent in the background. As our UI assets generate over the next few hours, I will route them to this agent for quality control and present its findings to you for evaluation.
