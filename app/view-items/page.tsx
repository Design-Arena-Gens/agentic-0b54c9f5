'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Item {
  id: number;
  name: string;
  category: string;
  date: string;
  location: string;
  description: string;
  status: 'lost' | 'found';
}

const mockItems: Item[] = [
  {
    id: 1,
    name: 'Black Backpack',
    category: 'Bags & Backpacks',
    date: '2025-01-15',
    location: 'Library',
    description: 'Black Nike backpack with laptop compartment. Contains some notebooks.',
    status: 'found',
  },
  {
    id: 2,
    name: 'iPhone 13',
    category: 'Electronics',
    date: '2025-01-14',
    location: 'Cafeteria',
    description: 'Blue iPhone 13 with cracked screen protector.',
    status: 'found',
  },
  {
    id: 3,
    name: 'Student ID Card',
    category: 'ID Cards & Documents',
    date: '2025-01-13',
    location: 'Lecture Hall 3',
    description: 'NSUT Student ID card belonging to Rahul Sharma',
    status: 'found',
  },
  {
    id: 4,
    name: 'Water Bottle',
    category: 'Other',
    date: '2025-01-12',
    location: 'Sports Complex',
    description: 'Blue Milton water bottle with stickers',
    status: 'found',
  },
  {
    id: 5,
    name: 'Wireless Earbuds',
    category: 'Electronics',
    date: '2025-01-11',
    location: 'Computer Lab',
    description: 'White Apple AirPods with charging case',
    status: 'lost',
  },
  {
    id: 6,
    name: 'Textbook - Engineering Mathematics',
    category: 'Books & Stationery',
    date: '2025-01-10',
    location: 'Main Building',
    description: 'Engineering Mathematics by RK Jain, with name written inside',
    status: 'found',
  },
];

export default function ViewItems() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'lost' | 'found'>('all');
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const filteredItems = mockItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || item.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || item.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

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
              <Link href="/view-items" className="text-nsut-blue font-semibold">
                View Items
              </Link>
              <Link href="/report-lost" className="text-gray-700 hover:text-nsut-blue transition">
                Report Lost
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-poppins font-bold text-gray-900 mb-3">
            Lost & Found Items
          </h1>
          <p className="text-lg text-gray-600">
            Browse through reported items and claim yours
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div>
              <label htmlFor="search" className="block text-sm font-semibold text-gray-700 mb-2">
                Search Items
              </label>
              <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nsut-blue focus:border-transparent outline-none transition"
                placeholder="Search by name, description, or location..."
              />
            </div>

            {/* Category Filter */}
            <div>
              <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">
                Category
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nsut-blue focus:border-transparent outline-none transition"
              >
                <option value="">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Bags & Backpacks">Bags & Backpacks</option>
                <option value="Books & Stationery">Books & Stationery</option>
                <option value="Accessories">Accessories</option>
                <option value="Clothing">Clothing</option>
                <option value="ID Cards & Documents">ID Cards & Documents</option>
                <option value="Keys">Keys</option>
                <option value="Sports Equipment">Sports Equipment</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <label htmlFor="status" className="block text-sm font-semibold text-gray-700 mb-2">
                Status
              </label>
              <select
                id="status"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value as 'all' | 'lost' | 'found')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nsut-blue focus:border-transparent outline-none transition"
              >
                <option value="all">All Items</option>
                <option value="lost">Lost Items</option>
                <option value="found">Found Items</option>
              </select>
            </div>
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className={`h-2 ${item.status === 'found' ? 'bg-green-500' : 'bg-orange-500'}`}></div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-1">
                      {item.name}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-nsut-blue/10 text-nsut-blue text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.status === 'found'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {item.status.toUpperCase()}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">📍</span>
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">📅</span>
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                  {item.description}
                </p>

                <button
                  onClick={() => setSelectedItem(item)}
                  className="w-full bg-nsut-blue text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">No items found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Item Detail Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-poppins font-bold text-gray-900">
                {selectedItem.name}
              </h2>
              <button
                onClick={() => setSelectedItem(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <span className="text-sm font-semibold text-gray-700">Category:</span>
                <p className="text-gray-900">{selectedItem.category}</p>
              </div>
              <div>
                <span className="text-sm font-semibold text-gray-700">Status:</span>
                <p className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ml-2 ${
                  selectedItem.status === 'found'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-orange-100 text-orange-800'
                }`}>
                  {selectedItem.status.toUpperCase()}
                </p>
              </div>
              <div>
                <span className="text-sm font-semibold text-gray-700">Date:</span>
                <p className="text-gray-900">{new Date(selectedItem.date).toLocaleDateString()}</p>
              </div>
              <div>
                <span className="text-sm font-semibold text-gray-700">Location:</span>
                <p className="text-gray-900">{selectedItem.location}</p>
              </div>
              <div>
                <span className="text-sm font-semibold text-gray-700">Description:</span>
                <p className="text-gray-900">{selectedItem.description}</p>
              </div>
            </div>

            <div className="bg-nsut-accent/10 border border-nsut-accent/30 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-700">
                <strong>To claim this item:</strong> Please contact the NSUT Lost & Found office with
                proof of ownership or identification details.
              </p>
            </div>

            <div className="flex gap-4">
              <button
                className="flex-1 bg-nsut-blue text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
              >
                Contact Admin
              </button>
              <button
                onClick={() => setSelectedItem(null)}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

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
