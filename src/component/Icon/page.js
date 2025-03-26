import React from 'react';
import './index.css';

class Icon extends React.Component {
  constructor(props) {
    super(props);
    this.icons = {
      facebook: (
        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.0451 9.02256C18.0451 4.04211 14.003 0 9.02256 0C4.04211 0 0 4.04211 0 9.02256C0 13.3895 3.10376 17.0256 7.21805 17.8647V11.7293H5.41353V9.02256H7.21805V6.76692C7.21805 5.02556 8.63459 3.60902 10.3759 3.60902H12.6316V6.31579H10.8271C10.3308 6.31579 9.92481 6.7218 9.92481 7.21804V9.02256H12.6316V11.7293H9.92481V18C14.4812 17.5489 18.0451 13.7053 18.0451 9.02256Z" fill="currentColor" />
        </svg>
      ),
      home: (
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12.97 2.59a1.5 1.5 0 0 0-1.94 0l-7.5 6.363A1.5 1.5 0 0 0 3 10.097V19.5A1.5 1.5 0 0 0 4.5 21h4.75a.75.75 0 0 0 .75-.75V14h4v6.25c0 .414.336.75.75.75h4.75a1.5 1.5 0 0 0 1.5-1.5v-9.403a1.5 1.5 0 0 0-.53-1.144l-7.5-6.363Z"></path></svg>
      )

    };
  }

  getProperty(property, value) {
    const existProp = this.props[property];
    return existProp || value;
  }

  showAll() {
    const icons = Object.keys(this.icons).map((name) => {
      return (
        <div key={name} className="icons__item">
          <Icon name={name} />
          {name}
        </div>
      );
    });
    return <div className="icons">{icons}</div>;
  }

  render() {
    return this.icons[this.props?.name || ''];
  }
}

export default Icon;
