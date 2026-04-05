import Main from "../../app/components/main/Main";
import { render, screen } from "@testing-library/react";

describe("Main Component tests", () => {
  it("Basic Render", () => {
    render(<Main />);
    expect(screen.getByText("Selected work")).toBeInTheDocument();
    expect(screen.getByText("Featured projects")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("How I can help")).toBeInTheDocument();
  });
});
