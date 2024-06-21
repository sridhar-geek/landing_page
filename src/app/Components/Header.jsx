import React from "react";
import Image from "next/image";
import { IoMenuSharp } from "react-icons/io5";

const Header = () => {
  return (
    <header className="bg-[url('/Header/mobile.png')] bg-no-repeat bg-cover  md:bg-[url('/Header/desktop.png')] py-3">
      {/* Nav Items */}
      <nav className="flex justify-between items-center margin mt-8">
        <Image src="/logo.png" alt="logo" width={100} height={60} />
        <button className="outline outline-btnColor text-btnColor font-medium px-8 hover:font-bold hover:bg-primary-dark hover:text-white hover:outline-none hidden md:block rounded-md py-2">
          ENQUIRE NOW
        </button>
        <button className="md:hidden text-white text-3xl">
          <IoMenuSharp />{" "}
        </button>
      </nav>
      {/* Details */}
      <div className="margin my-11 flex flex-col gap-9 md:flex-row justify-between  items-center text-white">
        {/* Left Box */}
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold ">
            HARBOUR LIGHTS <br /> DE{" "}
            <span className="text-btnColor">GRESOGONO</span>
          </h1>
          <h5 className=" font-medium">
            1,2,& 3 Bedrooms Seaside Apartments <br /> in Dubai Maritime City
          </h5>
          <p className="headerCard">
            Rental Returns of <span className="font-bold"> UPTO 11%***</span>{" "}
          </p>
          <p className="headerCard">
            Capital Appreciation of{" "}
            <span className="font-bold"> UPTO 32%***</span>{" "}
          </p>
        </div>
        {/* Right Box */}
        <div className="flex flex-col rounded-lg w-80">
          {/* background 1 */}
          <div className="flex flex-col gap-2 rounded-t-lg bg-lime-300 py-8 px-6">
            <p className="text-lg">PRICING STARTS FROM</p>
            <h2 className="font-bold text-3xl">$ 425,000</h2>
            <h5 className="font-medium text-xl">AED 1.3 Million</h5>
            <button className="bg-btnColor p-3 rounded-md font-medium text-lg">
              GET A PRESENTATION
            </button>
          </div>
          {/* background 2 */}
          <aside className="bg-gray-500 rounded-b-lg p-3 text-btnColor">
            Get a Expert&apos;s Presentation of Real Estate in Dubai for Life
            and investment
          </aside>
        </div>
      </div>
    </header>
  );
};

export default Header;
