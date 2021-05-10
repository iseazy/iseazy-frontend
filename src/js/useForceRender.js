import React, { useState, useCallback } from 'react'

const useForceRender = () => {
    const [, updateState] = useState()
    const reRender = useCallback(() => updateState({}), [])

    return reRender
}

export default useForceRender
