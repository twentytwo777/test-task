import { StandardService } from '~~/server/utils/feed/services/standard';

import type { BaseService } from '~~/server/utils/feed/services/base';

interface Portal {
  name: string;
  service: BaseService;
};

type Portals = typeof PORTALS;
export type PortalKeys = keyof Portals;

export const PORTALS = {
  mos: {
    name: 'mos.ru',
    service: new StandardService('https://mos.ru/rss')
  },
  vedomosti: {
    name: 'vedomosti.ru',
    service: new StandardService('https://www.vedomosti.ru/rss/articles.xml')
  }
} as const satisfies Record<string, Portal>;

export const PORTALS_KEYS = <PortalKeys[]>Object.keys(PORTALS);
export const PORTALS_LIST = PORTALS_KEYS.map((key) => {
  return { id: key, name: PORTALS[key].name };
});