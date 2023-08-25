import Link from "next/link";

export default function Navbar() {
    return (
        <section className="w-full h-10 flex flex-col justify-center items-center gap-5">
            <div className="container h-10 bg-slate-300 flex flex-row justify-between items-center gap-2 p-2">
                <Link href="/">MAG</Link>
                <ul className="gap-5 w-2/3 flex flex-row justify-between items-center">
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <button className="h-auto bg-slate-400 opacity-70 text-white text-lg">Login</button>
                    </li>
                </ul>
            </div>
        </section>

    )
}