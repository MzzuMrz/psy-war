"use client";

import Link from "next/link";
import Image from "next/image";
import { Terminal, FileText, ArrowRight, ChevronDown } from "lucide-react"; // Añadido ChevronDown
import ArticleImage from "../assets/image2.png";
import { useEffect, useState, useRef } from "react"; // Añadido useRef

export default function Home() {
  const currentYear = new Date().getFullYear();
  const [terminalText, setTerminalText] = useState("");
  const [nodeCount, setNodeCount] = useState(42);
  const [showPulse, setShowPulse] = useState(false);
  const readArticleRef = useRef(null); // Referencia al botón de leer artículo

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
      setNodeCount((prev) => {
        // Números fluctuantes entre 40 y 56
        const change = Math.floor(Math.random() * 3) - 1; // -1, 0, o 1
        const newValue = prev + change;
        return newValue >= 40 && newValue <= 56 ? newValue : prev;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Nuevo efecto para mostrar animación pulsante después de cargar
  useEffect(() => {
    // Esperar a que la página cargue completamente y activar la animación pulsante
    const timer = setTimeout(() => {
      setShowPulse(true);
    }, 2000);

    // Scroll automático al artículo después de cargar la página
    const scrollTimer = setTimeout(() => {
      if (readArticleRef.current) {
        window.scrollTo({
          top: readArticleRef.current.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(scrollTimer);
    };
  }, []);

  // Función para scroll al botón de leer artículo
  const scrollToArticleButton = () => {
    if (readArticleRef.current) {
      readArticleRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
      
      // Efecto de flash para destacar el botón
      readArticleRef.current.classList.add('highlight-flash');
      setTimeout(() => {
        readArticleRef.current.classList.remove('highlight-flash');
      }, 1000);
    }
  };

  // CSS interno para animaciones y estilo
  const styles = `
    .scrollbar-hide::-webkit-scrollbar { display: none; }
    .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    @keyframes pulseColors { 0%{color:#590202;transform:scale(1);}25%{color:#A62C21;transform:scale(1.01);}50%{color:#590202;}75%{color:#8C2A14;transform:scale(1.01);}100%{color:#590202;} }
    .ascii-art{animation:pulseColors 1.5s infinite;font-weight:bold;transform-origin:center;}
    @keyframes blink{0%,49%{opacity:1;}50%,100%{opacity:0;}}
    .blink{animation:blink 1s step-end infinite;}
    @keyframes dangerPulse{0%{color:#590202;}50%{color:#A62C21;text-shadow:0 0 4px #A62C21;}100%{color:#590202;}}
    .danger-text{animation:dangerPulse 2s infinite;font-weight:bold;}
    @keyframes warningPulse{0%{transform:scale(1);}50%{transform:scale(1.2);}100%{transform:scale(1);}}
    .warning-icon{animation:warningPulse 2s infinite;display:inline-block;}
    .warning-icon:nth-child(2){animation-delay:0.4s;}
    .warning-icon:nth-child(3){animation-delay:0.8s;}
    @keyframes numberChange{0%{transform:translateY(0);}45%{transform:translateY(-20px);opacity:0;}55%{transform:translateY(20px);opacity:0;}100%{transform:translateY(0);opacity:1;}}
    .number-change{display:inline-block;position:relative;}
    @keyframes glitchText{0%{transform:translateX(0);}5%{transform:translateX(2px);}10%{transform:translateX(-2px);}15%{transform:translateX(0);}100%{transform:translateX(0);}}
    .glitch-text{position:relative;display:inline-block;}
    .glitch-text:hover{animation:glitchText 0.5s forwards;text-shadow:-1px 0 #A62C21,1px 0 #590202;}
    .nav-button:hover{box-shadow:0 0 10px rgba(166,44,33,0.7);transition:box-shadow 0.3s ease-in-out;}
    @keyframes loadEffect{0%{opacity:0;transform:translateY(10px);}100%{opacity:1;transform:translateY(0);}}
    .load-effect-1{animation:loadEffect 0.5s forwards;}
    .load-effect-2{animation:loadEffect 0.5s 0.1s forwards;opacity:0;}
    .load-effect-3{animation:loadEffect 0.5s 0.2s forwards;opacity:0;}
    .load-effect-4{animation:loadEffect 0.5s 0.3s forwards;opacity:0;}
    .load-effect-5{animation:loadEffect 0.5s 0.4s forwards;opacity:0;}
    
    /* Nuevas animaciones para el botón de artículo */
    @keyframes pulsateButton {
      0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(166,44,33,0.7); }
      70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(166,44,33,0); }
      100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(166,44,33,0); }
    }
    .article-button-animated {
      animation: pulsateButton 2s infinite;
    }
    
    /* Animación de flecha indicadora */
    @keyframes bounceArrow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }
    .arrow-indicator {
      animation: bounceArrow 1.5s infinite;
    }
    
    /* Efecto de flash para destacar el botón */
    @keyframes flashHighlight {
      0%, 100% { background-color: #A62C21; }
      50% { background-color: #F2D7B6; color: #A62C21; }
    }
    .highlight-flash {
      animation: flashHighlight 0.5s ease-in-out 3;
    }
    
    /* Efecto de glow para el botón */
    .glow-effect {
      transition: all 0.3s ease;
    }
    .glow-effect:hover {
      box-shadow: 0 0 15px rgba(166,44,33,0.9);
      transform: translateY(-2px);
    }
    
    /* Estilo del indicador flotante */
    .floating-indicator {
      position: fixed;
      bottom: 30px;
      right: 30px;
      background: linear-gradient(to bottom, #A62C21, #590202);
      color: #F2D7B6;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(89,2,2,0.5);
      z-index: 100;
      transition: all 0.3s ease;
    }
    .floating-indicator:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 16px rgba(89,2,2,0.6);
    }
    
    /* Estilo para el contenedor de botón con cinta destacada */
    .ribbon-container {
      position: relative;
      margin-top: 12px;
      perspective: 1000px;
    }
    .ribbon {
      position: absolute;
      top: -12px;
      right: -10px;
      background: #A62C21;
      color: #F2D7B6;
      padding: 2px 8px;
      font-size: 10px;
      font-weight: bold;
      transform: rotate(3deg);
      box-shadow: 2px 2px 4px rgba(0,0,0,0.3);
      z-index: 1;
    }
    
    /* Overlay para destacar el botón */
    .highlight-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at center, transparent 30%, rgba(242,215,182,0.7) 70%);
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.5s ease;
      z-index: -1;
    }
    .article-section:hover .highlight-overlay {
      opacity: 1;
    }
    
    /* Estilos para enlaces tipo early 2000s */
    .retro-links {
      background: #F2D7B6;
      border: 2px dashed #8C2A14;
      padding: 10px;
      margin-bottom: 20px;
      text-align: center;
    }
    .retro-link {
      color: #590202;
      font-weight: bold;
      text-decoration: underline;
      font-family: "Comic Sans MS", cursive, sans-serif;
      background: linear-gradient(to right, #A62C21, #8C2A14);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-block;
      transition: all 0.3s;
    }
    .retro-link:hover {
      transform: scale(1.05);
      text-shadow: 0 0 5px rgba(166,44,33,0.7);
    }
    .archive-title {
      font-size: 14px;
      color: #8C2A14;
      margin-bottom: 8px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .blink-new {
      animation: blink 1s step-end infinite;
      color: #A62C21;
      font-weight: bold;
      font-size: 11px;
      margin-left: 5px;
      vertical-align: super;
    }
  `;

  return (
    <div className="min-h-screen bg-[#F2D7B6] text-[#590202] font-sans">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      {/* Header */}
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

      {/* Navigation */}
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

      {/* Construction Banner */}
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 load-effect-4">
        {/* Hero Section */}
        <div className="bg-[#D9C0A3] border-2 border-[#8C2A14] rounded-lg p-4 mb-8 shadow-md">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="min-w-max mx-auto">
              <pre className="text-center text-[0.4rem] xs:text-[0.5rem] sm:text-xs md:text-sm lg:text-base ascii-art font-mono whitespace-pre leading-tight">{`
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
              `}</pre>
            </div>
          </div>

          <div className="text-center mt-4 mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-[#590202] mb-4 glitch-text">
              CHAOS//ORDER :: SISTEMA EN PRIMERA CARGA
            </h2>
            <p className="text-[#8C2A14] mb-6">
              Portal de calibración para protección memética. psy-ops en
              progreso...
            </p>
            <p className="text-[#A62C21] text-sm italic mb-4">
              "No son chistes. Son virus de ideología. Inyectan ideas. Infectan
              percepciones."
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

        {/* Visitor Counter */}
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
        
        {/* Contenedor del artículo con indicador de contenido destacado */}
        {showPulse && (
          <div className="mb-4 flex justify-center">
            <div className="flex flex-col items-center">
              <span className="text-[#A62C21] font-bold text-sm mb-1">NUEVO ARTÍCULO DISPONIBLE</span>
              <ChevronDown className="arrow-indicator text-[#A62C21] h-6 w-6" />
            </div>
          </div>
        )}

        {/* Featured Article (NUEVO ARTÍCULO) */}
        <div className="bg-[#D9C0A3] border-2 border-[#8C2A14] rounded-lg p-4 mb-8 shadow-md article-section relative">
          <div className="border-b-2 border-[#8C2A14] mb-4 pb-2">
            <h3 className="text-[#590202] text-xl mb-2 font-bold">
              Ética Micelial: Una Filosofía Regenerativa para la Era Digital
            </h3>
            <div className="text-[#8C2A14] text-sm italic">
              La naturaleza sape
            </div>
          </div>

          <article className="mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/3">
                <div className="relative w-full aspect-square mb-2 bg-[#F2D7B6] border-2 border-[#8C2A14] rounded shadow-md overflow-hidden">
                  <Image
                    src={ArticleImage}
                    alt="Ilustración de micelio"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded"
                  />
                </div>
              </div>

              <div className="md:w-2/3 text-[#590202]">
                <p className="mb-2">
                  <strong>Replanteando la difusión de ideas:</strong> "¿Quién decide qué ideas merecen prosperar? Tradicionalmente, la respuesta ha sido ceder ese poder a algoritmos opacos controlados por grandes plataformas digitales. Pero existe una alternativa radical, inspirada en la sabiduría descentralizada del micelio."
                </p>
                <p className="mb-2">
                  <strong>Una ética fúngica:</strong> "Mi propuesta es una ética basada en la vitalidad ecosistémica: florecimiento comunitario, regeneración simbólica y equilibrio sistémico, tomando inspiración directa del mundo fúngico."
                </p>
                <p className="mb-2">
                  <strong>Tecnología distribuida:</strong> "Esta propuesta no se basa en una IA centralizada, sino en una red distribuida de agentes autónomos pero interconectados, que aprenden adaptativamente de sus contextos culturales locales, colaborando lateralmente como el micelio."
                </p>
                <p className="mb-2">
                  <strong>Aceleración descentralizada:</strong> "Esta visión se conecta con el concepto d/acc: aceleración tecnológica descentralizada y defensiva. No se trata solo de avanzar tecnológicamente, sino de hacerlo estratégicamente, favoreciendo tecnologías que distribuyen el poder en lugar de concentrarlo."
                </p>
                <p className="mb-2">
                  <strong>Un futuro simbiótico:</strong> "El futuro al que aspiramos es un cambio profundo en cómo circulan las ideas: pasar de plataformas centralizadas hacia redes abiertas, gobernadas colectivamente por comunidades autónomas e interconectadas."
                </p>
                <p className="italic text-[#A62C21]">
                  «Un futuro simbiótico donde todos podamos florecer juntos, guiados por una tecnología alineada con los principios más profundos de la vida y la regeneración natural.»
                </p>
                
                {/* Contenedor del botón mejorado */}
                <div className="ribbon-container relative">
                  <div className="flex justify-between items-center mt-6 bg-[#F2D7B6] p-3 rounded border-2 border-[#8C2A14] shadow-md">
                    <div className="text-[#8C2A14] font-bold">PUBLICADO: 29 ABRIL 2025</div>
                    <Link
                      href="https://open.substack.com/pub/chaos0rder/p/etica-micelial-una-filosofia-regenerativa?r=558e5&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true"
                      ref={readArticleRef}
                      className={`bg-gradient-to-b from-[#A62C21] to-[#590202] text-[#F2D7B6] px-4 py-2 rounded font-bold shadow-md glow-effect flex items-center ${showPulse ? 'article-button-animated' : ''}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LEER ARTÍCULO COMPLETO
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                  <div className="ribbon">NUEVO</div>
                </div>
              </div>
            </div>
          </article>
          
          {/* Overlay para destacar el área del botón */}
          <div className="highlight-overlay"></div>
        </div>
        
        {/* Artículos anteriores en estilo retro early 2000s */}
        <div className="retro-links">
          <div className="archive-title">:: ARCHIVO DE ARTÍCULOS ::</div>
          <div className="flex flex-col space-y-2">
            <Link
              href="https://open.substack.com/pub/chaos0rder/p/manual-de-supervivencia-memetica?r=558e5&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true"
              className="retro-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              [.//] Manual de supervivencia memética - No quiero que dejes de consumir, solo seamos conscientes
              <span className="blink-new">RECIENTE</span>
            </Link>
            <Link
              href="https://open.substack.com/pub/chaos0rder/p/tralalero-tralala-o-tum-tum-tum-sahur?r=558e5&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true"
              className="retro-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              [.//] ¿Tralalero Tralala o Tum tum tum sahur? - Un tiburón con Nikes me explicó el colapso simbólico
            </Link>
            <Link
              href="https://open.substack.com/pub/chaos0rder/p/calamaro-y-el-partenon-de-los-inmortales?r=558e5&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true"
              className="retro-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              [.//] Calamaro y el Partenón de los Inmortales: Cuando ya no quedan ídolos que matar
            </Link>
          </div>
        </div>
      </div>

      {/* Botón flotante para ir al artículo */}
      {showPulse && (
        <div className="floating-indicator" onClick={scrollToArticleButton}>
          <ArrowRight className="h-6 w-6" />
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#D9C0A3] text-[#590202] py-6 border-t-2 border-[#8C2A14] load-effect-5">
        <div className="container mx-auto">
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
                "El contagio ya sucedió. No te diste cuenta. No necesitó tu
                permiso."
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}