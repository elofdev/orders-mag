import Link from "next/link";

export default function NavbarFooter() {
    return (
        <section className="w-full h-12 flex flex-row justify-center items-center">
            <div className="container h-6 bg-slate-300 flex flex-row justify-center items-center">
                <ul>
                    <li>
                        <Link href="/">
                            Contato:
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}