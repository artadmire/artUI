/**
 * @jest-environment jsdom
 */
const { render, screen } = require('@testing-library/react');
const Card = require('../src/Card').default;

describe('react-components', () => {
  test('test Card include card', () => {
    render(Card());
    const cardFont = screen.getByText(/Card/i);
    expect(cardFont).toBeTruthy();
  })
})