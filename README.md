## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Testing

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Developing

# Changing schema.prisma
If you change something in the `schema.prisma` file, make sure
to run `npx prisma migrate dev`.

# Pulling changes from remote
If you pull changes from remote (e.g. `git pull`), make sure
to run `npx prisma migrate dev` to apply the changes to your
development database.