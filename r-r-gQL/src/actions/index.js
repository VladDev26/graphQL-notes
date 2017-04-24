
export function asyncMockData(){
	return dispatch => {
		setTimeout(() => {
			dispatch({type: 'HANDLE_CLICK', payload: 'mockedData'});
		}, 1000);
	}
}