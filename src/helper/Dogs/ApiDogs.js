const ApiDogs = async () => {

	const URL = 'https://dog.ceo/api/breeds/image/random';
	const options = {    
		method: 'GET',
		headers: { 'Content-Type': 'application/json'},
		//mode: 'cors'
	};	
		
			const response = await fetch(URL, options );
			if(response.status === 200){
				const data = await response.json();
				const resp = { 
					dogs:data,
					status: response.status
					}
				return resp
			} else {
				return response.status
			}
		
	}

module.exports = ApiDogs
