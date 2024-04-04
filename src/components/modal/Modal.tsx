import { Button } from '@mui/material';
import { createPortal } from 'react-dom'

import { ModalType } from '../../type/HomeType';

export default function Modal({ title, message, buttons, children }: ModalType) {

  return createPortal(
    <>
      <div className="flex fixed z-50 w-full h-screen top-0 bg-black/60">6565
        <div className="bg-white mx-auto my-auto rounded-lg p-5">
          <p className="my-4 text-2xl font-bold">{title}</p>
          <p className="my-4 text-xl">{message}</p>
          {children}
          <div className="flex flex-row-reverse gap-4">
            {
              buttons.map(button => (
                <Button key={button.id} variant={button.variant ?? "contained"} color={button.color ?? 'primary'} onClick={button.onClick}>{button.title}</Button>
              ))
            }
          </div>
        </div>
      </div>
    </>
    , document.getElementById('portal')!
  )
}