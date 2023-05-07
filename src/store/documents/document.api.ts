import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const documentApi = createApi({
    reducerPath: 'github/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/'
    }),
    endpoints: build => ({
        getDocuments: build.query<any, string>({
            query: (search: string) => ({
                url: 'search/users',
                params: {
                    q: search
                }
            })
        })
    })
})

export const {useGetDocumentsQuery} = documentApi;
