import { useState } from "react";

import { CiSearch } from "react-icons/ci";

import { Link, useNavigate } from "react-router-dom";

const itemList = [
  {
    symbol: "$",
    name: "11 HNCH",
    network: "1linch Network",
  },
  {
    symbol: "$",
    name: "11 HNCH",
    network: "1linch Network",
  },
  {
    symbol: "$",
    name: "11 HNCH",
    network: "1linch Network",
  },
  {
    symbol: "$",
    name: "11 HNCH",
    network: "1linch Network",
  },
];

export const Withdrawal = () => {
  const [selectedType, setSelectedType] = useState("Crypto");
  const [hide, setHide] = useState(false);
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate("/finalwithdrawal");
  };

  const handlehide = () => {
    setHide(!hide);
  };
  return (
    <div className="flex justify-center items-center bg-gray-950 text-white overflow-y-auto">
      <div className="w-full max-w-sm min-h-screen h-auto">
        <div className="bg-gray-950 py-3 fixed top-0 w-full left-0 right-0">
          <div className="text-center p-2">
            <div className="flex gap-4">
              <div className="w-full bg-slate-700 rounded-full flex gap-2">
                <CiSearch className="mt-1 ml-2" />
                <input
                  type="text"
                  className="w-full bg-transparent text-sm outline-none"
                  placeholder="Please select your preferred pairs"
                />
              </div>
              <p>Cancel</p>
            </div>
            <div className="mb-3 flex gap-3 mt-4 text-start pl-3">
              <button
                onClick={() => setSelectedType("Crypto")}
                className={`${
                  selectedType === "Crypto"
                    ? "underline underline-offset-4 text-[#fed503]"
                    : ""
                }`}
              >
                Crypto
              </button>
              <button
                onClick={() => setSelectedType("Fiat")}
                className={`${
                  selectedType === "Fiat"
                    ? "underline underline-offset-4 text-[#fed503]"
                    : ""
                }`}
              >
                Fiat
              </button>
            </div>
          </div>
          <hr />
        </div>

        <div className="min-h-screen overflow-y-auto w-full max-w-sm h-auto mt-24">
          <div className="mt-4">
            <div className="flex items-center gap-1 p-2">
              <input type="checkbox" className="" onClick={handlehide} />
              <span className="text-slate-400">Hide Zero balance</span>
            </div>
            <hr />
          </div>

          <div onClick={handleItemClick} className=" p-2 cursor-pointer">
            {hide ? (
              <div className="flex mt-5 flex-col ">
                {itemList.map((item, index) => (
                  <Link to="/finalwithdrawal">
                    <div className="flex items-center mb-4 gap-1" key={index}>
                      <p className="w-5 h-5 rounded-full bg-blue-500 mb-4 flex justify-center items-center text-sm">
                        {item.symbol}
                      </p>
                      <p>
                        {item.name}
                        <h2 className="text-sm text-slate-500">
                          {item.network}
                        </h2>
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
