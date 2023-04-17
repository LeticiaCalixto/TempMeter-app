import { Modal } from 'react-bootstrap';

interface ModalConfigProps {
    openModal: boolean;
    handleModal: (e: boolean) => void;
}

export default function ModalConfig({
    openModal,
    handleModal,
}: ModalConfigProps) {
  return (
    <Modal size='lg' show={openModal} onHide={() => handleModal(false)}>
      <Modal.Header>Configurações</Modal.Header>
    </Modal>
  );
}