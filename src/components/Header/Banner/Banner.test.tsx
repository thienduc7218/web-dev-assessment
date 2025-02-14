import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Banner from './Banner';

describe("Banner Component", () => {
    it('should render Banner component', () => {
        render(<Banner />);
        expect(screen.getByText(/An Official Website of the/i)).toBeInTheDocument();
    });

    it('should render the Singapore Government text', () => {
        render(<Banner />);
        expect(screen.getByText('Singapore Government')).toBeInTheDocument();
    });

    it('should render the Singapore lion image', () => {
        render(<Banner />);
        const lionImage = screen.getByAltText('singapore-lion-svg');
        expect(lionImage).toBeInTheDocument();
        expect(lionImage).toHaveAttribute('src', 'src/assets/singapore-lion.svg');
    });

    it('should have correct styling classes', () => {
        render(<Banner />);
        expect(screen.getByText(/An Official Website of the/i).closest('p'))
            .toHaveClass('text-xs text-[#5B5B5B] flex gap-2');
    });
});