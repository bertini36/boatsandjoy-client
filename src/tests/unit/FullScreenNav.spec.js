import { screen } from '@testing-library/vue';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { render } from '../test-utils';
import FullScreenNav from '../../components/FullScreenNav.vue';

let { describe, it, expect } = global;

describe('FullScreenNav component', () => {
  it('links are accessible', async () => {
    render(FullScreenNav, {}, { showingFullScreenNav: true });

    const homeLink = screen.getByRole('link', { name: /home/i });
    const boatsLink = screen.getByRole('link', { name: /boats/i });
    const waterSportsLink = screen.getByRole('link', { name: /watersports/i });

    expect(homeLink).toBeInTheDocument();
    expect(boatsLink).toBeInTheDocument();
    expect(waterSportsLink).toBeInTheDocument();
  });

  it('closes when click', async () => {
    render(FullScreenNav, {}, { showingFullScreenNav: true });

    const homeLinkBeforeClose = screen.getByRole('link', { name: /home/i });
    userEvent.click(homeLinkBeforeClose);

    const homeLink = await screen.queryByRole('link', { name: /home/i });
    expect(homeLink).not.toBeInTheDocument();
  });
});
