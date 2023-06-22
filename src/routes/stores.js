import { writable } from 'svelte/store';

export const dataLoaded = writable(false);

export const friendProfile = writable({
	friendname: '',
	age: '',
	gender: '',
	picture: '',
	location: '',
	profession: '',
	key_skill: ''
});

export const profileLoaded = writable(false);

export const chatMessage = writable('');

export const temperature = writable(0);
