# Subspace

Note: **App is not in a working state.** This repo is an exploration of how a multiplayer game might be built for browsers using the below technologies.

## Overview

The game uses:

1. A non-blocking client<>server protocol via the [`web-udp`](https://github.com/osofour/web-udp) library (WebRTC).
2. Redux and `redux-observable` for state management. The game core is broken up into modules that are installed to both the client/server stores using the [`redux-module` package](packages/redux-module).
3. Redis as a spatial index to store and query user locations for state updates using the [`redimension`](packages/redimension) package.
4. [CockroachDB](docker-compose.yml#L3) and [Sequelize](packages/server/src/data/index.js) for persistence.

## Setup

Install Docker and Docker Compose, then run the following command to start a containerized app with all the required services for development (Redis, CockroachDb, etc.):

```sh
npm run dev
```

Ports exposed to the host machine for each service are listed below:

| Port | Service                |
|------|------------------------|
| 3000 | Redux remote dev tools |
| 3001 | CockroachDB dashboard  |
| 3002 | Portainer              |
| 8080 | Game client            |

If you want to develop locally, install and start CockroachDB and Redis, then run the following command:

```sh
npm run dev:local
```

