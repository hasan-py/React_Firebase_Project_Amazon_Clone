export const initialState = {
	busket:[]
}

export const reducer = (state,action)=>{
	switch(action.type){
		case "add_to_cart":
			return {
				...state,
				busket:[...state.busket,action.payload]
			}
		default:
			return state
	}
}