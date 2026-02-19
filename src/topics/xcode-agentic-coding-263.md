---
title: Xcode 26.3 agentic coding
layout: default
description: Apple’s February 2026 Xcode release lets coding agents drive entire workflows.
---

## Agentic coding rolls deeper into Xcode
Xcode 26.3 (release candidate out February 3, 2026) expands on the coding intelligence features that debuted in Xcode 26 by unlocking **agentic coding**. Now Apple ships first-class integrations for Anthropic’s Claude Agent and OpenAI’s Codex directly inside Xcode, letting those agents handle tasks from planning to scaffolding, not just single-line suggestions.

## What agents can do today
- Agents can **break down complex goals**, explore the file structure, and update project settings or build configurations without leaving Xcode’s UI.
- They inspect documentation, tie into built-in tools (Simulator, Xcode Previews, Tests), and even **capture visual previews** to verify UI changes before calling another iteration, meaning they can propose fixes and see what breaks visually.
- With the **Model Context Protocol**, Xcode 26.3 stays open: teams can bring in any compliant agent beyond Claude/Codex, even private or future LLMs, while keeping the workflow centralized.

## Why it matters for iOS engineers
Agentic coding lets developers treat Xcode like a partner: agent sessions can iterate on small features while the engineer keeps control of design, architecture decisions, and final verification. The release also signals Apple’s bet that intelligent agents will help smaller studios punch above their weight, as the models can offload tedious boilerplate while humans focus on creative polish.

## Availability & next steps
- Xcode 26.3 is available as a release candidate for Apple Developer Program members immediately, with the App Store version arriving soon.
- Use the new features by enabling agentic coding in Xcode preferences and linking an agent that supports the Model Context Protocol; Claude Agent and Codex are the first two proven partners.
- Expect a follow-up once the release finalizes to document how to integrate custom agents or wirehold multiple agents for cross-platform builds.

## Sources
- [Apple Newsroom · Xcode 26.3 unlocks the power of agentic coding](https://www.apple.com/newsroom/2026/02/xcode-26-point-3-unlocks-the-power-of-agentic-coding/)
