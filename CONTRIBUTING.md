# Contributing

Thank you for helping make these definitions sharper.

## Ground rules

1. **Definitions first.** Every concept entry opens with a one- or two-sentence definition in a `def` block, followed by *What it is not*. If you disagree with a definition, open an issue or a pull request that changes it and explains why.
2. **Vendor-neutral.** Explain the concept before naming products. Products are examples, never the definition.
3. **Link to sources.** Link open-source projects to their source repository. Check that the link resolves, and use the final URL after any redirect.
4. **No marketing.** No superlatives, no benchmark claims without a source.
5. **Keep entries small.** One concept per file. Link to related entries instead of repeating them.

## Adding an entry

1. Copy `templates/concept.md` or `templates/tool.md` into `docs/kb/concepts/`, `docs/kb/patterns/` or `docs/kb/tools/`.
2. Fill in the metadata header. `id` must be unique and must never change once published, because other entries link to it.
3. Add the page to the sidebar in `docs/.vitepress/config.mts`.
4. Run `npm run build` to check for broken links, then open a pull request.

## Metadata header

| Field | Meaning |
|---|---|
| `id` | stable unique identifier, for example `concept-harness` |
| `title` | display name |
| `layer` | where it sits in the stack (see the templates for allowed values) |
| `tags` | free-form keywords |
| `related` | ids of related entries |
| `updated` | date of the last substantive change |
