import { templateCollections } from "./templates/index.js";

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
