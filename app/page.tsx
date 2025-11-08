import Link from 'next/link';

export default function Home() {
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
              <Link href="/report-lost" className="text-gray-700 hover:text-nsut-blue transition">
                Report Lost
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-nsut-blue to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-poppins font-bold mb-6 leading-tight">
                Lost & Found Portal - NSUT
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Report lost items or claim found belongings easily.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/report-lost"
                  className="bg-nsut-accent text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition shadow-lg"
                >
                  Report Lost Item
                </Link>
                <Link
                  href="/view-items"
                  className="bg-white text-nsut-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
                >
                  View Found Items
                </Link>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative w-full h-80 flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-500 rounded-3xl transform rotate-3 opacity-20"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 w-full h-full flex items-center justify-center">
                  <svg className="w-48 h-48 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple, fast, and efficient lost & found management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-nsut-blue/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-4xl">🔍</span>
              </div>
              <h3 className="text-2xl font-poppins font-semibold text-gray-900 mb-4">
                Quick Search
              </h3>
              <p className="text-gray-600">
                Find your lost belongings quickly with our advanced search and filter system.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-nsut-blue/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-4xl">📝</span>
              </div>
              <h3 className="text-2xl font-poppins font-semibold text-gray-900 mb-4">
                Easy Reporting
              </h3>
              <p className="text-gray-600">
                Report lost or found items in seconds with our simple and intuitive form.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-nsut-blue/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-4xl">✅</span>
              </div>
              <h3 className="text-2xl font-poppins font-semibold text-gray-900 mb-4">
                Verified Claims
              </h3>
              <p className="text-gray-600">
                Secure verification process ensures items reach their rightful owners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-nsut-blue to-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-poppins font-bold text-white mb-6">
            Found or Lost Something? Get Started!
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of NSUT students using our platform
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/report-lost"
              className="bg-nsut-accent text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition shadow-lg"
            >
              Report Now
            </Link>
            <Link
              href="/view-items"
              className="bg-white text-nsut-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
            >
              Browse Items
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 NSUT Lost & Found Portal. Made for Netaji Subhas University of Technology students.
          </p>
        </div>
      </footer>
    </div>
  );
}
