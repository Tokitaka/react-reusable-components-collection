import className from "classnames";

function Button({
    children, 
    primary,
    secondary,
    dark,
    soft,
    rounded,
    icon,
    ...rest
    //rest: style custom
}) {
    //conditial rendering
    const classes = className(
        {
          'bg-blue-700 rounded font-medium text-white py-1 px-2.5 hover:bg-sky-700' : primary,
          'rounded font-medium py-1 px-2 border-solid border-2 hover:bg-slate-200' : secondary,
          'rounded font-medium bg-blue-100 text-blue-700 py-1 px-2.5 hover:bg-blue-500 hover:text-white' : soft,
           'rounded-full' : rounded,
        },
    );

    return (
        <button {...rest} className={classes}>
            <div className="flex items-center">
                {children}
                <span className="ml-1">{icon}</span>
            </div>
        </button>
    )
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary }) => {
      const count =
        Number(!!primary) +
        Number(!!secondary)
  
      if (count > 1) {
        return new Error(
          'Only one of primary, secondary can be true'
        );
      }
    },
  };

export default Button;