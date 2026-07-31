import { readdirSync, readFileSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import { JSDOM } from "jsdom";
import { describe, expect, it } from "vitest";

// This week's published spec (crits/01-forgotten-web): the mechanically
// checkable lines. "the look commits to a forgotten web era" is a person's
// call, made at the crit — not tested here.
const DIST = resolve("dist");

function distFiles(dir: string = DIST): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return distFiles(path);
    return [path];
  });
}

const files = distFiles();
const htmlFiles = files.filter((path) => path.endsWith(".html"));
const pages = htmlFiles.map((path) => ({
  name: relative(DIST, path),
  doc: new JSDOM(readFileSync(path, "utf8")).window.document,
}));

describe("spec: no JavaScript", () => {
  it("ships no .js files", () => {
    const jsFiles = files.filter((path) => /\.[cm]?js$/.test(path));
    expect(jsFiles, `found: ${jsFiles.map((p) => relative(DIST, p)).join(", ")}`).toEqual([]);
  });

  for (const { name, doc } of pages) {
    it(`${name} has no <script> tags`, () => {
      expect(doc.querySelectorAll("script").length).toBe(0);
    });

    it(`${name} has no inline event handlers`, () => {
      for (const el of doc.querySelectorAll("*")) {
        for (const attr of el.getAttributeNames()) {
          expect(
            attr.startsWith("on"),
            `<${el.tagName.toLowerCase()} ${attr}="..."> is inline JavaScript`,
          ).toBe(false);
        }
      }
    });
  }
});

describe("spec: a real site", () => {
  it("has a handful of pages, not just one", () => {
    expect(pages.length).toBeGreaterThan(2);
  });

  it("every page is reachable from the home page", () => {
    const byName = new Map(pages.map((p) => [p.name, p]));
    const seen = new Set<string>(["index.html"]);
    const queue = ["index.html"];

    while (queue.length > 0) {
      const current = queue.shift()!;
      const page = byName.get(current);
      if (!page) continue;

      for (const a of page.doc.querySelectorAll("a[href]")) {
        const href = a.getAttribute("href")!;
        if (/^([a-z]+:)?\/\//.test(href) || href.startsWith("#")) continue;

        const target = href.replace(/^\.\//, "").replace(/#.*$/, "") || "index.html";
        if (!seen.has(target) && byName.has(target)) {
          seen.add(target);
          queue.push(target);
        }
      }
    }

    const unreachable = pages.map((p) => p.name).filter((name) => !seen.has(name));
    expect(unreachable, `not linked from index.html: ${unreachable.join(", ")}`).toEqual([]);
  });

  it("pages carry real readable content, not placeholder text", () => {
    for (const { name, doc } of pages) {
      const text = doc.querySelector("main")?.textContent?.trim() ?? "";
      expect(text.length, `${name} has no <main> content`).toBeGreaterThan(0);
      expect(text, `${name} still has the starter placeholder text`).not.toMatch(
        /replace this with your prototype/i,
      );
    }
  });
});
