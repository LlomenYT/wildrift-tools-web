

const ConfirmationModal = ({ title, header, subtitle, acceptButtonText, declineButtonText, onClose, onAccept }) => {

    return (
        <div className="modal fade show custom-modal" id="kt_modal_new_target" tabindex="-1" aria-modal="true" role="dialog" style={{ display: 'block' }}>

            <div className="modal-dialog modal-dialog-centered mw-750px">

                <div className="modal-content rounded">

                    <div className="modal-header">

                        <h2>{title}</h2>


                        <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                            <a onClick={onClose}>
                                <i className="ki-outline ki-cross fs-1"></i>
                            </a>
                        </div>

                    </div>

                    <div className="modal-body scroll-y px-10 px-lg-15 pt-0 pb-15">
                        <div class="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-9 p-6 mt-5">
                            <i class="bi bi-exclamation-triangle-fill fs-2tx text-warning me-4"></i>
                            <div class="d-flex flex-stack flex-grow-1">
                                <div class="fw-semibold">
                                    <h4 class="text-gray-900 fw-bold">{header}</h4>
                                    <div class="fs-6 text-gray-700">
                                        {subtitle}
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="modal-footer" style={{ border: 'none' }}>

                        <div className="column d-flex justify-content-between  col-4">

                            <button type="submit" id="kt_modal_new_target_submit" className="btn btn-primary-figma" onClick={onClose}>
                                <span className="indicator-label text-white">
                                    {declineButtonText}
                                </span>
                            </button>

                            <button type="submit" id="kt_modal_new_target_submit" className="btn btn-dark-figma" onClick={onAccept}>
                                <span className="indicator-label text-white">
                                    {acceptButtonText}
                                </span>
                            </button>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default ConfirmationModal;