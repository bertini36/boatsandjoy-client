import { screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { render } from '../test-utils';
import CheckoutForm from '../../components/CheckoutForm.vue';
import { formatDate, formatHour } from '../../utils/dates';

let { describe, it, expect } = global;

const availabilityOption = {
  boat: {
    id: 1,
    name: 'B&J I'
  },
  day: '2021-03-23',
  discounts: {
    resident: 0.25
  },
  from_hour: '09:00:00',
  to_hour: '13:00:00',
  price: 400,
  slots: [
    {
      from_hour: '09:00:00',
      id: 337,
      position: 0,
      to_hour: '13:00:00'
    }
  ],
};

describe('CheckoutForm component', () => {
  it('shows boat name', async () => {
    render(CheckoutForm, { availabilityOption: availabilityOption });

    const boatName = screen.getByText(availabilityOption.boat.name);

    expect(boatName).toBeInTheDocument();
  });

  it('shows price', async () => {
    render(CheckoutForm, { availabilityOption: availabilityOption });

    const price = screen.getByText(`${availabilityOption.price}€`);

    expect(price).toBeInTheDocument();
  });

  it('shows renting time', async () => {
    render(CheckoutForm, { availabilityOption: availabilityOption });

    const time = screen.getByText(`${formatDate(availabilityOption.day)} from ${formatHour(availabilityOption.from_hour)} to ${formatHour(availabilityOption.to_hour)}`);

    expect(time).toBeInTheDocument();
  });

  it('shows reduced price when resident', async () => {
    render(CheckoutForm, { availabilityOption: availabilityOption });

    const residentCheck = screen.getByLabelText(/resident/i);
    await userEvent.click(residentCheck);

    const reducedPriceValue = availabilityOption.price - (availabilityOption.price * availabilityOption.discounts.resident);
    const reducedPrice = screen.getByText(`${reducedPriceValue}€`);
    expect(reducedPrice).toBeInTheDocument();
  });

  it('shows error when no accept legal advice', async () => {
    render(CheckoutForm, { availabilityOption: availabilityOption });

    const payButton = screen.getByRole('button');
    await userEvent.click(payButton);

    const errorText = screen.getByText(/you have to accept legal advice/i);
    expect(errorText).toBeInTheDocument();
  });

  it('shows error when no accept terms and conditions', async () => {
    render(CheckoutForm, { availabilityOption: availabilityOption });

    const payButton = screen.getByRole('button');
    await userEvent.click(payButton);

    const errorText = screen.getByText(/you have to accept terms and conditions/i);
    expect(errorText).toBeInTheDocument();
  });

  it('shows error when name is not specified', async () => {
    render(CheckoutForm, { availabilityOption: availabilityOption });

    const payButton = screen.getByRole('button');
    await userEvent.click(payButton);

    const errorText = screen.getByText(/you have to specify your name/i);
    expect(errorText).toBeInTheDocument();
  });

  it('shows error when telephone is not specified', async () => {
    render(CheckoutForm, { availabilityOption: availabilityOption });

    const payButton = screen.getByRole('button');
    await userEvent.click(payButton);

    const errorText = screen.getByText(/you have to specify your telephone number/i);
    expect(errorText).toBeInTheDocument();
  });

  it('does not show errors when all is ok', async () => {
    render(CheckoutForm, { availabilityOption: availabilityOption });
    const legalAdviceCheck = screen.getByLabelText(/legal advice/i);
    await userEvent.click(legalAdviceCheck);
    const termsAndConditionsCheck = screen.getByLabelText(/terms and conditions/i);
    await userEvent.click(termsAndConditionsCheck);
    const nameInput = screen.getByLabelText(/name/i);
    await userEvent.type(nameInput, 'Harry');
    const telephoneInput = screen.getByLabelText(/telephone/i);
    await userEvent.type(telephoneInput, '7');

    const payButton = screen.getByRole('button');
    await userEvent.click(payButton);

    const errorText = await screen.queryByText(/you have to/i);
    expect(errorText).not.toBeInTheDocument();
  });
});
