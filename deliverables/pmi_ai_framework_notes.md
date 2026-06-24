# PMI AI Project Management Framework Notes

These insights are extracted from *The Standard for Artificial Intelligence in Portfolio, Program, and Project Management* (PMI), specifically filtered for solo AI-orchestrated projects, excluding enterprise-heavy structures.

## 1. Risk Management (AI Risk Taxonomies)
- **Human-in-the-loop (HITL)**: Essential to ensure oversight over critical decisions and align AI-driven actions to values and standards. AI cannot navigate interpersonal dynamics or culture without human oversight.
- **Algorithmic Bias & Hallucinations**: Implement mitigation strategies for biased data and AI "hallucinations" (confident but fabricated outputs).
- **Model Drift**: AI model performance deteriorates over time due to changes in underlying data patterns. This requires continuous monitoring.
- **Risk Register**: Create a centralized AI risk register to document AI-specific risks, mitigation plans, and status.

## 2. Governance / Responsible AI Checklists
- **Responsible AI Practices**: Include clear documentation of AI capabilities, limitations, and decision-making processes. 
- **Traceability and Auditability**: AI decisions should be traceable and auditable. Keep a log of AI prompts, inputs, and outputs to review if something goes wrong.
- **Data Quality & Privacy**: "Input for impact" — AI outputs are only as good as the data. Ensure accurate, complete, consistent, and timely data. Strip PII (Personally Identifiable Information) before feeding data to public AI tools.

## 3. Resource Management (Compute/Cost Budgeting)
- **Token / Cost Optimization**: Utilize AI to optimize resource allocation, but be mindful of AI compute costs. High investments in AI without clear ROI can lead to cost overruns.
- **Time and Budget Tracking**: Track costs related to AI implementation (tokens, platform subscriptions) against the value delivered to ensure sustainability.

## 4. Benefits Realization Management
- **ROI Calculation**: Measure direct and indirect benefits (time savings, error reduction, increased productivity). ROI = (Total Benefits - Total Costs) / Total Costs × 100.
- **Leading vs. Lagging Indicators**: Use leading indicators to detect performance concerns early and lagging indicators to review effectiveness.
- **Value Delivery**: AI initiatives should deliver value as soon and as frequently as possible using iterative approaches.

## 5. Knowledge Management / Lessons Learned
- **Post-Incident Analysis**: After an AI-related failure or incident, conduct an analysis to understand the root cause and document lessons learned.
- **Continuous Learning Loop**: Implement a feedback mechanism to continuously improve the AI system based on user inputs and changing environments.

## 6. Resource Optimization / Model Selection
- **Tailoring Development Approach**: Use Predictive (for clear, stable requirements like data governance), Adaptive (for evolving AI model training/prompt engineering), or Hybrid approaches based on uncertainty.
- **Model Matching**: Select AI tools based on functional suitability (e.g., GenAI for content creation, predictive analytics for forecasting, NLP for document analysis).
- **Scale Gradually**: Experiment -> Perform Proof of Value -> Pilot -> Industrialize. Start small with low-risk tasks (automating routine work) before moving to decision augmentation.
