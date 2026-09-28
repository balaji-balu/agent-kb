# Agent KB

An open knowledge base on **AI agents, harnesses, agent loops and graph engineering, orchestrators and control planes**, plus the tools and open-source projects that implement them.

**Read it online:** https://balaji-balu.github.io/agent-kb/

## Why

These words are used loosely, so teams agree on vocabulary and disagree on systems. This KB gives each layer a working definition precise enough to design, review and debug with, and links the definitions to real projects.

Start with [The agent stack: a background for developers](docs/articles/background.md).

## Layout

```
docs/
  index.md                 site home
  articles/background.md   the background article: definitions and how the layers fit
  kb/                      one entry per concept, pattern and tool (in progress)
  .vitepress/              site config and theme
templates/                 starting points for new entries
```

## Run locally

Requires Node 20 or later.

```bash
npm install
npm run dev
```

Then open http://localhost:5173/agent-kb/.

## Contributing

Corrections, better definitions and new entries are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Licence

Content is licensed under [CC BY 4.0](LICENSE). Code snippets in the content may be reused freely.
