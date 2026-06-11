# Amit Kumar - Personal Website

A modern, responsive single-page application (SPA) featuring research, commentaries, and media appearances in geopolitics and economics.

## Features

- **Single-Page Application (SPA)**: Smooth navigation without page reloads
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Styling**: Clean, professional design with excellent typography
- **Fast Loading**: Lightweight vanilla JavaScript, no external dependencies
- **Accessibility**: Semantic HTML and keyboard navigation support

## Project Structure

```
amitkumar-website/
├── index.html          # Main SPA file
├── css/
│   └── style.css       # Responsive styling
├── js/
│   └── app.js          # SPA router and interactivity
├── assets/
│   ├── images/         # Photos and media
│   └── icons/          # Social media icons
├── README.md           # This file
└── .gitignore          # Git ignore rules
```

## Sections

- **Home**: Biography, education, and contact information
- **Commentaries**: Opinion pieces and analysis across major publications
- **Long-Forms**: In-depth research articles and position papers
- **Media Appearances**: Interviews, podcasts, and broadcast segments
- **Book Chapters**: Academic contributions to published books

## Local Development

To view the website locally:

1. Navigate to the project directory:
   ```bash
   cd amitkumar-website
   ```

2. Start a local server:
   ```bash
   # Using Python 3
   python3 -m http.server 8000

   # Or using Python 2
   python -m SimpleHTTPServer 8000

   # Or using Node.js (if installed)
   npx http-server
   ```

3. Open your browser and visit:
   ```
   http://localhost:8000
   ```

## Deploying to GitHub Pages

### Option 1: Using GitHub Pages (Recommended)

1. Create a new repository on GitHub named `amitkumar-ak.github.io`

2. Push your code to the repository:
   ```bash
   cd amitkumar-website
   git init
   git add .
   git commit -m "Initial commit: Create personal website"
   git branch -M main
   git remote add origin https://github.com/amitkumar-ak/amitkumar-ak.github.io.git
   git push -u origin main
   ```

3. Your site will be available at: `https://amitkumar-ak.github.io`

### Option 2: GitHub Pages with Custom Domain

If you want to use a custom domain (e.g., amitkumar-ak.com):

1. Add a `CNAME` file in the root directory with your domain:
   ```
   amitkumar-ak.com
   ```

2. Configure your domain's DNS settings to point to GitHub Pages:
   - Add A records pointing to GitHub's IP addresses
   - Or add a CNAME record pointing to `amitkumar-ak.github.io`

3. Enable GitHub Pages in your repository settings

## Customization

### Colors and Typography

Edit variables in `css/style.css`:

```css
:root {
    --primary-color: #1a1a1a;
    --accent-color: #2563eb;
    --background-color: #ffffff;
    /* ... other variables ... */
}
```

### Content Updates

Edit `index.html` directly to update:
- Bio and about section
- Publications and articles
- Contact information
- Social media links

### Adding Images

1. Place images in `assets/images/`
2. Reference them in HTML:
   ```html
   <img src="assets/images/your-image.jpg" alt="Description">
   ```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- No external dependencies (vanilla JavaScript)
- No build tools required
- Optimized CSS with minimal unused styles
- Fast page load times (typically <100ms)

## Accessibility

- Semantic HTML5 elements
- ARIA labels where appropriate
- Keyboard navigation support
- Color contrast meets WCAG AA standards

## Future Enhancements

Potential additions for future versions:
- Dark mode toggle
- Search functionality
- Blog integration
- Social media feed integration
- Analytics tracking

## License

Copyright © 2026 Amit Kumar. All rights reserved.

## Contact

- Email: amit@takshashila.org.in
- Email: kumar.amit0717@outlook.com
- LinkedIn: https://www.linkedin.com/in/amit-kumar-96a8a6bb/
- X: https://x.com/am_i_t_kumar
- Takshashila Institution: https://takshashila.org.in

---

Built with vanilla HTML, CSS, and JavaScript. No frameworks, no dependencies, no build tools.
