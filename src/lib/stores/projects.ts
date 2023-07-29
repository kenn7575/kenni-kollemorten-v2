import { writable } from 'svelte/store';
import type { IProject } from '$lib/types/interfaces';
export const projectsStore = writable([] as IProject[]);
