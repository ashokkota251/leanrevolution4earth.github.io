export function HeroSection() {
  return (
    <section 
      className="flex min-h-[85vh] items-center justify-center px-6 py-20"
      style={{ backgroundColor: "#f9fafb" }}
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-primary">
          A Just, Lean, and Living Earth for All
        </p>
        <h1 className="mt-6 text-balance text-4xl font-medium leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Lean Revolution 4 Earth
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
          We fight the climate crisis without leaving anyone behind. Through community-led action, clean innovation, and sustainable systems.
        </p>
      </div>
    </section>
  )
}
