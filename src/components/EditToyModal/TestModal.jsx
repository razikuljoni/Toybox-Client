const TestModal = () => {
    console.log("testModal");
    return (
        // <>
        //     <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        //     <div className="modal">
        //         <div className="modal-box w-11/12 max-w-4xl p-10">
        //             <div className="modal-action">
        //                 <label
        //                     htmlFor="my_modal_6"
        //                     className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        //                 >
        //                     ✕
        //                 </label>
        //             </div>
        //             <h2 className="mb-4 text-4xl text-center font-bold text-error dark:text-white">
        //                 Edit Your Toy
        //             </h2>
        //             <form className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
        //                 <div className="sm:col-span-2">
        //                     <label
        //                         htmlFor="name"
        //                         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        //                     >
        //                         Toy Name
        //                     </label>
        //                     <input
        //                         type="text"
        //                         name="toy_name"
        //                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        //                         placeholder="Enter Your Toy name"
        //                         required
        //                     />
        //                 </div>
        //                 <div className="w-full">
        //                     <label
        //                         htmlFor="brand"
        //                         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        //                     >
        //                         Sub Catagory
        //                     </label>
        //                     <input
        //                         type="text"
        //                         name="sub_catagory"
        //                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        //                         placeholder="Enter Your Product SubCatagory"
        //                         required
        //                     />
        //                 </div>
        //                 <div className="w-full">
        //                     <label
        //                         htmlFor="brand"
        //                         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        //                     >
        //                         Price
        //                     </label>
        //                     <input
        //                         type="number"
        //                         name="price"
        //                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        //                         placeholder="Enter Your Toy Price"
        //                         required
        //                     />
        //                 </div>
        //                 <div className="w-full">
        //                     <label
        //                         htmlFor="brand"
        //                         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        //                     >
        //                         Rating
        //                     </label>
        //                     <input
        //                         type="number"
        //                         name="rating"
        //                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        //                         placeholder="Give A Initial Rating between 0 to 5"
        //                         required
        //                         min="1"
        //                         max="5"
        //                         step="0.1"
        //                     />
        //                 </div>
        //                 <div className="w-full">
        //                     <label
        //                         htmlFor="price"
        //                         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        //                     >
        //                         Quantity
        //                     </label>
        //                     <input
        //                         type="number"
        //                         name="available_quantity"
        //                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        //                         placeholder="Give Your Availability Of Toys"
        //                         required
        //                     />
        //                 </div>
        //                 <div className="w-full">
        //                     <label
        //                         htmlFor="price"
        //                         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        //                     >
        //                         Seller Name
        //                     </label>
        //                     <input
        //                         type="text"
        //                         name="seller_name"
        //                         className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        //                         // value={user?.displayName}
        //                         disabled
        //                         required
        //                     />
        //                 </div>
        //                 <div className="w-full">
        //                     <label
        //                         htmlFor="price"
        //                         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        //                     >
        //                         Seller Email
        //                     </label>
        //                     <input
        //                         type="text"
        //                         name="seller_email"
        //                         className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        //                         // value={user?.email}
        //                         disabled
        //                         required
        //                     />
        //                 </div>
        //                 <div className="sm:col-span-2">
        //                     <label
        //                         htmlFor="name"
        //                         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        //                     >
        //                         PhotoUrl
        //                     </label>
        //                     <input
        //                         type="text"
        //                         name="toy_img"
        //                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        //                         placeholder="Enter Your Toy PhotoURL"
        //                         required
        //                     />
        //                 </div>
        //                 <div className="sm:col-span-2">
        //                     <label
        //                         htmlFor="description"
        //                         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        //                     >
        //                         Description
        //                     </label>
        //                     <textarea
        //                         id="description"
        //                         name="toy_description"
        //                         rows="8"
        //                         className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        //                         placeholder="Write a Toy description here..."
        //                         required
        //                     ></textarea>
        //                 </div>
        //                 <div className="flex sm:col-span-2 justify-between items-center space-x-4">
        //                     <button
        //                         type="submit"
        //                         className="text-white bg-error hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        //                     >
        //                         Update Toy
        //                     </button>

        //                     <div className="modal-action">
        //                         <label
        //                             htmlFor="my_modal_6"
        //                             className="cursor-pointer text-white bg-error hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        //                         >
        //                             Close Modal
        //                         </label>
        //                     </div>
        //                 </div>
        //             </form>
        //         </div>
        //         <label className="modal-backdrop" htmlFor="my_modal_6">
        //             Close
        //         </label>
        //     </div>
        // </>
        <div></div>
    );
};

export default TestModal;
