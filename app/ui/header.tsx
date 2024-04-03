'use client';

export interface HeaderProps {
    text: string;
    thumbnail?: string;
}

export function Header (props: HeaderProps) {
    const { text, thumbnail } = props;

    return (
        <h1 className="header">
            {props.thumbnail && (
                <img src={thumbnail} />
            )}
            {text}
        </h1>
    );
}