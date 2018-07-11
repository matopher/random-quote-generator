import React, { Component } from 'react';
import styled from 'styled-components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 'Brilliant Quote',
      author: 'George Washington',
      data: [],
      loading: true
    };
  }

  componentDidMount() {
    fetch('http://quotes.rest/qod.json')
      .then(response => response.json())
      .then(data => {
        const { quote, author } = data.contents.quotes[0];
        // let apiQuote = quote;
        // this.setState({ quote: quote });
        this.setState({
          quote,
          author,
          loading: false
        });
      });
  }

  render() {
    if (this.state.loading) {
      return <p>Loading...</p>;
    }

    return (
      <QuoteBoxWrapper id="quote-box">
        <QuoteBoxChild>
          <p id="text">{this.state.quote}</p>
          <p id="author">{this.state.author}</p>
          <button id="new-quote">New Quote</button>
          <button id="tweet-quote">Tweet Quote</button>
        </QuoteBoxChild>
      </QuoteBoxWrapper>
    );
  }
}

const QuoteBoxWrapper = styled.div`
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const QuoteBoxChild = styled.div`
  font-size: 2em;
  padding: 1em;
`;

export default App;
