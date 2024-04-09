

const initialState = {
    shopList: [],
    count: ''
}

const shopReducer = (state = initialState, action) => {
    switch(action.type) {

        case 'SHOP/ADD':
            return {
                ...state,
                shopList: [...state.shopList, action.payload]
            }

        case "SHOP/COUNT":
            return {
                ...state,
                count: state.count + 1
            }

        default:
            return state;
    }
}

export default shopReducer;