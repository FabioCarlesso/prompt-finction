import assert from "node:assert/strict";
import test from "node:test";

import { mergeTemplateCollections, templates } from "../js/templates.js";

test("mergeTemplateCollections merges template collections without collisions", () => {
  const result = mergeTemplateCollections([
    {
      name: "firstTemplates",
      templates: {
        first: { label: "Primeiro", category: "Teste", content: "Conteudo 1" }
      }
    },
    {
      name: "secondTemplates",
      templates: {
        second: { label: "Segundo", category: "Teste", content: "Conteudo 2" }
      }
    }
  ]);

  assert.deepEqual(Object.keys(result), ["first", "second"]);
});

test("mergeTemplateCollections rejects duplicate template keys", () => {
  assert.throws(
    () => mergeTemplateCollections([
      {
        name: "firstTemplates",
        templates: {
          duplicated: { label: "Primeiro", category: "Teste", content: "Conteudo 1" }
        }
      },
      {
        name: "secondTemplates",
        templates: {
          duplicated: { label: "Segundo", category: "Teste", content: "Conteudo 2" }
        }
      }
    ]),
    /Template key collision: "duplicated" is defined in "firstTemplates" and "secondTemplates"\./
  );
});

test("templates exports all current template keys", () => {
  assert.deepEqual(Object.keys(templates), [
    "feature",
    "refactor",
    "bugfix",
    "tests",
    "docs",
    "backend-review",
    "frontend-review",
    "pr-review",
    "activity-implementation",
    "github-issue"
  ]);
});
