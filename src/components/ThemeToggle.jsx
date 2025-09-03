import { Moon, Sun } from 'lucide-react';
import React, { use, useEffect } from 'react'
import { cn } from '../lib/utils';

const ThemeToggle = () => {

    const [isDarkMode, setIsDarkMode] = React.useState(false);

    useEffect(() => {

        const savedTheme = localStorage.getItem('theme');

        // Check if the saved theme is dark
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDarkMode(false);
            localStorage.setItem('theme', 'light');
        }

    }, []);
// Function to toggle the theme
    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            // Update the state to reflect the change
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    }

  return (
    <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outlin-hidden"
    )}>

        {isDarkMode ? <Sun className='h-6 w-6 text-yellow-300'/> : <Moon className='h-6 w-6 text-blue-900' />}
    </button>
  )
}

export default ThemeToggle
