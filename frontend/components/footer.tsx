import Link from "next/link";

export function Footer() {
  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60">
      <div className="container mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {CURRENT_YEAR} 정택준. All rights reserved.
            </p>
            <p className="mt-1 font-mono text-xs text-muted-foreground/70">
              self-hosted on nangman.cloud
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/iamtaekjun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </Link>
            <Link
              href="mailto:taekjunnnn@nangman.cloud"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Email
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
