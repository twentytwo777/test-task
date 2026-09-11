import { z } from 'zod';
import { mos } from '~~/server/utils/news';

const querySchema = z.object({
    page: z.optional(
        z.coerce.number().positive().default(1)
    )
});

export default defineEventHandler(async (event) => {
    const query = await getValidatedQuery(event, (q) => querySchema.safeParse(q));
    if (!query.success) {
        throw createError({ status: 400, message: 'Bad query params' });
    };

    const promises = await Promise.all([ mos.fetchFeed() ]);
    const news: Record<string, any[]> = {};
    let total = 0;
    for (let i = 0; i < promises.length; i++) {
        const item = promises[i];
        total += item.items.length;
        news[item.origin] = item.items;
    };

    return { news, total };
});