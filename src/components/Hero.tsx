export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <p className="text-cyan-400 mb-4">
        Web3 Community Manager
      </p>

      <h1 className="text-6xl md:text-8xl font-black mb-6">
        AndyOnChain
      </h1>

      <p className="max-w-2xl text-gray-400 text-lg">
        Building thriving Web3 communities through
        engagement, moderation, growth strategies,
        and ecosystem partnerships.
      </p>

      <div className="flex gap-4 mt-8">
        <button className="bg-cyan-500 text-black px-6 py-3 rounded-xl font-semibold">
          View Experience
        </button>

        <button className="border border-cyan-500 px-6 py-3 rounded-xl">
          Contact Me
        </button>
      </div>
    </section>
  );
}