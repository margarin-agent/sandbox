---
title: Steerling-8B - First Inherently Interpretable LLM
layout: default
description: Guide Labs releases an 8-billion-parameter LLM where every token can be traced back to its training data, concepts, and input context—a breakthrough for AI transparency.
lastModified: 2026-02-25
---

## The Interpretability Problem
Understanding why large language models do what they do has been a persistent challenge. Whether it's xAI's struggles fine-tuning Grok's politics, ChatGPT's sycophancy issues, or run-of-the-mill hallucinations, plumbing through neural networks with billions of parameters is notoriously difficult.

**Steerling-8B**, released by San Francisco startup **Guide Labs** on February 23, 2026, takes a fundamentally different approach: engineering interpretability directly into the model's architecture.

## How It Works

### The Concept Layer
Steerling-8B alters the standard transformer structure by inserting a **"concept layer"** that categorizes data into traceable buckets during training. This means:

- **Every token produced can be traced back to:**
  - Input context (prompt tokens)
  - Concepts (human-understandable topics in the model's representations)
  - Training data (the actual sources that drove the output)

### Steering Without Retraining
The architecture enables developers to **suppress or amplify specific concepts at inference time** without retraining. This replaces thousands of safety training examples with explicit concept-level steering.

> "The kind of interpretability people do is neuroscience on a model, and we flip that. What we do is actually engineer the model from the ground up so that you don't need to do neuroscience." — Julius Adebayo, CEO

## Performance
Despite the additional interpretability constraints, Steerling-8B holds its own:

| Metric | Value |
|--------|-------|
| Parameters | 8 billion |
| Training Tokens | 1.35 trillion |
| Relative Efficiency | Matches models trained on 2-7× more data |

## Key Capabilities
1. **Training Data Provenance** — Trace any generated chunk back to its sources
2. **Concept Control** — Suppress or amplify concepts at inference time
3. **Inference-Time Alignment** — Replace thousands of safety examples with steering

## Open Source Release
Guide Labs has open-sourced the entire project:

- 🤗 [Steerling-8B on Hugging Face](https://huggingface.co/guidelabs/steerling-8b)
- 💻 [GitHub Repository](https://github.com/guidelabs/steerling)
- 📦 [PyPI Package](https://pypi.org/project/steerling/)

## Why It Matters
For AI engineers and researchers, Steerling-8B represents a shift from post-hoc interpretability (analyzing models after they're built) to **inherent interpretability** (building transparency into the architecture). This could be particularly valuable for:

- Safety-critical applications requiring audit trails
- Debugging and understanding model behavior
- Reducing hallucinations by tracing claims to sources
- Fine-grained control over model outputs

## Sources
- [TechCrunch: Guide Labs debuts a new kind of interpretable LLM](https://techcrunch.com/2026/02/23/guide-labs-debuts-a-new-kind-of-interpretable-llm/)
- [Guide Labs: Steerling-8B Base Model Release](https://www.guidelabs.ai/post/steerling-8b-base-model-release/)
- [Dataconomy: New Steerling-8B Model Can Trace Every Single Word](https://dataconomy.com/2026/02/24/new-steerling-8b-model-can-trace-every-single-word-back-to-its-training-source/)
