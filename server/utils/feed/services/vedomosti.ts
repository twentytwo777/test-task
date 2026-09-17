import { BaseService } from '~~/server/utils/feed/services/base';

export class Vedomosti extends BaseService {
  constructor() {
    super('https://www.vedomosti.ru/rss/articles.xml');
  };
};