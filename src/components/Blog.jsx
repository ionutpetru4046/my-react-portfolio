const blogs = [
  {
      id: 1,
      title: 'AI and Healthcare in 2024: The Next Frontier',
      description: 'AI in healthcare is revolutionizing diagnostics and patient care. See how AI is shaping the future of medicine.',
      image: '/src/assets/Future of AL healthcare.png',
      link: 'https://sidebench.com/ai-healthcare-future-holds/'
  },
  {
    id: 2,
    title: 'Generative AI and the Future of Creativity in 2024',
    description: 'How generative AI is transforming creativity in art, music, and writing. Explore the future of AI-assisted tools.',
    image: '/src/assets/AL trends 2024.png',
    link: 'https://www.solulab.com/top-ai-trends-for-2024/'
  },
  {
    id: 3,
    title: 'Ethics of AI: Navigating Challenges in 2024',
    description: 'A look into the ethical dilemmas of AI, focusing on bias, privacy, and the need for transparent algorithms.',
    image: '/src/assets/AL Ethics.png',
    link: 'https://www.jaroeducation.com/blog/ai-ethics/'
  },
  {
      id: 4,
      title: 'AI Trends for 2024: What to Expect in the Coming Year',
      description: 'Discover the key trends in AI for 2024, from generative AI to autonomous systems and AI ethics.',
      image: '/src/assets/Generative AL TRends 2024.png',
      link: 'https://www.plainconcepts.com/generative-ai-trends-2024/'
  },
  {
    id: 5,
    title: 'Eloquent JavaScript Fourth Edition',
    description: 'Learn Eloquent JavaScript Fourth Edition by Marijn Haverbeke 2024.',
    image: '/src/assets/Eloquent JavaScript.png',
    link: 'https://eloquentjavascript.net/'
},
  ];

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 id="blog" className="text-4xl font-bold text-center mt-20 mb-20">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <a
            key={blog.id} 
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg shadow-lg p-6"
            >
            <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-40 hover:scale-105 transform transition-all duration-300 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600 hover:text-white">{blog.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};
  


export default Blog
