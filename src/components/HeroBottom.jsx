import React from 'react'
import { IoIosSearch } from "react-icons/io";

export default function HeroBottom() {

    return (
        <div className="w-full py-4 px-10 2xl:px-32">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h2 className="text-lg md:text-2xl font-bold text-black">
                    All Offers from McDonald's East London
                </h2>
                <div className="form-control w-48 md:w-72">
                    <label className="input input-bordered flex items-center gap-2 ">
                        <IoIosSearch size={20} />
                        <input type="text" className="grow" placeholder="Search from menu..." />
                    </label>
                </div>
            </div>
        </div>
    )
}
