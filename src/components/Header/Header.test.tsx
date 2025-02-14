import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
    const mockOnSearch = vi.fn();

    it('renders without crashing', () => {
        render(<Header onSearch={mockOnSearch} />);
    });

    it('displays the header title', () => {
        render(<Header onSearch={mockOnSearch} />);
        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', 'src/assets/singapore-lion.svg');
    });


    it('has the correct accessibility role', () => {
        render(<Header onSearch={mockOnSearch} />);
        const button = screen.getByRole('button');
        expect(button).toHaveTextContent('Search');
    });
});