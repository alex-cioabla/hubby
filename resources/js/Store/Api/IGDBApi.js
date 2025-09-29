import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const IGDBApi = createApi({
    reducerPath: 'IgdbApi',
    baseQuery: fetchBaseQuery({baseUrl: '/api/igdb'}),
    endpoints: (builder) => ({
        searchGames: builder.query({
            query: () => '/games'
        })
    })
});

export const { useSearchGamesQuery } = IGDBApi;
