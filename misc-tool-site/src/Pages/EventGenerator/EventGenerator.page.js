import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import events from "../../Data/events.json";
import themes from "../../Data/eventThemes.json";

import "./eventgenerator.scss";

export default class EventGenerator extends React.Component {
    state = {
        events: [],
        themes: [],
        selectedEvent: null
    }

    constructor(props) {
        super(props);
        this.state = {
            events: events,
            themes: themes,
            selectedEvent: null
        }

        this.state.selectedEvent = this.getNewEvent();

        this.generate();
    }

    componentDidMount() {

    }

    getNewEvent() {
        let newEventIndex = Math.floor(Math.random() * this.state.events.length);
        return this.state.events[newEventIndex];
    }

    generate() {
        this.setState({...this.state, selectedEvent: this.getNewEvent()});
    }

    render() {
        let eventDisplay = "";
        if(this.state.selectedEvent) {
            eventDisplay = <>
                <h3>{this.state.selectedEvent.Premise}</h3>
                <p dangerouslySetInnerHTML={{ __html: this.state.selectedEvent.Details }}></p>
            </>;
        }

        return (
            <>
                <div className="standard-content flex f-col f-align-center">
                    <h1>Event Roller</h1>
                    <p>Roll an event from an assortment of pre-written scenarios</p>

                    <div className="event-display floating-card">
                        {eventDisplay}
                    </div>
                    <div className="form">
                        <button className="btn" onClick={() => {this.generate();}}><FontAwesomeIcon icon="dice"/>Generate</button>
                    </div>
                </div>
            </>
        );
    }
}