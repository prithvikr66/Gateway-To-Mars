import gluLogo from "../../assets/landing/partners/glu.png";
import solanaLogo from "../../assets/landing/partners/solana.png";
import ethereumLogo from "../../assets/landing/partners/ethereum.png";
import baseLogo from "../../assets/landing/partners/base.png";
import printfulLogo from "../../assets/landing/partners/printful.png";
import backdrop1 from "../../assets/landing/partners/backdrop1.png";
import backdrop2 from "../../assets/landing/partners/backdrop2.png";
import backdrop3 from "../../assets/landing/partners/backdrop3.png";
const Partners = () => {
  return (
    <div className=" lg:h-[800px] bg-[#ffffff] ">
      <div className=" flex flex-col gap-5">
        <div className=" flex justify-around mt-10">
          <h3 className=" font-d-din-bold text-[#8FA1B3] text-[28px] uppercase sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[50px] lg:ml-[50px] xl:ml-[100px] 2xl:ml-[150px] ">
            Partners
          </h3>
          <img src={backdrop1} className=" w-1/4 max-w-[354px] h-auto" />
        </div>
        <div className=" flex justify-around items-center lg:justify-normal lg:gap-[200px]">
          <img src={gluLogo} className="w-1/4 max-w-[275px] h-auto" />
          <img src={printfulLogo} className="w-1/3 max-w-[374px] h-auto" />
        </div>
        <div className=" flex flex-col lg:flex-row">
          <div className=" flex justify-around items-center">
            <img src={baseLogo} className="w-1/6 max-w-[112px] h-auto" />
            <img src={solanaLogo} className="w-1/2 max-w-[348px] h-auto" />
          </div>
          <div className=" flex items-center justify-center">
            <img src={ethereumLogo} className=" w-1/3 max-w-[275px] h-auto" />
          </div>
        </div>
        <div className=" flex justify-between items-center">
          <img src={backdrop2} className=" w-1/4 max-w-[354px] h-auto" />
          <img src={backdrop3} className=" w-1/5 max-w-[120px] h-auto " />
        </div>
      </div>
    </div>
  );
};

export default Partners;
