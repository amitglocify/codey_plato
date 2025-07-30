// app/not-found.tsx

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="relative flex items-center justify-center h-screen w-full text-center px-4 bg-cover bg-center">
      <div className="absolute inset-0 bg-[#f1f5fd]/60 z-0"></div>

      <div className="relative z-10 max-w-xl mx-auto text-white">
        <h1 className="text-6xl font-bold mb-4 text-black">404</h1>
        <h2 className="text-3xl font-semibold mb-2 text-black">
          Page Not Found
        </h2>
        <p className="text-lg mb-6 text-black">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded text-white font-semibold"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
