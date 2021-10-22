import {createSlice, configureStore} from '@reduxjs/toolkit';


const initialInfo = {isCardVisible: false, isCardVisible2: false}
 const apislice= createSlice({
    name: 'api',
    initialState: initialInfo,
    reducers: {
        toggle(state) {
            state.isCardVisible = !state.isCardVisible;   
        },

        toggle2(state) {
            state.isCardVisible2 = !state.isCardVisible2;
        }
    }
});

const store = configureStore({
    reducer: { ui : apislice.reducer }
});

export  default store;
export const apiAction = apislice.actions;