import React from 'react';

const Header = () => {
  return (<header>
    <section>
      <a href="/">
        <h1>V-core9</h1>
      </a>
    </section>
    <section>
      <button action="navigation_toggle">Menu</button>
    </section>
  </header>)
}
const Content = () => {
  return (<content>Content</content>)
}
const Footer = () => {
  return (<footer>
    <button action="navigation_toggle">Menu</button>
  </footer>)
}
const Navigation = (menu = []) => {
  return (<navigation>

    <header>
      <h1>Navigation</h1>
    </header>

    <content>
    </content>

    <footer>
      <h1>Footer</h1>
    </footer>

  </navigation>)
}



class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      header: true,
      content: true,
      footer: true,
      navigation: true
    };
  }

  render() {
    return ([
      (this.state.header) ? <Header /> : '',
      (this.state.content) ? <Content /> : '',
      (this.state.footer) ? <Footer /> : '',
      (this.state.navigation) ? <Navigation menu={this.state.menu} /> : '',
    ]);
  }
}


export default Dashboard
