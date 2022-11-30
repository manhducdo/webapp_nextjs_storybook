import { render } from "@/test-utils";

import { StyledLink } from "@/components/StyledLink";

describe("Styled test cases", () => {
  it("Styled render check", () => {
    const { asFragment } = render(
      <StyledLink href="#">
        Hands-On React. Build advanced React Js Frontend with expert
      </StyledLink>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
