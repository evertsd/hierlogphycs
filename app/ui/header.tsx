'use client';

export interface HeaderProps extends BackArrowProps {
    text: string;
    thumbnail?: string;
}

export function Header (props: HeaderProps) {
    const { returnLink, text, thumbnail } = props;

    return (
        <h1 className="header">
            {props.thumbnail && (
                <img src={thumbnail} />
            )}
            {text}
            {returnLink && (
                <BackArrow returnLink={returnLink} />
            )}
        </h1>
    );
}

interface BackArrowProps {
    returnLink?: string;
}

function BackArrow ({ returnLink }: BackArrowProps) {
    return (
        <a href={returnLink} className="ml-auto">
            <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14">
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13">
                </path>
            </svg>
        </a>
    );
}