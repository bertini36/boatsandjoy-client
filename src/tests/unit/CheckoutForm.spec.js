import { screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { render } from '../test-utils';
import CheckoutForm from '../../components/CheckoutForm.vue';

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
  it('shows availability option data', async () => {
    render(CheckoutForm, { availabilityOption: availabilityOption });
  });
});
