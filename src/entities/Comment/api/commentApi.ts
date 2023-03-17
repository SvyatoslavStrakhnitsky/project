import { rtkApi } from '@/shared/api/rtkApi';
import { IComment } from '../types/Comment';

export const commentApi = rtkApi
    .enhanceEndpoints({addTagTypes: ['Comments']})
    .injectEndpoints({
        endpoints: (builder) => ({
            comments: builder.query<IComment[], {entityId: string}>({
                query: ({entityId}) => `/comments/${entityId}`,
                providesTags: ['Comments']
            }),
        }),
        overrideExisting: false,
    });

export const { useCommentsQuery } = commentApi;