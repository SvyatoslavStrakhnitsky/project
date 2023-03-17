import { FC, memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { ArticleTextBlock } from '../../model/types/Article';
import cls from './ArticleBlockText.module.css';

interface ArticleBlockTextProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleBlockText: FC<ArticleBlockTextProps> = memo((props) => {
    const {
        block,
        className,
    } = props;

    return (
        <div className={classNames('', {}, [className])}>
            {block?.title && (
                <Text title={block.title} className={cls.title} />
            )}
            {block.paragraphs.map((paragraph) => (
                <Text
                    key={paragraph}
                    text={paragraph}
                    className={cls.paragraph}
                />
            ))}
        </div>
    );
});
