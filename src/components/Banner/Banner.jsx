import satelliteImg from "../../assets/satellite1.jpg";

const Banner = () => {
  return (
    <div className=" bg-black text-white pb-12 relative z-50">
      <div className=" container">
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          {/* 圖片 */}
          <div>
            <img
              data-aos="zoom-in"
              src={satelliteImg}
              alt=""
              className=" w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
            />
          </div>
          {/* 描述 */}
          <div className=" space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800">
            <p data-aos="fade-up" className=" text-sky-800 uppercase">
              Our Mission
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className=" uppercase text-5xl"
            >
              Rapidcast
            </h1>
            <p data-aos="fade-up" data-aos-delay="500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur, error necessitatibus provident, hic officiis ea sit
              quam ut pariatur quidem architecto consequuntur maiores laudantium
              asperiores, quaerat repellendus rem! Consectetur, eum.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="700"
              className="btn-primary"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
