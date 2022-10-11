import type { Field } from 'payload/types';
import type { FieldHook } from 'payload/types';

const format = (val: string): string => val.replace(/ /g, '-').replace(/[^\w-]+/g, '').toLowerCase();

const formatSlug = (fallback: string): FieldHook => ({ value, originalDoc, data }) => {
  if (typeof value === 'string') {
    return format(value);
  }
  const fallbackData = (data && data[fallback]) || (originalDoc && originalDoc[fallback]);

  if (fallbackData && typeof fallbackData === 'string') {
    return format(fallbackData);
  }

  return value;
};

/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item: unknown): boolean {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
function deepMerge<T, R>(target: T, source: R): T {
  const output = { ...target };
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = deepMerge(target[key], source[key]);
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }

  return output;
}

type Slug = (fieldToUse?: string, overrides?: Partial<Field>) => Field

// By dynamically building fields in code configurations are reusable and concise
const slug: Slug = (fieldToUse = 'title', overrides) => deepMerge<Field, Partial<Field>>(
  {
    name: 'slug',
    label: 'Slug',
    type: 'text',
    localized: true,
    admin: {
      position: 'sidebar',
    },
    hooks: {
      beforeValidate: [
        formatSlug(fieldToUse),
      ],
    },
  },
  overrides,
);

export default slug;
