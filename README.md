# ParcelExercise
Service for parcel management

## Prerequisites

Built and tested using NodeJS 0.16.4

## Setup

1. Clone the repository
2. Move `.suggested.env` in root directory to `.env` -- or create your own `.env` file -- you only need to set the port

## Run

Execute `npm run start` from the root directory of the project.

Expected output looks like this:
```bash
> parcelexercise@1.0.0 start
> nodemon

[nodemon] 2.0.8
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): src\**\* .env
[nodemon] watching extensions: js,ts,json
[nodemon] starting `npx ts-node  --transpile-only ./src/app.ts`
```

## Use

Load the collection into Postman. The collection can be found in the `test` directory from the root directory of the project.
The collection automagically sets collection variables based on response from last request executed.

Your best bet is to start by executing the requests sequentially, or via Postman runner.
This should suffice to simulate a very rudimentary Happy-Path E2E to demo business-level objectives.

## Commentary

I decided to embrace this challenge by diving into Typescript, I've never used it before, but I've heard people say positive things about it.
There were definitely plenty of surprises, but this solution seems to work.

There are things I would do differently for a rewrite/refactor:

1. Definitely needs a rework of the DAO and DTO layer.
2. The DTOs could be refined further to accomodate granularity of CRUD requests, rather than being modelled by service-layer.
3. The DAO is doing way too much right now, and plenty of that logic could easily and should be moved to the service-layer.
4. Using the Singleton pattern for service-layer makes it very difficult/unfeasible to unit-test properly. Proper use of dependency-injection could make this possible.
5. Next time, should properly define a spec, probably swagger, to properly design the domain before implementing. Would have helped avoid the above issues.

