import React from 'react';

class CharLimit extends React.Component {
    onLimitSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.limit);
    };

    render() {
        return (
            <div className="line">
                <div onSubmit={this.onLimitSubmit}>
                    <label id="charNum">Limit</label>
                    <input className="limit-count"
                        type="text"
                        value={this.props.value}
                        onChange={this.props.handleLimit}
                    />
                </div>
            </div>
        );
    }
}

export default CharLimit;