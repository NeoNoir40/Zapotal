
export default function Navbar() {
    return (
        <nav className="flex w-full bg-[#171717] p-5 text-white">
            <div className="flex items-center justify-between w-full title">
                <ul className="flex flex-row gap-4">
                    <li>Nosotros</li>
                    <li>Contacto</li>
                </ul>
                <h1 className="ml-auto">
                    El Zapotal
                </h1>
            </div>
        </nav>
    );
}
