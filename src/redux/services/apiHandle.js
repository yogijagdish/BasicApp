import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiHandle = createApi({
  reducerPath: 'apiHandle',
  baseQuery: fetchBaseQuery({baseUrl: 'https://fakestoreapi.com'}),
  endpoints: builder => ({
    // get api
    productDisplayAPI: builder.query({
      query: () => {
        return {
          url: 'products/',
          method: 'GET',
        };
      },
    }),
    // next api
  }),
});

export const {useProductDisplayAPIQuery} = apiHandle;
