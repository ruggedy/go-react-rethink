const INITIAL_STATE = {
	dummy: 0
}

const dummyReducer = (state=INITIAL_STATE, action={ type: ''}) =>{
	
	switch(action.type) {
		default:
			return state
	}
}

export default dummyReducer