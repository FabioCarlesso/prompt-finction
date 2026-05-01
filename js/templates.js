import { developmentTemplates } from "./templates/developmentTemplates.js";
import { qualityTemplates } from "./templates/qualityTemplates.js";
import { documentationTemplates } from "./templates/documentationTemplates.js";
import { reviewTemplates } from "./templates/reviewTemplates.js";
import { activityTemplates } from "./templates/activityTemplates.js";

export const templates = {
  ...developmentTemplates,
  ...qualityTemplates,
  ...documentationTemplates,
  ...reviewTemplates,
  ...activityTemplates
};
