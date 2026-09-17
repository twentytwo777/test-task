import { BaseService } from '~~/server/utils/news/services/base';

export class Mos extends BaseService {
  constructor() {
    super('https://mos.ru/rss');
  };
};