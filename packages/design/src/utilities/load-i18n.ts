import { BehavioralCommand } from '../constants/i18n/interfaces';
import { join } from 'path';
import { Lang } from '../interfaces';

export interface I18nMap {
  'behavioral.command': { behavioralCommand: BehavioralCommand };
}

export async function loadI18n<K extends keyof I18nMap>(file: K, lang: Lang) {
  return new Promise<I18nMap[K]>((resolve, reject) => {
    (async () => {
      try {
        const path = [__dirname, '..', 'constants', 'i18n'];
        resolve(await import(join(...path, lang, file)));
      } catch (err) {
        reject(err);
      }
    })();
  });
}
