import {configureStore} from '@reduxjs/toolkit';

import {documentApi} from './documents/document.api';


export const store = configureStore({
    reducer: {
        [documentApi.reducerPath]: documentApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(documentApi.middleware),
})