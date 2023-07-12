import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiHandle = createApi({
  reducerPath: 'apiHandle',
  baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
  endpoints: builder => ({
    // get api
    productDisplayAPI: builder.query({
      query: num => {
        return {
          url: `products?limit=${num}&skip=3`,
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
    // get items by category
    getIndividualCategoriesAPI: builder.query({
      query: category => {
        return {
          url: `products/category/${category}/`,
          method: 'GET',
        };
      },
    }),
    // searching item
    searchItemAPI: builder.query({
      query: searchItem => {
        return {
          url: `products/search?q=${searchItem}`,
          method: 'GET',
        };
      },
    }),
    // next api
  }),
});

export const {
  useProductDisplayAPIQuery,
  useIndividualProductDisplayAPIQuery,
  useGetCategoriesAPIQuery,
  useGetIndividualCategoriesAPIQuery,
  useSearchItemAPIQuery,
} = apiHandle;
