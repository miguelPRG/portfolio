import Social from "../../app/components/main/Social";
import { render, screen } from "@testing-library/react";

describe("Social Component tests", () => {
  it("Basic Render", () => {
    render(
      <Social
        social={<span className="material-symbols-outlined">facebook</span>}
        name="Facebook"
        href="https://facebook.com"
      />,
    );
    expect(
      document.querySelector("span.material-symbols-outlined"),
    ).toBeInTheDocument();
    expect(screen.getByText("Facebook")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://facebook.com",
    );
  });
});
