import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-gray-800">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl lg:text-2xl font-bold text-black">ARPIT KUKRETI</h1>
          <nav className="flex items-center gap-4 lg:gap-8">
             <Link href="mailto:arpitkukrety27@gmail.com" className="text-gray-600 hover:text-black underline">
            Email
          </Link>
          <Link
            href="https://linkedin.com/in/arpit-kukreti-4a3824302"
            className="text-gray-600 hover:text-black underline"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/arp1tk"
            className="text-gray-600 hover:text-black underline"
          >
           Github
          </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
