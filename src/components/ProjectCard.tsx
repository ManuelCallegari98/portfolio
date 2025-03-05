import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function ProjectCard({
  title,
  description,
  tech,
  imageUrl,
  videoUrl,
  githubUrl,
  demoUrl,
}: {
  title: string;
  description: string;
  tech: string[];
  imageUrl?: string;
  videoUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
}) {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm border border-racing-primary/10 p-6 rounded-xl relative overflow-hidden group"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="absolute inset-0 bg-racing-light opacity-0 group-hover:opacity-20 transition-opacity" />

      <div className="h-64 bg-racing-light/20 rounded-lg mb-4 relative overflow-hidden">
        {videoUrl ? (
          <div className="relative w-full h-full">
            <iframe
              src={videoUrl}
              frameBorder="0"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        ) : imageUrl ? (
          <div className="relative w-full h-full">
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        ) : null}
      </div>

      <h3 className="text-xl font-bold mb-2 text-racing-primary dark:text-racing-accent">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item) => (
          <span
            key={item}
            className="px-2 py-1 text-sm bg-racing-light/10 text-racing-primary dark:text-racing-accent rounded-full"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex gap-4 z-10 relative">
        {githubUrl && (
          <a 
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 bg-racing-primary/10 hover:bg-racing-primary/20 text-racing-primary dark:text-racing-accent rounded-md transition-all cursor-pointer"
          >
            <FiGithub size={20} />
            <span>GitHub</span>
          </a>
        )}
        {demoUrl && (
          <a 
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 bg-racing-primary/10 hover:bg-racing-primary/20 text-racing-primary dark:text-racing-accent rounded-md transition-all cursor-pointer"
          >
            <FiExternalLink size={20} />
            <span>Demo</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}