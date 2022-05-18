import { writable } from 'svelte/store';

export const user = writable({ name: '', age: 20 });
