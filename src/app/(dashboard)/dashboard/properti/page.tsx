import WrapperDashboard from "../../components/wrapper/WrapperDashboard";


export default function PropertiPage() {
    return (
        <WrapperDashboard>
            <div className="border-b mb-5 flex space-x-10 text-sm">
                <div className="text-indigo-400 flex items-center pb-2 pr-2 border-b-2 border-indigo-400 uppercase">
                    <a href="#" className="font-semibold inline-block">Perumahan</a>
                </div>
                <div className="text-[#041252] flex items-center pb-2 pr-2 border-b-2 border-[#041252] uppercase">
                    <a href="#" className="font-semibold inline-block">Kontrakan</a>
                </div>
                <div className="text-[#041252] flex items-center pb-2 pr-2 border-b-2 border-[#041252] uppercase">
                    <a href="#" className="font-semibold inline-block">Kostan</a>
                </div>
                {/* <a href="#">See All</a> */}
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

                <div className="rounded overflow-hidden shadow-lg flex flex-col">
                    <a href="#"></a>
                    <div className="relative">
                        <a href="#">
                            <img className="w-full" src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="Sunset in the mountains" />
                            <div
                                className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                            </div>
                        </a>
                        <a href="#!">
                            <div
                                className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                Cooking
                            </div>
                        </a>
                    </div>
                    <div className="px-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-10 py-4 mb-auto">
                        <div className="p-5 bg-[#d5b150] shadow-lg flex flex-col items-center text-white rounded-xl">
                            <p>Ruangan</p>
                            <p>20</p>
                        </div>
                        <div className="p-5 bg-[#a555e2] shadow-lg flex flex-col items-center text-white rounded-xl">
                            <p>Terisi</p>
                            <p>20</p>
                        </div>
                        <div className="p-5 bg-[#5fe79a] shadow-lg flex flex-col items-center text-white rounded-xl">
                            <p>Tersedia</p>
                            <p>20</p>
                        </div>
                    </div>
                </div>

                <div className="rounded overflow-hidden shadow-lg flex flex-col">
                    <a href="#"></a>
                    <div className="relative">
                        <a href="#">
                            <img className="w-full" src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="Sunset in the mountains" />
                            <div
                                className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                            </div>
                        </a>
                        <a href="#!">
                            <div
                                className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                Cooking
                            </div>
                        </a>
                    </div>
                    <div className="px-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-10 py-4 mb-auto">
                        <div className="p-5 bg-[#d5b150] shadow-lg flex flex-col items-center text-white rounded-xl">
                            <p>Ruangan</p>
                            <p>20</p>
                        </div>
                        <div className="p-5 bg-[#a555e2] shadow-lg flex flex-col items-center text-white rounded-xl">
                            <p>Terisi</p>
                            <p>20</p>
                        </div>
                        <div className="p-5 bg-[#5fe79a] shadow-lg flex flex-col items-center text-white rounded-xl">
                            <p>Tersedia</p>
                            <p>20</p>
                        </div>
                    </div>
                </div>

                <div className="rounded overflow-hidden shadow-lg flex flex-col">
                    <a href="#"></a>
                    <div className="relative">
                        <a href="#">
                            <img className="w-full" src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="Sunset in the mountains" />
                            <div
                                className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                            </div>
                        </a>
                        <a href="#!">
                            <div
                                className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                Cooking
                            </div>
                        </a>
                    </div>
                    <div className="px-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-10 py-4 mb-auto">
                        <div className="p-5 bg-[#d5b150] shadow-lg flex flex-col items-center text-white rounded-xl">
                            <p>Ruangan</p>
                            <p>20</p>
                        </div>
                        <div className="p-5 bg-[#a555e2] shadow-lg flex flex-col items-center text-white rounded-xl">
                            <p>Terisi</p>
                            <p>20</p>
                        </div>
                        <div className="p-5 bg-[#5fe79a] shadow-lg flex flex-col items-center text-white rounded-xl">
                            <p>Tersedia</p>
                            <p>20</p>
                        </div>
                    </div>
                </div>


            </div>
        </WrapperDashboard>
    )
}