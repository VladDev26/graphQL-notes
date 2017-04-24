
const prevState = {
	hello2: 'aaa',
	hello: true,
	mockedData: '...'
};

export default function(state = prevState, {type, payload}) {
	switch (type) {
		case 'HANDLE_CLICK':
			return {...state, mockedData: payload};

		default:
			return state;
	}
}