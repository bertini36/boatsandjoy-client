import { screen } from '@testing-library/vue';
import '@testing-library/jest-dom';

import { render } from '../test-utils';
import Navbar from '../../components/Navbar.vue';

let { describe, it, expect } = global;

describe('Navbar component', () => {
  it('links are accessible', async () => {
    render(Navbar);

    const homeLink = screen.getByRole('link', { name: /home/i });
    const boatsLink = screen.getByRole('link', { name: /boats/i });
    const extrasLink = screen.getByRole('link', { name: /extras/i });

    expect(homeLink).toBeInTheDocument();
    expect(boatsLink).toBeInTheDocument();
    expect(extrasLink).toBeInTheDocument();

  });
});
