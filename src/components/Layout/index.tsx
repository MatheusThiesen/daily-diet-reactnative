import { ReactNode } from "react";

import { Body, Container, Content, LayoutTypeProps } from "./styles";

import { Header } from "@components/Header";

type Props = {
  title: string;
  children: ReactNode;
  type?: LayoutTypeProps;
};

export function Layout({ title, children, type }: Props) {
  return (
    <Container type={type}>
      <Header>{title}</Header>
      <Body>
        <Content>{children}</Content>
      </Body>
    </Container>
  );
}
