import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

/*changing title and lil pic*/


document.title = "Kamer-Quote-Machine";





/*compoentn*/

class QuoteMach extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      quote: [],
      author: []
    };
   this.quoteChange = this.quoteChange.bind(this);
   this.tweet = this.tweet.bind(this);
  }
  
    /*fetch on start quote*/
      componentDidMount() {
        
        fetch('https://talaikis.com/api/quotes/random/')
        .then(results => results.json())
        .then(data => this.setState({quote: data.quote,author: data.author, link:data.quote }))
        

    }
    
/*fetch on click */
quoteChange () {
  fetch('https://talaikis.com/api/quotes/random/')
        .then(results => results.json())
        .then(data => this.setState({quote: data.quote,author: data.author}))
        
 

  
}
tweet () {
   
   const link = document.getElementById("tweet-quote");
        link.href = "https://twitter.com/intent/tweet?text="+ this.state.quote + "-" + this.state.author;
        
}

  render () {
    const { quote } = this.state;
    const { author } = this.state;
      
    return (
      
      <div id="quote-box">
    <p id="text">{quote}</p>
    <p id="author">{author}</p>
    <a id="new-quote" onClick={this.quoteChange}>New Quote!</a>
    <a id="tweet-quote" type="button"  onClick={this.tweet} href = "https://twitter.com/intent/tweet"    data-show-count="false" data-size="large"><FontAwesomeIcon icon={['fab', 'twitter']} /> Tweet Quote!</a>
  
    </div> 
    
  );
}
};



export default QuoteMach;
