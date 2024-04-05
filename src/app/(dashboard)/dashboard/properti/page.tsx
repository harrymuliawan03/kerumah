import CardProperti from "../../components/CardProperti";
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

                <CardProperti />
                <CardProperti />
                <CardProperti />


            </div>
        </WrapperDashboard>
    )
}