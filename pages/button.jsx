const Button = ({children, className, onClick}) => {
	return (
		<button
			className={`p-2 rounded-full hover:ring-2 hover:ring-gray-900 dark:hover:ring-gray-300 ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
