import { FC, memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/Text';
import { ArticleImageBlock } from '../../model/types/Article';
import cls from './ArticleBlockImage.module.css';

interface ArticleBlockImageProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleBlockImage: FC<ArticleBlockImageProps> = memo((props) => {
    const {
        className,
        block,
    } = props;

    return (
        <div className={classNames('', {}, [className])}>
            <img
                src={block.src}
                alt={block.title || ''}
                className={cls.img}
            />
            {block.title && (
                <Text
                    text={block.title}
                    textAlign={TextAlign.CENTER}
                />
            )}
        </div>
    );
});
