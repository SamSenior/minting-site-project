import Image from "next/image";

export default function MINT() {
  return (
    <div className="min-h-screen h-full w-full overflow-hidden flex flex-col items-center justify-center bg-brand-background">
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <img
          src="/images/blur.jpeg"
          className="animate-pulse-slow absolute inset-auto block w-full min-h-screen object-cover"
        />

        <div className="flex flex-col items-center justify-center h-full w-full px-2 md:px-10">
          <div className="relative z-1 md:max-w-2xl w-full bg-gray-900/90 filter backdrop-blur-sm py-4 rounded-md px-2 md:px-10 flex flex-col items-center">
            <h1 className="font-kaushan uppercase font-bold text-3xl md:text-4xl bg-gradient-to-br  from-brand-green to-brand-blue bg-clip-text text-transparent mt-3">
              Pre-Sale
            </h1>
            <h3 className="text-sm text-pink-200 tracking-widest">
              0x52afbd46ECf1444a73C03b9c296E25c558291F1B
            </h3>

            <div className="flex flex-col md:flex-row md:space-x-14 w-full mt-10 md:mt-14">
              <div className="relative w-full">
                <div className="font-kaushan z-10 absolute top-2 left-2 opacity-80 filter backdrop-blur-lg text-base px-4 py-2 bg-black border border-brand-purple rounded-md flex items-center justify-center text-white font-semibold">
                  <p>
                    <span className="text-brand-pink">0</span> / 1000
                  </p>
                </div>

                <img
                  src="/images/104.png"
                  alt="ape"
                  className="object-cover w-full sm:h-[280px] md:w-[250px] rounded-md"
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
