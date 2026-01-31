import Social from "../app/components/main/Social";
import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";

describe("Social Component tests", () => {
  it("Basic Render", async () => {
    const { container } = render(
      <Social social={<svg/>} name="Exemplo" href="https://exemplo.com" />
    );

    const link = screen.getByRole("link", { name: /exemplo/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://exemplo.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer");

    const resultado = await axe(container);
    expect(resultado.violations).toHaveLength(0);
  });
});