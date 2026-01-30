"use client";

import { signOut, useSession } from 'next-auth/react';

export function AdminSessionBar() {
  const { data: session } = useSession();

  return (
    <div className="border-b border-slate-200 bg-white">
      <div className="container flex items-center justify-between py-3 text-sm text-slate-500">
        <span>Signed in as {session?.user?.email ?? 'admin'}</span>
        <button
          type="button"
          onClick={() => signOut({ callbackUrl: '/admin/login' })}
          className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-ink"
        >
          Sign out
        </button>
      </div>
    </div>
  );
}
