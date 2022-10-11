# Payload CMS & Astro Template

This is a template for [Payload CMS](https://payloadcms.com) and [Astro](https://astro.build)
It is a simple blog template with a few pages and a blog post collection.
It is fully typed with TypeScript.

## Getting Started

1. Clone this repository
2. Run `npm install`
3. set `MONGODB_URI` in `backend/.env` with a MongoDB connection string (run locally or use a service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
4. Run `cd backend && npm run dev` to start the development server for payload
5. In another terminal run `cd frontend && npm run dev` to start the development server for astro

## Modify the Template

After changing any of the payload config in `backend/src/payload.config.ts` you will need to regenerate the types for the frontend. To do this, run `npm run generate:types` in the `backend` directory. Then add fetch functions with the new types to `frontend/src/api.ts`

## Deploying

To deploy this template, there are a couple of options.

### Deploying separately

The frontend and backend can be deployed separately. The frontend can be deployed to any static hosting service like [Netlify](https://www.netlify.com) or [Vercel](https://vercel.com) or [CloudflarePage](https://pages.cloudflare.com/). The backend can be deployed to any Node.js hosting service like [Heroku](https://www.heroku.com) or [Vercel](https://vercel.com).

### Deploying together

The frontend and backend can be deployed together. Astro can be run as a [node service](https://docs.astro.build/en/guides/integrations-guide/node/) with SSR enabled and can be called from the backend in the `backend/src/server.ts` file.

## Documentation

- [Payload CMS](https://payloadcms.com/docs/)
- [Astro](https://docs.astro.build/en/getting-started/)
