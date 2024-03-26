import MountainPng from "../../assets/moon-surface-hd.png";

const Hero = () => {
  return (
    <div className=" bg-black/20 h-full text-white relative z-50">
      <div className=" h-full flex justify-center items-center p-4">
        <div className=" container grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* 描述 */}
          <div className=" space-y-4 lg:pr-36">
            <h1 data-aos="fade-up" className=" text-5xl font-bold uppercase">
              Orbit The Earth
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              reiciendis totam recusandae consectetur quos, placeat voluptate at
              nihil aut dolores.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              className="btn-primary"
            >
              Learn More
            </button>
          </div>
          {/*  */}
          <div></div>
        </div>
      </div>
      {/* 底部_背景圖 */}
      <img
        src={MountainPng}
        alt=""
        className=" absolute right-0 bottom-0 w-full brightness-50 z-10"
      />
      {/* 底部_漸層效果 */}
      <div className=" absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
    </div>
  );
};

export default Hero;
