import { FC, memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Code } from '@/shared/ui/Code/ui/Code';
import { ArticleCodeBlock } from '../../model/types/Article';

interface ArticleBlockCodeProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleBlockCode: FC<ArticleBlockCodeProps> = memo((props) => {
    const {
        block,
        className,
    } = props;

    return (
        <div className={classNames('', {}, [className])}>
            <Code text={block.code} />
        </div>
    );
});
