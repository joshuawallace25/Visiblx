import Link from 'next/link';

export const metadata = {
  title: 'Profile Not Found | Visiblx',
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full glass rounded-[3rem] p-12 reveal active backdrop-blur-3xl shadow-[0_0_50px_rgba(193,128,255,0.1)]">
        <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-6">
          person_off
        </span>
        <h1 className="text-4xl font-black tracking-tight mb-4 text-glow">
          Profile Not Found
        </h1>
        <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
          The identity page you are looking for doesn't exist or has been removed.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-on-primary font-bold hover:shadow-[0_0_30px_rgba(193,128,255,0.4)] transition-all"
        >
          <span className="material-symbols-outlined text-sm">home</span>
          Back to Homepage
        </Link>
      </div>
    </main>
  );
}
