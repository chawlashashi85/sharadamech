import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get Started Today
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Our team is ready to help bring your ideas to life
          </p>
        </div>

        <div className="mt-20 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="rounded-lg bg-gray-50 p-8 text-center">
              <Phone className="h-8 w-8 text-blue-600 mx-auto" />
              <h3 className="mt-4 text-xl font-medium text-gray-900">Call Us</h3>
              <p className="mt-2 text-gray-600">1-877-479-3680</p>
            </div>

            <div className="rounded-lg bg-gray-50 p-8 text-center">
              <Mail className="h-8 w-8 text-blue-600 mx-auto" />
              <h3 className="mt-4 text-xl font-medium text-gray-900">Email Us</h3>
              <p className="mt-2 text-gray-600">customerservice@protolabs.com</p>
            </div>

            <div className="rounded-lg bg-gray-50 p-8 text-center">
              <MapPin className="h-8 w-8 text-blue-600 mx-auto" />
              <h3 className="mt-4 text-xl font-medium text-gray-900">Visit Us</h3>
              <p className="mt-2 text-gray-600">5540 Pioneer Creek Drive<br />Maple Plain, MN 55359</p>
            </div>
          </div>

          <div className="mt-12 max-w-lg mx-auto">
            <form className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 py-3 px-4 rounded-md text-white font-medium hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}