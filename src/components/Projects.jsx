import { motion } from "framer-motion";

const projects = [
  {
    title: "A skill share app",
    img: "https://verpex.com/assets/uploads/images/blog/Educational-Website-Skillshare.webp?v=1706613787",
  },
  {
    title: "Pure prefessional",
    img: "https://lirp.cdn-website.com/a8ff2f1c/dms3rep/multi/opt/opengraph_1200x630+%282%29-1920w.png",
  },
  {
    title: "Yummy Foods",
    img: " https://www.figma.com/community/resource/a68f5ea1-6e0e-4ac6-b22c-1066c463ada7/thumbnail",
  },
  {
    title: "Book Airlines",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808/5ca1f860392893.Y3JvcCwxOTI0LDE1MDYsMCww.png",
  },
  {
    title: "Real Estate",
    img: "https://cdn.prod.website-files.com/650311fc2ebc7fe34237a592/67607f4df2e8cf86ef301697_9-existing-design-system.webp",
  },
];
const Projects = () => {
  return (
    <section className="w-full bg-black py-20">
      <motion.h2
        className="text-white text-6xl font-serif font-bold text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Featured Projects
      </motion.h2>

      <div className="w-full flex flex-col items-center gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="w-full max-w-3xl relative overflow-hidden rounded-lg"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <motion.div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <h3 className="text-white text-2xl font-bold">{project.title}</h3>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
