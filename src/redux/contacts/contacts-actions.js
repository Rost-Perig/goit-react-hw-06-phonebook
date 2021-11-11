/*=======================ВАРИАНТ с Redux Toolkit=======================*/

import { createAction } from '@reduxjs/toolkit';

export const addition = createAction('inputsForm/add');
export const deletion = createAction('contactData/del');
export const search = createAction('findForm/search');

// export default { addition, deletion, search };
// const actions = {
//     addition,
//     deletion,
//     search
// };
// export default actions;


/*==================ВАРИАНТ без Redux Toolkit==================*/

// import actionsTypes from './contacts-types';

// export const addition = value => ({
//     type: actionsTypes.ADD,
//     payload: value,
// });

// export const deletion = value => ({
//     type: actionsTypes.DEL,
//     payload: value,
// });

// export const search = value => ({
//     type: actionsTypes.SEARCH,
//     payload: value,
// });


