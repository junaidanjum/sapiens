import Link from "next/link";
import { Heart } from "lucide-react";

export default function SponsorBanner() {
  return (
    <div className="w-full bg-amber-50 dark:bg-amber-950/30 border-b border-amber-200 dark:border-amber-800/40 py-2 px-4 text-center text-sm text-amber-800 dark:text-amber-300">
      <span className="inline-flex items-center gap-1.5 flex-wrap justify-center">
        <span>Our domain is expiring soon.</span>
        <span>
          Sponsor us for{" "}
          <span className="font-medium">₹5,000.00 / ~$60.00</span> and get your
          profile featured at the top of this site for an entire year.
        </span>
        <Link
          href="https://github.com/sponsors/junaidanjum"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-semibold underline underline-offset-2 hover:text-amber-900 dark:hover:text-amber-200 transition-colors"
        >
          <Heart fill="currentColor" className="w-3.5 h-3.5" />
          Sponsor on GitHub
        </Link>
      </span>
    </div>
  );
}
