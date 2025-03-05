"use client";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiExternalLink } from "react-icons/fi";
import ThemeToggle from "@/components/ThemeToggle";
import ProjectCard from "@/components/ProjectCard";
import ParallaxBackground from "@/components/ParallaxBackground";
import Image from "next/image";

export default function Home() {
  const projects = [
    {
      title: "Pagina Web Equipo de Futbol",
      description:
        "Pagina web frontend con seccion de noticias, ecommerce, team e historia",
      tech: ["React", "Tailwind CSS"],
      imageUrl: "/images/ddb.png", // Agrega la imagen del proyecto
      githubUrl: "https://github.com/ManuelCallegari98/Defensores-del-Branca",
      demoUrl: "https://defensores-del-branca.vercel.app/", // URL de la demo si está disponible
    },
    {
      title: "Catalogo de Productos Mesopotamia Seguridad Industrial",
      description:
        "Plataforma para el catalogo de productos de Mesopotamia Seguridad Industrial",
      tech: ["Next.js", "Tailwind CSS"],
      imageUrl: "/images/mesopotamia.png", // Agrega la imagen del proyecto
      githubUrl: "https://github.com/ManuelCallegari98/PPS-Mesopotamia",
      demoUrl: "https://mesopotamiaseguridad.com/", // URL de la demo si está disponible
    },
    {
      title: "Pagina de peliculas - TangoFlix",
      description:
        "Plataforma para buscar peliculas y series, agregarlas a una lista y valorarlas",
      tech: [
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "Sequelize",
        "Express",
        "PostgreSQL",
      ],
      videoUrl:
        "https://www.loom.com/embed/eba159b641e04715a726ccef1bd85918?sid=43403f1a-824b-49b2-89df-6f2e65b30aff",
      isVideo: true,
      githubUrl: "https://github.com/ManuelCallegari98/tp-taller",
      demoUrl:
        "https://www.loom.com/share/eba159b641e04715a726ccef1bd85918?sid=a8b59fd8-b43b-4c5a-8741-8a12e8fd0567", // URL de la demo si está disponible
    },
    {
      title: "Lenguaje de programacion propio - PESC",
      description:
        "Lenguaje de programacion desarrollado para la materia Sintaxis y semanticas de los lenguajes.",
      tech: [
        "TypeScript"
      ],
      imageUrl: "/images/pesc.png", // Agrega la imagen del proyecto
      githubUrl: "https://github.com/ManuelCallegari98/tp-taller",
      demoUrl:
        "https://replit.com/@manuelcallegari/PESC", // URL de la demo si está disponible
    },
  ];
  return (
    <main className="container mx-auto px-6 relative min-h-screen ">
      <ParallaxBackground />
      <motion.div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </motion.div>

      {/* Hero Section with Avatar */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-4"
          >
            <h1
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r 
            from-racing-light to-racing-primary bg-clip-text text-transparent leading-[1.2] pb-2 mb-8"
            >
              ¡Hola, Soy Manuel Callegari!
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300">
              Desarrollador Full Stack apasionado por crear soluciones
              innovadoras. Con experiencia en tecnologías modernas y un enfoque
              en la calidad del código.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300">
              Especializado en React, Next.js, y Node.js. Siempre buscando
              nuevos desafíos y oportunidades para aprender y crecer
              profesionalmente.
            </p>

            <div className="flex gap-4">
              <motion.a
                href="#proyectos"
                className="bg-racing-primary text-racing-accent px-8 py-3 
                rounded-full hover:bg-racing-light transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Proyectos
              </motion.a>
              <motion.a
                href="#contacto"
                className="border-2 border-racing-primary text-racing-primary 
                dark:text-racing-accent px-8 py-3 rounded-full 
                hover:bg-racing-primary hover:text-racing-accent transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contactar
              </motion.a>
            </div>
          </motion.div>

          {/* Avatar/Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-72 h-72 mx-auto relative">
              {/* Animated background blob */}
              <motion.div
                className="absolute inset-0 z-0"
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                  borderRadius: [
                    "60% 40% 30% 70%/60% 30% 70% 40%",
                    "30% 60% 70% 40%/50% 60% 30% 60%",
                    "60% 40% 30% 70%/60% 30% 70% 40%",
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  background:
                    "linear-gradient(45deg, rgba(110, 193, 230, 0.3), rgba(28, 52, 99, 0.3))",
                }}
              />

              {/* Pulse effect */}
              <div className="absolute inset-0 bg-racing-primary rounded-full opacity-10 animate-pulse" />

              {/* Profile image */}
              <Image
                src="/images/me4.jpg"
                alt="Manuel Callegari"
                width={300}
                height={300}
                className="rounded-full w-full h-full object-cover border-1 border-racing-primary relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </section>

      


      {/* Sección Proyectos */}
      <section id="proyectos" className="py-20">
        <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-racing-light to-racing-primary bg-clip-text text-transparent">
          Proyectos Destacados
        </h2>
        {/* <iframe src="https://replit.com/@manuelcallegari/PESC?embed=true" width="1400" height="650"></iframe>*/}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              imageUrl={project.imageUrl}
              videoUrl={project.videoUrl}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
            />
          ))}
        </div>
      </section>

      {/* Sección Experiencia */}
      <section id="experiencia" className="py-20">
        <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-racing-light to-racing-primary bg-clip-text text-transparent">
          Experiencia Profesional
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Mesopotamia Seguridad Industrial */}
          <motion.div 
            className="bg-white/5 backdrop-blur-sm border border-racing-primary/10 p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h3 className="text-2xl font-bold text-racing-primary dark:text-racing-accent">Mesopotamia Seguridad Industrial</h3>
              <span className="text-sm text-gray-600 dark:text-gray-400">Noviembre 2024 - Diciembre 2024</span>
            </div>
            <h4 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">Desarrollador Web & Especialista en Seguridad de Correo Electrónico</h4>
            
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Desarrollo de un sitio web de catálogo y contacto para la empresa utilizando Next.js y Tailwind CSS.</li>
              <li>Implementación de web scraping con Playwright para extraer y estructurar información de productos.</li>
              <li>Configuración de DNS y seguridad en plataformas de email marketing, incluyendo la implementación de registros SPF, DKIM y DMARC.</li>
              <li>Migración a Brevo (Sendinblue) para optimizar campañas de email marketing.</li>
              <li>Creación de plantillas HTML de email para mantener coherencia y mejorar la presentación.</li>
              <li>Optimización del rendimiento y experiencia de usuario en el sitio web.</li>
            </ul>
            
            <div className="mt-4">
              <a 
                href="https://mesopotamiaseguridad.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-racing-primary dark:text-racing-accent hover:underline inline-flex items-center"
              >
                Ver sitio web <FiExternalLink className="ml-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

            {/* Sección Educación */}
            <section id="educacion" className="py-20">
        <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-racing-light to-racing-primary bg-clip-text text-transparent">
          Educación
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Universidad */}
          <motion.div 
            className="bg-white/5 backdrop-blur-sm border border-racing-primary/10 p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h3 className="text-2xl font-bold text-racing-primary dark:text-racing-accent">
                Ingeniería en Sistemas de Información
              </h3>
              <span className="text-sm text-gray-600 dark:text-gray-400">En curso</span>
            </div>
            <h4 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">
              Universidad Tecnológica Nacional - Concepción del Uruguay
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A dos materias de completar la carrera
            </p>
            <div className="mt-2">
              <a 
                href="https://drive.google.com/file/d/1PhZqBA74WZzIY-0gxvEb8baOE12d0VYN/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-racing-primary dark:text-racing-accent hover:underline inline-flex items-center"
              >
                Ver materias aprobadas y calificaciones <FiExternalLink className="ml-1" />
              </a>
            </div>
          </motion.div>

          {/* Secundaria */}
          <motion.div 
            className="bg-white/5 backdrop-blur-sm border border-racing-primary/10 p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h3 className="text-2xl font-bold text-racing-primary dark:text-racing-accent">
                Bachiller en Humanidades y Ciencias Sociales
              </h3>
              <span className="text-sm text-gray-600 dark:text-gray-400">2016</span>
            </div>
            <h4 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">
              Escuela Secundaria N°1 San Antonio
            </h4>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 ">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-racing-light to-racing-primary bg-clip-text text-transparent">
            ¿Trabajamos Juntos?
          </h2>
          <p className="text-center text-lg mb-12 text-gray-600 dark:text-gray-300">
            Estoy disponible para nuevas oportunidades. ¡Conectemos y creemos
            algo increíble!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.a
              href="https://github.com/ManuelCallegari98"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm 
                border border-racing-primary/10 hover:border-racing-primary/30 transition-all"
              whileHover={{ y: -5 }}
            >
              <FiGithub className="text-4xl mb-4 text-racing-primary dark:text-racing-accent" />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-sm text-center text-gray-600 dark:text-gray-300">
                Explora mis proyectos y contribuciones
              </p>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/manuel-callegari-3b54841a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm 
                border border-racing-primary/10 hover:border-racing-primary/30 transition-all"
              whileHover={{ y: -5 }}
            >
              <FiLinkedin className="text-4xl mb-4 text-racing-primary dark:text-racing-accent" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-sm text-center text-gray-600 dark:text-gray-300">
                Conectemos profesionalmente
              </p>
            </motion.a>

            <motion.a
              href="mailto:callegarimanuel.dev@gmail.com"
              className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm 
                border border-racing-primary/10 hover:border-racing-primary/30 transition-all"
              whileHover={{ y: -5 }}
            >
              <FiMail className="text-4xl mb-4 text-racing-primary dark:text-racing-accent" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-center text-gray-600 dark:text-gray-300">
                Escríbeme directamente
              </p>
            </motion.a>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Ubicado en Entre Rios, Argentina 🇦🇷
              <br />
              Disponible para oportunidades remotas
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
