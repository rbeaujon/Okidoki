const UserApi = async (parm) => {

	const URL = 'http://api.rbeaujon.com/users/';
	const options = {    
		method: 'POST',
		body: JSON.stringify(parm),
		headers: { 'Content-Type': 'application/json'},
		//mode: 'cors'
	};	
		
		const response = await fetch(URL, options );
		let isLogged = false
		if(response.status === 200){
			const data = await response.json();
			return {
				data,
				isLogged: true
			}
		} else {
			return {
				response: response.status,
				isLogged
			}
		}
	}

//export default UserApi;
module.exports = UserApi;
