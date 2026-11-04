# hermes-lang-el — Ελληνικά (Greek) for Hermes Desktop

A complete Greek (Ελληνικά) language pack for the **Hermes Desktop** app. Once
installed and enabled, pick **Ελληνικά** under *Settings → Appearance →
Language* and the whole desktop UI switches to Greek — every pane, dialog,
settings page, palette entry and status-bar label.

## What it covers

- **5,063 of 5,065 desktop strings** — the full English desktop catalog except
  two array-valued keys (`composer.newSessionPlaceholders`,
  `composer.followUpPlaceholders`), which the YAML pack format cannot express
  and which fall back to English. Everything else — settings, composer,
  sidebar, command center, skills, messaging, profiles, cron, onboarding,
  boot, updates, and every dialog and toast — is Greek.
- **102 core CLI strings** — the most visible slash-command descriptions
  (`/new`, `/help`, `/cron`, `/skills`, `/plugins`, …) and approval summaries.

Anything the pack leaves out falls back to English per key, never to a broken
UI. The TUI and the remaining ~3,300 core CLI strings are not covered yet.

## Translation conventions

- Technical terms stay in English, per the Hermes desktop convention:
  *plugin, skill, gateway, provider, endpoint, webhook, OAuth, token, MCP,
  hook, middleware, cron, worktree, manifest, toolset, SDK, SSH, TTS/STT, LLM,
  JSON, YAML, git, commit, branch, repo, PR, CI/CD, WAL, PII, OIDC, VRAM*.
- Function-formatted strings use positional placeholders (`{0}`, `{1}`) in
  argument order, e.g. `Αναζήτηση {0} εφαρμογών`.
- Consistent glossary across all sections: *Cancel = Ακύρωση, Save =
  Αποθήκευση, Delete = Διαγραφή, Settings = Ρυθμίσεις, Session = Συνεδρία,
  Profile = Προφίλ, Model = Μοντέλο, Connect = Σύνδεση, Error = Σφάλμα*.

## Install

```bash
hermes plugins install axiom-agent-ai/hermes-lang-el
hermes plugins enable hermes-lang-el
hermes config set display.language el
```

Then in the Desktop app: **Settings → Appearance → Language → Ελληνικά**.

## Update policy

This plugin contains no self-updating code. Updates ship as new commits to
this repository; the catalog pin moves via a SHA-bump PR here, and installed
copies update with `hermes plugins update hermes-lang-el`.

## Disclosure

- No network calls beyond the Hermes gateway's own `i18n.catalog` delivery.
- No reads outside the plugin's own data.
- No shell commands, no background processes, no stored credentials.
- The pack is pure translation data plus a no-op Desktop entrypoint.

## License

MIT
