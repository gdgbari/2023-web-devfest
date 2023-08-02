import { defineCollection, z } from 'astro:content';

const speakersCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        name: z.string(),
        tagline: z.string(),
        community: z.string().optional(),
        location: z.string(),
        topics: z.array(z.string()),
        image: z.string(),
        twitter: z.string().optional(),
        instagram: z.string().optional(),
        facebook: z.string().optional(),
        websites: z.array(z.string()).optional(),
        linkedin: z.string().optional(),
        github: z.string().optional(),
    }),
});

//Sponsors & Partners
const externalsCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        name: z.string(),
        type: z.enum(['sponsor_main','sponsor_platinum','sponsor_gold','sponsor_silver', 'partner',]),
        url: z.string(),
        image: z.string(),
    }),
});


// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    'speakers': speakersCollection,
    'externals': externalsCollection,
};