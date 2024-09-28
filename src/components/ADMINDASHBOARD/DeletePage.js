import React from 'react';
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle, HiCheck, HiX } from "react-icons/hi";


const DeletePage = ({ openModal, setOpenModal, handleDeleteOption }) => {
  return (
    <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this Data?
          </h3>
          <div className="flex justify-center gap-4">
          <Button color="failure" onClick={handleDeleteOption}>
           <HiCheck className="inline-block mr-1 m-auto" /> Yes, I'm sure
          </Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
           <HiX className="inline-block mr-1 m-auto" /> No, cancel
          </Button>

          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DeletePage;
