const JokesApi = async () => {

	const URL = 'https://official-joke-api.appspot.com/random_joke';
	const options = {    
		method: 'GET',
		headers: { 'Content-Type': 'application/json'},
		//mode: 'cors'
	};	
		
	
			const response = await fetch(URL, options );
			if(response.status === 200){
				const data = await response.json();
				const resp = { 
					jokes:data,
					status: response.status
					}
				return resp
			} else {
				return response.status
			}
		
	}

module.exports = JokesApi

