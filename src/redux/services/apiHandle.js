import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiHandle = createApi({
  reducerPath: 'apiHandle',
  baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
  endpoints: builder => ({
    // get api
    productDisplayAPI: builder.query({
      query: num => {
        return {
          url: `products?limit=${num}&skip=4`,
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
    // update api
    updateItemAPI: builder.mutation({
      query: id => {
        return {
          url: `products/${id}`,
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
          },
        };
      },
    }),
    // auth request
    authUserAPI: builder.mutation({
      query: userCredentials => {
        return {
          url: 'auth/login',
          method: 'POST',
          body: userCredentials,
          headers: {
            'content-type': 'application/json',
          },
        };
      },
    }),
    // delete product
    deleteProductAPI: builder.mutation({
      query: id => {
        return {
          url: `products/${id}`,
          method: 'DELETE',
        };
      },
    }),
    // adding new data api
    addProductAPI: builder.mutation({
      query: newProductData => {
        return {
          url: 'products/add',
          method: 'POST',
          body: newProductData,
          headers: {
            'content-type': 'application/json',
          },
        };
      },
    }),
    // other api's
  }),
});

export const {
  useProductDisplayAPIQuery,
  useIndividualProductDisplayAPIQuery,
  useGetCategoriesAPIQuery,
  useGetIndividualCategoriesAPIQuery,
  useSearchItemAPIQuery,
  useUpdateItemAPIMutation,
  useAuthUserAPIMutation,
  useDeleteProductAPIMutation,
  useAddProductAPIMutation,
} = apiHandle;
