import React from "react";

import { render } from "@/test-utils";

import { Tile } from "@/components/Tile";

describe("tile test cases", () => {
  it("Tile render check", () => {
    const { asFragment } = render(
      <Tile header="Header">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
        exercitationem officia. Temporibus doloribus maxime pariatur laborum
        placeat consequatur inventore nisi, non veniam? Enim facilis placeat
        quisquam ad, explicabo illum aut!
      </Tile>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
