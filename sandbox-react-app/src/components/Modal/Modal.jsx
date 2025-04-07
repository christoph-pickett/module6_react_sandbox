import { useState } from "react";
import './Modal.css';

export const Modal = ({children}) => {
  const [visible, setVisible] = useState(true)
  return  visible? (
    <div className="modal-background" onClick={() => setVisible(false)}>
      <div className="modal-body">
        {children}
      </div>
    </div>
  ) : (<></>);
};