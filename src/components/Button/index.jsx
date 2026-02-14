import { cn } from '../../utils/cn';

export const Button = ({ children, className, variant = 'primary', ...props }) => {
    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
        outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
    };

    return (
        <button
            className={cn(
                'px-4 py-2 rounded-md font-medium transition-colors duration-200',
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};
