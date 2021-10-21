import {useCallback, useState} from 'react'

export default function useModal () {
    const [isShowModal, setShowModal] = useState<boolean>(false);

    const hiddenModal = useCallback(() => setShowModal(false), []);

    const showModal = useCallback(() => setShowModal(true), []);


    return {
        showModal,
        hiddenModal,
        isShowModal,
    }
} 