import assert from "node:assert/strict";
import test from "node:test";

import { mergeTemplateCollections, templates } from "../js/templates.js";
import { templateCollections } from "../js/templates/index.js";
import { feature } from "../js/templates/feature.js";
import { refactor } from "../js/templates/refactor.js";
import { bugfix } from "../js/templates/bugfix.js";
import { tests as testsTemplate } from "../js/templates/tests.js";
import { docs } from "../js/templates/docs.js";
import { backendReview } from "../js/templates/backend-review.js";
import { frontendReview } from "../js/templates/frontend-review.js";
import { prReview } from "../js/templates/pr-review.js";
import { javaSpringBootReview } from "../js/templates/java-spring-boot-review.js";
import { activityImplementation } from "../js/templates/activity-implementation.js";
import { githubIssue } from "../js/templates/github-issue.js";

const REQUIRED_FIELDS = ["label", "category", "content"];

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
    "java-spring-boot-review",
    "activity-implementation",
    "github-issue"
  ]);
});

test("each individual template file has the required structure", () => {
  const individualTemplates = [
    feature,
    refactor,
    bugfix,
    testsTemplate,
    docs,
    backendReview,
    frontendReview,
    prReview,
    javaSpringBootReview,
    activityImplementation,
    githubIssue
  ];

  for (const template of individualTemplates) {
    for (const field of REQUIRED_FIELDS) {
      assert.ok(
        Object.prototype.hasOwnProperty.call(template, field),
        `Template is missing required field: "${field}"`
      );
      assert.ok(
        typeof template[field] === "string" && template[field].length > 0,
        `Template field "${field}" must be a non-empty string`
      );
    }
  }
});

test("templateCollections index exports one collection per label", () => {
  assert.equal(templateCollections.length, 11);

  for (const collection of templateCollections) {
    assert.ok(
      typeof collection.name === "string" && collection.name.length > 0,
      "Each collection must have a non-empty name"
    );
    assert.ok(
      typeof collection.templates === "object" && collection.templates !== null,
      "Each collection must have a templates object"
    );
    assert.equal(
      Object.keys(collection.templates).length,
      1,
      `Collection "${collection.name}" should contain exactly one template`
    );
  }
});

test("adding a new valid template file makes it available in the merged templates", () => {
  const newTemplate = {
    label: "Novo Template",
    category: "Teste",
    content: "Conteúdo do novo template. {{TASK}}"
  };

  const result = mergeTemplateCollections([
    ...templateCollections,
    { name: "newTemplate", templates: { "new-template": newTemplate } }
  ]);

  assert.ok(Object.prototype.hasOwnProperty.call(result, "new-template"));
  assert.deepEqual(result["new-template"], newTemplate);
});
