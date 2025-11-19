'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />
      <div className="relative flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
          <Image
            src="/workmaite-logo.svg"
            alt="WorkMaite Logo"
            width={200}
            height={60}
            priority
          />
        </div>
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">
          <div className="flex flex-col items-center gap-8 text-center sm:items-start sm:text-left">
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-black dark:text-zinc-50 sm:text-6xl">
              Zac Beckett
            </h1>
            <div className="flex flex-col gap-4">
              <p className="max-w-md text-xl leading-8 text-zinc-600 dark:text-zinc-400">
                Founder of <span className="font-semibold text-black dark:text-zinc-50">WorkMaite</span>
              </p>
              <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Building AI agents to automate admin tasks for businesses.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
