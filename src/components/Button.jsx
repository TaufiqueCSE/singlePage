
function Button({ children, bgColor, color, fontSize }) {
    return (
      <div className={`px-4 py-2 rounded ${bgColor} ${color} ${fontSize}`}>
        {children}
      </div>
    );
  }

export default Button