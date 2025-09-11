import React from "react";

// TwoLine Landing Page component
// Usage: paste this file into a Next.js / React project (e.g. pages/index.jsx)
// Requires Tailwind CSS enabled in the project.

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white antialiased">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo />
          <div>
            <div className="text-lg font-extrabold tracking-tight">2//</div>
            <div className="text-xs text-gray-400 -mt-1">TWO LINE</div>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <a href="#treinamentos" className="text-gray-300 hover:text-white text-sm">Treinamentos</a>
          <a href="#sobre" className="text-gray-300 hover:text-white text-sm">Sobre</a>
          <a href="#depoimentos" className="text-gray-300 hover:text-white text-sm">Depoimentos</a>
          <a href="/inscricao" className="ml-4 inline-block bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md font-semibold text-sm">QUERO MUDAR</a>
        </nav>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">O lugar onde jovens quebram vícios, encontram força e mudam de vida.</h1>
            <p className="mt-6 text-gray-300 max-w-xl">TwoLine é um espaço prático e direto — sem "mi mi mi". Aqui transformamos hábitos, damos ferramentas reais e criamos comunidade para quem quer mudar de verdade.</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/inscricao" className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md font-bold">QUERO MUDAR AGORA</a>
              <a href="#treinamentos" className="px-6 py-3 rounded-md border border-gray-700 hover:border-gray-500">Ver Treinamentos</a>
            </div>

            {/* Benefits */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <Benefit title="Desafios práticos e comprovados" />
              <Benefit title="Treinos exclusivos contra vícios modernos" description="(porno, apostas, ansiedade, pressão social)" />
              <Benefit title="Ebooks e áudios para motivação diária" />
              <Benefit title="Comunidade fechada para suporte real" />
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold">Manifesto — o que é a plataforma</h3>
            <p className="mt-4 text-gray-300">Somos a TwoLine. Não pregamos esperança vazia — criamos caminhos práticos e diretos. Aqui tens exercícios, rotinas e a comunidade certa para te obrigar a mudar. Se queres conversa mole, não é aqui. Se queres resultado, começa agora.</p>

            <div className="mt-6">
              <h4 className="text-sm text-gray-400">O que ganhas</h4>
              <ul className="mt-3 space-y-2 text-gray-300">
                <li className="flex items-start gap-2"><Dot /> Acesso a treinos práticos</li>
                <li className="flex items-start gap-2"><Dot /> Áudios e eBooks para ouvir sempre</li>
                <li className="flex items-start gap-2"><Dot /> Painel pessoal com progresso</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Treinamentos carousel stub */}
        <section id="treinamentos" className="mt-16">
          <h2 className="text-2xl font-bold">Treinamentos</h2>
          <p className="mt-2 text-gray-400">Programas criados para atacar o problema na raiz — ação todos os dias.</p>

          <div className="mt-6 overflow-x-auto">
            <div className="flex gap-6 pb-4">
              <TrainingCard title="Anti-Pornografia" price="350 MZN/mês" days="30 dias" />
              <TrainingCard title="Anti-Apostas" price="350 MZN/mês" days="30 dias" />
              <TrainingCard title="Pressão Social" price="350 MZN/mês" days="21 dias" />
              <TrainingCard title="Ansiedade & Depressão" price="350 MZN/mês" days="30 dias" />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="sobre" className="mt-20 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold">Sobre nós</h3>
            <p className="mt-4 text-gray-300">Somos a TwoLine — uma plataforma criada para quem está cansado de desculpas. Nascemos para dar método, disciplina e comunidade. Falamos a verdade, mostramos os passos e ajudamos a manter a consistência.</p>

            <ul className="mt-6 space-y-3 text-gray-300">
              <li className="flex gap-3 items-start"><Check /> Conteúdo prático e aplicável</li>
              <li className="flex gap-3 items-start"><Check /> Sistema de suporte e moderação</li>
              <li className="flex gap-3 items-start"><Check /> Privacidade e respeito</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h4 className="font-bold">Missão</h4>
            <p className="mt-3 text-gray-300">Ajudar jovens e adultos a recuperar controle de suas vidas através de práticas diretas — sem rodeios.</p>
          </div>
        </section>

        {/* Testimonials */}
        <section id="depoimentos" className="mt-20">
          <h3 className="text-2xl font-bold">Depoimentos</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Testimonial name="João, 22" text="Passei 3 semanas e já senti diferença. A linguagem é direta e funciona." />
            <Testimonial name="Ana, 28" text="O treino anti-apostas me salvou de uma dívida que quase me quebrou." />
            <Testimonial name="Rui, 19" text="Curti a comunidade — não me sinto sozinho, e isso já é meio caminho." />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-850 border-t border-gray-800 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-10 text-gray-400 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <Logo size={36} />
              <div>
                <div className="font-bold">2// TWO LINE</div>
                <div className="text-xs text-gray-500">Transforme sua vida</div>
              </div>
            </div>
            <p className="mt-4 text-sm">© {new Date().getFullYear()} TwoLine. Todos os direitos reservados.</p>
          </div>

          <div className="flex gap-6 items-center">
            <a href="/termos" className="hover:text-white">Termos</a>
            <a href="/privacidade" className="hover:text-white">Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ----------------- Subcomponents ----------------- */

function Logo({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="64" height="64" rx="10" fill="#111827" />
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fontWeight="700" fontSize="22" fill="#ffffff">2//</text>
    </svg>
  );
}

function Benefit({ title, description }) {
  return (
    <div className="bg-gray-800 p-4 rounded-md">
      <h4 className="font-semibold">{title}</h4>
      {description && <p className="text-sm text-gray-400 mt-1">{description}</p>}
    </div>
  );
}

function Dot() {
  return <span className="w-2 h-2 bg-red-600 rounded-full inline-block mt-1" />;
}

function TrainingCard({ title, price, days }) {
  return (
    <div className="min-w-[260px] bg-gradient-to-br from-gray-800 to-gray-700 p-4 rounded-xl shadow-lg">
      <div className="h-36 bg-gray-900 rounded-md flex items-center justify-center text-gray-400">Imagem do Treino</div>
      <div className="mt-4">
        <h4 className="font-bold">{title}</h4>
        <p className="text-sm text-gray-300 mt-1">{days} • {price}</p>
        <a href="/treinamentos" className="mt-4 inline-block bg-red-600 px-4 py-2 rounded-md font-semibold">QUERO MUDAR</a>
      </div>
    </div>
  );
}

function Check() {
  return (
    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
  );
}

function Testimonial({ name, text }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <p className="text-gray-300">"{text}"</p>
      <div className="mt-4 text-sm text-gray-400">— {name}</div>
    </div>
  );
}
