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
    // api for getting categories
    getCategoriesAPI: builder.query({
      query: () => {
        return {
          url: 'products/categories/',
          method: 'GET',
        };
      },
    }),
    // next apicts
    getIndividualCategoriesAPI: builder.query({
      query: category => {
        return {
          url: `products/category/${category}/`,
          method: 'GET',
        };
      },
    }),
  }),
});

export const {
  useProductDisplayAPIQuery,
  useIndividualProductDisplayAPIQuery,
  useGetCategoriesAPIQuery,
  useGetIndividualCategoriesAPIQuery,
} = apiHandle;
