import React, { FC, ReactElement } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Input } from "@/components/Input";
import { IconButton } from "@/components/IconButton";
import { StyledLink } from "@/components/StyledLink";

const Wrapper = styled.div`
  display: grid;
  gap: 0.1rem;
  color: ${({ theme }) => theme.font.regular};
  background-color: ${({ theme }) => theme.background};
  padding: 0.5rem;
  grid-template-areas:
    "header"
    "nav"
    "search"
    "content"
    "sidebar"
    "footer";

  @media (min-width: 500px) {
    grid-template-column: 1fr 3fr;
    grid-template-areas:
      "header search"
      "nav nav"
      "content content"
      "footer footer";
    nav {
      justify-content: space-between;
      flex-direction: row;
    }
  }
  @media (min-width: 700px) {
    grid-template-column: 1fr 4fr 2fr;
    grid-template-areas:
      "header search nav"
      "content content content"
      "footer footer footer";
    nav {
      flex-direction: row;
    }
  }
`;

const StyledLogo = styled(Logo)`
  grid-area: header;
  display: flex;
  align-items: center;
  height: 4rem;
  @media (max-width: 500px) {
    justify-content: center;
  }
`;

const MainNav = styled.nav`
  grid-area: nav;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem;
  a {
    cursor: pointer;
    color ${({ theme }) => theme.font.regular};
    &:hover {
      opacity: 0.7;
    }
  }
`;
const SearchInput = styled(Input)`
  grid-area: search;
  width: 100%;
  height: 4rem;
`;

const Content = styled.main`
  grid-area: content;
`;

const Footer = styled.footer`
  grid-area: footer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  height: 5rem;
`;

type Props = {
  children?: ReactElement | string;
  isDark?: boolean;
  onThemeToggle?: () => void;
};

export const Layout: FC<Props> = ({ children, isDark, onThemeToggle }) => (
  <Wrapper>
    <Link href="/" passHref>
      <StyledLink>
        <StyledLogo size={3}>CTO</StyledLogo>
      </StyledLink>
    </Link>
    <MainNav>
      <Link href="/all">All</Link>
      <Link href="/news">New</Link>
      <IconButton
        name={isDark ? "Moon" : "Sun"}
        size={1}
        onClick={onThemeToggle}
      />
    </MainNav>
    <SearchInput icon="Search" placeholder="Search" onChange={() => null} />
    <Content>{children}</Content>
    <Footer>
      © {new Date().getFullYear()} ManhDucDo. All rights reserved.
    </Footer>
  </Wrapper>
);
