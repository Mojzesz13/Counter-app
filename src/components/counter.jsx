import React, {Component} from 'react';

class Counter extends Component {
    render() {
        const {counter, onIncrement, onDelete, onDecrement} = this.props;
        return (
            <div className="row">
                <div className="col-1 align-self-start ">
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>
                <div className="col align-self-start">
                    <button
                        className="btn btn-secondary btn-sm "
                        onClick={() => onIncrement(counter)}
                    >
                        +
                    </button>
                    <button
                        className="btn btn-secondary btn-sm m-2"
                        onClick={() => onDecrement(counter)}
                        disabled={this.props.counter.value < 1 ? true : null}
                    >
                        -
                    </button>
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={() => onDelete(counter.id)}
                    >
                        x
                    </button>
                </div>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge badge-";
        classes += (this.props.counter.value === 0 ? "warning" : "primary");
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;