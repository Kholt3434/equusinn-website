import { useState } from 'react';
import { ChevronRight, Users, MapPin, Trophy, Zap } from 'lucide-react';

export default function BaseballTournament() {
  const [formData, setFormData] = useState({
    teamName: '',
    contactName: '',
    email: '',
    phone: '',
    teamSize: '',
    tournamentDate: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: 'baseball_tournament',
          recipientEmail: 'kholt@paxproperties.com'
        })
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({
          teamName: '',
          contactName: '',
          email: '',
          phone: '',
          teamSize: '',
          tournamentDate: '',
          message: ''
        });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-[#186F5E] via-[#2F9D8F] to-[#3DB8A6] overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/youth_baseball_batting_action-fRgJfPPV8Mp5dEuiytdujW.webp"
            alt="Youth baseball"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-4">Baseball Tournament Groups</h1>
          <p className="text-xl text-white/95 mb-8">Your Perfect Home Base in Ocala</p>
          <a href="#inquiry-form" className="bg-[#D4A574] hover:bg-[#C48E5C] text-[#1C2B4A] px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition transform hover:scale-105">
            Reserve Your Rooms <ChevronRight size={20} />
          </a>
        </div>
      </div>

      {/* Why Choose Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1C2B4A] mb-12 text-center">Why Baseball Teams Choose Equus Inn</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#2F9D8F]/10 to-[#186F5E]/10 p-8 rounded-lg border-l-4 border-[#2F9D8F]">
              <MapPin className="text-[#2F9D8F] mb-4" size={32} />
              <h3 className="text-xl font-bold text-[#1C2B4A] mb-3">Prime Location</h3>
              <p className="text-gray-700">Close to FAST Ocala, Ocala Rotary Sportsplex, and Shocker Park. Perfect for tournament teams.</p>
            </div>
            <div className="bg-gradient-to-br from-[#D4A574]/10 to-[#C48E5C]/10 p-8 rounded-lg border-l-4 border-[#D4A574]">
              <Users className="text-[#D4A574] mb-4" size={32} />
              <h3 className="text-xl font-bold text-[#1C2B4A] mb-3">Group-Friendly</h3>
              <p className="text-gray-700">Multiple room types, group rates, and flexible booking for teams of any size.</p>
            </div>
            <div className="bg-gradient-to-br from-[#186F5E]/10 to-[#2F9D8F]/10 p-8 rounded-lg border-l-4 border-[#186F5E]">
              <Trophy className="text-[#186F5E] mb-4" size={32} />
              <h3 className="text-xl font-bold text-[#1C2B4A] mb-3">Award-Winning</h3>
              <p className="text-gray-700">Trusted by tournament teams. Free breakfast, pool, and premium amenities included.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Images */}
      <section className="py-16 px-4 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1C2B4A] mb-12 text-center">Tournament Action</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/youth_baseball_batting_action-fRgJfPPV8Mp5dEuiytdujW.webp"
              alt="Youth baseball batting"
              className="rounded-lg shadow-lg h-80 object-cover w-full hover:shadow-xl transition"
            />
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663435714883/WfbDi2eLdPQCXATM5yf3fd/youth_baseball_team_celebration-MBXYfrHjuvorXkFbBL2ryp.webp"
              alt="Team celebration"
              className="rounded-lg shadow-lg h-80 object-cover w-full hover:shadow-xl transition"
            />
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1C2B4A] mb-12 text-center">Team Amenities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🍳', title: 'Free Breakfast', desc: 'Fuel up your team daily' },
              { icon: '🏊', title: 'Pool & Spa', desc: 'Relax after tournament games' },
              { icon: '📶', title: 'Free WiFi', desc: 'Stay connected' },
              { icon: '🅿️', title: 'Free Parking', desc: 'Ample space for all vehicles' },
              { icon: '🏋️', title: 'Fitness Center', desc: 'Stay in shape' },
              { icon: '🍷', title: 'Beer & Wine', desc: 'Unwind in the evening' },
              { icon: '🎮', title: 'Game Room', desc: 'Team bonding' },
              { icon: '🛎️', title: '24/7 Support', desc: 'Always here for you' }
            ].map((amenity, i) => (
              <div key={i} className="text-center p-6 rounded-lg bg-gradient-to-br from-[#2F9D8F]/5 to-[#186F5E]/5 hover:from-[#2F9D8F]/10 hover:to-[#186F5E]/10 transition">
                <div className="text-4xl mb-3">{amenity.icon}</div>
                <h3 className="font-bold text-[#1C2B4A] mb-2">{amenity.title}</h3>
                <p className="text-sm text-gray-600">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Venues */}
      <section className="py-16 px-4 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1C2B4A] mb-12 text-center">Nearby Tournament Venues</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'FAST Ocala', distance: '2 miles', tournaments: 'Year-round tournaments' },
              { name: 'Ocala Rotary Sportsplex', distance: '3 miles', tournaments: 'Regional championships' },
              { name: 'Shocker Park', distance: '4 miles', tournaments: 'Babe Ruth & Cal Ripken' }
            ].map((venue, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#2F9D8F] hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-[#1C2B4A] mb-2">{venue.name}</h3>
                <p className="text-[#2F9D8F] font-semibold mb-2">{venue.distance} away</p>
                <p className="text-gray-600">{venue.tournaments}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className="py-16 px-4 bg-gradient-to-br from-[#1C2B4A] to-[#186F5E]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Reserve Your Group Stay</h2>
          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-xl">
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                ✓ Thank you! We'll contact you soon about your baseball tournament group.
              </div>
            )}
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[#1C2B4A] font-semibold mb-2">Team Name *</label>
                <input
                  type="text"
                  required
                  value={formData.teamName}
                  onChange={(e) => setFormData({...formData, teamName: e.target.value})}
                  className="w-full px-4 py-2 border-2 border-[#2F9D8F] rounded-lg focus:outline-none focus:border-[#D4A574]"
                  placeholder="Your team name"
                />
              </div>
              <div>
                <label className="block text-[#1C2B4A] font-semibold mb-2">Contact Name *</label>
                <input
                  type="text"
                  required
                  value={formData.contactName}
                  onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                  className="w-full px-4 py-2 border-2 border-[#2F9D8F] rounded-lg focus:outline-none focus:border-[#D4A574]"
                  placeholder="Your name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[#1C2B4A] font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border-2 border-[#2F9D8F] rounded-lg focus:outline-none focus:border-[#D4A574]"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-[#1C2B4A] font-semibold mb-2">Phone *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2 border-2 border-[#2F9D8F] rounded-lg focus:outline-none focus:border-[#D4A574]"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[#1C2B4A] font-semibold mb-2">Team Size *</label>
                <input
                  type="number"
                  required
                  value={formData.teamSize}
                  onChange={(e) => setFormData({...formData, teamSize: e.target.value})}
                  className="w-full px-4 py-2 border-2 border-[#2F9D8F] rounded-lg focus:outline-none focus:border-[#D4A574]"
                  placeholder="Number of people"
                />
              </div>
              <div>
                <label className="block text-[#1C2B4A] font-semibold mb-2">Tournament Dates *</label>
                <input
                  type="text"
                  required
                  value={formData.tournamentDate}
                  onChange={(e) => setFormData({...formData, tournamentDate: e.target.value})}
                  className="w-full px-4 py-2 border-2 border-[#2F9D8F] rounded-lg focus:outline-none focus:border-[#D4A574]"
                  placeholder="e.g., June 15-17, 2024"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-[#1C2B4A] font-semibold mb-2">Additional Details</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-2 border-2 border-[#2F9D8F] rounded-lg focus:outline-none focus:border-[#D4A574]"
                rows={4}
                placeholder="Tell us about your group and tournament..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#2F9D8F] to-[#186F5E] hover:from-[#186F5E] hover:to-[#0F5245] text-white font-bold py-3 rounded-lg transition transform hover:scale-105"
            >
              Request Group Rates
            </button>
            <p className="text-center text-gray-600 text-sm mt-4">We'll contact you at kholt@paxproperties.com to confirm your reservation</p>
          </form>
        </div>
      </section>
    </div>
  );
}
