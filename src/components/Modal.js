import ReactDOM from 'react-dom';

function Modal({content, actionBar, onClose}) {

    return ReactDOM.createPortal(
        <div>
            <div onClick={onClose} className="bg-gray-200 opacity-80 fixed inset-0">
            </div>
            <div className='overflow-hidden rounded bg-white fixed w-96 h-96 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='p-12 h-full flex flex-col justify-between items-center'>
                    <div className='flex flex-col w-full overflow-hidden text-ellipsis'>
                        <h1 className='text-4xl mb-5'>{content.title}</h1>
                        <p className='text-md mb-5'>{content.body}</p>
                    </div>
                    <div>{actionBar}</div>
                </div>
            </div>
        </div>
    ,document.querySelector('.modal-container'));
}

export default Modal;