import React, { Component, useState } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Item,
  Icon,
  Input,
} from "native-base";
import { db } from "../../../src/firebase/config.js";
import { ScrolView, View, StyleSheet, TextInput } from "react-native";

export default function HomeScreen() {
  const RecCol = db.collection("Recipe");
  console.log(RecCol.get())
  return (
    <Container>
      <Header searchBar>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Find yummy foods" />
        </Item>
      </Header>
      <Content>
        <Card>
          <CardItem header>
            <Text>Recipe Name</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Breif description of recipe</Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Text>comment</Text>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}
