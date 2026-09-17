import type { BaseService } from '~~/server/utils/feed/services/base';

type Portal = {
  name: string;
  service: BaseService;
};

type Portals = typeof PORTALS;
export type PortalKeys = keyof Portals;

export const PORTALS = {
  mos: {
    name: 'mos.ru',
    service: new Mos()
  },
  vedomosti: {
    name: 'vedomosti.ru',
    service: new Vedomosti()
  }
} as const satisfies Record<string, Portal>;

export const PORTALS_KEYS = <PortalKeys[]>Object.keys(PORTALS);
export const PORTALS_LIST = PORTALS_KEYS.map((key) => {
  return { id: key, name: PORTALS[key].name };
});