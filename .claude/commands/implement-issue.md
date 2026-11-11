---
description: Implement a GitHub issue on a new branch and open a PR
argument-hint: <issue-number>
---
Implement GitHub issue #$ARGUMENTS.

1. Run `gh issue view $ARGUMENTS --comments` and read the issue fully.
2. Run `git checkout main && git pull` so you start from the latest main.
3. Create a branch: `git checkout -b issue-$ARGUMENTS-<short-slug>`.
4. Explore the relevant code, then implement the change. Keep it scoped to the issue.
5. Build and test locally if the project has a build or test command (see CLAUDE.md).
6. Commit with a clear message that references the issue (e.g. "Add jump mechanic (#$ARGUMENTS)").
7. Push with `git push -u origin <branch>`.
8. Open a PR with `gh pr create --base main` whose body says what changed and how to test it, and ends with "Closes #$ARGUMENTS".
9. Print the PR URL.

If the issue is ambiguous, stop and ask me before implementing.
