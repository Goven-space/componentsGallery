import { useRef } from 'react';

const depAreSame = (oldDeps, deps) => {
    if (oldDeps === deps) return true
    for (let i = 0, len = oldDeps.length; i < len; i++){
        if(!Object.is(oldDeps[i],deps[i])) return false
    }
    return true
}

function useCreation(fn, deps) {
    const { current } = useRef({
        deps,
        obj: undefined,
        initialized: false
    })

    if (current.initialized === false || !depAreSame(current.obj, deps)) {
        current.deps = deps
        current.obj = fn()
        current.initialized = true
    }

    return current.obj
}

export default useCreation;