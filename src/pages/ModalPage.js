import React, { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [visible, setVisible] = useState(false);

  const actionBar = (
    <div>
      <Button onClose={() => setVisible(false)} primary>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={() => setVisible(false)} actionBar={actionBar}>
      <p>Here is important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button onClick={() => setVisible(true)} primary>
        Open Modal
      </Button>
      {visible && modal}
    </div>
  );
}

export default ModalPage;
