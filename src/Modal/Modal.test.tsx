import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import Button from '../Button';
import Modal from './';

function TestModal({ state }: { state: boolean }) {
  const [open, setOpen] = React.useState(state);

  const toggleModal = () => setOpen((o) => !o);
  return (
    <>
      <Button onClick={toggleModal}>Open Sesame</Button>
      <Modal open={open}>
        <Modal.Header className="font-bold">These are not the droids you're looking for</Modal.Header>
        <Button onClick={toggleModal}>Do not click me</Button>
      </Modal>
    </>
  );
}

describe('Modal', () => {
  it('should not show modal', () => {
    render(
      <Modal>
        {' '}
        <Modal.Header className="font-bold">These are not the droids you're looking for</Modal.Header>
        <Button>Do not click me</Button>
      </Modal>,
    );
    expect(screen.queryByRole('button', { name: 'Do not click me' })).not.toBeInTheDocument();
  });

  it('should show modal', () => {
    render(
      <Modal open>
        {' '}
        <Modal.Header className="font-bold">These are not the droids you're looking for</Modal.Header>
        <Button>Do not click me</Button>
      </Modal>,
    );
    expect(screen.getByRole('button', { name: 'Do not click me' })).toBeInTheDocument();
  });

  it('should open modal with button', async () => {
    const user = userEvent.setup();
    render(<TestModal state={false} />);
    expect(screen.getByRole('button', { name: 'Open Sesame' })).toBeInTheDocument();

    expect(screen.queryByRole('button', { name: 'Do not click me' })).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Open Sesame' }));

    expect(screen.getByRole('button', { name: 'Do not click me' })).toBeInTheDocument();
  });

  it('should close modal with button', async () => {
    const user = userEvent.setup();
    render(<TestModal state={true} />);

    expect(screen.getByRole('button', { name: 'Do not click me' })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Do not click me' }));

    expect(screen.queryByRole('button', { name: 'Do not click me' })).not.toBeInTheDocument();
  });
});

function TestUseDialogModal() {
  const { dialogRef, isOpen, show, hide } = Modal.useDialog();
  return (
    <>
      <span data-testid="status">{isOpen ? 'open' : 'closed'}</span>
      <Button onClick={show}>Open Dialog</Button>
      <Button onClick={hide}>Close Dialog</Button>
      <Modal ref={dialogRef}>
        <Modal.Header>Dialog Title</Modal.Header>
        <Modal.Body>Dialog Content</Modal.Body>
      </Modal>
    </>
  );
}

describe('useDialog', () => {
  let originalShowModal: ((this: HTMLDialogElement) => void) | undefined;
  let originalClose: ((this: HTMLDialogElement) => void) | undefined;

  beforeAll(() => {
    originalShowModal = HTMLDialogElement.prototype.showModal;
    originalClose = HTMLDialogElement.prototype.close;

    HTMLDialogElement.prototype.showModal = vi.fn(function (this: HTMLDialogElement) {
      this.open = true;
    });
    HTMLDialogElement.prototype.close = vi.fn(function (this: HTMLDialogElement) {
      this.open = false;
      this.dispatchEvent(new Event('close'));
    });
  });

  afterAll(() => {
    if (originalShowModal) {
      HTMLDialogElement.prototype.showModal = originalShowModal;
    } else {
      delete (HTMLDialogElement.prototype as Partial<HTMLDialogElement>).showModal;
    }
    if (originalClose) {
      HTMLDialogElement.prototype.close = originalClose;
    } else {
      delete (HTMLDialogElement.prototype as Partial<HTMLDialogElement>).close;
    }
  });

  it('should initialize with isOpen = false', () => {
    render(<TestUseDialogModal />);
    expect(screen.getByTestId('status')).toHaveTextContent('closed');
  });

  it('should open dialog and update isOpen on handleShow', async () => {
    const user = userEvent.setup();
    render(<TestUseDialogModal />);

    await user.click(screen.getByRole('button', { name: 'Open Dialog' }));
    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalled();
    expect(screen.getByTestId('status')).toHaveTextContent('open');
  });

  it('should close dialog and update isOpen on handleHide', async () => {
    const user = userEvent.setup();
    render(<TestUseDialogModal />);

    await user.click(screen.getByRole('button', { name: 'Open Dialog' }));
    expect(screen.getByTestId('status')).toHaveTextContent('open');

    await user.click(screen.getByRole('button', { name: 'Close Dialog' }));
    expect(HTMLDialogElement.prototype.close).toHaveBeenCalled();
    expect(screen.getByTestId('status')).toHaveTextContent('closed');
  });

  it('should update isOpen on native close event', async () => {
    const user = userEvent.setup();
    const { container } = render(<TestUseDialogModal />);

    await user.click(screen.getByRole('button', { name: 'Open Dialog' }));
    expect(screen.getByTestId('status')).toHaveTextContent('open');

    const dialog = container.querySelector('dialog');
    fireEvent(dialog!, new Event('close'));

    expect(screen.getByTestId('status')).toHaveTextContent('closed');
  });
});
