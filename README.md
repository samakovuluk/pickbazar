# Pickbazar Documentation

# Introduction

Fastest E-commerce template built with React, NextJS, TypeScript, GraphQL, Type-GraphQL & Styled-Components. Its very easy to use, we used graphql and type-graphql, you can build your schema very easily. GraphQL playground makes it’s own documentation, your frontend team will love using it.

# Tech We Have Used

We have used monorepo folder structure with Yarn Workspace. In our template we have three different part Admin Dashboard, Shop and API. Tech specification for specific part is given below

## Admin Dashboard

- CRA
- Apollo
- BaseUI
- Typescript
- React Hook Form

## Shop

- NextJs
- Apollo
- Typescript
- Styled Components
- Stripe Integration
- Formik

## API

- Type GraphQL
- Type ORM

# Getting Started & Installation

For getting started with the template you have to follow the below procedure. First navigate to the `pickbazar` directory. Then run below command for getting started with specific part.

```
// on pickbazar directory
yarn
```

<br><br><br>

## Admin

For starting the admin dashboard part with corresponding api data run below commands.

```
// for dev mode run below command
yarn dev:admin

// for production mode run below command
yarn build:admin
```

## Shop

Configure Stripe api key in the `/packages/shop/next.config.js`. In the `env` section set `STRIPE_PUBLIC_KEY` to your `stripe` public key.

For starting the shop part with corresponding api run below commands.

```
// for dev mode run below command
yarn dev:shop

// for production mode run below command
yarn build:shop
```

### If you want to test your production build admin or shop in local environment then run the below commands.

## Admin

```
// build admin for production
yarn build:admin

// run shop api which in needed for local testing
yarn dev:api-admin

// start admin in production
yarn serve:admin
```

<br><br><br><br><br><br><br>

## Shop

```
// build shop for production
yarn build:shop

// run shop api which in needed for local testing
yarn dev:api-shop

// start shop in production
yarn serve:shop
```

# Folder Structure & Customization

`/packages/admin` : In this portion all the admin dashboard related coding and functions.

`/packages/shop` : All the shop related coding and functions.

`/packages/api` : API related code code for both admin and shop section.

admin related api codes are in `admin` folder

shop related codes are in `shop` folder

# Configuration & Deployment

## now.sh

If you want to host the template in now.sh then follow the below command

### API

- Navigate to `packages/api`
- Now run below command

```
now
```

<br><br><br><br>

### Admin

- After deploying the api you will get the api endpoint url. Put that url in the `packages/admin/.env`
- also need to put it within now.json .

```
    REACT_APP_API_URL={put_your_api_url_here}/admin/graphql;
```

- Navigate to `packages/admin`
- Now run below command

```
now
```

### Shop

- After deploying the api you will get the api endpoint url. Put that url in the `packages/shop/next.config.js`

```
env: {
    STRIPE_PUBLIC_KEY: 'put_your_stripe_public_key',
    API_URL: '{put_your_api_url_here.}/shop/graphql',
  },
```

- Navigate to `packages/shop`
- Now run below command

```
now
```
