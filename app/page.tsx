import Link from 'next/link';

export default function Home() {
  return (
      <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-indigo-900 text-white py-6">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-4xl font-bold">FakeBook</h1>
          <nav className="space-x-4">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Profile</a>
            <a href="#" className="hover:underline">Notifications</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-indigo-800 text-white py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="max-w-md mx-auto">
              <h2 className="text-4xl font-semibold mb-4">Connect with the World.</h2>
              <p className="text-lg mb-6">
                Join FakeBook and discover a world of connections, share your thoughts, and stay updated with what matters to you.
              </p>
              <a href="#" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg">
                Sign Up Now
              </a>
              <Link href="/admin" className="ml-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg">
                Admin
              </Link>
               <Link href="/login" className="ml-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg">
                Login 
              </Link>
            </div>
            <div className="hidden md:block">
              {/* Illustration or Hero Image */}
              <img src="/illustration.svg" alt="Social Network Illustration" />
            </div>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Explore FakeBook</h2>
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Connect with Friends</h3>
              <p className="text-gray-600">
                Find and connect with your friends on FakeBook, and stay in touch like never before.
              </p>
            </div>
            {/* Feature Card 2 */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Share Your Moments</h3>
              <p className="text-gray-600">
                Share your life's moments, photos, and stories with your network and the world.
              </p>
            </div>
            {/* Feature Card 3 */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Discover Interests</h3>
              <p className="text-gray-600">
                Explore a wide range of topics and interests shared by the FakeBook community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 FakeBook. All rights reserved.</p>
        </div>
      </footer>
    </div>
    )
}
