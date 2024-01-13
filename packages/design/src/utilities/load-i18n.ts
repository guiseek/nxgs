import {
  BehavioralCommand,
  BehavioralObserver,
} from '../constants/i18n/interfaces';
import { Lang } from '../interfaces';
import { join } from 'path';

export interface I18nMap {
  'behavioral.command': { default: BehavioralCommand };
  'behavioral.observer': { default: BehavioralObserver };
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
