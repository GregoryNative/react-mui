import React from 'react';

import '../assets/stylesheets/base.scss';
import {
  Card,
  CardHeader,
  CardTitle,
  CardText
} from 'material-ui/Card';

const About = React.createClass({
  displayName: 'About',

  render() {
    return (
      <div className="Main">
        <Card>
          <CardHeader
            title="Gregory"
            subtitle="Mobile Application Developer at OpenGeeksLab"
            avatar={require('../assets/images/img.jpg')}
          />
          <CardTitle title="Подробности" />
          <CardText>
            I have 1 years' experience in cross-platform development on React-Native and over 2 years' experience in Android development. <br /><br />
            I always try to build the most simple yet effective and flexible system architecture. I keep in touch with modern programming techniques and best practices.<br /><br />
            Skills & Expertise<br />
            <ul>
              <li>Programming languages: <i>JavaScript, Java, Python, Objective-C, C+</i>+.</li>
              <li>Frameworks: <i>React-Native, Ionic, ReactJS.</i></li>
              <li>Java: <i>Core Java, Swing, Android.</i></li>
              <li>Networking: <i>HTTP, WebSockets, REST Services, OAuth.</i></li>
              <li>Data formats: <i>JSON, XML.</i></li>
              <li>Databases: <i>mongoDB, MySQL, PostgreSQL, SQLite.</i></li>
              <li>VCSs: <i>Git.</i></li>
              <li>IDEs: <i>Xcode, Android Studio, Visual Studio.</i></li>
              <li>Best practices: <i>SOLID principles, OOP patterns.</i></li>
              <li>Other: <i>Unix/Linux/Mac OS, knowledge of widespread unix/linux shell utils, shell scripting.</i></li>
            </ul><br />
            Site created for ZNU.
          </CardText>
        </Card>
      </div>
    );
  }
});

export default About;
