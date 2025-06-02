        class SolarSystem {
            constructor() {
                this.container = document.getElementById('solarSystem');
                this.tooltip = document.getElementById('tooltip');
                this.isPaused = false;
                this.speed = 1;
                this.zoom = 1;
                this.time = 0;
                this.showAsteroids = false;
                this.asteroids = [];
                
                this.planets = [
                    {
                        name: 'Sun',
                        radius: 30,
                        distance: 0,
                        speed: 0,
                        color: 'sun',
                        info: {
                            name: 'Sun',
                            type: 'Star',
                            diameter: '1,392,700 km',
                            mass: '1.989 × 10³⁰ kg',
                            temperature: '5,778 K (surface)',
                            composition: '73% Hydrogen, 25% Helium'
                        }
                    },
                    {
                        name: 'Mercury',
                        radius: 4,
                        distance: 80,
                        speed: 0.24,
                        color: 'mercury',
                        info: {
                            name: 'Mercury',
                            type: 'Terrestrial Planet',
                            diameter: '4,879 km',
                            mass: '3.301 × 10²³ kg',
                            distance: '57.9 million km from Sun',
                            day: '58.6 Earth days',
                            year: '88 Earth days'
                        }
                    },
                    {
                        name: 'Venus',
                        radius: 6,
                        distance: 110,
                        speed: 0.62,
                        color: 'venus',
                        info: {
                            name: 'Venus',
                            type: 'Terrestrial Planet',
                            diameter: '12,104 km',
                            mass: '4.867 × 10²⁴ kg',
                            distance: '108.2 million km from Sun',
                            day: '243 Earth days',
                            year: '225 Earth days'
                        }
                    },
                    {
                        name: 'Earth',
                        radius: 8,
                        distance: 150,
                        speed: 1,
                        color: 'earth',
                        info: {
                            name: 'Earth',
                            type: 'Terrestrial Planet',
                            diameter: '12,756 km',
                            mass: '5.972 × 10²⁴ kg',
                            distance: '149.6 million km from Sun',
                            day: '24 hours',
                            year: '365.25 days',
                            moons: '1 (Luna)'
                        }
                    },
                    {
                        name: 'Mars',
                        radius: 6,
                        distance: 190,
                        speed: 1.88,
                        color: 'mars',
                        info: {
                            name: 'Mars',
                            type: 'Terrestrial Planet',
                            diameter: '6,792 km',
                            mass: '6.39 × 10²³ kg',
                            distance: '227.9 million km from Sun',
                            day: '24.6 hours',
                            year: '687 Earth days',
                            moons: '2 (Phobos, Deimos)'
                        }
                    },
                    {
                        name: 'Jupiter',
                        radius: 20,
                        distance: 280,
                        speed: 11.86,
                        color: 'jupiter',
                        info: {
                            name: 'Jupiter',
                            type: 'Gas Giant',
                            diameter: '142,984 km',
                            mass: '1.898 × 10²⁷ kg',
                            distance: '778.5 million km from Sun',
                            day: '9.9 hours',
                            year: '11.86 Earth years',
                            moons: '95 known moons'
                        }
                    },
                    {
                        name: 'Saturn',
                        radius: 18,
                        distance: 360,
                        speed: 29.46,
                        color: 'saturn',
                        hasRings: true,
                        info: {
                            name: 'Saturn',
                            type: 'Gas Giant',
                            diameter: '120,536 km',
                            mass: '5.683 × 10²⁶ kg',
                            distance: '1.432 billion km from Sun',
                            day: '10.7 hours',
                            year: '29.46 Earth years',
                            moons: '146 known moons',
                            special: 'Famous for its ring system'
                        }
                    },
                    {
                        name: 'Uranus',
                        radius: 12,
                        distance: 450,
                        speed: 84.01,
                        color: 'uranus',
                        info: {
                            name: 'Uranus',
                            type: 'Ice Giant',
                            diameter: '51,118 km',
                            mass: '8.681 × 10²⁵ kg',
                            distance: '2.867 billion km from Sun',
                            day: '17.2 hours',
                            year: '84.01 Earth years',
                            moons: '27 known moons',
                            special: 'Rotates on its side'
                        }
                    },
                    {
                        name: 'Neptune',
                        radius: 12,
                        distance: 520,
                        speed: 164.8,
                        color: 'neptune',
                        info: {
                            name: 'Neptune',
                            type: 'Ice Giant',
                            diameter: '49,528 km',
                            mass: '1.024 × 10²⁶ kg',
                            distance: '4.515 billion km from Sun',
                            day: '16.1 hours',
                            year: '164.8 Earth years',
                            moons: '16 known moons',
                            special: 'Windiest planet in solar system'
                        }
                    }
                ];
                
                this.init();
            }
            
            init() {
                this.createStars();
                this.createSolarSystem();
                this.setupEventListeners();
                this.animate();
            }
            
            createStars() {
                const starsContainer = document.getElementById('stars');
                for (let i = 0; i < 200; i++) {
                    const star = document.createElement('div');
                    star.className = 'star';
                    star.style.left = Math.random() * 100 + '%';
                    star.style.top = Math.random() * 100 + '%';
                    star.style.animationDelay = Math.random() * 3 + 's';
                    starsContainer.appendChild(star);
                }
            }
            
            createSolarSystem() {
                const centerX = window.innerWidth / 2;
                const centerY = window.innerHeight / 2;
                
                this.planets.forEach((planet, index) => {
                    if (planet.distance > 0) {
                        const orbit = document.createElement('div');
                        orbit.className = 'orbit';
                        orbit.style.width = planet.distance * 2 + 'px';
                        orbit.style.height = planet.distance * 2 + 'px';
                        orbit.style.left = centerX - planet.distance + 'px';
                        orbit.style.top = centerY - planet.distance + 'px';
                        this.container.appendChild(orbit);
                    }
                    
                    const planetEl = document.createElement('div');
                    planetEl.className = `planet ${planet.color}`;
                    planetEl.style.width = planet.radius * 2 + 'px';
                    planetEl.style.height = planet.radius * 2 + 'px';
                    planetEl.dataset.planetIndex = index;
                    
                    const angle = Math.random() * Math.PI * 2;
                    const x = centerX + Math.cos(angle) * planet.distance - planet.radius;
                    const y = centerY + Math.sin(angle) * planet.distance - planet.radius;
                    planetEl.style.left = x + 'px';
                    planetEl.style.top = y + 'px';
                    
                    planet.element = planetEl;
                    planet.angle = angle;
                    
                    if (planet.hasRings) {
                        const ring = document.createElement('div');
                        ring.className = 'saturn-ring';
                        ring.style.width = planet.radius * 3 + 'px';
                        ring.style.height = planet.radius * 3 + 'px';
                        ring.style.left = -planet.radius * 0.5 + 'px';
                        ring.style.top = -planet.radius * 0.5 + 'px';
                        planetEl.appendChild(ring);
                    }
                    
                    this.container.appendChild(planetEl);
                });
                
                this.createAsteroidBelt();
            }
            
            createAsteroidBelt() {
                const centerX = window.innerWidth / 2;
                const centerY = window.innerHeight / 2;
                
                for (let i = 0; i < 100; i++) {
                    const asteroid = document.createElement('div');
                    asteroid.className = 'asteroid';
                    
                    const distance = 230 + Math.random() * 40; 
                    const angle = Math.random() * Math.PI * 2;
                    const x = centerX + Math.cos(angle) * distance;
                    const y = centerY + Math.sin(angle) * distance;
                    
                    asteroid.style.left = x + 'px';
                    asteroid.style.top = y + 'px';
                    asteroid.style.display = 'none';
                    
                    this.asteroids.push({
                        element: asteroid,
                        angle: angle,
                        distance: distance,
                        speed: 0.5 + Math.random() * 0.5
                    });
                    
                    this.container.appendChild(asteroid);
                }
            }
            
            setupEventListeners() {
                document.getElementById('speedSlider').addEventListener('input', (e) => {
                    this.speed = parseFloat(e.target.value);
                });
                
                document.getElementById('zoomSlider').addEventListener('input', (e) => {
                    this.zoom = parseFloat(e.target.value);
                    this.container.style.transform = `scale(${this.zoom})`;
                });
                
                document.getElementById('pauseBtn').addEventListener('click', (e) => {
                    this.isPaused = !this.isPaused;
                    e.target.textContent = this.isPaused ? 'Resume' : 'Pause';
                    e.target.classList.toggle('active', this.isPaused);
                });
                
                document.getElementById('resetBtn').addEventListener('click', () => {
                    this.time = 0;
                    this.planets.forEach(planet => {
                        planet.angle = Math.random() * Math.PI * 2;
                    });
                });
                
                document.getElementById('asteroidsBtn').addEventListener('click', (e) => {
                    this.showAsteroids = !this.showAsteroids;
                    e.target.classList.toggle('active', this.showAsteroids);
                    this.asteroids.forEach(asteroid => {
                        asteroid.element.style.display = this.showAsteroids ? 'block' : 'none';
                    });
                });
                
                this.container.addEventListener('click', (e) => {
                    if (e.target.classList.contains('planet')) {
                        const planetIndex = parseInt(e.target.dataset.planetIndex);
                        this.showPlanetInfo(planetIndex);
                    }
                });
                this.container.addEventListener('mousemove', (e) => {
                    if (e.target.classList.contains('planet')) {
                        const planetIndex = parseInt(e.target.dataset.planetIndex);
                        const planet = this.planets[planetIndex];
                        this.tooltip.textContent = planet.name;
                        this.tooltip.style.left = e.pageX + 10 + 'px';
                        this.tooltip.style.top = e.pageY - 30 + 'px';
                        this.tooltip.style.opacity = '1';
                    } else {
                        this.tooltip.style.opacity = '0';
                    }
                });
            }
            
            showPlanetInfo(index) {
                const planet = this.planets[index];
                const infoEl = document.getElementById('planetInfo');
                
                let html = `<h3>${planet.info.name}</h3>`;
                Object.entries(planet.info).forEach(([key, value]) => {
                    if (key !== 'name') {
                        const label = key.charAt(0).toUpperCase() + key.slice(1);
                        html += `<p><strong>${label}:</strong> ${value}</p>`;
                    }
                });
                
                infoEl.innerHTML = html;
            }
            
            animate() {
                if (!this.isPaused) {
                    this.time += this.speed;
                    document.getElementById('timeDisplay').textContent = Math.floor(this.time);
                    
                    const centerX = window.innerWidth / 2;
                    const centerY = window.innerHeight / 2;
                    
                    this.planets.forEach(planet => {
                        if (planet.distance > 0) {
                            planet.angle += (this.speed * 0.01) / planet.speed;
                            
                            const x = centerX + Math.cos(planet.angle) * planet.distance - planet.radius;
                            const y = centerY + Math.sin(planet.angle) * planet.distance - planet.radius;
                            
                            planet.element.style.left = x + 'px';
                            planet.element.style.top = y + 'px';
                        }
                    });
                    
                    if (this.showAsteroids) {
                        this.asteroids.forEach(asteroid => {
                            asteroid.angle += (this.speed * 0.01) / asteroid.speed;
                            
                            const x = centerX + Math.cos(asteroid.angle) * asteroid.distance;
                            const y = centerY + Math.sin(asteroid.angle) * asteroid.distance;
                            
                            asteroid.element.style.left = x + 'px';
                            asteroid.element.style.top = y + 'px';
                        });
                    }
                }
                
                requestAnimationFrame(() => this.animate());
            }
        }
        
        window.addEventListener('load', () => {
            new SolarSystem();
        });
        
        window.addEventListener('resize', () => {
            location.reload(); 
        });