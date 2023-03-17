import { IComment } from '@/entities/Comment';
import { rtkApi } from '@/shared/api/rtkApi';

interface CreateCommentParams {
    entityId: string;
    userId: string;
    content: string;
}

const commentApi = rtkApi
    .enhanceEndpoints({addTagTypes: ['Comments']})
    .injectEndpoints({
        endpoints: (builder) => ({
            createComment: builder.mutation<IComment, CreateCommentParams>({
                query: (body) => ({
                    url:'/comment/create',
                    method: 'POST',
                    body,
                }),
                invalidatesTags: ['Comments']
            }),
        }),
        overrideExisting: false,
    });

export const {useCreateCommentMutation } = commentApi;