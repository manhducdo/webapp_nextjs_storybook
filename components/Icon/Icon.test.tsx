import { Icon } from "@/components/Icon";
import { render } from "@/test-utils";
import { expect } from "@storybook/jest";

describe("Icon test cases", () => {
  it("Icon render check", () => {
    const { asFragment } = render(<Icon name="Moon" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
