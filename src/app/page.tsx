// import Image from "next/image";

export default function Home() {
  return (
    <body className="font-sans antialiased bg-gray-50">
      <div className="bg-yellow-600 bg-opacity-50 text-white text-xs text-center uppercase tracking-widest py-2">
        CHECK AVAILABILITY HERE: 
        <a href="#" className="underline">ONLINE RESERVATIONS</a>
      </div>
      <div x-data="slideshow()" x-init="init()" className="relative flex justify-center">
        <div className="w-full h-1/2 bg-gray-100 absolute inset-0"></div>
        {/* <img x-bind:src="images[current]" className="w-full h-96 object-cover relative max-w-6xl"> */}
    </div>
    <div className="py-24 text-center">
        <h1 className="text-4xl text-green-800 font-display uppercase tracking-widest">Double Bar M Photography</h1>
        <div className="w-full max-w-xs h-px bg-gray-300 my-6 mx-auto"></div>
        <h2 className="uppercase max-w-sm mx-auto font-heading font-light tracking-widest text-gray-500">Timeless photojournalism and photographic expertise.</h2>
    </div>
    <div className="flex">
        {/* <img src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" className="w-7/12 h-96 object-cover"> */}
        <div className="w-5/12 relative flex flex-col justify-end">
            <div className="bg-gray-100 px-12 pt-24">
              <p className="text-sm leading-loose text-gray-400 font-light">
                Wedding Photography
              </p>
              <a href="#" className="mt-4 block bg-white w-full uppercase font-display text-gray-700 text-center text-sm tracking-widest p-3">
                Portraits
              </a>
            </div>
        </div>
    </div>
    </body>
  );
}
