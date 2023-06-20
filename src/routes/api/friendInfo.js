import 'isomorphic-fetch';
import { friendProfile, dataLoaded } from '../stores';

export async function fetchFriendInfo() {
	let info = {
		friendname: '',
		age: '',
		gender: '',
		picture: '',
		location: '',
		profession: '',
		key_skill: ''
	};

	//request & set friend's picture, name and age
	let infoUrl1 = 'https://randomuser.me/api/';

	async function fetchInfo1() {
		return fetch(infoUrl1, {
			method: 'GET'
		})
			.then((response) => response.json())
			.then((data) => {
				info['friendname'] = `${data.results[0].name.first} ${data.results[0].name.last}`;
				let age = data.results[0].dob.age;
				info['age'] = age > 60 ? age - 40 : age;
				info['gender'] = data.results[0].gender;
				info['picture'] = data.results[0].picture.large;
			})
			.catch((error) => {
				console.error('fetchInfo1() failed: ', error);
			});
	}

	//request & set friend's profession, location & key skill
	let infoUrl2 = 'https://random-data-api.com/api/v2/users?size=1&is_json=true';

	async function fetchInfo2() {
		return fetch(infoUrl2, {
			method: 'GET'
		})
			.then((response) => response.json())
			.then((data) => {
				info['location'] = data.address.city;
				info['profession'] = data.employment.title;
				info['key_skill'] = data.employment.key_skill;
			})
			.catch((error) => {
				console.error('fetchInfo2() failed: ', error);
			});
	}

	await fetchInfo1();
	await fetchInfo2();
	friendProfile.update((x) => (x = info));
	dataLoaded.update((x) => (x = true));
	return info;
}
