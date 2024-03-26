import React from 'react';

const DonationsSection = () => {
  return (
    <div>
      <div className="bg-white w-screen flex justify-center items-center">
        <div className="max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 className="text-6xl font-bold text-left mb-9 mt-20 text-[#E2D6AF]">Donations</h2>
          <div className="text-left">
            <p className="text-lg text-gray-700 px-5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec augue ut augue ultrices volutpat id ut velit. Vestibulum id luctus ex, a finibus eros. Morbi nec tincidunt enim. Donec consectetur, risus eu suscipit tempor, libero odio tristique odio, sit amet laoreet ante nulla et nisl. Nulla facilisi. Integer suscipit convallis magna vel tempus. Sed ultrices elit sed urna dictum consectetur. Integer consequat neque et quam viverra convallis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec augue ut augue ultrices volutpat id ut velit. Vestibulum id luctus ex, a finibus eros. Morbi nec tincidunt enim. Donec consectetur, risus eu suscipit tempor, libero odio tristique odio, sit amet laoreet ante nulla et nisl. Nulla facilisi. Integer suscipit convallis magna vel tempus. Sed ultrices elit sed urna dictum consectetur. Integer consequat neque et quam viverra convallis.
            </p>
          </div>
          <div className="flex mt-5">
            <button className='bg-[#1C5C2D] rounded-full px-9 py-3 font-serif font-semibold mt-6 mb-9 text-[#E2D6AF] hover:bg-slate-200'>Donate</button>
          </div>
        </div>
      </div>
      <div className="bg-[#1C5C2D] w-screen h-20 px-15 flex justify-center items-center">
         <h2 className="text-2xl font-bold  text-[#E2D6AF]">All rights reserved</h2>
      </div>
    </div>
  );
};

export default DonationsSection;
