document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.fireworks');
    
    const fireworks = new Fireworks(container, {
        speed: 2,
        acceleration: 1.05,
        friction: 0.98,
        gravity: 1,
        particles: 100,
        explosion: 1,
        colors: ['#ff0044', '#ffbb00', '#00ff00', '#00bbff'],
        // Customize fireworks properties here
    });

    fireworks.start();
});
