import assert from "node:assert/strict";
import test from "node:test";

import { mergeTemplateCollections, templates, getAllLabels, getTemplatesByLabel } from "../js/templates.js";

test("mergeTemplateCollections merges template collections without collisions", () => {
  const result = mergeTemplateCollections([
    {
      name: "firstTemplates",
      templates: {
        first: { label: "Primeiro", labels: ["teste"], content: "Conteudo 1" }
      }
    },
    {
      name: "secondTemplates",
      templates: {
        second: { label: "Segundo", labels: ["teste"], content: "Conteudo 2" }
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
          duplicated: { label: "Primeiro", labels: ["teste"], content: "Conteudo 1" }
        }
      },
      {
        name: "secondTemplates",
        templates: {
          duplicated: { label: "Segundo", labels: ["teste"], content: "Conteudo 2" }
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
    "java-spring-boot-review",
    "activity-implementation",
    "github-issue"
  ]);
});

test("templates use labels array instead of category string", () => {
  Object.entries(templates).forEach(([key, tpl]) => {
    assert.ok(Array.isArray(tpl.labels), `Template "${key}" must have a labels array`);
    assert.ok(tpl.labels.length > 0, `Template "${key}" must have at least one label`);
    assert.equal(tpl.category, undefined, `Template "${key}" must not have a category field`);
  });
});

test("getAllLabels returns all unique labels sorted", () => {
  const result = getAllLabels({
    a: { label: "A", labels: ["review", "backend"], content: "" },
    b: { label: "B", labels: ["desenvolvimento"], content: "" },
    c: { label: "C", labels: ["review"], content: "" }
  });
  assert.deepEqual(result, ["backend", "desenvolvimento", "review"]);
});

test("getAllLabels returns sorted unique labels from all templates", () => {
  const labels = getAllLabels(templates);
  assert.ok(Array.isArray(labels));
  assert.ok(labels.length > 0);
  const sorted = [...labels].sort();
  assert.deepEqual(labels, sorted, "Labels must be sorted alphabetically");
  assert.equal(labels.length, new Set(labels).size, "Labels must be unique");
});

test("getTemplatesByLabel returns only templates with matching label", () => {
  const testTemplates = {
    a: { label: "A", labels: ["review", "backend"], content: "" },
    b: { label: "B", labels: ["desenvolvimento"], content: "" },
    c: { label: "C", labels: ["review"], content: "" }
  };
  const result = getTemplatesByLabel(testTemplates, "review");
  assert.deepEqual(Object.keys(result), ["a", "c"]);
});

test("getTemplatesByLabel returns empty object when no templates match", () => {
  const testTemplates = {
    a: { label: "A", labels: ["review"], content: "" }
  };
  const result = getTemplatesByLabel(testTemplates, "desenvolvimento");
  assert.deepEqual(result, {});
});

test("getTemplatesByLabel filters real templates correctly", () => {
  const reviewTemplates = getTemplatesByLabel(templates, "review");
  const keys = Object.keys(reviewTemplates);
  assert.ok(keys.includes("backend-review"), "backend-review should be in review label");
  assert.ok(keys.includes("frontend-review"), "frontend-review should be in review label");
  assert.ok(keys.includes("pr-review"), "pr-review should be in review label");
  assert.ok(keys.includes("java-spring-boot-review"), "java-spring-boot-review should be in review label");
  assert.ok(!keys.includes("feature"), "feature should not be in review label");
});
