const projects = [
  { id: 1, title: 'Modern Saas Website', description: 'Skills Used: Vite+React.js TailwindCSS Framer-Motion', image: '/public/assets/project1.png', link: 'https://modern-saas-website.vercel.app/' },
  { id: 2, title: 'Advertising Website', description: 'Skills Used: Vite+React.js TailwindCSS Framer-Motion', image: '/public/assets/project2.png', link: 'https://landing-page-advertising-website.vercel.app/' },
  { id: 3, title: 'VirtualR Website', description: 'Skills Used: Vite+React.js TailwindCSS Framer-Motion', image: '/public/assets/project3.png', link: 'https://landing-page-3dpjrrx48-ionutpetru4046s-projects.vercel.app/' },
  { id: 4, title: 'Sample Landing Page', description: 'Skills Used: Vite+React.js TailwindCSS', image: '/public/assets/project4.png', link: 'https://simple-landing-page-nu.vercel.app/' },
  { id: 5, title: 'React.js Task Tracker App', description: 'Skills USed: React.js, Nodejs NPM Manager', image: '/public/assets/project5.png', link: 'https://ionutpetru4046.github.io/ecommerce/index.html' },
  { id: 6, title: 'E-ecommerce Shop', description: 'HTML CSS Javascript,', image: '/public/assets/project6.png', link: 'https://ionutpetru4046.github.io/Task-Tracker-react.js/'},
];

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 id="projects" className="text-4xl font-semibold text-center mb-20">Projects</h2>
      <h3 className="text-3xl font-medium text-center mb-10">My Latest Projects</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white rounded-lg hover:scale-105 transform transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl text-center font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 text-center hover:text-white">{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;