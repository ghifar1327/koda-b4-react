import React from 'react'

export const PromoToday = () => {
  return (
    <>
    <section className="">
        <div className="flex justify-between items-center m-10 mx-30">
          <div className="text-5xl mb-4">Today <span className="text-[#8E6447]">Promo</span></div>
          <div className="flex gap-5">
            <button className="bg-[#E8E8E8] p-5 rounded-[50%]">
              <img src="arrow-up.png" alt="" />
            </button>
            <button className="bg-[#FF8906] p-5 rounded-[50%]">
              <img src="arrow-up.png" alt="" className="rotate-180" />
            </button>
          </div>
        </div>
        <div className="flex justify-between gap-4 overflow-x-auto">
          <div className="bg-[#88B788] w-[23%] flex pt-2 rounded-r-4xl">
            <img src="/image 46.png" alt="" />
            <div className="m-5">
              <div className="mb-3">
                <p className="font-bold">HAPPY MOTHER’S DAY!</p>
                <p className="">Get one of our favorite menu for free!</p>
              </div>
              <div className="text-white">Klaim Kupon</div>
            </div>
          </div>
          <div className="bg-[#88B788] w-[23%] flex pt-2 rounded-4xl px-5">
            <img src="/image 46.png" alt="" />
            <div className="my-5">
              <div className="mb-3">
                <p className="font-bold">HAPPY MOTHER’S DAY!</p>
                <p className="">Get one of our favorite menu for free!</p>
              </div>
              <div className="text-white">Klaim Kupon</div>
            </div>
          </div>
          <div className="bg-[#88B788] w-[23%] flex pt-2 rounded-4xl px-5">
            <img src="/image 46.png" alt="" />
            <div className="my-5">
              <div className="mb-3">
                <p className="font-bold">HAPPY MOTHER’S DAY!</p>
                <p className="">Get one of our favorite menu for free!</p>
              </div>
              <div className="text-white">Klaim Kupon</div>
            </div>
          </div>

          <div className="bg-[#F5C361] w-[20%] flex pt-2 pl-5  rounded-l-4xl">
            <img src="/image 43.png" alt="" />
            <div className="my-5">
              <div className="mb-3">
                <p className="font-bold">HAPPY MOTHER’S DAY!</p>
                <p className="">Get one of our favorite menu for free!</p>
              </div>
              <div className="text-white">Klaim Kupon</div>
            </div>
          </div>
        </div>
      </section>
      </>
  )
}
