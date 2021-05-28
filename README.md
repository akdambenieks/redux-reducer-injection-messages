# Redux Reducer Injection Example

This example shows how you can share your redux store across your remote mfe's and inject dynamically a reducer.

- host is the host application that creates the store and adds `injectReducer` to the `store` object.
- mfe1 & mfe2 are the applications that inject in own reducer to the store that was passed by the props by `host`

# Running Demo

1. `yarn install && yarn start` for each of host, mfe1 and mfe2
2. `yarn serve` for each of host, mfe1 and mfe2
3. Browse to localhost:3001

You should see a `Welcome to Host App` and links for navigating to the two MFE's
