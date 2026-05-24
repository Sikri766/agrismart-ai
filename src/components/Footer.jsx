import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-5 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row md:items-center">
        <div className="flex items-center gap-2 font-bold">
          <Leaf className="text-emerald-300" /> AgriSmart AI
        </div>

        <p className="text-sm text-slate-500">
          © 2026 AgriSmart AI. Web Design Competition Project.
        </p>

        <a href="#home" className="text-sm text-slate-400 hover:text-emerald-300">
          Back to top
        </a>
      </div>
    </footer>
  );
}