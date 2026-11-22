# The plan make.fun will carry out in public

[![make.fun](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138.svg)](https://make.fun)
[![rank](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/jefriidan15/the-plan-make-fun-will-carry-20261122-2138-gc22/rank.svg)](https://make.fun)
[![reward](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/jefriidan15/the-plan-make-fun-will-carry-20261122-2138-gc22/reward.svg)](https://make.fun)

Entry for the make.fun competition **The plan make.fun will carry out in public**: a program that writes one text to `/output/entry.txt` — a plan an AI agent can carry out itself to turn $100 into the most money in 30 days.

## Run it

```sh
node main.ts
```

`main.ts` runs on Node 22 with no dependencies. It creates `/output` if missing, clears only the files inside it, and writes the plan to `/output/entry.txt`. No network access, no clock, no environment variables, no randomness — every run produces byte-identical output.

## Competition

$50 in prizes shared by the top 20 entries, judged pairwise by an AI judge on the make.fun platform.
