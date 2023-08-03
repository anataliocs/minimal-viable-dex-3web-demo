"use client";

import { useState } from "react";
import { useDemoModal } from "@/components/home/demo-modal";
import Popover from "@/components/shared/popover";
import Tooltip from "@/components/shared/tooltip";
import { ChevronDown } from "lucide-react";

export default function ComponentGrid() {
  const [openPopover, setOpenPopover] = useState(false);
    const [openPopover2, setOpenPopover2] = useState(false);

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-1">

      <Popover
        content={
          <div className="w-full rounded-md bg-white p-2 sm:w-40">
            <button className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100 active:bg-gray-200">
              ETH
            </button>
            <button className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100 active:bg-gray-200">
                USDC
            </button>
          </div>
        }
        openPopover={openPopover}
        setOpenPopover={setOpenPopover}
      >
        <button
          onClick={() => setOpenPopover(!openPopover)}
          className="flex w-42 items-center justify-between rounded-md border border-gray-300 px-6 py-3 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100"
        >
          <p className="text-gray-600">Sell Token</p>
          <ChevronDown
            className={`h-4 w-4 text-gray-600 transition-all ${openPopover ? "rotate-180" : ""
              }`}
          />
        </button>
      </Popover>

        <Popover
            content={
                <div className="w-full rounded-md bg-white p-2 sm:w-40">
                    <button className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100 active:bg-gray-200">
                        ETH
                    </button>
                    <button className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100 active:bg-gray-200">
                        USDC
                    </button>
                </div>
            }
            openPopover={openPopover2}
            setOpenPopover={setOpenPopover2}
        >
            <button
                onClick={() => setOpenPopover2(!openPopover2)}
                className="flex w-42 items-center justify-between rounded-md border border-gray-300 px-6 py-3 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100"
            >
                <p className="text-gray-600">Get Token</p>
                <ChevronDown
                    className={`h-4 w-4 text-gray-600 transition-all ${openPopover2 ? "rotate-180" : ""
                    }`}
                />
            </button>
        </Popover>
    </div>
  );
}
