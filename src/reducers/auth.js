export default (state = {}, action) => {
    switch (action.type){
        case 'LOGIN':
            return {
            uid:action.uid
        };

        case 'LOGIN':
            return {};

        default: 
            return state;
    }

};