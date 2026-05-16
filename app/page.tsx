'use client';
export default function CarpartsStoreUI() {
  const categories = [
    'Headlights',
    'Bumpers',
    'Mirrors',
    'Suspension',
    'Brake Parts',
    'Engine Parts',
  ];

  const featuredProducts = [
    {
      name: 'LED Headlight Assembly',
      price: '$249',
      image:
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Performance Brake Kit',
      price: '$399',
      image:
        'https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Front Bumper Sport',
      price: '$599',
      image:
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Suspension Coilovers',
      price: '$699',
      image:
        'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black tracking-widest uppercase bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
              Carparts
            </h1>
          </div>

          <nav className="hidden md:flex gap-8 text-gray-300 font-medium">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#categories" className="hover:text-white transition">Categories</a>
            <a href="#products" className="hover:text-white transition">Products</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-500 transition">
              Cart (0)
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/90 z-10" />

        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-20 text-center max-w-5xl px-6">
          <p className="uppercase tracking-[6px] text-red-400 mb-5 font-semibold">
            USA Automotive Marketplace
          </p>

          <h2 className="text-6xl md:text-8xl font-black leading-tight mb-8">
            Premium Auto Parts
            <span className="block bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
              For Every Build
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Discover high-quality performance parts, headlights, bumpers, brakes,
            suspension systems, and accessories built for modern automotive enthusiasts.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <button className="px-10 py-5 rounded-2xl bg-red-600 text-lg font-bold hover:scale-105 transition-transform shadow-2xl shadow-red-500/30">
              Shop Now
            </button>

            <button className="px-10 py-5 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl hover:bg-white/20 transition text-lg font-semibold">
              Browse Categories
            </button>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="relative z-20 -mt-14 px-6">
        <div className="max-w-6xl mx-auto bg-[#0d132b] border border-white/10 rounded-3xl p-8 shadow-2xl">
          <div className="grid md:grid-cols-4 gap-5">
            <input
              placeholder="Year"
              className="bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

            <input
              placeholder="Make"
              className="bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

            <input
              placeholder="Model"
              className="bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

            <button className="bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl font-bold text-lg hover:opacity-90 transition">
              Search Parts
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="max-w-7xl mx-auto px-6 py-28">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h3 className="text-5xl font-black mb-4">Top Categories</h3>
            <p className="text-gray-400 text-lg">
              Explore our most popular automotive product categories.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-red-500/40 hover:-translate-y-2 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500" />

              <h4 className="text-xl font-bold group-hover:text-red-400 transition">
                {category}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="bg-[#070b18] py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-14">
            <div>
              <h3 className="text-5xl font-black mb-4">Featured Products</h3>
              <p className="text-gray-400 text-lg">
                Best-selling auto parts trusted by customers across the USA.
              </p>
            </div>

            <button className="hidden md:block px-6 py-3 rounded-xl border border-white/10 hover:bg-white/10 transition">
              View All Products
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl group hover:border-red-500/40 transition-all"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-3">{product.name}</h4>

                  <div className="flex items-center justify-between">
                    <p className="text-3xl font-black text-red-400">
                      {product.price}
                    </p>

                    <button className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-500 transition font-semibold">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <h3 className="text-5xl font-black mb-5">Why Choose Carparts?</h3>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We provide premium automotive parts with fast USA shipping and trusted marketplace quality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h4 className="text-3xl font-bold mb-5 text-red-400">Fast Shipping</h4>
            <p className="text-gray-400 text-lg leading-relaxed">
              Nationwide delivery across the United States with reliable logistics.
            </p>
          </div>

          <div className="p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h4 className="text-3xl font-bold mb-5 text-orange-400">Premium Quality</h4>
            <p className="text-gray-400 text-lg leading-relaxed">
              Carefully selected automotive parts built for performance and durability.
            </p>
          </div>

          <div className="p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h4 className="text-3xl font-bold mb-5 text-yellow-400">Marketplace Trusted</h4>
            <p className="text-gray-400 text-lg leading-relaxed">
              Experienced automotive marketplace specialists focused on customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-28">
        <div className="max-w-6xl mx-auto rounded-[40px] overflow-hidden relative border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 opacity-90" />

          <div className="relative z-10 text-center px-8 py-24">
            <h3 className="text-5xl md:text-6xl font-black mb-8 text-black">
              Upgrade Your Vehicle Today
            </h3>

            <p className="text-black/80 text-xl max-w-3xl mx-auto mb-10 font-medium">
              Browse thousands of premium automotive parts and accessories designed for performance.
            </p>

            <button className="px-10 py-5 rounded-2xl bg-black text-white text-xl font-bold hover:scale-105 transition-transform">
              Start Shopping
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-14 px-6 bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          <div>
            <h4 className="text-3xl font-black mb-5 bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
              Carparts
            </h4>
            <p className="text-gray-500 leading-relaxed">
              Modern automotive marketplace delivering premium car parts across the USA.
            </p>
          </div>

          <div>
            <h5 className="text-xl font-bold mb-5">Categories</h5>
            <div className="space-y-3 text-gray-400">
              <p>Headlights</p>
              <p>Bumpers</p>
              <p>Brakes</p>
              <p>Suspension</p>
            </div>
          </div>

          <div>
            <h5 className="text-xl font-bold mb-5">Company</h5>
            <div className="space-y-3 text-gray-400">
              <p>About Us</p>
              <p>Shipping Policy</p>
              <p>Returns</p>
              <p>Privacy Policy</p>
            </div>
          </div>

          <div>
            <h5 className="text-xl font-bold mb-5">Contact</h5>
            <div className="space-y-3 text-gray-400">
              <p>support@carparts.com</p>
              <p>USA Marketplace</p>
              <p>24/7 Customer Support</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500">
          © 2026 Carparts. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
