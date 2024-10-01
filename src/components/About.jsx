const About = () => {
  return (
    <section className="bg-black-900 py-14">
    <div className="max-w-5xl mx-auto px-4">
      <h2 id="about-me" className="text-4xl text-center font-semibold mb-20">About Me</h2>
      <p className="text-lg leading-relaxed">
        Hi! I’m Coste Ionut, a passionate Frontend web developer with a love for creating
        beautiful and functional web applications. With a background in
        creating personal Projects, I thrive on solving complex problems and delivering
        high-quality solutions. I enjoy collaborating with teams, learning
        new technologies, and pushing the boundaries of what’s possible on
        the web.
      </p>
      <div className="mt-20">
        <h3 id="skills" className="text-4xl text-center font-semibold mb-20">My Skills</h3>
        <ul className="gap-4 list-disc list-inside grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <li className="text-gray-500 cursor-default hover:text-white">HTML5, CSS3, Tailwind CSS</li>
          <li className="text-gray-500 cursor-default hover:text-white">JavaScript (ES6+), React.js, Node.js</li>
          <li className="text-gray-500 cursor-default hover:text-white">Typescript, Express.js, MongoDB</li>
          <li className="text-gray-500 cursor-default hover:text-white">API Development, RESTful Services</li>
          <li className="text-gray-500 cursor-default hover:text-white">Version Control (Git, GitHub)</li>
          <li className="text-gray-500 cursor-default hover:text-white">JSON, AJAX, Jquery</li>
          <li className="text-gray-500 cursor-default hover:text-white">Postman API, SQL</li>
          <li className="text-gray-500 cursor-default hover:text-white">Bootstrap5, Next.js</li>
          <li className="text-gray-500 cursor-default hover:text-white">Sourcetree, GitHub Pages</li>
        </ul>
      </div>
    </div>
  </section>
);
};


export default About
