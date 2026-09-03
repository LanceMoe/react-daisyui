import clsx from 'clsx';
import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import type { ComponentPosition, IComponentBaseProps } from '../types';
import ModalActions from './ModalActions';
import ModalBody from './ModalBody';
import ModalHeader from './ModalHeader';
import ModalLegacy from './ModalLegacy';

export type ModalProps = React.ComponentPropsWithoutRef<'dialog'> &
  IComponentBaseProps & {
    open?: boolean;
    position?: Exclude<ComponentPosition, 'left' | 'right'> | 'middle';
    responsive?: boolean;
    backdrop?: boolean;
    ariaHidden?: boolean;
  };

const Modal = forwardRef<HTMLDialogElement, ModalProps>(
  (
    { children, open, position, responsive, backdrop, ariaHidden, dataTheme, className, ...props },
    ref,
  ): React.JSX.Element => {
    const containerClasses = twMerge(
      'modal',
      clsx({
        'modal-open': open,
        'modal-end': position === 'end',
        'modal-start': position === 'start',
        'modal-top': position === 'top',
        'modal-middle': position === 'middle',
        'modal-bottom': position === 'bottom',
        'modal-bottom sm:modal-middle': responsive,
      }),
    );

    ariaHidden = ariaHidden ?? !open;
    const bodyClasses = twMerge('modal-box', className);

    return (
      <dialog
        {...props}
        aria-label="Modal"
        aria-hidden={ariaHidden}
        open={open}
        aria-modal={open}
        data-theme={dataTheme}
        className={containerClasses}
        ref={ref}
      >
        <div data-theme={dataTheme} className={bodyClasses}>
          {children}
        </div>
        {backdrop && (
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        )}
      </dialog>
    );
  },
);

Modal.displayName = 'Modal';

type UseDialogReturn = {
  dialogRef: React.RefObject<HTMLDialogElement | null>;
  isOpen: boolean;
  show: () => void;
  hide: () => void;
};

export const useDialog = (): UseDialogReturn => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleShow = useCallback(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      if (typeof dialog.showModal === 'function') {
        dialog.showModal();
      }
      dialog.removeAttribute('aria-hidden');
      setIsOpen(true);
    }
  }, []);

  const handleHide = useCallback(() => {
    const dialog = dialogRef.current;
    if (dialog?.open) {
      if (typeof dialog.close === 'function') {
        dialog.close();
      }
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    const onNativeClose = () => {
      setIsOpen(false);
    };

    dialog.addEventListener('close', onNativeClose);
    return () => {
      dialog.removeEventListener('close', onNativeClose);
    };
  }, []);

  return {
    dialogRef,
    isOpen,
    show: handleShow,
    hide: handleHide,
  };
};
export default Object.assign(Modal, {
  Header: ModalHeader,
  Body: ModalBody,
  Actions: ModalActions,
  Legacy: ModalLegacy,
  useDialog,
});
