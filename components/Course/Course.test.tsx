import { Course } from "@/components/Course";
import { render } from "@/test-utils";

describe("Course test cases", () => {
  it("Course render check", () => {
    const { asFragment } = render(
      <Course
        header="Course Header"
        link="#"
        imageProps={{
          width: 1368,
          height: 770,
          alt: "Logo",
          src: "/covers/sandra-kopec-CPEgFJDAD5U-unsplash.jpg",
        }}>
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
      </Course>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
