# Bits of Good Backend Final Project

We are going on a trip to the greatest city in the world, New York City!! Being a major metropolitan area, NYC has a lot of restaurants, and we have a handy dandy database of all the restaurants in the NYC area.

Unfortunately for us, I am a sad frontend developer, and while the frontend is completely operational, I have no idea how to query for the data I want! Help me write a comprehensive and complete API to help finish the application.

## Part 0: Setup

In this repository, a `server` directory is already present, and the file mongo.js contains the connection script for MongoDB, with a commented block for the mongoose equivalent. MongoDB has been installed in this repository, but if you decide to use Mongoose instead, feel free to `yarn add mongoose` as well.

There exists a `.env.example` file in this repository. Please duplicate this file, rename it to `.env`, and copy paste the connection string you get from your instructor into the DB_CONN variable. Use this string in MongoDB Compass as well to view the database.

## Part 1: Basic API

We only need to handle GET requests in this application. For now, limit all your requests to 10 entries. Pagination is an extension, specified at the end.

Here are the basic API endpoints that are required to get the app working:

1. `GET` `/api/restaurants` : Get a list of all restaurants (Works if restaurants are displayed)
2. `GET` `/api/categories/boroughs` : Get a list of all distinct boroughs (Works if the toggle displays all boroughs)
3. `GET` `/api/categories/cuisines`: Get a list of all distinct cuisines (Same as above, for cuisines)
4. `GET` `/api/categories/neighborhoods` : Get a list of all the names of the neighborhoods. Don't limit this query.

Here are additional requirements that you should implement after getting the above basic implementation working.

## Part 2: Extended API

1. Add filtering to `/api/restaurants?cuisine={}&borough={}`, where cuisine refers to the cuisine to filter by and borough refers to the borough to filter by.
2. Add sorting to `/api/restaurants?sort_by={grades.asc OR grades.desc}`. This is a special case, as grades is an array. Filter only by the first element in the array (the latest grade). Consider extending sorting to all other non-nested properties as well, which would just end up making things alphabetical (this won't be reflected on the frontend).
3. Add pagination to `/api/restaurants?page={}&page-size={}`. Basic `skip()` `limit()` pagination is sufficient, even if it is not performant. If we went with a more complicated implementation, this contract would be really hard to understand and would need to be defined alongside a frontend developer, who makes sure the API is called correctly.

## Super Extensions:

1. When a user selects a neighborhood, the call to get all requests will change to `/api/restaurants/neighborhood={neighborhood name}`. In your query, get the bounding geometry for that particular neighborhood, then filter the restaurants by only those who lie within that geometry.
2. Create a server-side caching system. [StackOverflow](https://stackoverflow.com/questions/62005208/api-caching-for-next-js) [NextJS Middleware](https://nextjs.org/docs/api-routes/api-middlewares). My proposed solution is to just create a middleware file somewhere that uses the cache, then route all get requests through that middleware.
3. Create a performant pagination API. If you give me your API contract and your codebase, I'll change the frontend to work with this API.

# Create Next App Documentation

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
