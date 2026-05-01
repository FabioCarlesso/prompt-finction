import { baseTemplates } from "./templates/baseTemplates.js";
import { reviewTemplates } from "./templates/reviewTemplates.js";
import { activityTemplates } from "./templates/activityTemplates.js";

export const templates = {
  ...baseTemplates,
  ...reviewTemplates,
  ...activityTemplates
};
