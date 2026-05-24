export default function Team() {
  return (
    <section id="team" className="bg-slate-900 px-5 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
        <div>
          <p className="font-semibold text-emerald-300">Project Brief</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Created for future innovation and creators.
          </h2>
          <p className="mt-5 leading-8 text-slate-400">
            AgriSmart AI menggabungkan desain web modern, edukasi pertanian, dan konsep kecerdasan buatan untuk menghasilkan platform informatif yang bermanfaat bagi petani, pelajar, dan masyarakat.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-slate-950 p-6">
          <h3 className="text-2xl font-black">Submission Info</h3>

          <div className="mt-6 space-y-4 text-slate-300">
            <div className="rounded-2xl bg-white/[0.04] p-4">
              <p className="text-sm text-slate-500">Website Type</p>
              <p className="font-semibold">Educational / Social Impact Platform</p>
            </div>

            <div className="rounded-2xl bg-white/[0.04] p-4">
              <p className="text-sm text-slate-500">Tech Stack</p>
              <p className="font-semibold">React, Tailwind CSS, Framer Motion, Vercel</p>
            </div>

            <div className="rounded-2xl bg-white/[0.04] p-4">
              <p className="text-sm text-slate-500">Target Users</p>
              <p className="font-semibold">Farmers, students, agriculture communities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}