import React, {Component} from 'react';

class Counter extends Component {
    state = {
        value: this.props.value,
        tags: []
    };

    // renderTags() {
    //     if (this.state.tags.length === 0) return <h1>Lista jest pusta</h1>;
    //
    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    //
    // }

    handleIncrement = () => {
        this.setState({value: this.state.value + 1});
    }

    render() {

        return (
            <>
                <h3>{this.props.id}</h3>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    className="btn btn-secondary btn-sm"
                    onClick={this.handleIncrement}
                >
                    Increment
                </button>
                <button
                    className="btn btn-danger btn-sm m-2"
                    onClick={() => this.props.onDelete(this.props.id)}
                >
                    Delete
                </button>
                {/*{this.state.tags.length === 0 && "Test "}*/}
                {/*{this.renderTags()}*/}
            </>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0 ? "warning" : "primary");
        return classes;
    }

    formatCount() {
        const {value} = this.state
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;