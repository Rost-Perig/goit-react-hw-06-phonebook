/*
*ВАРИАНТ с Redux Toolkit
*/

import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {addition, deletion, search} from './contacts-actions';

// const initialState = (window.localStorage.getItem('contacts')) && JSON.parse(window.localStorage.getItem('contacts')); 

// const items = createReducer(initialState, {   //первоначальная инициализация хранилища из window.localStorage по "рабоче-крестьянски", без заморочек

const items = createReducer([], {
    [addition]: (state, { payload }) => {
        if (state.findIndex(item => item.subscriber === payload.subscriber) !== -1) {
            alert(`Абонент с именем ${payload.subscriber} уже существует!`);
            return state;
        };
        if (state.findIndex(item => item.number === payload.number) !== -1) {
            alert(`Такой номер ${payload.number} уже присвоен другому абоненту!`);
            return state;
        };
        return [...state, payload];
    },
    [deletion]: (state, { payload }) => {
        let tempArr = [...state];
        tempArr.splice(tempArr.findIndex(item => item.id === payload), 1);
        return [...tempArr];
    }
});

const filter = createReducer('', {
    [search]: (_, { payload }) => payload
});

export default combineReducers({
    items,
    filter,
});



/*
*ВАРИАНТ без Redux Toolkit
*/

// import { combineReducers } from 'redux';
// import actionsTypes from './contacts-types';

// const contactsItemsReducer = (state = initialState, { type, payload }) => {
//     switch (type) {

//         case actionsTypes.ADD:
//             if (state.findIndex(item => item.subscriber === payload.subscriber) !== -1) {
//                 alert(`Абонент с именем ${payload.subscriber} уже существует!`);
//                 return state;
//             };
//             if (state.findIndex(item => item.number === payload.number) !== -1) {
//                 alert(`Такой номер ${payload.number} уже присвоен другому абоненту!`);
//                 return state;
//             };
//             return [...state, payload];
        
//         case actionsTypes.DEL:
//             let tempArr = [...state]
//             tempArr.splice(tempArr.findIndex(item => item.id === payload), 1)
//             return [...tempArr];
        
//         default:
//             return state;
//     };
// };

// const contactsFilterReducer = (state = '', { type, payload }) => {
//     switch (type) {
        
//         case actionsTypes.SEARCH:
//             return payload;
        
//         default:
//             return state;
//     }
// };

// export default combineReducers({
//     items: contactsItemsReducer,
//     filter: contactsFilterReducer
// });



/*изначально store*/

// const contactsInitialState = {
//     contacts: {
//         items: (window.localStorage.getItem('contacts')) && JSON.parse(window.localStorage.getItem('contacts')),
//         filter: ''
//     }
// }

/*изначально без combineReducers*/

// const contactsReducer = (state = contactsInitialState, { type, payload }) => {
//      switch (type) {
//         case 'inputsForm/add':
//             if (state.items.findIndex(item => item.subscriber === payload.subscriber) !== -1) {
//                 alert(`Абонент с именем ${payload.subscriber} уже существует!`);
//                 return { ...state }
//             };
//             if (state.items.findIndex(item => item.number === payload.number) !== -1) {
//                 alert(`Такой номер ${payload.number} уже присвоен другому абоненту!`);
//                 return { ...state }
//             };
//             return {
//                 ...state,
//                 items: [...state.items, payload]
//             };
        
//         case 'contactData/del':
//             state.items.splice(state.items.findIndex(item => item.id === payload), 1)
//             return {
//                 ...state,
//             }
        
//         case 'findForm/search':
//             return {
//                 ...state,
//                 filter: payload
//             }
        
//         default:
//             return state;
//     }
// };