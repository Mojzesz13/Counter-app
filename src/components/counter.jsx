import React, {Component} from 'react';

class Counter extends Component {
    render() {
        const {counter, onIncrement, onDelete, onDecrement} = this.props;
        return (
            <div className="row">
                <div className="col-sm-1 align-self-start ">
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>
                <div className="col align-self-start">
                    <button
                        className="btn btn-secondary btn-sm m-2"
                        onClick={() => onIncrement(counter)}
                    >
                        +
                    </button>


                    <button
                        className={this.disabledClasses()}
                        onClick={() => onDecrement(counter)}
                    >
                        -
                    </button>
                    <button
                        className="btn btn-danger btn-sm m-2"
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

    disabledClasses() {
        let test = "btn btn-secondary btn-sm m-2 "
        test  +=(this.props.counter.value < 1 ? "disabled" : "" );
        return test ;
    }

    disableFunction() {
        let {click} = this.props.counter.value;

        if (click > 1) {
            return () => this.props.onDelete(this.props.counter.id)
        } else {
            console.log(this.props.counter.value)
        }
    }
}

export default Counter;