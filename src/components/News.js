import React, { Component } from 'react'
import Records from '../records.json'
import NewsItem from './NewsItem'

export class News extends Component {
    events = Records;
    constructor(){
        super();
        console.log("Hello I am a constructor from News component");
        this.state = {
            events: this.events,
            loading: false
        }
    }

    render() {
        return (
            <div className="container my-3">
                <h2>Event Finder - Find Events Near You</h2>
                <div className="row">
                {this.state.events.map((element)=>{     
                   return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url}/>
                    </div> 
                })}
                </div> 
            </div>
        )
    }
}

export default News
