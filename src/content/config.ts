import { defineCollection, reference, z } from 'astro:content';

const linksSchema = z.object({
    twitter: z.string().optional(),
    instagram: z.string().optional(),
    facebook: z.string().optional(),
    websites: z.array(z.string()).optional(),
    linkedin: z.string().optional(),
    github: z.string().optional(),
    company: z.string().optional(),
});

const speakersCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        name: z.string(),
        tagline: z.string(),
        community: z.string().optional(),
        location: z.string(),
        topics: z.array(z.string()),
        image: z.string(),
        links: linksSchema,
        sessions: z.array(reference('sessions')).optional(),
    }),
});

//Sponsors & Partners
const externalsCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        name: z.string(),
        type: z.enum(['sponsor_main', 'sponsor_platinum', 'sponsor_gold', 'sponsor_silver', 'partner',]),
        url: z.string(),
        image: z.string(),
    }),
});

const sessionsCollections = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        dateStart: z.date(),
        dateEnd: z.date(),
        location: z.string(),
        level: z.string(),
        tags: z.array(z.string()),
        speaker: reference('speakers'),
    })
});


const staffCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        name: z.string(),
        tagline: z.string(),
        role: z.enum(['organizer', 'collaborator']),
        image: z.string(),
        links: linksSchema
    }),
});


// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    'sessions': sessionsCollections,
    'speakers': speakersCollection,
    'externals': externalsCollection,
    'staff': staffCollection,
};

