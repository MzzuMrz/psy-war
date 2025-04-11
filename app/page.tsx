"use client"

import Link from "next/link";
import Image from "next/image";
import { Terminal, FileText, Lock } from "lucide-react";
import ArticleImage from '../assets/b23dee1d-cfd0-456d-827a-35a101c84abb.jpg'
import { useEffect, useState } from "react";

export default function Home() {
  const currentYear = new Date().getFullYear();
  const [terminalText, setTerminalText] = useState("");
  const [nodeCount, setNodeCount] = useState(42);
  
  // Efecto de escritura para el terminal
  useEffect(() => {
    const fullText = `> inject -m "Los memes son cargas útiles. El lenguaje es un arma."
> status --mode=shadow
> cat /etc/psyops/manifesto
"Tu percepción es el objetivo. El feed es el campo de batalla."
> exit`;
    
    let i = 0;
    const typing = setInterval(() => {
      setTerminalText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(typing);
      }
    }, 50);
    
    return () => clearInterval(typing);
  }, []);
  
  // Contador animado
  useEffect(() => {
    const interval = setInterval(() => {
      setNodeCount(prev => {
        // Números fluctuantes entre 40 y 56
        const change = Math.floor(Math.random() * 3) - 1; // -1, 0, o 1
        const newValue = prev + change;
        return newValue >= 40 && newValue <= 56 ? newValue : prev;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Añadimos CSS para todas las animaciones
  const styles = `
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
    .scrollbar-hide {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
    
    /* Animación para el ASCII art alternando entre negro y rojo con efecto de latido */
    @keyframes pulseColors {
      0% { color: #590202; text-shadow: none; transform: scale(1); } 
      25% { color: #A62C21; text-shadow: 0 0 5px #A62C21; transform: scale(1.01); }
      50% { color: #590202; text-shadow: none; transform: scale(1); }
      75% { color: #8C2A14; text-shadow: 0 0 4px #8C2A14; transform: scale(1.01); }
      100% { color: #590202; text-shadow: none; transform: scale(1); }
    }
    
    .ascii-art {
      animation: pulseColors 1.5s infinite;
      font-weight: bold;
      transform-origin: center;
    }
    
    /* Añadimos una clase para el efecto de parpadeo */
    @keyframes blink {
      0%, 49% { opacity: 1; }
      50%, 100% { opacity: 0; }
    }
    
    .blink {
      animation: blink 1s step-end infinite;
    }
    
    /* Animación para el texto de PELIGRO MEMÉTICO */
    @keyframes dangerPulse {
      0% { color: #590202; }
      50% { color: #A62C21; text-shadow: 0 0 4px #A62C21; }
      100% { color: #590202; }
    }
    
    .danger-text {
      animation: dangerPulse 2s infinite;
      font-weight: bold;
    }
    
    /* Animación para los iconos de advertencia */
    @keyframes warningPulse {
      0% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.2); opacity: 0.8; }
      100% { transform: scale(1); opacity: 1; }
    }
    
    .warning-icon {
      animation: warningPulse 2s infinite;
      display: inline-block;
    }
    
    .warning-icon:nth-child(2) {
      animation-delay: 0.4s;
    }
    
    .warning-icon:nth-child(3) {
      animation-delay: 0.8s;
    }
    
    
    /* Animación para el contador */
    @keyframes numberChange {
      0% { transform: translateY(0); opacity: 1; }
      45% { transform: translateY(-20px); opacity: 0; }
      55% { transform: translateY(20px); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }
    
    .number-change {
      display: inline-block;
      position: relative;
    }
    
    
    /* Efecto de ruido o glitch para textos */
    @keyframes glitchText {
      0% { transform: translateX(0); }
      5% { transform: translateX(2px); }
      10% { transform: translateX(-2px); }
      15% { transform: translateX(0); }
      100% { transform: translateX(0); }
    }
    
    .glitch-text {
      position: relative;
      display: inline-block;
    }
    
    .glitch-text:hover {
      animation: glitchText 0.5s forwards;
      text-shadow: -1px 0 #A62C21, 1px 0 #590202;
    }
    
    /* Resplandor para botones al hacer hover */
    .nav-button:hover {
      box-shadow: 0 0 10px rgba(166, 44, 33, 0.7);
      transition: box-shadow 0.3s ease-in-out;
    }
    
    /* ELIMINADO: Efecto de distorsión de fondo menor para toda la página */
    
    /* Animación para la carga/booteo inicial */
    @keyframes loadEffect {
      0% { opacity: 0; transform: translateY(10px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    
    .load-effect-1 { animation: loadEffect 0.5s forwards; }
    .load-effect-2 { animation: loadEffect 0.5s 0.1s forwards; opacity: 0; }
    .load-effect-3 { animation: loadEffect 0.5s 0.2s forwards; opacity: 0; }
    .load-effect-4 { animation: loadEffect 0.5s 0.3s forwards; opacity: 0; }
    .load-effect-5 { animation: loadEffect 0.5s 0.4s forwards; opacity: 0; }
  `;

  return (
    <div className="min-h-screen bg-[#F2D7B6] text-[#590202] font-sans">
      {/* Estilos CSS internos */}
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      {/* Encabezado con gradiente */}
      <div className="bg-gradient-to-b from-[#D9C0A3] to-[#F2D7B6] border-b-2 border-[#8C2A14] p-2 text-center load-effect-1">
        <h1 className="text-[#590202] text-xl sm:text-2xl md:text-3xl font-bold glitch-text">
          INTERFAZ MEMÉTICA DE OPERACIONES
        </h1>
        <div className="text-[#8C2A14] text-xs sm:text-sm">
          NEXO CHAOS//ORDER • SISTEMA DE GUERRA PSÍQUICA • FUNDADO EN 2023
        </div>
        <div className="text-[#590202] text-xs italic mt-1">
          "Un enjambre de símbolos peleando por tu atención."
        </div>
      </div>

      {/* Barra de navegación estilo 2010 */}
      <div className="bg-[#D9C0A3] border-b-2 border-[#8C2A14] p-2 flex justify-center space-x-4 load-effect-2">
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
      <div className="flex justify-center m-1">
        <div className="border-2 border-[#8C2A14] py-2 bg-[#F2D7B6] text-center rounded shadow-md">
          <div className="text-[#A62C21] blink px-1 font-bold">
            * REALIDAD EN REESCRITURA CONTINUA *
          </div>
          <div className="text-[#590202] text-xs italic mt-1">
            "La sobreexposición es un arma. Nos la tiran todos los días."
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-6 load-effect-4">
        {/* Sección hero con arte ASCII */}
        <div className="bg-[#D9C0A3] border-2 border-[#8C2A14] rounded-lg p-4 mb-8 shadow-md distortion-bg">
          {/* ASCII art con escala responsiva */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="min-w-max mx-auto">
              <pre className="text-center text-[0.4rem] xs:text-[0.5rem] sm:text-xs md:text-sm lg:text-base ascii-art font-mono whitespace-pre leading-tight">
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
            </div>
          </div>
          
          <div className="text-center mt-4 mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-[#590202] mb-4 glitch-text">
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
              className="inline-block bg-gradient-to-b from-[#A62C21] to-[#590202] text-[#F2D7B6] px-6 py-2 rounded font-bold shadow-md hover:from-[#8C2A14] hover:to-[#590202] nav-button"
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
            <div className="font-bold text-[#590202] bg-[#D9C0A3] px-3 py-1 rounded border border-[#8C2A14] number-change">
              {nodeCount}
            </div>
          </div>
        </div>

        {/* Artículo destacado - con efecto blur y mensaje de disponibilidad */}
        <div className="bg-[#D9C0A3] border-2 border-[#8C2A14] rounded-lg p-4 mb-8 shadow-md relative">
          {/* Overlay de desbloqueo para el sábado */}
          <div className="absolute inset-0 bg-[#590202] bg-opacity-60 backdrop-blur-md flex flex-col items-center justify-center z-10 rounded-lg scan-effect">
            <Lock className="w-12 h-12 text-[#F2D7B6] mb-4" />
            <div className="text-[#F2D7B6] text-xl font-bold text-center px-6 glitch-text">
              CONTENIDO
            </div>
            <div className="text-[#F2D7B6] text-lg font-bold mt-2 text-center">
              HABILITADO EL SÁBADO
            </div>
            <div className="text-[#D9C0A3] mt-4 text-sm text-center max-w-md">
            Cada símbolo pide tu atención. Esperá
            </div>
            <div className="text-[#F2D7B6] text-md italic text-center m-3">
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
      <footer className="bg-[#D9C0A3] text-[#590202] py-6 border-t-2 border-[#8C2A14] load-effect-5">
        <div className="container mx-auto  ">
          <Link
            href="https://open.substack.com/pub/chaos0rder/p/manifiesto-memetico-argentino?r=558e5&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true"
            className="nav-button bg-gradient-to-b from-[#A62C21] to-[#590202] text-[#F2D7B6] px-16 py-1 rounded font-bold shadow-md hover:from-[#8C2A14] hover:to-[#590202]"
            target="_blank" 
            rel="noopener noreferrer"
          >
            READ THE MANIFEST
          </Link>
          <div className="flex flex-col sm:flex-row items-center justify-center mb-4 mt-4 text-center sm:text-left">
            <div className="flex items-center mb-2 sm:mb-0">
              <Terminal className="mr-2 h-5 w-5 text-[#8C2A14]" />
              <span className="text-sm font-bold">chaos@order:~$</span>
            </div>
            <code className="text-xs md:text-sm whitespace-pre-wrap text-[#590202] overflow-x-auto max-w-full">
              {terminalText}
            </code>
          </div>

          <div className="mt-6 text-center text-xs">
            <div className="font-bold">{currentYear} - CHAOS ORDER</div>
            <div className="mt-2">
              <span className="text-[#A62C21] font-bold danger-text">
                PELIGRO MEMÉTICO ACTIVO
              </span>{" "}
              •
              <span className="text-[#8C2A14] font-bold">
                {" "}
                PROTECCIÓN COGNITIVA RECOMENDADA
              </span>
            </div>
            <div className="mt-4">
              <span className="text-[#590202] danger-text blink font-bold">
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