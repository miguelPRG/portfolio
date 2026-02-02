import Project from "../../app/components/main/Project";
import { render, screen } from "@testing-library/react";
import project1 from "../../app/images/project1.png";
import userEvent from '@testing-library/user-event';

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
  });
  it("Flips the card and shows the hidden div", async () => {
    const user = userEvent.setup();
    
    render(
      <Project
        image={project1}
        title="Test Project"
        para="This is a test project description."
        link="https://example.com"
      />,
    );

    // Verifica que a frente está visível
    expect(screen.getByText("This is a test project description.")).toBeInTheDocument();
    expect(screen.queryByText("Watch this project live!")).not.toBeInTheDocument();

    // Clica no botão de virar
    const flipButton = screen.getByLabelText("Virar cartão");
    await user.click(flipButton);

    // Verifica que a parte de trás está visível
    expect(screen.getByText("Watch this project live!")).toBeInTheDocument();
    expect(screen.getByLabelText("Voltar")).toBeInTheDocument();
  });
});
