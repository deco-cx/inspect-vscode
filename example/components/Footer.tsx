/** @jsx h */
import { h } from "preact";

export default function Footer() {
  return (
    <section class="relative pt-28 pb-32 bg-black overflow-hidden">
      <div class="relative z-10 container mx-auto px-4">
        <div class="mb-16 max-w-xl">
          <h2 class="mb-6 font-heading font-semibold text-white text-6xl sm:text-7xl">
            Lorem ipsum dolor sit amet
          </h2>
          <p class="text-gray-400 text-lg">
            Lorem ipsum dolor sit amet
          </p>
        </div>
        <div class="flex flex-nowrap -m-3 mb-11">
          <div class="flex-shrink-0 p-3">
            <div class="max-w-md bg-gray-900 py-11 px-9 rounded-10">
              <div class="mb-11 flex justify-center items-center font-heading text-xl bg-gradient-green w-12 h-12 text-gray-900 rounded-full">
                1
              </div>
              <p class="text-white text-xl">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
          <div class="flex-shrink-0 p-3">
            <div class="max-w-md bg-gray-900 py-11 px-9 rounded-10">
              <div class="mb-11 flex justify-center items-center font-heading text-xl bg-gradient-green w-12 h-12 text-gray-900 rounded-full">
                2
              </div>
              <p class="text-white text-xl">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
          <div class="flex-shrink-0 p-3">
            <div class="max-w-md bg-gray-900 py-11 px-9 rounded-10">
              <div class="mb-11 flex justify-center items-center font-heading text-xl bg-gradient-green w-12 h-12 text-gray-900 rounded-full">
                3
              </div>
              <p class="text-white text-xl">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
          <div class="flex-shrink-0 p-3">
          </div>
        </div>
        <div class="flex flex-wrap wrap justify-center md:justify-end -m-2">
          <div class="w-auto p-2">
            <a href="#">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 19L3 12M3 12L10 5M3 12L21 12"
                  stroke="#3F3F46"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                </path>
              </svg>
            </a>
          </div>
          <div class="w-auto p-2">
            <a href="#">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 5L21 12M21 12L14 19M21 12L3 12"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                </path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
