import { expect } from "@storybook/jest";
import { screen } from "@testing-library/react";
import { ComponentStoryObj, ComponentMeta } from "@storybook/react";

import { Course } from "@/components/Course";

export default {
  title: "Content/Course",
  component: Course,
} as ComponentMeta<typeof Course>;

export const BasicCourse: ComponentStoryObj<typeof Course> = {
  play: async () => {
    await expect(screen.getByRole("heading")).toBeInTheDocument();
    await expect(screen.getByRole("img")).toBeInTheDocument();
    await expect(screen.getByRole("link")).toBeInTheDocument();
  },
  args: {
    header: "Header Course",
    imageProps: {
      width: 1368,
      height: 770,
      alt: "Logo",
      src: "/covers/sandra-kopec-CPEgFJDAD5U-unsplash.jpg",
    },
    link: "#",
    children: (
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
        necessitatibus neque quo qui eos aut placeat doloribus odit, sit amet
        fuga eligendi ea, voluptates non possimus quisquam soluta omnis id.
        <ul>
          <li>Setup of the development environment</li>
          <li>Configuration of the React Js app</li>
          <li>Basic algorithms of Minesweeper</li>
        </ul>
      </div>
    ),
  },
};
