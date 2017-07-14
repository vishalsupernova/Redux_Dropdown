const initialState = {fetching: false, starships: [], filterShips: [],searchText:'', error: null}

function display(state = initialState, action){
  switch(action.type){
    case 'FETCHING':
      return{...state, fetching: action.payload};
    case 'GET_STARSHIPS_SUCCESS': 
      return{...state, fetching: false, starships: action.payload};
    case 'ERROR':
      return{...state,fetching:false, error: action.payload};
    case 'FILTER_STARSHIPS':
    let filteredShips = state.starships.filter((starship) =>{return starship.name.indexOf(action.payload)!=-1}) //Match Found is 1 true, no match found in -1
      return{...state, searchText: action.payload, filterShips:filteredShips};
    default: 
      return state
  }
}

export default display