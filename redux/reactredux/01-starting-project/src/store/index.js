import { createStore } from "redux"

const initialState = { counter: 0, showCounter: true }

const reducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'increase') {
        return {
          counter: state.counter + action.value,
          showCounter: state.showCounter,
        };
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'toggleCounter') {
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        }
    }

    return state
}

const store = createStore(reducer)

export default store