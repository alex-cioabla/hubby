import { useEffect, useImperativeHandle, useRef } from 'react';

export default function TextInput({ ref, isFocused = false, ...props }){

    const localRef = useRef(null);

    //useImperativeHandle è un hook che permette di gestire custom il comportamento di ref
    useImperativeHandle(ref, () => ({
        //chiamando il metodo focus sul ref viene eseguita questa funzione
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            //richiamo metodo focus sul ref
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type="text"
            ref={localRef}
        />
    );
}
