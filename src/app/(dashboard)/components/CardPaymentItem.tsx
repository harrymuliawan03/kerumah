import { ListPaymentResponse } from "@/modules/pembayaran/models/list-payment-model";
import React from "react"

interface Props {
    data: ListPaymentResponse
}

const CardPaymentItem = (props: Props) => {
    return (
        <tr>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex items-center gap-3">
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{props.data.tipe}</p>
          </div>
        </td>
        {/* <td className="p-4 border-b border-blue-gray-50">
          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">$2,500</p>
        </td> */}
        <td className="p-4 border-b border-blue-gray-50">
          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{props.data.nama}</p>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{props.data.kode_unit}</p>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="w-max">
            <div className={`relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none ${props.data.status ? 'bg-amber-500/20 text-amber-900 ' : 'bg-green-500/20 text-green-900 '} py-1 px-2 text-xs rounded-md`} style={{ opacity: 1 }}>
              <span className="">{props.data.status ? 'Late' : 'On Time'}</span>
            </div>
          </div>
          {/* <div className="w-max">
            <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-amber-500/20 text-amber-900 py-1 px-2 text-xs rounded-md" style={{ opacity: 1 }}>
              <span className="">Late</span>
            </div>
          </div> */}
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex items-center gap-3">
          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{props.data.tanggal_pembayaran}</p>
          </div>
        </td>
        {/* <td className="p-4 border-b border-blue-gray-50">
          <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
              </svg>
            </span>
          </button>
        </td> */}
      </tr>
    )
}

export default CardPaymentItem;