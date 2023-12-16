# Redux
`Redux` is a pattern and library for managing and updating `application state` using events called "`actions`" . 
It serves as a centralized store for state that need to be used across your entire application, with rules ensuring that the state can only be updated in a `preddictable` fashion.

# Action - what to do (pure object)
  Action are plain javascript `objects` that have a type field.
  Actions only tell `what to do` , but they don't tell how to do.
  ex - 
     return{
        type:"INCREMENT,
        payload:num
      }

# Reducer - How to do
  Reducer are functions that take the `current state` and an `action` as arguments, and return a `new state` result.


# store - Object which holds the state of application
  The Redux store brings together the `state, actions, and reducers`that make up your app.

  It's important to note that you'll only have a `single store ` in Redux application

  Every Redux store has a `single root` reducer function

# Function associated with store - 
   createStore()
   dispatch(action)
   getState()



### FACTS (REDUX Principles)
# Single course of Truth
 - The global state of your application is stored as an object inside a `single store`.

# State is Read-Only
  The only way to change the state is to dispatch an action

# Immutability, One-way data flow, Predictability of outcome

# Changes are Made with Pure Reducer Functions [https://www.youtube.com/watch?v=VdXGIEYZuCw&pp=ygUWcmVkdWNlciBmdW5jdGlvbiB0aGFwYQ%3D%3D]
