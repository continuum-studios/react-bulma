# react-bulma
React Component Library for the Bulma CSS framework.

This is still largely in development. Feel free to watch the repository for updates!

# Installation
`npm install @continuum/react-bulma`

# Example
```
import React from 'react';
import {Container, Columns, Column} from '@continuum/react-bulma';

class Demo extends React.Component {
  render() {
    <Container>
     <Columns>
      <Column width={6} /> // 6 columns
      <Column width={4} /> // 4 columns
      <Column />  // Will be auto scaled
     </Columns>
    </Container>
  }
}
```

Every component supports a `classes` prop for custom classes as well.

# Contributing
Feel free to help out with a PR!
