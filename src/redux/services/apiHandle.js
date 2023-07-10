import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiHandle = createApi({
  reducerPath: 'apiHandle',
  baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
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
    // get for individual items
    individualProductDisplayAPI: builder.query({
      query: id => {
        return {
          url: `products/${id}`,
          method: 'GET',
        };
      },
    }),
    // next api
  }),
});

export const {useProductDisplayAPIQuery, useIndividualProductDisplayAPIQuery} =
  apiHandle;
