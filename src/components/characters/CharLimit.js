import React from 'react';

class CharLimit extends React.Component {
    onLimitSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.limit);
    };

    render() {
        return (
            <div>
                <div onSubmit={this.onLimitSubmit}>
                    <input className="limit-count"
                        type="text"
                        value={this.props.limit}
                        onChange={this.props.handleChange}
                    />
                </div>
            </div>
        );
    }
}

export default CharLimit;