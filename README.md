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

