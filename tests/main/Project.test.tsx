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
    const flipBtn = screen.getByRole("button", {
      name: /flip card to see repository link/i,
    });
    expect(flipBtn).toBeInTheDocument();
    expect(flipBtn.querySelector("svg")).toBeInTheDocument();
  });

  it("Flip shows repository link", async () => {
    const user = userEvent.setup();
    render(
      <Project
        image={project1}
        title="Test Project"
        para="This is a test project description."
        link="https://example.com"
      />,
    );

    await user.click(
      screen.getByRole("button", { name: /flip card to see repository link/i }),
    );

    expect(screen.getByText("View repository")).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: /flip back to project summary/i }),
    );
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

  it("Live link has correct attributes", async () => {
    const user = userEvent.setup();
    render(
      <Project
        image={project1}
        title="Test Project"
        para="This is a test project description."
        link="https://example.com"
      />,
    );

    await user.click(
      screen.getByRole("button", { name: /flip card to see repository link/i }),
    );

    const link = screen.getByRole("link", { name: /view repository/i });
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

    const backBtn = screen.getByRole("button", {
      name: /flip back to project summary/i,
    });
    expect(backBtn).toBeInTheDocument();
    expect(backBtn.querySelector("svg")).toBeInTheDocument();
  });
});
