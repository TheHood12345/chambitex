import { MdOutlineArrowDropDown } from "react-icons/md";
import { RiArrowDropRightLine } from "react-icons/ri";
import { LuScanLine } from "react-icons/lu";

import { FaPlusCircle } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export const Finalwithdrawal = () => {
  return (
    <div className="flex justify-center items-center bg-black p-2 text-white overflow-y-auto">
      <div className="w-full max-w-sm min-h-screen h-auto">
        <div className="bg-gray-950 py-3 fixed top-0 w-full left-0 right-0">
          <div className="p-2 flex gap-4">
            <button>On-Chain</button>
            <p className="text-slate-500">Internal Transfer</p>
          </div>
        </div>

        <div className="min-h-auto overflow-y-auto w-full max-w-sm h-auto mt-5">
          <div className="mt-20 bg-slate-800 p-2 px-2">
            <div className="bg-gray-800 p-2">
              <h1>Coin</h1>
              <div className="bg-slate-600 mt-2 p-2 rounded-md flex justify-between items-center">
                <div className="flex items-center">
                  <div className="h-5 w-5 rounded-full flex items-center justify-center bg-slate-100">
                    t
                  </div>
                  <span>1SQL</span>
                  <span className="ml-1 text-sm text-slate-400">
                    1Sol Protocool
                  </span>
                </div>
                <MdOutlineArrowDropDown />
              </div>
            </div>

            <div className="bg-gray-800 p-2">
              <div className="flex justify-between items-center">
                <h1>Address</h1>
                <h2 className="flex items-center justify-center">
                  Address Book
                  <RiArrowDropRightLine size={20} className="mt-1" />
                </h2>
              </div>
              <div className="bg-slate-600 rounded-md flex justify-between items-center gap-2 ">
                <div className="flex items-center w-full  gap-2">
                  <input
                    type="text"
                    placeholder="Input or press and hold to paste the withdrawals address"
                    className="w-[90%] mb-2 py-4 p-2 outline-none text-black bg-transparent text-sm placeholder:text-gray-400 placeholder:whitespace-normal"
                  />
                </div>
                <LuScanLine size={30} className="mr-2" />
              </div>
            </div>

            <div className="bg-gray-800 p-2">
              <h1>Network</h1>
              <div className="bg-slate-600 mt-2 p-2 rounded-md flex justify-between items-center">
                <div className="flex items-center">
                  <p className="text-sm text-slate-400">
                    Please choose a chhain type
                  </p>
                </div>
                <MdOutlineArrowDropDown />
              </div>
            </div>
            <div className="bg-gray-800 p-2">
              <div className="flex justify-between">
                <h1>Amount</h1>
                <h1 className="flex items-center gap-1">
                  <span>0</span> <FaPlusCircle className="" />
                </h1>
              </div>
              <div className="bg-slate-600 mt-2 p-2 rounded-md flex justify-between items-center gap-2">
                <div className="flex items-center">
                  <p className="text-sm text-slate-400">
                    Min.Withdrawal Amount:100
                  </p>
                </div>
                <h1 className="text-md">
                  1SOL <span className="text-yellow-600 ">Max</span>
                </h1>
              </div>
              <div className="flex justify-between mt-2 items-center">
                <h1>Funding Account:</h1>
                <p>0</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-600 mt-2 p-2 py-4 rounded-md flex justify-between items-center gap-2">
            <div className="w1/2 w-full">
              <h1>Note:</h1>
              <div className="flex gap-2 items-center">
                <p className="text-sm">Daily Remaining Limit:</p>
                <p className="flex items-center gap-1">
                  1,000,00000/1,000,000USDT
                  <IoIosHelpCircleOutline />
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <p className="text-sm">Daily Remaining Limit:</p>
                <p className="flex gap-1 text-sm items-center">
                  Ending With6 EFzoF{" "}
                  <span>
                    <IoIosArrowDown />
                  </span>
                </p>
              </div>
              <h3 className="text-sm mt-4 text-orange-500">
                Need help? please visit our Help Center
              </h3>
              <div className="flex mt-10 justify-between items-center">
                <h4 className=" text-sm">Withdeawal Fees:</h4>
                <h1 className=" text-sm font-bold ml-2">100 1SOL</h1>
              </div>
              <div className="flex gap-2 justify-between items-center">
                <div>
                  <h1 className="text-sm">Amount Recieved Setting</h1>
                  <h1 className=" text-sm font-bold">100 1SOL</h1>
                </div>
                <button className="bg-orange-400 px-5 rounded-md text-black py-2">
                  Withdraw
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
