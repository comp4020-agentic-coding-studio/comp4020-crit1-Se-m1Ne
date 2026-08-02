# Process overview

A reading-guide to how the work came together --- a map to your process, not an
essay about it. Markers read this file and follow its citations; they don't
trawl the repo for evidence you didn't point at, so if a moment mattered, cite
it.

This file is the shape; the course site's
[assessment page](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/topics/assessment/#what-you-submit)
is the requirement, and each brief adds its own word count and moment count.

## What I built

I built a multi-page static website inspired by forgotten web aesthetics from the late 1990s and early 2000s. The site takes inspiration from GeoCities personal homepages and Windows 95/98 interfaces, using bright colours, dense layouts, decorative GIFs, floating windows, badges, counters, and other outdated web conventions. Instead of following modern minimal web design, the goal was to create a site that feels like an old personal webpage that has been continuously modified over time.

## The moments that mattered

The initial version captured the idea of a retro website, but it still looked too similar to a modern structured webpage. I directed the agent to rebuild the homepage around a genuine 1998-style candy-company website aesthetic, focusing on stronger period-specific visual choices rather than simply changing colours. I knew this was the right direction because the result established a clear old-web identity that could be expanded through later iterations.

Citation:
[`ce4389d`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit1-Se-m1Ne/commit/ce4389d)

The next challenge was that the site still felt too clean and intentionally designed. Instead of adding more conventional content, I asked the agent to introduce the visual clutter associated with older personal websites, including sidebars, banners, navigation buttons, decorative icons, and intentionally excessive elements. I accepted this change after checking the rendered pages and confirming that the layout felt more like an accumulated personal homepage rather than a modern design system.

Citation:
[`435ba04`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit1-Se-m1Ne/commit/435ba04)
[`6dd217f`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit1-Se-m1Ne/commit/6dd217f)
[`1d465f4`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit1-Se-m1Ne/commit/1d465f4)

The final visual refinement focused on making the website feel even closer to the forgotten web era. The agent initially provided some decorative elements, but I pushed further by requesting overlapping Win95/98-style floating windows and additional widgets containing unnecessary animations and effects. This was a deliberate choice because these elements represented the personality of old websites rather than improving usability. I verified the result by reviewing all pages in the browser and ensuring that the site still followed the static HTML/CSS constraint.

Citation:
[`be06f96`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit1-Se-m1Ne/commit/be06f96)
[`40597b2`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit1-Se-m1Ne/commit/40597b2)

## Before you ship

`pnpm check:evidence` verifies your citations resolve to real commits, that the
current reflection entry is in `reflections/`, and that your `CLAUDE.md` is
there --- before a marker ever opens the file. It checks that your map is
traceable, not that it is good: the marker judges whether your small,
deliberately chosen set of moments shows real judgement and reflection. A green
check is not a substitute for that curation.

Images are deliberately not checked, because whether one renders is visible the
moment you look. Open this file on GitHub and look at it before you ship.
