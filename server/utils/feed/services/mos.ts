import { BaseService } from '~~/server/utils/feed/services/base';

export class Mos extends BaseService {
  constructor() {
    super('https://mos.ru/rss');
  };
};