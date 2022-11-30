import React, { FC, ReactElement } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import Image, { ImageProps } from "next/image";
import { borderRadius, boxShadow } from "@/components/styles";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.font.regular};
  ${borderRadius}
  ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow2)};
  width: 94vw;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
  }
  @media (min-width: 900px) {
    width: 46vw;
  }
`;

const CourseLink = styled.a`
  all: unset;
  cursor: pointer;
  padding: 1vmin 4vmin;

  > *:last-child {
    margin-top: 1rem;
  }

  &:hover {
    opacity: 0.9;
  }
`;

const HeaderCourse = styled.h2`
  > * {
    margin-bottom: 1rem;
  }
`;

type Props = {
  header: string;
  children: ReactElement | string;
  imageProps: ImageProps;
  link: string;
};

export const Course: FC<Props> = ({ children, header, link, imageProps }) => {
  return (
    <Section>
      <Link href={link} passHref>
        <CourseLink>
          <HeaderCourse>{header}</HeaderCourse>
          <Image {...imageProps} />
          {children}
        </CourseLink>
      </Link>
    </Section>
  );
};
