import { z } from 'zod';

const portalSchema = z.string()
  .transform((arg) => arg.split(','))
  .pipe(z.array(z.enum(PORTALS_KEYS)))
  .refine((array) => new Set(array).size === array.length, {
    error: 'Portals must be unique'
  });

const querySchema = z.object({
  page: z.coerce.number().positive().optional().default(1),
  query: z.coerce.string().min(3).optional(),
  portals: portalSchema.optional()
}).strict();

export default defineEventHandler(async (event) => {
  const result = await getValidatedQuery(event, (q) => querySchema.safeParse(q));
  if (!result.success) {
    throw createError({ status: 400, message: result.error.issues[0].message });
  };

  const { page, query, portals } = result.data;
  const config = useRuntimeConfig(event);
  return getFeedPage(
    page, query, config.feed.limit,
    ...portals !== undefined ? portals : []
  );
});