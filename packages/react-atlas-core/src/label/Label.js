import React, { PropTypes } from "react";
import cx from 'classNames';

/**
 * Simple wrapper around a span to add 'hint'-like styles
 */
class Label extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {  };
    }

    render() {
        let { className, disabled, inline, forId, label, ...props } = this.props;

        const labelClasses = cx(
            {
                inline,
                disabled
            },
            className
        );

        return (
            <label
                className={cx(className)}
                styleName={labelClasses}
                htmlFor={forId}>
                    {label}
            </label>);
    }


};

Label.propTypes = {
    /**
     * Determines if the radio button is disabled.
     * @examples '<Label disabled/>'
     */
    "className": PropTypes.string,
    /**
     * Sets a handler function to be executed when onClick event occurs.
     * @examples '<Label onClick={onClickHandler}/>'
     */
    "onclick": PropTypes.func,
    /**
     * Sets a handler function to be executed when onChange event occurs.
     * @examples '<Label onChange={onChangeHandler}/>'
     */
    "onchange": PropTypes.func,
};


export default Label;
