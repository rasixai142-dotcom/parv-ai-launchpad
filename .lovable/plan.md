# Add the webinar date: Sunday, 16 August, 7:00 PM IST

Right now the site never states a date — the hero shows only "Live on Zoom / ~3 hours", the FAQ says the exact slot is "sent to you on WhatsApp", and the thank-you page shows "To be announced on WhatsApp". This adds the real schedule everywhere.

## What changes

1. **Single source of truth** — add the webinar date/time to the shared site config so every page reads the same value (`Sunday, 16 August · 7:00 PM IST`, plus a timestamp for the countdown).
2. **Landing page**
   - Hero: add a date badge next to "Live on Zoom" and "~3 hours".
   - Final CTA section: mention the date/time above the button.
   - FAQ: replace "the exact date and time slot is sent to you on WhatsApp" with the real schedule (keep the "join link comes on WhatsApp" line).
3. **Thank-you page** — replace the two "To be announced on WhatsApp" rows with Date = Sunday, 16 August and Time = 7:00 PM IST.
4. **Countdown** — retarget the timer from the current rolling 15-hour window to the actual webinar start, with the label "Webinar starts in", showing 00:00:00 once it passes.

## Technical notes

- New fields in `src/lib/site.ts`: `webinarDateLabel`, `webinarTimeLabel`, `webinarStartISO` (`2026-08-16T13:30:00Z` = 7:00 PM IST).
- `src/components/Countdown.tsx`: `getDeadline()` returns the fixed date instead of `Date.now() + 15h`; keeps the hydration guard so SSR still renders `--`.
- Everything else is text/JSX-only edits in `src/routes/index.tsx` and `src/routes/thank-you.tsx`.