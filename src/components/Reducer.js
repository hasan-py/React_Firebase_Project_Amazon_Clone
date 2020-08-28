export const getSubtotal = (list)=>{
	let subtotal = 0;
	list.map((item)=> {
		subtotal = Number(item.price)+subtotal;
	})
	return subtotal;
}

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
		case "remove_to_cart":
			let newBusket = [...state.busket]
			const index = state.busket.findIndex((item)=> item.id === action.payload)
			if(index>=0){
				newBusket.splice(index,1)
			}else{
				console.log("can't remove id")
			}
			return {
				...state,
				busket:newBusket
			}
		default:
			return state
	}
}