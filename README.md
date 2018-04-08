## Subspace

The game uses:

1. Redux for state management. The game core is broken up into modules that are installed to both the client/server stores.
2. Redis as a 2D spatial index to store and query player locations for state updates.
3. Postgres for persistence, which is updated at regular intervals from the master game server.
