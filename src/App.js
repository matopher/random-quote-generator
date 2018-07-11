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
          <h1 id="text">{this.state.quote}</h1>
          <p id="author">{this.state.author}</p>
          <Button id="new-quote" onClick={this.fetchQuote}>
            New Quote
          </Button>
          <Button id="tweet-quote">
            <a
              href={`https://twitter.com/intent/tweet?text="${
                this.state.quote
              }"%20\n\n-${this.state.author}`}
            >
              Tweet Quote
            </a>
          </Button>
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
  font-size: 1.25em;
  font-weight: 400;
  color: hsl(196, 95%, 12%);
  background-color: #b9e1f0;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230793ca' fill-opacity='0.1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

const QuoteBoxChild = styled.div`
  padding: 1em;
  max-width: 700px;
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
  &:hover {
    cursor: pointer;
    box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1),
      0 5px 15px rgba(0, 0, 0, 0.07);
  }
  a {
    text-decoration: none;
    color: #fff;
  }
`;

export default App;
