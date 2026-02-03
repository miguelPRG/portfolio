import Main from "../../app/components/main/Main"
import { render, screen } from "@testing-library/react";

describe("Main Component tests", () => {

    it("Basic Render", () => {
        render(<Main />);
        expect(screen.getByText("My Work")).toBeInTheDocument();
        expect(screen.getByText("Check out my featured projects")).toBeInTheDocument();
        expect(screen.getByText("My Services")).toBeInTheDocument();
        expect(screen.getByText("How can I help your business")).toBeInTheDocument();
    });
});