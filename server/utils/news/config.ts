import type { BaseService } from '~~/server/utils/news/services/base';

type Portal = {
    name: string;
    service: BaseService;
};

export const PORTALS: Record<string, Portal> = {
    mos: {
        name: 'mos.ru',
        service: new mos.Service()
    }
};

export const PORTALS_LIST = Object.entries(PORTALS).map(([key, o]) => {
    return { id: key, name: o.name };
});

export const LIMIT = 4;