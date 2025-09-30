import { useRef, useEffect } from 'react';

export const usePopover = (popoverRef, { title = '', content, placement = 'top', trigger = 'hover' }) => {

    const popover = useRef(null); //oppure window.bootstrap.Popover.getInstance(popoverRef);

    useEffect(() => {

        const handlers = [];
        const popoverElement = popoverRef.current;
        if (!popoverElement) return;

        popover.current = new window.bootstrap.Popover(popoverRef.current, {
            title: title,
            content: content,
            placement: placement,
            trigger: 'manual', //trigger: trigger,
            html: true
        });

        switch (trigger) {
            case 'click':
                const onClick = (event) =>{
                    event.preventDefault();
                    popover.current.toggle();
                };
                popoverElement.addEventListener('click', onClick);
                handlers.push(() => popoverElement.removeEventListener('click', onClick));
                break;
            case 'focus':
                const onFocus = () => (popover.current.show());
                const onBlur = () => (popover.current.hide());
                popoverElement.addEventListener('focus', onFocus);
                popoverElement.addEventListener('blur', onBlur);
                handlers.push(() => popoverElement.removeEventListener('focus', onFocus));
                handlers.push(() => popoverElement.removeEventListener('blur', onBlur));
                break;
            default:
                const onEnter = () =>{
                    popover.current?.show();
                };
                const onLeave = () =>{
                    popover.current?.hide();
                };
                popoverElement.addEventListener('mouseenter', onEnter);
                popoverElement.addEventListener('mouseleave', onLeave);
                handlers.push(() => popoverElement.removeEventListener('mouseenter', onEnter));
                handlers.push(() => popoverElement.removeEventListener('mouseleave', onLeave));
                break;
        }

        return () => {
            handlers.forEach((off) => off());
            popover.current?.dispose();
        }
    }, [title, content, placement, trigger]);

    const show = () => popover.current.show();
    const hide = () => popover.current.hide();
    const toggle = () => popover.current.toggle();
    const dispose = () => popover.current.dispose();

    return { show, hide, toggle, dispose };
}
