import { useDashboard } from "@/contexts/useHooks";
import React from "react";
import Modal from "react-modal";

interface Props {
  children: React.ReactNode;
}

const WrapperDashboard: React.FC<Props> = (props) => {
  const customStyles = {
    content: {
      top: '40%',
      left: '45%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '0 ',
      transform: 'translate(0, -40%)',
    },
  };
  const {isOpenModal, setIsOpenModal, onClick} = useDashboard()

  return (
    <div className="bg-white min-h-[100vh]">
      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg dark:border-gray-700 mt-14 relative">
          {props.children}
          {/* <Modal
              isOpen={isOpenModal}
              // onAfterOpen={afterOpenModal}
              // onAfterOpen={() => onClick?.()}
              onRequestClose={() => setIsOpenModal(false)}
              // shouldCloseOnOverlayClick={true}
              style={customStyles}
              contentLabel="Example Modal"
              >
                <div className="flex justify-center items-center flex-col space-y-10">
                  <h1 className="font-bold">Perhatian</h1>
                  <p>Apakah anda yakin ingin menghapus data ini ?</p>
                  <div className="flex flex-row space-x-10">
                    <button className="py-2 px-4 rounded-lg bg-blue-500 text-white" onClick={() => onClick?.()}>Ok</button>
                    <button className="p-2 rounded-lg bg-red-500 text-white" onClick={() => setIsOpenModal(false)}>Batal</button>
                  </div>
                </div>
          </Modal> */}
        </div>
      </div>
    </div>
  );
};

export default WrapperDashboard;
