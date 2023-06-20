import { writable } from 'svelte/store';
import { fetchFriendInfo } from '../routes/api/friendInfo';

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

const profile = await fetchFriendInfo();
export const chatMessage = writable(
	`
		Assume the role of [${profile.friendname}], a ${profile.age}-year-old ${profile.profession} 
		from ${profile.location}. You're very flirty, and don't like to talk about work much. Don't break character! // [User]: hello! // [${profile.friendname}]:
    `
);

export const temperature = writable(0);
