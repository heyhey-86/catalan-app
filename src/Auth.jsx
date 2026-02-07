import { useState } from 'react';
import { supabase } from './supabase.js';
import { Mail, Lock, User, ArrowRight, Loader2 } from 'lucide-react';

export default function Auth({ onAuthSuccess, existingLocalData, initialMode = 'login' }) {
  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name }
      }
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    if (data.user && !data.session) {
      setMessage('Check your email to confirm your account!');
      setLoading(false);
      return;
    }

    if (data.session) {
      onAuthSuccess(data.user, existingLocalData);
    }
    setLoading(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    onAuthSuccess(data.user, existingLocalData);
    setLoading(false);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setMessage('Check your email for a password reset link!');
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-500 to-yellow-500 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img src="./logo.png" alt="HolaCatalà" className="h-32 w-auto mx-auto mb-4" />
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            {mode === 'login' && 'Welcome Back!'}
            {mode === 'signup' && 'Create Account'}
            {mode === 'forgot' && 'Reset Password'}
          </h2>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          {message && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4">
              {message}
            </div>
          )}

          <form onSubmit={mode === 'login' ? handleLogin : mode === 'signup' ? handleSignUp : handleForgotPassword}>
            {mode === 'signup' && (
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </div>
              </div>
            )}

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            {mode !== 'forgot' && (
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="••••••••"
                    required
                    minLength={6}
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  {mode === 'login' && 'Sign In'}
                  {mode === 'signup' && 'Create Account'}
                  {mode === 'forgot' && 'Send Reset Link'}
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center text-sm">
            {mode === 'login' && (
              <>
                <button
                  onClick={() => { setMode('forgot'); setError(''); setMessage(''); }}
                  className="text-red-500 hover:underline"
                >
                  Forgot password?
                </button>
                <p className="mt-3 text-gray-600">
                  Don't have an account?{' '}
                  <button
                    onClick={() => { setMode('signup'); setError(''); setMessage(''); }}
                    className="text-red-500 font-semibold hover:underline"
                  >
                    Sign up
                  </button>
                </p>
              </>
            )}
            {mode === 'signup' && (
              <p className="text-gray-600">
                Already have an account?{' '}
                <button
                  onClick={() => { setMode('login'); setError(''); setMessage(''); }}
                  className="text-red-500 font-semibold hover:underline"
                >
                  Sign in
                </button>
              </p>
            )}
            {mode === 'forgot' && (
              <button
                onClick={() => { setMode('login'); setError(''); setMessage(''); }}
                className="text-red-500 hover:underline"
              >
                Back to sign in
              </button>
            )}
          </div>

          {existingLocalData && existingLocalData.completed && existingLocalData.completed.length > 0 && mode === 'signup' && (
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
              <strong>Good news!</strong> You have existing progress ({existingLocalData.completed.length} lessons). 
              Creating an account will save it to the cloud!
            </div>
          )}
        </div>

        <button
          onClick={() => onAuthSuccess(null, null)}
          className="mt-4 w-full text-white/80 hover:text-white text-sm py-2"
        >
          Continue without account (progress won't sync)
        </button>
      </div>
    </div>
  );
}