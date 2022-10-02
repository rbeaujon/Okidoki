const JokesApi = require('./JokesApi')

const mockResponse = {
		id:1234,
		type:"testing",
		setup:"testing",
		punchline:"testing"
}

beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockResponse),
		status: 200
    })
});
afterEach(() => {
    jest.resetAllMocks(); 
});

describe('Joke Testing', () => {

	test('Should return a response with status 200', async () => {
		const resp = await JokesApi();
		expect(resp.status).toEqual(200)
	} )
	test('Should be called with the correct URL', async () => {
		const fetchMock = jest.spyOn(global, 'fetch')
		await JokesApi();
		expect(fetchMock).toHaveBeenCalledWith(
			"https://official-joke-api.appspot.com/random_joke", {"headers": {"Content-Type": "application/json"}, "method": "GET"}
		  )
	})
	test('Should have an ID = 1234', async () => {
		const json =await JokesApi();
		expect(json.jokes.id).toEqual(1234)
	})
	test('Should have 4 properties my Jokes response', async () => {
		const json =await JokesApi();
		const result = Object.keys(json.jokes).length
		expect(result).toEqual(4)
	})
	test('Should have the properties id, type, setup, punchline', async () => {
		const json =await JokesApi();
		const result = Object.keys(json.jokes)
		expect(result).toEqual(["id", "type", "setup", "punchline"])
	})
	test('Should return 2 properties JokesApi', async () => {
		const json =await JokesApi();
		const result = Object.keys(json).length
		expect(result).toEqual(2)
	})
	test('Should be called properties as Jokes and Status', async () => {
		const json =await JokesApi();
		const result = Object.keys(json)
		expect(result).toEqual(["jokes", "status"])
	})
})
