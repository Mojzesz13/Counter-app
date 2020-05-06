import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: []
    };

    renderTags() {
        if (this.state.tags.length === 0) return <h1>Lista jest pusta</h1>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;

    }

    render() {
        return (
            <>
                {/*<span className={this.getBadgeClasses()}>{this.formatCount()}</span>*/}
                {/*<button className="btn btn-secondary btn-sm">Increment</button>*/}
                {this.state.tags.length ===0 && "Twoja stara"}
                {this.renderTags()}
            </>
        );
    }

    // getBadgeClasses() {
    //     let classes = "badge m-2 badge-";
    //     classes += (this.state.count === 0 ? "warning" : "primary");
    //     return classes;
    // }
    //
    // formatCount() {
    //     const {count} = this.state
    //     return count === 0 ? 'Zero' : count;
    // }
}

export default Counter;