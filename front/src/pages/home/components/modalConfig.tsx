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
    <div className="modal fade" id="ModalConfig" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Configurações</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body d-flex align-items-center flex-column">
                <button type="button" className="btn btn-light mb-3" data-dismiss="modal">Adicionar Sensor</button>

                <button type="button" className="btn btn-light mb-3" data-dismiss="modal">Remover Sensor</button>

                <button type="button" className="btn btn-light" data-dismiss="modal">Editar Sensor</button>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
            </div>
          </div>
        </div>
      </div>
  );
}