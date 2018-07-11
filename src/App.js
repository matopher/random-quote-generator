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
    this.fetchQuote();
  }

  fetchQuote = () => {
    fetch('https://talaikis.com/api/quotes/random/')
      .then(response => response.json())
      .then(data => {
        const { quote, author } = data;
        this.setState({
          quote,
          author,
          loading: false
        });
      });
  };

  render() {
    if (this.state.loading) {
      return <p>Loading...</p>;
    }

    return (
      <QuoteBoxWrapper id="quote-box">
        <QuoteBoxChild>
          <p id="text">{this.state.quote}</p>
          <p id="author">{this.state.author}</p>
          <Button id="new-quote" onClick={this.fetchQuote}>
            New Quote
          </Button>
          <Button id="tweet-quote">Tweet Quote</Button>
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

const Button = styled.button`
  display: inline-block;
  height: 40px;
  line-height: 40px;
  padding: 0 14px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background: #3ecf8e;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  margin-right: 15px;
  color: #fff;
  text-decoration: none;
  transition: all 0.15s ease;
`;

export default App;
