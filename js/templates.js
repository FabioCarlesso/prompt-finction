import { developmentTemplates } from "./templates/developmentTemplates.js";
import { qualityTemplates } from "./templates/qualityTemplates.js";
import { documentationTemplates } from "./templates/documentationTemplates.js";
import { reviewTemplates } from "./templates/reviewTemplates.js";
import { activityTemplates } from "./templates/activityTemplates.js";

const templateCollections = [
  { name: "developmentTemplates", templates: developmentTemplates },
  { name: "qualityTemplates", templates: qualityTemplates },
  { name: "documentationTemplates", templates: documentationTemplates },
  { name: "reviewTemplates", templates: reviewTemplates },
  { name: "activityTemplates", templates: activityTemplates }
];

export function getAllLabels(templatesObj) {
  const labelsSet = new Set();
  Object.values(templatesObj).forEach(tpl => {
    (tpl.labels || []).forEach(l => labelsSet.add(l));
  });
  return [...labelsSet].sort();
}

export function getTemplatesByLabel(templatesObj, label) {
  return Object.fromEntries(
    Object.entries(templatesObj).filter(([, tpl]) =>
      (tpl.labels || []).includes(label)
    )
  );
}

export function mergeTemplateCollections(collections) {
  const mergedTemplates = {};
  const sourceByKey = new Map();

  collections.forEach(({ name, templates }) => {
    Object.entries(templates).forEach(([key, template]) => {
      if (Object.prototype.hasOwnProperty.call(mergedTemplates, key)) {
        const previousSource = sourceByKey.get(key);
        throw new Error(
          `Template key collision: "${key}" is defined in "${previousSource}" and "${name}".`
        );
      }

      mergedTemplates[key] = template;
      sourceByKey.set(key, name);
    });
  });

  return mergedTemplates;
}

export const templates = mergeTemplateCollections(templateCollections);
