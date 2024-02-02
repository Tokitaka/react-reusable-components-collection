import ReactDOM from 'react-dom';

function Modal({content, actionBar, onClose}) {
    return ReactDOM.createPortal(
        <div>
            <div onClick={onClose} className="bg-gray-200 opacity-80 fixed inset-0">
            </div>
            <div className='rounded bg-white fixed inset-40'>
                <div className='p-12 flex flex-col justify-between h-full items-center'>
                    <div className='flex flex-col'>
                        <h1 className='text-4xl mb-5'>{content.title}</h1>
                        <p className='text-lg'>{content.body}</p>
                    </div>
                    <div>{actionBar}</div>
                </div>
            </div>
        </div>
    , document.querySelector('.modal-container'));
}

export default Modal;