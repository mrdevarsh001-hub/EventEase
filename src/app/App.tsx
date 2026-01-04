import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Auth } from './components/Auth';
import { Dashboard } from './components/Dashboard';
import { Toaster } from 'sonner';
import { CheckCircle2, Zap, Shield, HeartHandshake } from 'lucide-react';

type View = 'landing' | 'auth' | 'dashboard';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('landing');
  const [userType, setUserType] = useState<'organizer' | 'staff' | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (role: 'organizer' | 'staff') => {
    setUserType(role);
    setIsAuthenticated(true);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setUserType(null);
    setIsAuthenticated(false);
    setCurrentView('landing');
  };

  const renderView = () => {
    switch (currentView) {
      case 'landing':
        return (
          <>
            <HeroSection 
              onGetStarted={() => setCurrentView('auth')} 
            />
            
            {/* Features Section */}
            <div className="py-24 bg-white relative overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none"></div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-base text-violet-600 font-bold tracking-wide uppercase mb-2">Why EventEase?</h2>
                  <p className="text-4xl font-black text-gray-900 tracking-tight mb-4">
                    The smartest way to staff your events.
                  </p>
                  <p className="text-xl text-gray-500">
                    We've reimagined the staffing experience to be fast, reliable, and actually enjoyable for everyone involved.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            icon: <Zap className="h-6 w-6 text-white" />,
                            title: "Instant Booking",
                            desc: "Fill shifts in minutes, not days. Our algorithm matches you instantly.",
                            color: "bg-amber-500"
                        },
                        {
                            icon: <CheckCircle2 className="h-6 w-6 text-white" />,
                            title: "Vetted Pros",
                            desc: "Every staff member is interviewed and rated. Quality guaranteed.",
                            color: "bg-green-500"
                        },
                        {
                            icon: <Shield className="h-6 w-6 text-white" />,
                            title: "Fully Insured",
                            desc: "We cover liability and workers comp. Peace of mind included.",
                            color: "bg-blue-500"
                        },
                        {
                            icon: <HeartHandshake className="h-6 w-6 text-white" />,
                            title: "Fair Pay",
                            desc: "We ensure competitive rates and fast payments for all staff.",
                            color: "bg-rose-500"
                        }
                    ].map((feature, idx) => (
                        <div key={idx} className="bg-slate-50 rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300 border border-slate-100 hover:shadow-xl hover:shadow-slate-200">
                            <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-gray-200`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-500 leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-900 rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-2xl">
                         <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-violet-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
                         <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-fuchsia-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
                         
                         <div className="relative z-10 text-center">
                             <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">Ready to get started?</h2>
                             <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Join thousands of organizers and professionals who trust EventEase for their events.</p>
                             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                 <button 
                                    onClick={() => setCurrentView('auth')}
                                    className="px-8 py-4 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                                 >
                                     Sign Up Now
                                 </button>
                             </div>
                         </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                         <div className="bg-violet-600 w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xl">E</div>
                         <span className="font-bold text-xl tracking-tight text-gray-900">EventEase</span>
                    </div>
                    <div className="flex gap-8 text-sm font-medium text-gray-500">
                        <a href="#" className="hover:text-violet-600 transition-colors">About</a>
                        <a href="#" className="hover:text-violet-600 transition-colors">Safety</a>
                        <a href="#" className="hover:text-violet-600 transition-colors">Terms</a>
                        <a href="#" className="hover:text-violet-600 transition-colors">Privacy</a>
                    </div>
                    <p className="text-sm text-gray-400">© 2024 EventEase Inc.</p>
                </div>
            </footer>
          </>
        );
      case 'auth':
        return <Auth onLogin={handleLogin} onBackToHome={() => setCurrentView('landing')} />;
      case 'dashboard':
        return userType ? <Dashboard userType={userType} /> : null;
      default:
        return <div>Not Found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-violet-200 selection:text-violet-900">
      <Navbar 
        currentView={currentView} 
        onChangeView={(view) => setCurrentView(view as View)} 
        userType={userType}
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
      />
      {renderView()}
      <Toaster position="top-center" richColors />
    </div>
  );
}