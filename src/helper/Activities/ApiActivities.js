const ApiActivities = async () => {

	const URL = 'https://www.boredapi.com/api/activity';
	const options = {    
		method: 'GET',
		headers: { 'Content-Type': 'application/json'},
		//mode: 'cors'
	};	
		
			const response = await fetch(URL, options );
			if(response.status === 200){
				const data = await response.json();
				const resp = { 
					activities:data,
					status: response.status
					}
				return resp
			} else {
				return response.status
			}
		
	}

module.exports = ApiActivities
