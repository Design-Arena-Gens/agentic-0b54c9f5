'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ReportLost() {
  const [formData, setFormData] = useState({
    itemName: '',
    category: '',
    dateLoat: '',
    location: '',
    description: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        itemName: '',
        category: '',
        dateLoat: '',
        location: '',
        description: '',
        contactName: '',
        contactEmail: '',
        contactPhone: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-nsut-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <h1 className="text-xl font-poppins font-semibold text-nsut-blue">
                NSUT Lost & Found
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-nsut-blue transition">
                Home
              </Link>
              <Link href="/view-items" className="text-gray-700 hover:text-nsut-blue transition">
                View Items
              </Link>
              <Link href="/report-lost" className="text-nsut-blue font-semibold">
                Report Lost
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-poppins font-bold text-gray-900 mb-3">
            Report a Lost Item
          </h1>
          <p className="text-lg text-gray-600">
            Fill out the form below to report your lost item. We'll help you find it!
          </p>
        </div>

        {submitted && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center">
              <span className="text-2xl mr-3">✅</span>
              <div>
                <p className="font-semibold text-green-900">Report Submitted Successfully!</p>
                <p className="text-green-700 text-sm">We'll notify you if someone finds your item.</p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
          {/* Item Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-semibold text-gray-900 mb-6">
              Item Information
            </h2>

            <div className="space-y-6">
              <div>
                <label htmlFor="itemName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Item Name *
                </label>
                <input
                  type="text"
                  id="itemName"
                  name="itemName"
                  value={formData.itemName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nsut-blue focus:border-transparent outline-none transition"
                  placeholder="e.g., Black Backpack"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nsut-blue focus:border-transparent outline-none transition"
                >
                  <option value="">Select a category</option>
                  <option value="electronics">Electronics</option>
                  <option value="bags">Bags & Backpacks</option>
                  <option value="books">Books & Stationery</option>
                  <option value="accessories">Accessories</option>
                  <option value="clothing">Clothing</option>
                  <option value="id-cards">ID Cards & Documents</option>
                  <option value="keys">Keys</option>
                  <option value="sports">Sports Equipment</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="dateLoat" className="block text-sm font-semibold text-gray-700 mb-2">
                  Date Lost *
                </label>
                <input
                  type="date"
                  id="dateLoat"
                  name="dateLoat"
                  value={formData.dateLoat}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nsut-blue focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                  Last Seen Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nsut-blue focus:border-transparent outline-none transition"
                  placeholder="e.g., Library, Cafeteria, Lecture Hall 3"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nsut-blue focus:border-transparent outline-none transition"
                  placeholder="Please provide details like color, brand, distinguishing features..."
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-semibold text-gray-900 mb-6">
              Contact Information
            </h2>

            <div className="space-y-6">
              <div>
                <label htmlFor="contactName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nsut-blue focus:border-transparent outline-none transition"
                  placeholder="Full Name"
                />
              </div>

              <div>
                <label htmlFor="contactEmail" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nsut-blue focus:border-transparent outline-none transition"
                  placeholder="you@nsut.ac.in"
                />
              </div>

              <div>
                <label htmlFor="contactPhone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="contactPhone"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nsut-blue focus:border-transparent outline-none transition"
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-nsut-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition shadow-lg"
            >
              Submit Report
            </button>
            <Link
              href="/"
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 NSUT Lost & Found Portal. Made for Netaji Subhas University of Technology students.
          </p>
        </div>
      </footer>
    </div>
  );
}
