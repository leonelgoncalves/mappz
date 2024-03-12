This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

As always, install deps `pnpm i` or `npm i`

Then just run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

I used `pnpm` but you can use `npm` if you want.

To run the tests just run `pnpm run tests`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Libraries

I used PrimeReact and Primeflex for the UI components. Apollo client for the GraphQL queries and mutations. And Tanstack/react-query for the REST API queries (a bit more about it on notes).

## Things to approve...

There's a LOT I would improve with more time (and also more knowledge :D ) I'll try to make a "small" list.

### 1. Full test coverage
I wrote unit tests for the "main" part of the application and some small components. However I didn't test the map
related components because I think it would require a lot of mocking to test the logic I implemented and not the
map itself.

### 2. Graphql related
Going to be honest here since is one of my best and worst qualities. Is the first time I worked on a Graphql project from
scratch and some decisions I took I'm not 100% sure of them. So, given more time I would like to do more research about
it.

Note. Forgot to add before I sent the project. I also wasnt able to correctly generate the types from the graphql server. So even when they are being generated they are not being 100% correctly used...

### 3. REST api
I know it was said to use Graphql. But I don't know if it was thought that way or not, the country api didn't provide
coordinates for the countries and the map api didn't provide the "selected country" (or I didn't invest enough time
searching for it). So to make it more interactive I did 2 things
* Add an object with the center coordinates of each country (couldn't find an API for that) to zoom the map to the country
* Add an API to get a country based on a set of coordinates
  I didn't do a ton of research (because time) but it would be nice to move it to a Graphql api

### 4. Styles
Last but not least the design... the style is not the best... Is usable but I don't particularly like it... but sadly it
requires quite some time to have it.

### 5. Deploy the app
I was going to deploy the project with the Vercel server. But (i know excuses... but I swear is true) apart from the time,
the fact that I was skiing and arrived in the morning and I had some important meetings I didn't have the time for it...

## Conclusion
I think that pretty much sums everything up. I hope is more or less what you were expecting and I hope to hear from you
soon.

And please contact me regarding the outcome (good or bad) with some feedback... I love feedback and I would be more than
happy to know everything I can improve