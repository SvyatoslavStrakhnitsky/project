import { FC, memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Text, TextTheme } from '@/shared/ui/Text';
import { ArticleTextBlock } from '../../model/types/Article';
import cls from './ArticleBlockText.module.css';

interface ArticleBlockTextProps {
    className?: string;
    block: ArticleTextBlock;
    theme?: TextTheme;
}

export const ArticleBlockText: FC<ArticleBlockTextProps> = memo((props) => {
    const {
        block,
        className,
        theme = TextTheme.PRIMARY
    } = props;

    return (
        <div className={classNames('', {}, [className])}>
            {block?.title && (
                <Text title={block.title} className={cls.title} theme={theme}/>
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
