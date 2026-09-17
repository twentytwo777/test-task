import { BaseService } from '~~/server/utils/news/services/base';

export class Vedomosti extends BaseService {
  constructor() {
    super('https://www.vedomosti.ru/rss/articles.xml');
  };
};