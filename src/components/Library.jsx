import { diseases } from "../data/diseases";

export default function Library() {
  return (
    <section id="library" className="bg-slate-950 px-5 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="font-semibold text-emerald-300">Disease Library</p>
        <h2 className="mt-3 text-3xl font-black md:text-5xl">Rice leaf disease catalog</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {diseases.map((item) => (
            <div key={item.name} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                {item.tag}
              </span>
              <h3 className="mt-5 text-xl font-black">{item.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}