import { feature } from "./feature.js";
import { refactor } from "./refactor.js";
import { bugfix } from "./bugfix.js";
import { tests } from "./tests.js";
import { docs } from "./docs.js";
import { backendReview } from "./backend-review.js";
import { frontendReview } from "./frontend-review.js";
import { prReview } from "./pr-review.js";
import { javaSpringBootReview } from "./java-spring-boot-review.js";
import { activityImplementation } from "./activity-implementation.js";
import { githubIssue } from "./github-issue.js";
import { angularReview } from "./angular-review.js";

export const templateCollections = [
  { name: "activityImplementation", templates: { "activity-implementation": activityImplementation } },  
  { name: "javaSpringBootReview", templates: { "java-spring-boot-review": javaSpringBootReview } },
  { name: "githubIssue", templates: { "github-issue": githubIssue } },
  { name: "angularReview ", templates: { "angular-review ": angularReview } },
  { name: "feature", templates: { feature } },
  { name: "refactor", templates: { refactor } },
  { name: "bugfix", templates: { bugfix } },
  { name: "tests", templates: { tests } },
  { name: "docs", templates: { docs } },
  { name: "backendReview", templates: { "backend-review": backendReview } },
  { name: "frontendReview", templates: { "frontend-review": frontendReview } },
  { name: "prReview", templates: { "pr-review": prReview } }
];
