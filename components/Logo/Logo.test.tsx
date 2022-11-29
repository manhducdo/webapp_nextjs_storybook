import { render } from "@testing-library/react";

import { Logo } from "@/components/Logo/Logo";
import { expect } from "@storybook/jest";

describe("Logo test cases", () => {
  it("Render check", () => {
    const { asFragment } = render(<Logo>WebAp</Logo>);
    expect(asFragment()).toMatchSnapshot();
  });
  it("Render with custom size", () => {
    const { asFragment } = render(<Logo size={10}>WebApp</Logo>);
    expect(asFragment()).toMatchSnapshot();
  });
});
