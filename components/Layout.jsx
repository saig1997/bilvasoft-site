import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <header className="bg-gray-100 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/">
            <span className="text-xl font-bold text-blue-700">Bilvasoft</span>
          </Link>
          <nav className="space-x-6 text-sm md:text-base">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
            <Link href="/solutions" className="hover:text-blue-600">Solutions</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="p-4 md:p-8">{children}</main>

      <footer className="bg-gray-900 text-white py-8 mt-16 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="font-bold mb-2">Bilvasoft</h4>
            <p>Integration solutions powered by leading platforms.</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Quick Links</h4>
            <ul>
              <li><Link href="/solutions" className="hover:underline">Solutions</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Contact</h4>
            <p>Email: info@bilvasoft.com</p>
            <p>Phone: +1-469-344-1376</p>
            <p>Address: 2150 S Central Expy, Suite 200, McKinney, TX</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
