import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-5 py-10 text-center text-sm text-muted-foreground">
      <div className="mx-auto max-w-3xl space-y-4">
        <div className="font-display text-lg font-bold text-foreground">
          Parv <span className="text-gradient">Infosoft</span>
        </div>
        <p className="text-xs leading-relaxed">{SITE.address}</p>
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs">
          <Link to="/privacy" className="hover:text-foreground">
            Privacy Policy
          </Link>
          <Link to="/refund" className="hover:text-foreground">
            Refund Policy
          </Link>
          <Link to="/terms" className="hover:text-foreground">
            Terms &amp; Conditions
          </Link>
          <Link to="/contact" className="hover:text-foreground">
            Contact
          </Link>
        </nav>
        <p className="text-xs">© {new Date().getFullYear()} Parv Infosoft. All rights reserved.</p>
      </div>
    </footer>
  );
}