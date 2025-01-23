import Link from "next/link";
import "../app/styles/globals.css";

export default function HeaderNav() {

  return (
    <div>

    {/* Header Nav */}
    <div className="bg-yellow-600 bg-opacity-50 text-white text-xs text-center uppercase tracking-widest py-2">
        <Link href="/" className="underline">HOME</Link>
    </div>

    </div>
  );
}
