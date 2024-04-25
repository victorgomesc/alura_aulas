import Link from "next/link"

export default function HomePage() {
    return(
        <div>
            <h1>Home page</h1>
            <Link href="/faq">
                <p>ir para faq</p>
            </Link>
        </div>
    )
}