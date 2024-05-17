import { useDashboard } from "@/contexts/useHooks";
import React from "react";
import Modal from "react-modal";

interface Props {
  children: React.ReactNode;
}

const WrapperDashboard: React.FC<Props> = (props) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  const {isOpenModal, setIsOpenModal} = useDashboard()

  return (
    <div className="bg-white min-h-[100vh]">
      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg dark:border-gray-700 mt-14">
          {props.children}
        </div>
      </div>
      <Modal
          isOpen={isOpenModal}
          // onAfterOpen={afterOpenModal}
          onRequestClose={() => setIsOpenModal(false)}
          // shouldCloseOnOverlayClick={true}
          style={customStyles}
          contentLabel="Example Modal"
          >
          <h2>Hello</h2>
          <button>close</button>
          <div>I am a modal</div>
      </Modal>
    </div>
  );
};

export default WrapperDashboard;
