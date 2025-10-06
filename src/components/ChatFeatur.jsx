import React from "react";

export const ChatFeatur = () => {
  return (
    <>
      <button className="fixed bg-[#FF8906] p-3 right-[10%] bottom-[10%] rounded-[50%] z-5">
        <img src="ChatCircleDots.png" alt="Chat Circle" />
      </button>

      <div
        className="fixed z-5 bottom-[20%] right-[14%] w-[25%] h-[60%] bg-white rounded-xl border-t-[16px] border-[#FF8906]"
      >
        {/* Header - Admin Info */}
        <div className="flex items-center gap-5 p-3 pl-6">
          <img src="Ellipse 183.png" alt="admin profile" />
          <div>
            <div className="text-black font-semibold">Maria Angela</div>
            <div className="text-[#FF8906] text-sm">Admin Support</div>
          </div>
        </div>

        {/* Garis pemisah */}
        <div className="bg-[#E8E8E8] h-[1px]" />

        {/* Pesan admin */}
        <div className="flex items-center gap-4 m-4">
          <img
            src="Ellipse 183.png"
            alt="admin profile"
            className="w-[10%] rounded-full"
          />
          <div className="bg-[#E8E8E84D] text-black rounded-lg p-2 text-lg">
            Hallo, ada yang bisa kami bantu?
          </div>
        </div>

        {/* Balasan user */}
        <div className="flex justify-end mr-5 mb-3 gap-2 items-center">
          <div className="bg-[#E8E8E84D] text-black rounded-lg p-2 text-lg">
            Saya kesulitan mencari
          </div>
          <img
            src="Ellipse 184 (1).png"
            alt="user profile"
            className="w-10 h-10"
          />
        </div>
      </div>
    </>
  );
};
