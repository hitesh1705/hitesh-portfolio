import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [sent, setSent] = useState(false);
    return (
    <section id="contact" className="py-16">
    <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-4 border-blue-600 inline-block">Contact</h2>
    {
    !sent ? (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow-md max-w-2xl">
    <input required name="name" placeholder="Your name" className="p-3 rounded border" />
    <input required name="email" placeholder="Your email" type="email" className="p-3 rounded border" />
    <textarea required name="message" placeholder="Message" className="p-3 rounded border md:col-span-2" rows={6} />
    <button className="md:col-span-2 px-5 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">Send message</button>
    </form>
    ) : (
    <div className="p-6 bg-green-50 text-green-700 rounded-xl shadow-md max-w-2xl">Thanks — I will get back to you!</div>
)}
</section>
);
};

export default Contact;