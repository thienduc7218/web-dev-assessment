import { fireEvent, render } from "@testing-library/react";
import InputSearch from "./InputSearch";

describe("InputSearch Component", () => {
    it('renders input field correctly', () => {
        const onSearch = vi.fn();
        const { getByPlaceholderText } = render(<InputSearch onSearch={onSearch} />);
        expect(getByPlaceholderText('Search...')).toBeInTheDocument();
    });

    it('calls onSearch when search button is clicked with input value', () => {
        const onSearch = vi.fn();
        const { getByText, getByPlaceholderText } = render(<InputSearch onSearch={onSearch} />);
        const input = getByPlaceholderText('Search...');

        fireEvent.change(input, { target: { value: 'test search' } });
        fireEvent.click(getByText('Search'));

        expect(onSearch).toHaveBeenCalledWith('test search');
    });

    it('shows clear button when input has value', () => {
        const onSearch = vi.fn();
        const { getByPlaceholderText, getByText } = render(<InputSearch onSearch={onSearch} />);
        const input = getByPlaceholderText('Search...');

        fireEvent.change(input, { target: { value: 'test' } });
        expect(getByText('✕')).toBeInTheDocument();
    });

    it('clears input when clear button is clicked', () => {
        const onSearch = vi.fn();
        const { getByPlaceholderText, getByText } = render(<InputSearch onSearch={onSearch} />);
        const input = getByPlaceholderText('Search...');

        fireEvent.change(input, { target: { value: 'test' } });
        fireEvent.click(getByText('✕'));
        expect((input as HTMLInputElement).value).toBe('');
    });

    it('handles keyboard navigation through suggestions', async () => {
        const onSearch = vi.fn();
        const { getByPlaceholderText } = render(<InputSearch onSearch={onSearch} />);
        const input = getByPlaceholderText('Search...');

        fireEvent.change(input, { target: { value: 'test' } });
        fireEvent.keyDown(input, { key: 'ArrowDown' });
        fireEvent.keyDown(input, { key: 'ArrowUp' });
        fireEvent.keyDown(input, { key: 'Enter' });
        fireEvent.keyDown(input, { key: 'Escape' });
    });
})