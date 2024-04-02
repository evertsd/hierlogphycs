'use client';

export interface HeaderProps {
    text: string;
    thumbnail?: string;
}

export function Header (props: HeaderProps) {
    const { text, thumbnail } = props;

    return (
        <h1>
            {props.thumbnail && <div style={{ backgroundImage: `url(${props.thumbnail})` }} />}
            {text}
        </h1>
    )
}