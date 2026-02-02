import { render, screen } from "@testing-library/react";
import Footer from "../app/components/Footer";

describe("Footer Component tests", () => {
  it("Basic Render", () => {
    render(<Footer />);
    const today = new Date();
    const year = today.getFullYear().toString();
    expect(
      screen.getByText(
        new RegExp(`© ${year} Site made by Miguel Gonçalves.`, "i"),
      ),
    ).toBeInTheDocument();
  });
});
