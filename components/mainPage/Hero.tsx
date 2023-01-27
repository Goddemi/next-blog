import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="flex justify-center">
        <Image
          src="/image/site/universe.jpg"
          alt="space"
          width={1000}
          height={300}
        />
      </div>
      <h1 className="text-center text-4xl py-20">
        This is planet shopping mall
      </h1>
      <p className="text-center text-2xl">planet shopping mall for explorer</p>
    </section>
  );
};

export default Hero;
