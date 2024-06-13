import React from "react";

export default function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <div className="sm:px-8">
        <div className="mx-auto w-full-7x1 lg:px-8">
          <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                <div className="flex flex-wrap justify-center justify-between gap-6 sm:flex-row">
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    <a
                      className="transition hover:text-teal-500 dark:hover:text-teal-400"
                      href="/Placeholder"
                    >
                      Placeholder
                    </a>
                    <a
                      className="transition hover:text-teal-500 dark:hover:text-teal-400"
                      href="/Placeholder"
                    >
                      Placeholder
                    </a>
                    <a
                      className="transition hover:text-teal-500 dark:hover:text-teal-400"
                      href="/Placeholder"
                    >
                      Placeholder
                    </a>
                    <a
                      className="transition hover:text-teal-500 dark:hover:text-teal-400"
                      href="/Placeholder"
                    >
                      Placeholder
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
