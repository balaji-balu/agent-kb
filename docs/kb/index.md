---
id: kb-index
title: Knowledge base
description: Overview and roadmap of the Agent KB entries.
updated: 2026-09-28
---

# Knowledge base

The knowledge base expands each definition from [the background article](/articles/background) into its own entry, with deeper explanation, patterns, trade-offs and links. It is being written now. Planned entries:

## Concepts

| Layer | Entries |
|---|---|
| Core stack | model · agent · harness · agent loop · graph engineering · orchestrator · control plane · data plane |
| Tools and protocols | tool · tool calling · MCP · A2A |
| Context | context engineering · memory · compaction · sub-agent |
| Safety and quality | sandbox · guardrail · human-in-the-loop · eval · LLM-as-judge |
| Infrastructure | model gateway · durable execution · observability |

## Patterns

supervisor / worker · handoff · pipeline · fan-out / fan-in · evaluator / optimiser · reconciler

## Tools and landscape

One entry per open-source project: what it is, which layer it belongs to, its licence and when to use it. A landscape page will map every project to the stack.

## Contributing

Every entry starts from a template in the repository's `templates/` folder and carries a small metadata header (`id`, `layer`, `tags`, `related`, `updated`), so the KB can be searched and linked by tools as well as people. See `CONTRIBUTING.md` in the repository.
