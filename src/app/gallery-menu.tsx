import Link from 'next/link'
import "./styles/globals.css";

export default function GalleryMenu() {
  
    return (
      <div>
        {/* Header Menu */}
        <div className="bg-gray-100 py-12 flex items-center justify-center uppercase tracking-widest text-xs text-gray-500">
            <Link href="/weddings" className="mx-4">Weddings</Link>
            <Link href="/portraits" className="mx-4">Portraits</Link>
            <Link href="#" className="mx-4">Commercial</Link>
            <Link href="#" className="mx-4">Architectural</Link>
            <Link href="#" className="mx-4">Engagement Portraits</Link>
            <Link href="#" className="mx-4">Bridal Portraits</Link>
        </div>
      </div>
    );
}


