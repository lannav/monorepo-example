import React from 'react';
import { render } from '@testing-library/react';

import CoreComponent from './ui-core';

describe(' UiCore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CoreComponent />);
    expect(baseElement).toBeTruthy();
  });
});
