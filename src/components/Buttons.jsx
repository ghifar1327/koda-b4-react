import React from "react";

export const ButtonRegister = () => {
  return (
    <div>
      <button
        type="submit"
        className="w-full bg-[#FF8906] py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
      >
        Register
      </button>
    </div>
  );
};

export function ButtonFaceGoo() {
  return (
    <div className="flex justify-between ">
      <div className="flex justify-center shadow-md p-4 gap-6 w-[49%] rounded-xl">
        <img src="/Vector.png" alt="" />
        <button>Facebook</button>
      </div>
      <div className="flex justify-center shadow-md p-4 gap-6 w-[49%]  rounded-xl">
        <img src="/google.png" alt="" />
        <button>Google</button>
      </div>
    </div>
  );
}
