import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync: FC<AddCommentFormProps> = lazy(() => import('./AddCommentForm'));
