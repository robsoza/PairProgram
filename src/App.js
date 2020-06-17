import React from 'react';
import { ThemeContext, themes } from './components/ThemeContextComp';
import ThemeButtonComp from './components/ThemeButtonComp';
import LinkedListComp from './components/LinkedListComp';
import QueueStackComp from './components/QueueStackComp';

// An intermediate component that uses the ThemedButton
class ThemeApp extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    // The entire state is passed to the provider
    return (
      <ThemeContext.Provider value={this.state}>
        <ThemeButtonComp />
        <LinkedListComp />
        <QueueStackComp />
      </ThemeContext.Provider>
    );
  }
}

export default ThemeApp;