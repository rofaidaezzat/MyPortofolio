import React from 'react';

const Contact = () => (
  <section id="contact" className="py-20 px-4 max-w-2xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
    <p className="text-lg text-gray-300 mb-4">Feel free to reach out for collaborations or just a friendly hello 👋</p>
    <a href="mailto:tasmirolislam@gmail.com" className="inline-block bg-green-400 text-gray-900 font-bold px-8 py-3 rounded shadow hover:bg-green-300 transition mb-4">tasmirolislam@gmail.com</a>
    <div className="flex justify-center gap-6 mt-6">
      <a href="#" className="hover:text-green-400 transition">Github</a>
      <a href="#" className="hover:text-green-400 transition">Linkedin</a>
      <a href="#" className="hover:text-green-400 transition">Facebook</a>
    </div>
  </section>
);

export default Contact; 