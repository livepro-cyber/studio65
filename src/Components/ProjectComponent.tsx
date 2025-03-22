import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectImageDialog from './ProjectImageDialog';
import { Project, ProjectCategory, projects, categories } from '../data/ProjectData';

export function ProjectPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1]
      }
    })
  };

  return (
    <div className="min-h-screen bg-white page-transition">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center animate-image-zoom"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80)'
          }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            className="text-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.23, 1, 0.32, 1]
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1]
              }}
            >
              <span className="inline-block text-sm uppercase tracking-widest text-gray-300 font-light mb-2">
                Portfolio
              </span>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl font-light text-white tracking-wider mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1]
              }}
            >
              OUR PROJECTS
            </motion.h1>
            <motion.p
              className="text-gray-200 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1]
              }}
            >
              Transforming spaces with innovative design and sustainable solutions
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
            ease: [0.23, 1, 0.32, 1]
          }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-6 py-2 rounded-full transition-all duration-300 ease-in-out
                ${selectedCategory === category
                  ? 'bg-black text-white shadow-lg transform scale-105'
                  : 'text-gray-600 hover:bg-gray-200 hover:text-black'
                }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              className="relative h-[400px] md:h-[500px] overflow-hidden group rounded-xl shadow-lg cursor-pointer"
              onClick={() => handleProjectClick(project)}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className={`
                absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent
                transition-opacity duration-300
                md:opacity-0 md:group-hover:opacity-100
                flex flex-col justify-end p-8
              `}>
                <div className="transform transition-transform duration-300 md:translate-y-4 md:group-hover:translate-y-0">
                  <span className="text-gray-300 text-sm uppercase tracking-wider mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-light text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed opacity-90">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="max-w-3xl mx-auto text-center my-16 md:my-24 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="block text-sm uppercase tracking-wider text-gray-500 mb-4">
            Our Philosophy
          </span>
          <h2 className="text-3xl md:text-4xl font-light mb-6 leading-tight">
            Design is not just what it looks like. Design is how it works.
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We believe that great design solves problems beautifully. Our approach combines functionality with aesthetics to create spaces that are both purposeful and pleasing to the senses.
          </p>
        </motion.div>
      </div>

      {/* Image Dialog */}
      {selectedProject && (
        <ProjectImageDialog
          isOpen={isDialogOpen}
          onClose={closeDialog}
          images={selectedProject.images}
          title={selectedProject.title}
        />
      )}
    </div>
  );
}

export default ProjectPage;
