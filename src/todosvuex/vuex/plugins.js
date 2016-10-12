import { STORAGE_KEY } from './store'

const localStoreagePlugin = store => {
	// called when the store is initialized
	store.subscribe( (mutation, {todos} ) => {
		// called after every mutation.
    	// The mutation comes in the format of { type, payload }.
		localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
	})
}

export default localStoreagePlugin