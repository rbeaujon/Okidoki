const ApiDogs = require('./ApiDogs')

const mockResponse = {
		message:"This is a test",
		status:"testing",
		header: { status: 200 }
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

describe('Dogs Testing', () => {

	test('Should return a response with status 200', async () => {
		const resp = await ApiDogs();
		expect(resp.status).toEqual(200)
	} )
	test('Should be called with the correct URL', async () => {
		const fetchMock = jest.spyOn(global, 'fetch')
		await ApiDogs();
		expect(fetchMock).toHaveBeenCalledWith(
			"https://dog.ceo/api/breeds/image/random", {"headers": {"Content-Type": "application/json"}, "method": "GET"}
		  )
	})
	test('Should have an message = "This is a test"', async () => {
		const json =await ApiDogs();
		expect(json.dogs.message).toEqual("This is a test")
	})
	test('Should have 3 properties my Mock response', async () => {
		const json =await ApiDogs();
		const result = Object.keys(json.dogs).length
		expect(result).toEqual(3)
	})
	test('The mock should have Message, status, header', async () => {
		const json =await ApiDogs();
		const result = Object.keys(json.dogs)
		expect(result).toEqual(["message", "status", "header"])
	})
	test('Should return 2 properties ApiDogs', async () => {
		const json =await ApiDogs();
		const result = Object.keys(json).length
		expect(result).toEqual(2)
	})
	test('Should be called properties as Dogs and Status', async () => {
		const json =await ApiDogs();
		const result = Object.keys(json)
		expect(result).toEqual(["dogs", "status"])
	})
})
