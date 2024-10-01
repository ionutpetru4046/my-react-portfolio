import { useState } from 'react';

const Contact = () => {
  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming there's a function to handle the form submission
    // This is a placeholder for actual functionality
    console.log(`Name: ${formFields.name}, Email: ${formFields.email}, Message: ${formFields.message}`);
    // Reset the form fields after submission
    setFormFields({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="border-t border-stone-900 pb-10">
        <h2 id="contact" className="my-10 text-center font-semibold text-4xl">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-4">
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-100">Name</label>
                <input type="text" name="name" id="name" value={formFields.name} onChange={handleInputChange} className="mt-1 block w-full pl-3 text-black pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-100">Email</label>
                <input type="email" name="email" id="email" value={formFields.email} onChange={handleInputChange} className="mt-1 block w-full pl-3 pr-3 text-black py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-r-indigo-500 sm:text-sm" />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-100">Message</label>
                <textarea id="message" name="message" rows={3} value={formFields.message} onChange={handleInputChange} className="mt-1 block w-full pl-3 pr-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="text-center">
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Send Message</button>
            </div>
        </form>
    </div>
  )
}


export default Contact
