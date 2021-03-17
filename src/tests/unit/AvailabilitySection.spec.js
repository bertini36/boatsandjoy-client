import { screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { render } from '../test-utils';
import AvailabilitySection from '../../components/AvailabilitySection.vue';

let { describe, it, expect } = global;

describe('AvailabilitySection component', () => {
  it('shows a notification when a date is not selected', async () => {
    render(AvailabilitySection);

    const checkAvailabilityButton = screen.getByRole('button', { name: /book now/i });
    userEvent.click(checkAvailabilityButton);

    const notification = screen.getByText(/you have to specify a date/i);
    expect(notification).toBeInTheDocument();
  });
});
