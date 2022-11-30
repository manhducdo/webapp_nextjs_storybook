import { render } from "@/test-utils";

import { Layout } from "@/components/Layout/Layout";

describe("Layout test cases", () => {
  const child = (
    <>
      <h1>Main article area</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fuga
        veritatis reiciendis repellendus, reprehenderit quae, illum similique ea
        quisquam, repellat nisi. Est quibusdam, hic maxime voluptatibus
        aspernatur iusto inventore minima.
      </p>
    </>
  );

  it("Render check", () => {
    const { asFragment } = render(<Layout>{child}</Layout>);
    expect(asFragment()).toMatchSnapshot();
  });
});
