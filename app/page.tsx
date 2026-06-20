'use client';

import { motion } from 'framer-motion';
import { PawPrint, Heart, Shield, Sparkles, Star, ArrowRight, Check } from 'lucide-react';

const products = [
  {
    name: 'Joint Shield Plus',
    tagline: 'Mobility & Flexibility',
    price: '$34.99',
    originalPrice: '$44.99',
    rating: 4.9,
    reviews: 312,
    color: 'from-amber-500 to-orange-600',
    icon: '🦴',
    benefits: ['Glucosamine & Chondroitin', 'Reduces joint stiffness', 'Veterinarian approved'],
    badge: 'Best Seller',
  },
  {
    name: 'Calm & Cozy',
    tagline: 'Stress & Anxiety Relief',
    price: '$29.99',
    originalPrice: '$39.99',
    rating: 4.8,
    reviews: 247,
    color: 'from-violet-500 to-purple-600',
    icon: '🌙',
    benefits: ['Chamomile & L-Theanine', 'Promotes relaxation', 'No drowsiness'],
    badge: 'New',
  },
  {
    name: 'Gut Health Boost',
    tagline: 'Digestive Wellness',
    price: '$32.99',
    originalPrice: '$42.99',
    rating: 4.9,
    reviews: 189,
    color: 'from-emerald-500 to-teal-600',
    icon: '✨',
    benefits: ['Probiotics & Prebiotics', 'Supports immunity', 'Sensitive stomach friendly'],
    badge: 'Popular',
  },
];

function GlassCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl ${className}`}
    >
      {children}
    </div>
  );
}

export default function PetStoreLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white overflow-hidden">
      {/* Animated background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -80, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4">
        <GlassCard className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center">
                <PawPrint className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">PawNatural</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
              <a href="#" className="hover:text-white transition-colors">Products</a>
              <a href="#" className="hover:text-white transition-colors">About</a>
              <a href="#" className="hover:text-white transition-colors">Reviews</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/25"
            >
              Shop Now <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </GlassCard>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20 md:py-32">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20 mb-8">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-white/80">Premium Pet Health Supplements</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Unleash Your Dog's
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Natural Vitality
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10"
          >
            Science-backed supplements crafted with organic ingredients to help your furry companion thrive at every stage of life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 shadow-2xl"
            >
              <Heart className="w-5 h-5 text-red-500" />
              Explore Products
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur border border-white/20 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-colors"
            >
              Watch Reviews
            </motion.button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/60"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-medium">Vet Approved</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-400" />
              <span className="text-sm font-medium">100% Natural</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-400" />
              <span className="text-sm font-medium">4.9★ Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <PawPrint className="w-5 h-5 text-teal-400" />
              <span className="text-sm font-medium">50K+ Happy Pups</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Bestselling Supplements</h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Handpicked formulas to support your dog's joint health, calmness, and digestion.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <GlassCard className="p-6 h-full flex flex-col overflow-hidden relative group">
                  {/* Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`bg-gradient-to-r ${product.color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                      {product.badge}
                    </span>
                  </div>

                  {/* Product Icon */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center text-4xl mb-6 shadow-lg mt-4`}>
                    {product.icon}
                  </div>

                  {/* Product Info */}
                  <h3 className="text-2xl font-bold mb-1">{product.name}</h3>
                  <p className="text-white/50 text-sm mb-4">{product.tagline}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-white/20'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-white/60">{product.rating} ({product.reviews})</span>
                  </div>

                  {/* Benefits */}
                  <ul className="space-y-2 mb-6 flex-grow">
                    {product.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm text-white/70">
                        <Check className="w-4 h-4 text-emerald-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  {/* Price & CTA */}
                  <div className="border-t border-white/10 pt-6">
                    <div className="flex items-end justify-between mb-4">
                      <div>
                        <span className="text-white/40 line-through text-sm">{product.originalPrice}</span>
                        <span className="text-3xl font-bold ml-2">{product.price}</span>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-3 rounded-xl font-semibold bg-gradient-to-r ${product.color} text-white shadow-lg hover:shadow-xl transition-shadow`}
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <GlassCard className="max-w-4xl mx-auto p-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              30-Day Money-Back Guarantee
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              We're confident your dog will love PawNatural. If not, we'll refund you completely — no questions asked.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 px-10 py-4 rounded-full font-bold text-lg inline-flex items-center gap-3 shadow-2xl shadow-emerald-500/30"
            >
              Shop All Products <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </GlassCard>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-white/40 text-sm">
          <p>© 2024 PawNatural. All rights reserved. Made with ❤️ for dogs everywhere.</p>
        </div>
      </footer>
    </div>
  );
}
