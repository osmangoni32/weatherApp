import React, { useState } from "react";
import heart from "../../assets/heart.svg";
import red_heart from "../../assets/heart-red.svg"

export default function AddTofavorite() {
    const [isFavorite,setToggleFavorite]=useState(false)
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button onClick={()=>{setToggleFavorite(!isFavorite)}} className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
          <span >Add to Favourite</span>
          <img src={isFavorite?red_heart:heart} alt="" />
        </button>
      </div>
    </div>
  );
}
