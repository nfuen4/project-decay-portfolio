# SOP: AI-Orchestrated Portfolio Projects & Specialized QA Agents

**Purpose:** This Standard Operating Procedure (SOP) outlines the methodology for executing complex, multi-asset portfolio projects using autonomous AI agents. It details how to structure staggered workflows to manage token constraints and how to define, deploy, and evaluate specialized Quality Assurance (QA) subagents.

**Audience:** Human Project Managers (for review) & Autonomous Agents (for skill execution).

---

## Part 1: AI Orchestration & Staggered Execution Planning

When building a large-scale project (such as generating multiple UI mockups, drafting extensive copy, or analyzing large datasets), agents must avoid exhausting their context windows. 

### Step 1: Define the Strategic Brief
*   **Establish the Baseline:** Identify the core problem and current metrics (e.g., "Standard lapse intervention is 30 days").
*   **Define the Intervention:** Determine the proactive strategy (e.g., "Shift intervention to the 14-to-21-day decay window").
*   **Create the Creative Brief:** Clearly document the required assets, the design system guidelines, and the desired tone. Save this as a foundational `.md` artifact for all subagents to reference.

### Step 2: Establish the Orchestration Plan
*   **Session Chunking:** Break the workload into isolated "Sessions." Never attempt to generate or process 4+ complex assets in a single prompt.
*   **Task Tracking:** Create a `task.md` file with a clear `[ ]`, `[/]`, `[x]` checklist. Agents must update this file sequentially.
*   **Staggered Automation:** 
    *   Execute Session 1 synchronously to validate the process and design system.
    *   For the remaining sessions, use the `schedule` tool to set up staggered background tasks or a `cron` job (e.g., `0 */3 * * *` for every 3 hours).
    *   Instruct the agent to clear context between sessions and strictly rely on the `task.md` state file when waking up from a scheduled timer.

---

## Part 2: Creating Specialized QA Agents

To ensure high-fidelity outputs that meet industry standards (e.g., Digital Health Compliance, Enterprise B2B Strategy), do not rely on a general-purpose agent to self-correct. Instantiate a dedicated QA subagent.

### Step 1: Define the Rubric (The "QA the QA" Standard)
Before deploying the agent, define the 5 strict dimensions it must evaluate. For example, in Digital Health:
1.  **Empathy & Tone:** Must be conversational and supportive; flag aggressive "salesy" language.
2.  **Strategic Intent:** Does the asset achieve the business goal (e.g., reducing friction for lapsing users)?
3.  **Visual System Adherence:** Enforce specific brand rules (e.g., "No-Line" rule, specific typography, exact HEX codes).
4.  **Compliance & Risk:** Flag PHI exposure or inappropriate medical claims.
5.  **Actionability:** Require the agent to output a structured punch-list with `[PASS]`, `[FAIL]`, or `[REQUIRES REVISION]`.

### Step 2: Instantiate the Subagent
Use the `define_subagent` tool with the following configurations:
*   **Name:** Give it a title-based name (e.g., `creative_health_qa`).
*   **System Prompt:** Inject the 5-point Rubric defined in Step 1 *directly* into the system prompt so it becomes the agent's core identity.
*   **Tool Access:** Grant the agent necessary read access or MCP tool access (e.g., `enable_mcp_tools: true` so it can fetch designs from Stitch).

### Step 3: Deployment & Review Loop
*   Use `invoke_subagent` to pass the generated asset (or the Asset ID) to the QA agent.
*   The parent agent must wait for the asynchronous QA report.
*   **Human-in-the-loop:** The parent agent presents the QA punch-list to the user to evaluate the agent's effectiveness against the Step 1 Rubric before allowing the system to scale to remaining assets.

---

## Part 3: Agentic Directives (System Instructions)

> [!IMPORTANT]
> **For Agents reading this SOP:**
> When asked to run a "Portfolio Orchestration," you must immediately:
> 1. Create a `task.md` tracker.
> 2. Break asset generation into staggered scheduled timers to preserve tokens.
> 3. Refuse to generate all assets at once.
> 4. Create a dedicated QA Subagent with a strict 5-point rubric specific to the user's industry before executing the first asset.
