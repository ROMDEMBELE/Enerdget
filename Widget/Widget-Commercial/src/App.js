import React, {Component} from 'react';
import Widget1 from './widget1/widget1';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    myWidget;
    componentDidMount(){
        console.log(this.myWidget);
    }
    switchMode(){
        if(this.myWidget.state.mode === "demo"){
            this.myWidget.setState({mode: "api"});
        }else{
            this.myWidget.setState({mode: "demo"});
        }
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Widget1</h1>
                </header>
                <div className="panel panel default">
                    <div className="panel-header">
                        <div className="btn-group">
                            <button className="btn btn-default btn-justify" onClick={this.switchMode.bind(this)}>Switch Mode</button>
                        </div>
                    </div>
                    <div className="panel-body">
                        <Widget1 ref={(e) => this.myWidget = e} size={[500,500]}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
