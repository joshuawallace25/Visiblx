'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Critical System Error</h2>
        <button
          onClick={() => reset()}
          className="px-8 py-3 bg-white text-black rounded-full font-bold uppercase tracking-widest hover:bg-gray-200 transition-all"
        >
          Reset Application
        </button>
      </body>
    </html>
  );
}
