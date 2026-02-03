import {render, screen} from '@testing-library/react';
import Technology from '../../app/components/header/Technology';

describe("Technology Component", () => {

    it("should render the Technology component with valid name", () => {
        render(<Technology name="react" />);
        const techElement = screen.getByLabelText("react");
        expect(techElement).toBeInTheDocument();
    });

    it("should not render the Technology component with invalid name", () => {
        const { container } = render(<Technology name="invalidTech" />);
        expect(container.querySelector("svg")).not.toBeInTheDocument();
    });
});