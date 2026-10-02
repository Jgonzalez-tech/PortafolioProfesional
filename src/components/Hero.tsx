export default function Hero() {
  return (
    <main className="grid min-h-svh place-items-center bg-slate-900 px-6 text-center font-sans text-slate-50">
      <img src="/logo.svg" alt="Logotipo JG" className="mx-auto w-30" />
      <h1 className="mt-3.2 mb-1.2 font-display text-[clamp(1.8rem,5vw,3rem)] font-bold">
        Javier González
      </h1>
      <p className="my-0.8 text-slate-400">
        Código limpio, interfaces con propósito.
      </p>
      <span className="mt-6 inline-block rounded-full border border-accent px-4 py-1.6 text-[0.9rem] text-accent">
        Sitio en construcción
      </span>
    </main>
  )
}