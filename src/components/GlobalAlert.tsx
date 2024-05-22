"use client";

import ReactModal from "react-modal";

interface Props {
    isOpen: boolean
    closeModal: () => void
    onSubmit: () => void
}

/* eslint-disable react/no-unescaped-entities */
const GlobalAlert = (props: Props) => {
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
  return (
      <ReactModal
          isOpen={props.isOpen}
          // onAfterOpen={afterOpenModal}
          // onAfterOpen={() => onClick?.()}
          onRequestClose={() => props.closeModal()}
          // shouldCloseOnOverlayClick={true}
          style={customStyles}
          contentLabel="Example Modal"
          >
            <div className="flex justify-center items-center flex-col space-y-10">
              <h1 className="font-bold">Perhatian</h1>
              <p>Apakah anda yakin ingin menghapus data ini ?</p>
              <div className="flex flex-row space-x-10">
                <button className="py-2 px-4 rounded-lg bg-blue-500 text-white" onClick={() => {
                    props.onSubmit()
                    props.closeModal
                }}>Ok</button>
                <button className="p-2 rounded-lg bg-red-500 text-white" onClick={() => props.closeModal()}>Batal</button>
              </div>
            </div>
      </ReactModal>
  );
};

export default GlobalAlert;
