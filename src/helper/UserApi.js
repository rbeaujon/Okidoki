

const UserApi = async (parm) => {

	const URL = 'http://api.rbeaujon.com/users/';
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

