import React from 'react'

//id, size, x,y, opacity, animationduration

const StarBackground = () => {

  const [stars, setStars] = React.useState([]);
  const [meteors, setMeteors] = React.useState([]);

  React.useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
      generateMeteors();
    } 

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }

  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1, // Random size between 1 and 3
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5, // Random opacity between 0.5 and 1
        animationDuration: Math.random() * 4 + 2 // Random duration between 2 and 6 seconds
      });
    }

    setStars(newStars);
  }

  const generateMeteors = () => {
    const numberOfMeteors = 4
    const newMeteors = []

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    setMeteors(newMeteors);
  }

  return (
    // src/components/StarBackground.jsx
    // This component generates a starry background with animated stars
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    
      {stars.map((star) => ( // Map through the stars array to create star elements
        // Each star is a div with specific styles for size, position, opacity, and animation duration
        // The key is set to the star's id for React's reconciliation
        // The star is animated with a subtle pulse effect
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}

    </div>

  )
}

export default StarBackground
