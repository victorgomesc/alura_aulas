import React from 'react';
import Link from "../src/components/Link";

function Title({ children, as }) {
    const Tag = as;
    return (
        <React.Fragment>
            <Tag>{ children }</Tag>

            <style jsx>{`
                ${Tag} {
                    color: red;
                }
                `}</style>
        </React.Fragment>
    )
}

export default function HomePage() {
    return(
        <div>
            <Title as="h1">Home page</Title>
            <Link href="/faq">
                ir para a pagina doFaq
            </Link>
        </div>
    )
}