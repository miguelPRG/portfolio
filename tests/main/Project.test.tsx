import Project from "../../app/components/main/Project";
import { render, screen } from "@testing-library/react";
import project1 from "../../app/images/project1.png";
import userEvent from "@testing-library/user-event";

describe("Project Component tests", () => {
  it("Basic Render", () => {
    render(
      <Project
        image={project1}
        title="Test Project"
        para="This is a test project description."
        link="https://example.com"
      />,
    );
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      expect.stringContaining("project1"),
    );
    expect(screen.getByText("Test Project")).toBeInTheDocument();
    expect(
      screen.getByText("This is a test project description."),
    ).toBeInTheDocument();
    const flipBtn = screen.getByRole("button", { name: /virar cartão/i });
    expect(flipBtn).toBeInTheDocument();
    expect(flipBtn.querySelector("svg")).toBeInTheDocument();
  });

  it("Flip shows live project message", async () => {
    const user = userEvent.setup();
    render(
      <Project
        image={project1}
        title="Test Project"
        para="This is a test project description."
        link="https://example.com"
      />,
    );

    await user.click(screen.getByRole("button", { name: /virar cartão/i }));

    expect(screen.getByText("Watch this project live!")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /voltar/i }));
  });

  it("Renders image with proper alt text", () => {
    render(
      <Project
        image={project1}
        title="Test Project"
        para="This is a test project description."
        link="https://example.com"
      />,
    );

    expect(
      screen.getByRole("img", { name: /test project image/i }),
    ).toBeInTheDocument();
  });

  it("Live link has correct attributes", () => {
    render(
      <Project
        image={project1}
        title="Test Project"
        para="This is a test project description."
        link="https://example.com"
      />,
    );

    const link = screen.getByRole("link", {
      name: /watch this project live!/i,
    });
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("Has a back button with icon", () => {
    render(
      <Project
        image={project1}
        title="Test Project"
        para="This is a test project description."
        link="https://example.com"
      />,
    );

    const backBtn = screen.getByRole("button", { name: /voltar/i });
    expect(backBtn).toBeInTheDocument();
    expect(backBtn.querySelector("svg")).toBeInTheDocument();
  });
});

