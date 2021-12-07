import { writable } from "svelte/store";

let connections_store = writable([]);

export { connections_store };

// user_store.subscribe((value) => localStorage.setItem(user, value));