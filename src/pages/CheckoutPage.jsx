import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShieldCheck } from 'lucide-react';

export default function CheckoutPage() {
  const { cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('cod');

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    clearCart();
    navigate('/success');
  };

  return (
    <div className="pt-32 pb-24 min-h-[100svh] bg-[#030303] relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-clash font-bold uppercase tracking-tight text-white mb-12">
          Secure Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-8">
              
              <div className="bg-[#0a0a0a] rounded-[2rem] p-8 border border-white/5">
                <h2 className="text-2xl font-clash font-medium text-white mb-6">Shipping Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-white/50 text-sm mb-2 font-satoshi">Full Name</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" />
                  </div>
                  <div>
                    <label className="block text-white/50 text-sm mb-2 font-satoshi">Email Address</label>
                    <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" />
                  </div>
                  <div>
                    <label className="block text-white/50 text-sm mb-2 font-satoshi">Phone Number</label>
                    <input required type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-white/50 text-sm mb-2 font-satoshi">Complete Address</label>
                    <textarea required rows="3" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors"></textarea>
                  </div>
                  <div>
                    <label className="block text-white/50 text-sm mb-2 font-satoshi">City</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" />
                  </div>
                  <div>
                    <label className="block text-white/50 text-sm mb-2 font-satoshi">State</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" />
                  </div>
                  <div>
                    <label className="block text-white/50 text-sm mb-2 font-satoshi">PIN Code</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" />
                  </div>
                </div>
              </div>

              <div className="bg-[#0a0a0a] rounded-[2rem] p-8 border border-white/5">
                <h2 className="text-2xl font-clash font-medium text-white mb-6">Payment Method</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className={`cursor-pointer rounded-xl border p-4 flex items-center gap-3 transition-all ${paymentMethod === 'cod' ? 'border-brand-gold bg-brand-gold/10' : 'border-white/10 bg-white/5 hover:border-white/30'}`}>
                    <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="accent-brand-gold w-5 h-5" />
                    <span className="text-white font-medium">Cash On Delivery</span>
                  </label>
                  <label className={`cursor-pointer rounded-xl border p-4 flex items-center gap-3 transition-all ${paymentMethod === 'upi' ? 'border-brand-gold bg-brand-gold/10' : 'border-white/10 bg-white/5 hover:border-white/30'}`}>
                    <input type="radio" name="payment" value="upi" checked={paymentMethod === 'upi'} onChange={() => setPaymentMethod('upi')} className="accent-brand-gold w-5 h-5" />
                    <span className="text-white font-medium">UPI (GPay, PhonePe)</span>
                  </label>
                </div>
              </div>

            </form>
          </div>

          {/* Order Summary & CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-[#0a0a0a] rounded-[2rem] p-8 border border-white/10 shadow-2xl">
              <h3 className="text-xl font-clash font-bold text-white mb-6">Order Total</h3>
              
              <div className="space-y-4 font-satoshi text-white/70 mb-8 border-b border-white/10 pb-8">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-brand-gold">Complimentary</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-medium text-white">Amount to Pay</span>
                <span className="text-3xl font-clash font-bold text-brand-gold">${cartTotal.toFixed(2)}</span>
              </div>

              <div className="flex items-center gap-2 text-white/40 text-sm mb-6 justify-center">
                <ShieldCheck size={16} /> 256-bit Secure Encryption
              </div>

              <button 
                type="submit"
                form="checkout-form"
                className="w-full flex items-center justify-center gap-3 py-5 bg-brand-gold text-black font-bold rounded-full text-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
