export default function Home() {
  return (
    <main className="relative flex items-center justify-center min-h-screen px-6 overflow-hidden">
      {/* Conteúdo principal */}
      <section
        className="relative z-10 text-center max-w-2xl animate-fade-in"
        role="main"
        aria-label="Website under construction"
      >
        {/* Ícone e Título */}
        <h1 className="section__title text-3d">
          <span className="block text-6xl sm:text-7xl mb-4 drop-shadow-lg">✈️</span>
          LF Airport Transfers
        </h1>

        {/* Subtítulo */}
        <p className="section__text mb-6">
          Our new website is coming soon — bringing you seamless luxury airport transfers across London.
        </p>

        {/* Frase elegante */}
        <p className="text-base sm:text-lg text-gray-400 italic mb-8">
          🚗 Launching shortly. Stay tuned for a truly first-class experience.
        </p>

        {/* Botão de contato */}
        <a
          href="https://wa.me/447541494500?text=Hello%20%E2%9C%88%EF%B8%8F%20I%E2%80%99d%20like%20to%20book%20a%20luxury%20airport%20transfer%20with%20LF%20Airport%20Transfers.%20Could%20you%20assist%20me%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white font-medium border border-white/20 backdrop-blur-md shadow-md transition-all duration-300 hover:bg-white/20 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12.04 2C6.5 2 2 6.48 2 12.02c0 1.97.58 3.8 1.57 5.34L2 22l4.76-1.54A9.96 9.96 0 0 0 12.04 22C17.57 22 22 17.52 22 12.02 22 6.48 17.57 2 12.04 2zm0 17.93c-1.71 0-3.29-.5-4.62-1.36l-.33-.21-2.82.92.94-2.75-.22-.35A8.03 8.03 0 0 1 4.02 12c0-4.42 3.6-8.01 8.02-8.01 4.41 0 8.01 3.59 8.01 8.01s-3.6 8.01-8.01 8.01zm4.6-6.18c-.25-.13-1.46-.72-1.69-.8-.23-.09-.39-.13-.55.13-.17.25-.63.79-.78.95-.14.17-.29.19-.53.06-.25-.13-1.07-.39-2.04-1.23-.75-.66-1.25-1.47-1.39-1.72-.14-.25-.01-.39.12-.51.13-.13.25-.29.37-.43.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.43h-.47c-.16 0-.42.06-.64.29s-.84.82-.84 2c0 1.18.86 2.33.98 2.49.12.17 1.7 2.59 4.12 3.63.58.25 1.03.4 1.38.51.58.18 1.1.15 1.52.09.46-.07 1.46-.6 1.67-1.18.2-.58.2-1.07.14-1.18-.06-.11-.23-.17-.48-.3z" />
          </svg>
          <span>Chat on WhatsApp</span>
        </a>
      </section>

      {/* Fundo com gradiente de luxo */}
      <div className="absolute inset-0 -z-10 luxury-gradient" />

      {/* Partículas finas simulando textura */}
      <div className="absolute inset-0 pointer-events-none -z-10 noise-overlay" />
    </main>
  );
}
