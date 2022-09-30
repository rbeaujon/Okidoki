

const UserApi = async (parm) => {

	const URL = 'http://rbeaujon.com/okidoki/server/api/users/';
	const options = {    
		method: 'POST',
		body: JSON.stringify(parm),
		headers: { 'Content-Type': 'application/json'},
		//mode: 'cors'
	};	
		
		try {
			const response = await fetch(URL, options );
			if (!response.ok) {
			  throw new Error('Something went wrong');
			}
			const data = await response.json();
			return data
		} catch (err) {
			console.warn("La respuesta es:  " + err)
		  }
	}

export default UserApi;

