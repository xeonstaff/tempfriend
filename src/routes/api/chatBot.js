import 'isomorphic-fetch';
import process from "process";
import { chatMessage, temperature } from '../stores.js';

const url = 'https://api.openai.com/v1/chat/completions';

//process.env for Vercel deployment; import.meta for Vite development
const API_KEY = process.env ? process.env.VITE_OPENAI_API_KEY : import.meta.env.VITE_OPENAI_API_KEY

let temp = 0;
temperature.subscribe((x) => {
	temp = x / 5;
});

let chatmessage = '';
chatMessage.subscribe((storedhistory) => (chatmessage = storedhistory));

export async function chatBot() {
	const data = {
		model: 'gpt-3.5-turbo',
		temperature: temp,
		messages: [{ role: 'user', content: chatmessage }]
	};

	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${API_KEY}`
		},
		body: JSON.stringify(data)
	})
		.then((response) => response.json())
		.then((data) => {
			chatMessage.update((history) => history + '//' + data.choices[0].message.content);
		})
		.catch((error) => {
			// Handle any errors
			console.error('Error:', error);
		});
}
