export default function Hero() {
  return (
    <main className="grid min-h-svh place-items-center bg-slate-900 px-6 text-center font-sans text-slate-50">
      <div className="flex flex-col items-center">
        <img src="/logo.svg" alt="Logotipo JG" className="w-32" />

        <h1 className="mt-6 font-display text-[clamp(2.25rem,6vw,3.75rem)] font-bold leading-tight">
          Javier González
        </h1>

        <p className="mt-2 text-lg text-slate-400 md:text-xl">
          Código limpio, interfaces con propósito.
        </p>

        <span className="mt-8 inline-block rounded-full border border-accent px-6 py-2.5 text-base font-medium text-accent md:text-lg">
          Sitio en construcción
        </span>
      </div>
    </main>
  )
}