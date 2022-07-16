/** @jsx h */
import { h } from "preact";

export default function Hero() {
  return (
    <section class="relative py-44 overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap -m-6">
          <div class="w-full lg:w-1/2 p-6">
            <div class="lg:max-w-lg">
              <h2 class="mb-6 font-heading leading-tight font-bold text-7xl text-gray-900">
                Lorem ipsum dolor sit amet
              </h2>
              <p class="mb-20 text-base text-gray-600">
                Lorem ipsum dolor sit amet
              </p>
              <ul>
                <li class="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900">
                  <img
                    class="mr-2 h-5"
                    src="images/forbidden-svgrepo-com.svg"
                    alt=""
                  />
                  <p>Lorem ipsum dolor sit amet</p>
                </li>
                <li class="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900">
                  <img
                    class="mr-2 h-5"
                    src="images/forbidden-svgrepo-com.svg"
                    alt=""
                  />
                  <p>Lorem ipsum dolor sit amet</p>
                </li>
                <li class="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900">
                  <img
                    class="mr-2 h-5"
                    src="images/forbidden-svgrepo-com.svg"
                    alt=""
                  />
                  <p>Lorem ipsum dolor sit amet</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full lg:w-1/2 p-6">
            <div class="bg-gradient-orange mx-auto max-w-lg h-96 rounded-3xl">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
