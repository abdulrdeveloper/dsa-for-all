# Day 08 — Asymptotic Analysis: Examples

## What is Asymptotic Analysis?

Asymptotic analysis means studying an algorithm's performance (time or space) as the input size (n) becomes **very large / approaches infinity** — not for small inputs.

In simple terms: it doesn't tell you the exact number of seconds, it tells you the **rate** at which operations grow as input size grows.

**Why it matters:**
- Two algorithms might look similar for small inputs, but the difference becomes obvious at n = 10,000 or 1,000,000
- Hardware, language, or machine speed can change, but the growth pattern (O(n) vs O(n²)) stays the same
- That's why constants and lower order terms are dropped — asymptotic analysis only cares about **"what happens when n gets very large,"** not the small details

This is why O(n²) is always called "worse" than O(n) — even if O(n²) is faster for small n, **for large n**, O(n) always wins.

---

## Example 1 — f(n) = 5n² + 6n + 12

**Step 1:** Identify the highest power term → `n²`

**Step 2:** Drop lower order terms (6n and 12), since they become negligible compared to n² as n grows.
→ left with: `5n²`

**Step 3:** Drop the coefficient (5) too — Big-O only describes growth rate, not the exact multiplier.
→ left with: `n²`

**Result:** `O(n²)`

---

## Example 2 — f(n) = 3n + 7

**Step 1:** Highest power term → `n`

**Step 2:** Drop the constant (7).
→ left with: `3n`

**Step 3:** Drop the coefficient (3).
→ left with: `n`

**Result:** `O(n)`

---

## Example 3 — f(n) = 2n³ + 100n² + 4

**Step 1:** Highest power term → `n³` (n³ will always outgrow n² as n→∞, no matter how small its coefficient is or how large the other term's coefficient is)

**Step 2:** Drop lower order terms (100n² and 4).
→ left with: `2n³`

**Step 3:** Drop the coefficient (2).
→ left with: `n³`

**Result:** `O(n³)`

---

## Example 4 — f(n) = n log n + n

**Step 1:** Compare growth rates: `n log n` grows faster than plain `n`.

**Step 2:** Drop `n` (the lower order term).
→ left with: `n log n`

**Result:** `O(n log n)`

---

## Example 5 — f(n) = 500 (no n involved)

**Step 1:** There's no n-dependent term at all, just a constant.

**Result:** `O(1)`

---

## Example 6 — f(n) = n² + 2ⁿ

**Step 1:** Compare `n²` vs `2ⁿ` — exponential (`2ⁿ`) always outgrows polynomial (`n²`) eventually, even if n² has a large coefficient or 2ⁿ looks smaller at first.

**Step 2:** Drop `n²` (the slower growing term).
→ left with: `2ⁿ`

**Result:** `O(2ⁿ)`

---

## Quick Rule Recap

1. Find the term with the highest growth rate (if multiple terms have different growth rates, keep only the fastest growing one).
2. Drop its own coefficient too.
3. Always remove everything else (lower order terms + constants).

```
O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(n³) < O(2ⁿ) < O(n!)
```