import { TranslateOptions } from 'i18n-js';

import { TxKeyPath, i18n } from './i18n';

/**
 * Translates text.
 *
 * @param key The i18n key.
 * @param options The i18n options.
 * @returns The translated text.
 *
 * @example
 * Translations:
 *
 * ```en.ts
 * {
 *   "common": {
 *    "hello": "Hello!!"
 *   }
 * }
 * ```
 *
 * Usage:
 * ```ts
 * import { t } from "@/i18n"

 * t("common.hello")
 * // => "Hello!!"
 * ```
 */
export function t(key: TxKeyPath, options?: TranslateOptions) {
  return i18n.t(key, options);
}
