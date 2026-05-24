import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Features",
    "Works",
    "Detect",
    "Library",
    "Impact",
    "Team",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#home" className="flex items-center gap-2 font-bold text-white">
          <span className="grid h-9 w-9 place-items-center rounded-2xl bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-400/30">
            <Leaf size={20} />
          </span>
          AgriSmart AI
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-slate-300 transition hover:text-emerald-300"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href="#detect"
          className="hidden rounded-full bg-emerald-400 px-5 py-2 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-400/20 transition hover:bg-emerald-300 md:inline-flex"
        >
          Try Detection
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-white/10 p-2 text-white lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950 px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link}
                onClick={() => setOpen(false)}
                href={`#${link.toLowerCase()}`}
                className="rounded-xl px-3 py-2 text-slate-300 transition hover:bg-white/10 hover:text-emerald-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}