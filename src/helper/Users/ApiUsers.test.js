const UserApi = require('./ApiUsers')

const mockResponse = {
		id:1234,
		user:"test@rbeaujon.com",
		name:"Ricardo Beaujon",
		level: 5,
		status: 1,
		header: { status: 200}

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

describe('User Testing', () => {

	test('Should return a response with status 200', async () => {
		const mockResponse = await UserApi();
		expect(mockResponse.data.header.status).toEqual(200)
	} )
	test('Should be called with the correct URL', async () => {
		const fetchMock = jest.spyOn(global, 'fetch')
		await UserApi();
		expect(fetchMock).toHaveBeenCalledWith(
			"http://api.rbeaujon.com/users/", {"body": undefined, "headers": {"Content-Type": "application/json"}, "method": "POST"}
		  )
	})
	test('Should have an ID = 1234', async () => {
		const json =await UserApi();
		expect(json.data.id).toEqual(1234)
	})
	test('Should have 6 properties my Jokes response', async () => {
		const json =await UserApi();
		const result = Object.keys(json.data).length
		expect(result).toEqual(6)
	})
	test('Should have the properties id, user, name, level, status and header', async () => {
		const json =await UserApi();
		const result = Object.keys(json.data)
		expect(result).toEqual(["id", "user", "name", "level", "status", "header"])
	})
})
