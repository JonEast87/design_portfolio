import React from "react";

export default function Header() {
  return (
    <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="https://images.unsplash.com/photo-1650954932606-03ecf060b93f?q=80&w=1943&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
      </div>
      <div
        class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
      </div>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Green - Cat Home Designer
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-100">
            Having been the escape artist of six siblings, I picked up a thing
            or two in creative thinking. One never give up. Two always be on the
            hunt for the weakest corner of your enclouser. Taking those two
            lessons I learned that seeking the weakest part of your design and
            improving it leads to an iterative process that will surely bring
            everything up to together.
          </p>
        </div>
        <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            <div class="flex flex-col-reverse">
              <dt class="text-base leading-7 text-gray-300">Age</dt>
              <dd class="text-2xl font-bold leading-9 tracking-tight text-white">
                2
              </dd>
            </div>
            <div class="flex flex-col-reverse">
              <dt class="text-base leading-7 text-gray-300">Experience</dt>
              <dd class="text-2xl font-bold leading-9 tracking-tight text-white">
                1 year
              </dd>
            </div>
            <div class="flex flex-col-reverse">
              <dt class="text-base leading-7 text-gray-300">Graduated</dt>
              <dd class="text-2xl font-bold leading-9 tracking-tight text-white">
                Cat SU
              </dd>
            </div>
            <div class="flex flex-col-reverse">
              <dt class="text-base leading-7 text-gray-300">
                Looking for work?
              </dt>
              <dd class="text-2xl font-bold leading-9 tracking-tight text-white">
                Yes
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
