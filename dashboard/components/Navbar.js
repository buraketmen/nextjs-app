import Link from 'next/link'
import React, { Component } from 'react'

 class Navbar extends Component {
   constructor(props){
     super(props)
     this.props = props;
   }
  render() {
    return (
      <nav>
        <div>
          <Link href="/"><a title="Home">Home Page</a></Link>
        </div>
      </nav>
    )
  }
}
export default Navbar;
