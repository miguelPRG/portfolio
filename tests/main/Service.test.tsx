import Service from "../../app/components/main/Service";
import { render, screen } from "@testing-library/react";

describe("Service Component tests", () => {
  it("Basic Render", () => {
    render(
      <Service
        svg={
          <svg>
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="black"
              strokeWidth="3"
              fill="red"
            />
          </svg>
        }
        title="Test Service"
        para="This is a test service description."
      />,
    );
    expect(document.querySelector("svg")).toBeInTheDocument();
    expect(screen.getByText("Test Service")).toBeInTheDocument();
    expect(
      screen.getByText("This is a test service description."),
    ).toBeInTheDocument();
  });
});
