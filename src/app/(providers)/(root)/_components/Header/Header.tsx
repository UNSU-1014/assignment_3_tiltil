import Link from "next/link";
import HeaderAuthButtons from "./_components/HeaderAuthButtons";

function Header() {
  return (
    <header className="h-20 border-b flex items-center justify-between px-4 sm:px-6 lg:px-8">
      <div className="flex-shrink-0">
        <Link href="/">
          <p className="text-xl font-bold text-gray-900 hover:text-gray-700">
            TILTIL
          </p>
        </Link>
      </div>

      <nav>
        <ul className="flex space-x-4">
          <li className="text-gray-600 hover:text-gray-900">
            <Link href="/til/write">
              <p className="px-3 py-2 rounded-md text-sm font-medium">
                TIL 쓰러가기
              </p>
            </Link>
          </li>
        </ul>
      </nav>

      <div>
        <HeaderAuthButtons />
      </div>
    </header>
  );
}

export default Header;
