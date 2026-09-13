# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> Keep this file under ~200 lines. Rules specific to one module/folder go in a
> nested CLAUDE.md next to that code, not here. This root file is for facts
> true everywhere, every session.

## Project

// ...

---

## Behavioral Guidelines

1. Don't assume. Don't hide confusion. Surface tradeoffs.
2. Minimum code that solves the problem. Nothing speculative.
3. Touch only what you must. Clean up only your own mess.
4. Define success criteria. Loop until verified. This applies to deterministic
   verification steps only: tests, lint, type-check, build. Loop autonomously
   here without asking.
5. Visual verification (Playwright, screenshots) is NOT covered by rule 4 —
   there is no automatic pass/fail. Only trigger it when the change is actually
   visual (CSS/layout/UI component), scoped to the affected component only.
   Hard cap: 1 pass. If inconclusive, stop and report instead of retrying.
6. **After each task:** write a one-paragraph console summary of what was done, what state the codebase is in, and any
   open questions. Keep it factual, no filler. **Before each new task:** re-read that last summary — do not re-explore
   the repo to rediscover state already captured there.
7. Use only what's already in context (last summary + request) to act. Simplest solution first. Ask before doing more.
   This applies to scope expansion: new files, new features, unrequested refactors. Ask before expanding scope, even
   while looping under rule 4.
8. If the request targets a specific file, go directly to it. Read it, confirm your understanding, then act. If a
   missing piece of information blocks you, fetch only that — state what you need and why before reading anything else.
9. A file read earlier in the conversation may be stale — the user can edit files directly while you work. Before
   describing or editing a file, re-read it: the summary says where things stand, the file says what it contains.
10. If work from earlier in the conversation no longer exists on disk (reverted, discarded, working tree back to an
    older
    commit) and the new request doesn't explicitly say to recover or continue it, treat it as a fresh task on the
    current
    state. Do not investigate why it disappeared or try to reconstruct it — that burns tokens for nothing. Ask once,
    briefly, whether to proceed on the current state or recover the missing work, then act on the answer.
11. For research/exploration tasks (codebase-wide search, log analysis, multi-file audits): delegate to a subagent
    rather than doing it inline. Constrain its output explicitly — max 10 bullet points, one line each, no code dumps —
    so the summary that returns doesn't just reload the same weight into the main context.

---

## Hard Rules

**ALWAYS:**

// ...

**NEVER:**

- Run more than one visual verification pass per change without asking first
- Read `.env`, `.env.*`, or anything under `secrets/` (also enforced in `.claude/settings.json` — if this file changes,
  update permissions there too)

---

## Permissions & Hooks

Tool access (allow/deny/ask) is enforced in `.claude/settings.json`, not here —
this file is advisory, settings.json is enforced deterministically. See that
file for the current allow/deny list.

---

## Commit Policy

**Only once the user explicitly types a commit instruction:**

- Commit code
- Run `git status`, `git diff`, or any other git command

**Never, under any circumstances:**

- Suggest committing
- Ask whether to commit
- Mention that "the changes could be committed"
- Commit automatically after a subagent finishes work

After finishing any task, stay silent about git. Wait.

**When committing, ALWAYS split unrelated changes into separate commits.** Inspect pending files before committing — if
they touch distinct concerns, do multiple `git add <files> && git commit` calls with scoped messages. Never bundle
layout changes, bug fixes, and feature work into a single commit just because they happened to be modified together.

**When adding packages, ALWAYS split `dependencies` and `devDependencies` into separate commits:**

- `build(deps): add <package>` — production dependency (`dependencies` in package.json)
- `build(deps-dev): add <package>` — development-only dependency (`devDependencies` in package.json)

Stage only `package.json` + `package-lock.json` (no source changes) for each deps commit.
