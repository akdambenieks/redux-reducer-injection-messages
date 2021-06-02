# Redux Reducer Injection Example

This example shows how you can inject exposed reducers into a global store.

- host is the host application that creates the store and adds `injectReducer` to the `store` object.
- mfe1 & mfe2 are the applications that inject in own reducer to the store that was passed by the props by `host`

# Running Demo

1. `yarn install && yarn start` for each of host, mfe1 and mfe2
2. `yarn serve` for each of host, mfe1 and mfe2
3. Browse to localhost:3001

You should see a `Welcome to Host App` and links for navigating to the two MFE's

# How Is This Implemented

The main features of this architecture are centered aroung Webpack 5's Module Federation feature.  The MFE's expose both their React functional components as well as their own reducers which are consumed by the host application.  The reducers for the MFEs to which the host is subscribed are injected into the host store; as a result, all MFEs are effectively subscribed to the same store via the host and as such will listen to all actions dispatched from the host app or any other MFEs.  Note that React.lazy loading is no longer an option as the reducers for each MFE *MUST* be subscribed to the store or updates to the Redux store prior to loading will not be propogated to the MFE.  As a convention that should be strictly adhered to, any actions dispatched from a particular MFE that could result in state updates that should be reflected in other MFEs are namespaced with `GLOBAL/` at the start of the action type (e.g. `GLOBAL/UPDATE_COUNT`) this way other MFEs that require this information can subscribe to these actions in their own reducers, regardless of whether actions that update that particular redux state are dispatched from that MFE or not.

# Naming Conventions for Redux Actions
All redux actions dispatched from the reducer of a particular MFE should have their action types namespaced for that MFE (e.g. `MFE2/UPDATE_COUNT`) *IF* these actions are not intended to be propogated to other MFEs.  If, however, an action dispatched from one MFE should be propogated to other MFEs in the application then the action type should be namespaced with `GLOBAL/` (e.g. `GLOBAL/UPDATE_COUNT`).
