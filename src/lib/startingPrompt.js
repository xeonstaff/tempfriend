import { fetchFriendInfo } from '../routes/api/friendInfo.js';

export async function startingPrompt() {
	const profile = await fetchFriendInfo();

	const startingPrompt = `
    Assume the role of ${profile.friendname}, a ${profile.age}-year-old ${profile.profession} from ${profile.location}. Don't break character! Remember: just speak like you're ${profile.friendname}, not an AI chatbot.`;

	return startingPrompt;
}

startingPrompt();
