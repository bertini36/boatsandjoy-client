import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Modal from '../../components/Modal.vue';

let { describe, it, expect } = global;

describe('Modal component', () => {
  it('renders correctly', async () => {
    render(Modal, { props: { showing: true } });

    const modal = await screen.findByRole('dialog');
    expect(modal).toBeInTheDocument();
  });

  it('closes when click', async () => {
    render(Modal, { props: { showing: true } });
    const button = await screen.getByRole('button');

    await userEvent.click(button);

    const modal = await screen.queryByRole('dialog');
    expect(modal).not.toBeInTheDocument();
  });

  it('emits close signal', async () => {
    const { emitted } = render(Modal, { props: { showing: true } });
    const button = await screen.getByRole('button');

    await userEvent.click(button);

    expect(emitted().close).toBeTruthy();
  });
});
