"use client";

import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false
    });

    if (result?.error) {
      setError('Invalid credentials. Check your admin email/password.');
      return;
    }

    window.location.href = '/admin';
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-lg rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Admin Access</p>
        <h1 className="mt-3 text-2xl font-semibold text-ink">Sign in to the admin panel</h1>
        <p className="mt-2 text-sm text-slate-500">
          Authenticate using the credentials stored in <code>ADMIN_EMAIL</code> and <code>ADMIN_PASSWORD</code>.
        </p>
        <form className="mt-6 space-y-3" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
            placeholder="Admin email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
            placeholder="Admin password"
            required
          />
          {error ? <p className="text-sm text-rose-500">{error}</p> : null}
          <button
            type="submit"
            className="w-full rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
