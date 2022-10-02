const ApiActivities = require('./ApiActivities')

const mockResponse = {
	activity:"Testing",
	type:"Testing Type One",
	participants:"participants",
	price:457,
	link:"http://link.com",
	key:245,
	accessibility:2
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

describe('Activities Testing', () => {

	test('Should return a response with status 200', async () => {
		const resp = await ApiActivities();
		expect(resp.status).toEqual(200)
	} )
	test('Should be called with the correct URL', async () => {
		const fetchMock = jest.spyOn(global, 'fetch')
		await ApiActivities();
		expect(fetchMock).toHaveBeenCalledWith(
			"https://www.boredapi.com/api/activity", {"headers": {"Content-Type": "application/json"}, "method": "GET"}
		  )
	})
	test('Should have an Price = 457', async () => {
		const json =await ApiActivities();
		expect(json.activities.price).toEqual(457)
	})
	test('Should have 7 properties my Activities response', async () => {
		const json =await ApiActivities();
		const result = Object.keys(json.activities).length
		expect(result).toEqual(7)
	})
	test('Should have the properties activity, type, participants, price, link, key, accessibility', async () => {
		const json =await ApiActivities();
		const result = Object.keys(json.activities)
		expect(result).toEqual(["activity", "type", "participants", "price", "link", "key", "accessibility"])
	})
	test('Should return 2 properties ApiActivities', async () => {
		const json =await ApiActivities();
		const result = Object.keys(json).length
		expect(result).toEqual(2)
	})
	test('Should be called properties as Activities and Status', async () => {
		const json =await ApiActivities();
		const result = Object.keys(json)
		expect(result).toEqual(["activities", "status"])
	})
})
