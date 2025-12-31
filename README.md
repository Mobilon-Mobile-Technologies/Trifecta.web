# Mobilon TriFecta Website

A modern, interactive website for the Mobilon TriFecta event featuring glassmorphism design, smooth animations, and an engaging timeline interface.

## Overview

Mobilon TriFecta is a premier 3-day technology and innovation event consisting of:
- **The Round Table Conference** - Industry discussions and networking
- **PitchWave Arena** - Entrepreneurial pitch competition
- **The Tech Forge Hackathon** - 24-hour development challenge

**Prize Pool**: ₹2.5 Lakh | **Expected Participants**: 3000+

## Features

- **Hero Landing Page**: Animated logo with gradient effects and event description
- **Interactive Navigation**: Tab-based navigation between Events, Teams, Sponsors, and About sections
- **Event Cards**: Glassmorphic cards displaying event details with registration buttons
- **Team Showcase**: Organized team display with divisions (Organising Team, Judging Team)
- **Sponsors Display**: Multi-tier sponsor grid (Title, Gold, Silver sponsors)
- **Interactive Timeline**: Scroll-based timeline with ball animation that snaps to event milestones
- **Fusion Animations**: Visual effects when timeline ball anchors to event points
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

## Tech Stack

- **Framework**: React 18
- **Styling**: CSS3 with glassmorphism effects, custom animations, and keyframes
- **Build Tool**: Create React App
- **Package Manager**: npm
- **Fonts**: Inter (Google Fonts), Jersey 10 (custom)

## Project Structure

```
mobilon-website/
├── public/
│   ├── Mobilon logo.png         # Main logo file
│   ├── index.html               # HTML template
│   ├── manifest.json            # PWA manifest
│   └── robots.txt               # SEO robots file
├── src/
│   ├── components/
│   │   ├── Hero.js              # Landing page component
│   │   ├── Hero.css
│   │   ├── Navigation.js        # Tab navigation bar
│   │   ├── Navigation.css
│   │   ├── EventsPage.js        # Events listing
│   │   ├── EventsPage.css
│   │   ├── EventCard.js         # Reusable event card
│   │   ├── EventCard.css
│   │   ├── TeamsPage.js         # Teams showcase
│   │   ├── TeamsPage.css
│   │   ├── TeamCard.js          # Individual team member card
│   │   ├── TeamCard.css
│   │   ├── SponsorsPage.js      # Sponsors grid
│   │   ├── SponsorsPage.css
│   │   ├── AboutPage.js         # About with interactive timeline
│   │   ├── AboutPage.css
│   │   ├── ScrollIndicator.js   # Scroll arrows
│   │   └── ScrollIndicator.css
│   ├── App.js                   # Main application component
│   ├── App.css                  # Global styles
│   ├── index.js                 # React entry point
│   ├── index.css                # Base styles
│   └── reportWebVitals.js       # Performance monitoring
├── package.json
├── package-lock.json
└── README.md
```

## Getting Started

### Prerequisites

- **Node.js**: Version 14 or higher
- **npm**: Version 6 or higher

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mobilon-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will automatically open in your browser at `http://localhost:3000`

### Building for Production

Create an optimized production build:
```bash
npm run build
```

This creates a `build/` folder with minified and optimized files ready for deployment.

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000). The page reloads automatically when you make changes.

### `npm run build`
Builds the app for production to the `build` folder. It bundles React in production mode and optimizes for best performance.

### `npm test`
Launches the test runner in interactive watch mode.

## Key Components

### Hero Component
- Mobilon logo with blur effects
- TriFecta event description
- Animated background ellipses

### Navigation Component
- Tab-based navigation system
- Active state indicators
- Smooth transitions between pages

### AboutPage Component
- Interactive scroll-based timeline
- Ball animation that tracks viewport center
- Snap-to-anchor functionality (within 15% threshold)
- Fusion animation when ball reaches event milestones
- Contact information and prize pool display

### Timeline Animation Details
- **Ball Movement**: Tracks the center of the viewport as you scroll
- **Anchor Points**: Four events (Registration Opens, Round Table, PitchWave, Tech Forge)
- **Snap Behavior**: Ball snaps to nearest anchor when within 15% distance
- **Fusion Effect**: Anchor dots animate toward ball and disappear; ball grows with glow effect

## Customization

### Updating Events
Edit `src/components/EventsPage.js`:
```javascript
const events = [
  {
    id: 1,
    eventName: 'Your Event Name',
    date: '26/01/26',
    time: '18:00',
    description: 'Event description...'
  }
];
```

### Changing Colors
Modify CSS variables in `src/App.css`:
```css
background: linear-gradient(135deg, #0C093B 0%, #1a1456 50%, #0C093B 100%);
--primary-blue: #4C87E5;
--primary-purple: #6768AB;
```

### Adding Team Members
Update `src/components/TeamsPage.js`:
```javascript
const organisingTeam = [
  { name: 'Member Name', post: 'Position' }
];
```

### Updating Sponsors
Modify `src/components/SponsorsPage.js`:
```javascript
const titleSponsors = [
  { name: 'Company Name', logo: '/path/to/logo.png' }
];
```

## Deployment

The app can be deployed to various platforms:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the build folder to Netlify
```

### GitHub Pages
```bash
npm install --save gh-pages
# Add to package.json: "homepage": "https://yourusername.github.io/mobilon-website"
# Add scripts: "predeploy": "npm run build", "deploy": "gh-pages -d build"
npm run deploy
```

## Performance Optimization

- **Code Splitting**: React lazy loading for components
- **Image Optimization**: Use WebP format for images
- **CSS Optimization**: Minified in production build
- **Bundle Size**: Analyzed with `npm run build`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Credits

- **Design**: Abhimanyu and Pragydeep
- **Development**: Adil
- **Event**: Mobilon TriFecta, Bennett University

## License

This project is created for Mobilon TriFecta event at Bennett University.

## Contact

- **Email**: contact@mobilon.com
- **Phone**: +1 (555) 123-4567
- **Location**: Innovation Hub, Tech Campus

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
