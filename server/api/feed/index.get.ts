import { z } from 'zod';

const querySchema = z.object({
    q: z.coerce.string().min(1).optional(),
    page: z.coerce.number().positive().optional().default(1),
}).strict();

export default defineEventHandler(async (event) => {
    const result = await getValidatedQuery(event, (q) => querySchema.safeParse(q));
    if (!result.success) {
        throw createError({ status: 400, message: result.error.issues[0].message });
    };
    const { page, q } = result.data;

    let feeds = await fetchFeeds();
    if (q !== undefined) {
        const desired = q.toLowerCase();
        feeds = feeds.filter(({ title, subtitle }) => (
            title.toLowerCase().includes(desired) || subtitle.toLowerCase().includes(desired)
        ));
    };

    const offset = (page - 1) * LIMIT;
    return { items: feeds.slice(offset, offset + LIMIT), total: feeds.length };
});