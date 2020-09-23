## setup store

1. Create-react-app
2. install deps: redux, react-redux
3. setup store

   - make folder
   - we need at least 1 reducer
   - Root reducer
   - store/index.js (where we configure the store)
   - Provider (we need to wrap it)

   - folders for different "slices"

4. Root reducer:
   - make rootReducer.js
   - Use combineReducer imported from redux
   - import all the slices of reducers and put inside of combineReducer function
   -
5. Fetch a list of blogposts
   - Create component (& route)
   - Fetch the data; useEffect() & install axios
   - Create action
   - Dispatch the action
   - (create reducer if it does not exist)
   - handle th action in the reducer (add a 'case' in reducer)
   - create a selector
   - use the selector
   - display the data

## Approach 1:

- Component does the fetching

## Approach 2:

## Redux separating of concerns

-component:

- displaying info, interacting with user, state that is used no where else
- action:
- (synchronous) sending information about what happened
- (asynchronous) handling interactions with your server
- reducer
- updating the state of the store using the current state and the action
- selectors:
- Taking data from the store and providing it the component
- computing / deriving data based on the data in the store
