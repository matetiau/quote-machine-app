import React, { Component } from 'react';


class AddComponent extends Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
        <ins className='adsbygoogle'
          style={{ display: 'block' }}
          google_ad_client = "ca-pub-9556966446614388"
          data-ad-format='auto' />
    );
  }
}

export default AddComponent;