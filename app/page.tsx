import Link from "next/link";
import Image from "next/image";
import { Terminal, FileText, Lock } from "lucide-react";
import ArticleImage from '../assets/b23dee1d-cfd0-456d-827a-35a101c84abb.jpg'

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#F2D7B6] text-[#590202] font-sans">
      {/* Encabezado con gradiente */}
      <div className="bg-gradient-to-b from-[#D9C0A3] to-[#F2D7B6] border-b-2 border-[#8C2A14] p-2 text-center">
        <h1 className="text-[#590202] text-2xl md:text-3xl font-bold">
          INTERFAZ MEMÉTICA DE OPERACIONES
        </h1>
        <div className="text-[#8C2A14] text-sm">
          NEXO CHAOS//ORDER • SISTEMA DE GUERRA PSÍQUICA • FUNDADO EN 2023
        </div>
        <div className="text-[#590202] text-xs italic mt-1">
          "Un enjambre de símbolos peleando por tu atención."
        </div>
      </div>

      {/* Barra de navegación estilo 2010 */}
      <div className="bg-[#D9C0A3] border-b-2 border-[#8C2A14] p-2 flex justify-center space-x-4">
        <Link
          href="https://open.substack.com/pub/chaos0rder/p/manifiesto-memetico-argentino?r=558e5&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true"
          className="nav-button bg-gradient-to-b from-[#A62C21] to-[#590202] text-[#F2D7B6] px-4 py-1 rounded font-bold shadow-md hover:from-[#8C2A14] hover:to-[#590202]"
          target="_blank" 
          rel="noopener noreferrer"
        >
          READ THE MANIFEST
        </Link>
      </div>

      {/* Banner de construcción */}
      <div className="flex justify-center my-4">
        <div className="border-2 border-[#8C2A14] p-2 bg-[#F2D7B6] text-center rounded shadow-md">
          <div className="text-[#A62C21] blink font-bold">
            *** MARCO DE REALIDAD EN REESCRITURA ACTIVA ***
          </div>
          <div className="text-[#590202] text-xs italic mt-1">
            "La sobreexposición es un arma. Nos la tiran todos los días."
          </div>
          <div className="flex justify-center my-2">
            <div className="mx-2">⚠️</div>
            <div className="mx-2">⚠️</div>
            <div className="mx-2">⚠️</div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-6">
        {/* Sección hero con arte ASCII */}
        <div className="bg-[#D9C0A3] border-2 border-[#8C2A14] rounded-lg p-4 mb-8 shadow-md">
          <pre className="text-center text-xs sm:text-sm md:text-base overflow-x-hide ascii-art text-[#590202]">
            {`
██▓███    ██████ ▓██   ██▓ ▒█████   ██▓███    ██████ 
▓██░  ██▒▒██    ▒  ▒██  ██▒▒██▒  ██▒▓██░  ██▒▒██    ▒ 
▓██░ ██▓▒░ ▓██▄     ▒██ ██░▒██░  ██▒▓██░ ██▓▒░ ▓██▄   
▒██▄█▓▒ ▒  ▒   ██▒  ░ ▐██▓░▒██   ██░▒██▄█▓▒ ▒  ▒   ██▒
▒██▒ ░  ░▒██████▒▒  ░ ██▒▓░░ ████▓▒░▒██▒ ░  ░▒██████▒▒
▒▓▒░ ░  ░▒ ▒▓▒ ▒ ░   ██▒▒▒ ░ ▒░▒░▒░ ▒▓▒░ ░  ░▒ ▒▓▒ ▒ ░
░▒ ░     ░ ░▒  ░ ░  ▓██ ░▒░   ░ ▒ ▒░ ░▒ ░     ░ ░▒  ░ ░
░░       ░  ░  ░    ▒ ▒ ░░  ░ ░ ░ ▒  ░░       ░  ░  ░  
               ░    ░ ░         ░ ░                 ░  
                    ░                                 
            `}
          </pre>
          <div className="text-center mt-4 mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-[#590202] mb-4">
              CHAOS//ORDER :: SISTEMA EN PRIMERA CARGA
            </h2>
            <p className="text-[#8C2A14] mb-6">
              Portal de calibración para proteccion memetica. 
              psy-ops en progreso...
            </p>
            <p className="text-[#A62C21] text-sm italic mb-4">
              "No son chistes. Son virus de ideología. Inyectan ideas. Infectan percepciones."
            </p>
            <Link
              href="https://open.substack.com/pub/chaos0rder/p/manifiesto-memetico-argentino?r=558e5&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true"
              className="inline-block bg-gradient-to-b from-[#A62C21] to-[#590202] text-[#F2D7B6] px-6 py-2 rounded font-bold shadow-md hover:from-[#8C2A14] hover:to-[#590202]"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className="flex items-center">
                <FileText className="mr-2 h-4 w-4" />
                READ THE MANIFEST
              </div>
            </Link>
          </div>
        </div>

        {/* Contador de visitantes estilo 2010 */}
        <div className="text-center my-6">
          <div className="inline-block border-2 border-[#8C2A14] bg-[#F2D7B6] p-2 rounded shadow-md">
            <div className="text-xs text-[#8C2A14] font-bold">
              NODOS ACTIVOS EN LA RED
            </div>
            <div className="font-bold text-[#590202] bg-[#D9C0A3] px-3 py-1 rounded border border-[#8C2A14]">
              47
            </div>
          </div>
        </div>

        {/* Artículo destacado - con efecto blur y mensaje de disponibilidad */}
        <div className="bg-[#D9C0A3] border-2 border-[#8C2A14] rounded-lg p-4 mb-8 shadow-md relative">
          {/* Overlay de desbloqueo para el sábado */}
          <div className="absolute inset-0 bg-[#590202] bg-opacity-60 backdrop-blur-md flex flex-col items-center justify-center z-10 rounded-lg">
            <Lock className="w-12 h-12 text-[#F2D7B6] mb-4" />
            <div className="text-[#F2D7B6] text-xl font-bold text-center px-6">
              CONTENIDO
            </div>
            <div className="text-[#F2D7B6] text-lg font-bold mt-2 text-center">
              HABILITADO EL SÁBADO
            </div>
            <div className="text-[#D9C0A3] mt-4 text-sm text-center max-w-md">
            Cada símbolo pide tu atención. Esperá
            </div>
            <div className="text-[#F2D7B6] text-xs italic mt-3">
              "Un meme no se combate con razón. Se combate con otro meme."
            </div>
          </div>

          {/* Contenido del artículo (ahora blurreado) */}
          <div className="border-b-2 border-[#8C2A14] mb-4 pb-2">
            <h3 className="text-[#590202] text-xl mb-2 font-bold">
             Que es la memetica y que es la saturacion memetica?
            </h3>
          </div>

          <article className="mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/3">
                <div className="relative w-full aspect-square mb-2 bg-[#F2D7B6] border-2 border-[#8C2A14] rounded shadow-md overflow-hidden">
                  <Image
                    src={ArticleImage}
                    alt="Diagrama de Interfaz Neural"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#590202] bg-opacity-80 p-1 text-xs text-[#F2D7B6] font-bold">
                    CLASIFICADO//NIVEL-7
                  </div>
                </div>
              </div>

              <div className="md:w-2/3">
                <h3 className="text-[#590202] text-xl mb-2 font-bold">
                  Ingeniería de *Prompts* Recursivos: Rompiendo la Barrera Semántica
                </h3>

                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs bg-[#F2D7B6] text-[#8C2A14] px-2 py-1 border border-[#8C2A14] rounded font-bold">
                    PROMPT-TECH
                  </span>
                  <span className="text-xs bg-[#F2D7B6] text-[#8C2A14] px-2 py-1 border border-[#8C2A14] rounded font-bold">
                    MEMÉTICA
                  </span>
                  <span className="text-xs bg-[#F2D7B6] text-[#8C2A14] px-2 py-1 border border-[#8C2A14] rounded font-bold">
                    PSY-OPS
                  </span>
                </div>

                <div className="text-[#590202] mb-4">
                  <p className="mb-2">
                    Los últimos avances en *prompt engineering* recursivo lograron
                    evadir los límites semánticos de los modelos de lenguaje,
                    abriendo un nuevo frente en las capacidades de guerra memética.
                    <span className="italic text-[#A62C21]"> "El meme no quiere hacerte reir. No quiere que pienses, quiere que reacciones."</span>
                  </p>
                  <p>
                    Nuestro equipo investigativo documentó técnicas que usan
                    encuadres contextuales anidados para implantar patrones
                    mentales persistentes que se propagan con mínima degradación
                    por redes digitales.
                  </p>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <div className="text-[#8C2A14] font-bold">
                    PUBLICADO: 2023-09-15
                  </div>
                  <Link
                    href="/article/recursive-prompt-engineering"
                    className="text-[#A62C21] font-bold hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    LEER DOCUMENTO COMPLETO →
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#D9C0A3] text-[#590202] py-6 border-t-2 border-[#8C2A14]">
        <div className="container mx-auto px-4">
          <Link
            href="https://open.substack.com/pub/chaos0rder/p/manifiesto-memetico-argentino?r=558e5&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true"
            className="nav-button bg-gradient-to-b from-[#A62C21] to-[#590202] text-[#F2D7B6] px-4 py-1 rounded font-bold shadow-md hover:from-[#8C2A14] hover:to-[#590202]"
            target="_blank" 
            rel="noopener noreferrer"
          >
            READ THE MANIFEST
          </Link>
          <div className="flex items-center justify-center mb-4 mt-4">
            <Terminal className="mr-2 h-5 w-5 text-[#8C2A14]" />
            <span className="text-sm font-bold">chaos@order:~$</span>
            ...
            <code className="text-xs md:text-sm whitespace-pre-wrap text-[#590202]">
              {`> inject -m "Los memes son cargas útiles. El lenguaje es un arma."
> status --mode=shadow
> cat /etc/psyops/manifesto
"Tu percepción es el objetivo. El feed es el campo de batalla."
> exit`}
            </code>
          </div>

          <div className="mt-6 text-center text-xs">
            <div className="font-bold">{currentYear} - CHAOS ORDER</div>
            <div className="mt-2">
              <span className="text-[#A62C21] font-bold">
                PELIGRO MEMÉTICO ACTIVO
              </span>{" "}
              •
              <span className="text-[#8C2A14] font-bold">
                {" "}
                PROTECCIÓN COGNITIVA RECOMENDADA
              </span>
            </div>
            <div className="mt-4">
              <span className="text-[#590202] blink font-bold">
                ESTE SITIO MODIFICA TUS PATRONES DE PENSAMIENTO
              </span>
              <div className="mt-2 text-[#A62C21] italic">
                "El contagio ya sucedió. No te diste cuenta. No necesitó tu permiso."
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}