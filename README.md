# Ward No. 6 Complaint Portal

A comprehensive bilingual complaint management system for Ward No. 6 residents.

## Features

✨ **Bilingual Support**
- English and Hindi languages
- One-click language toggle
- Full UI translation

📝 **File Complaints**
- Easy-to-use complaint form
- Multiple complaint categories
- Photo attachment support
- Automatic complaint ID generation

📊 **Track Complaints**
- Real-time status tracking
- Timeline visualization
- Detailed complaint information
- Search by Complaint ID

📈 **Statistics Dashboard**
- Total complaints count
- Resolved vs Pending statistics
- Category-wise breakdown
- Average resolution time

🔔 **Contact Information**
- Ward head office details
- Emergency hotline
- Email support
- 24/7 availability

## Complaint Categories

- Road and Infrastructure
- Water Supply
- Electricity
- Sanitation
- Traffic and Safety
- Noise Pollution
- Public Space Maintenance
- Other

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Charts**: Chart.js
- **Storage**: LocalStorage (Browser-based)
- **Responsive**: Mobile-friendly design

## How to Use

### Filing a Complaint

1. Click on "File Complaint" in the navigation
2. Fill in your details (Name, Email, Phone)
3. Select the complaint category
4. Provide location and description
5. Optionally attach a photo
6. Click "Submit Complaint"
7. Your Complaint ID will be generated

### Tracking a Complaint

1. Navigate to "Track Complaint"
2. Enter your Complaint ID
3. Click "Search"
4. View the status timeline and details
5. Get regular updates via email

### Viewing Statistics

1. Go to "Statistics" section
2. View key metrics
3. Check complaint distribution by category
4. Monitor resolution rates

## Language Support

- **English**: Default language
- **Hindi (हिन्दी)**: Click the language toggle button
- Persistent language preference (saved in browser)

## Complaint Statuses

- **Submitted**: Complaint received
- **Under Review**: Being reviewed by ward staff
- **In Progress**: Work is ongoing
- **Resolved**: Issue has been resolved

## Features Details

### Security
- Client-side data storage
- No personal data transmission
- HTTPS ready

### Accessibility
- WCAG 2.1 compliant
- Mobile responsive
- Easy navigation
- Large readable fonts

### Performance
- Fast loading
- Lightweight
- Offline capable
- Browser compatibility

## Sample Data

The portal includes sample complaints for testing:
- Use Complaint ID: `WRD-2024-00001` (Resolved)
- Use Complaint ID: `WRD-2024-00002` (In Progress)
- Use Complaint ID: `WRD-2024-00003` (Under Review)

## File Structure

```
ward-6-complaint-portal/
├── index.html      # Main HTML file
├── styles.css      # Styling
├── script.js       # JavaScript functionality
├── libs.html       # External libraries reference
└── README.md       # This file
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers

## Local Storage

The portal uses browser LocalStorage to store:
- Language preference
- Submitted complaints
- Tracking information

All data is stored locally on your device.

## Installation

1. Clone the repository
2. Open `index.html` in a web browser
3. No installation required - pure client-side application

## Deployment

Deploy to any static hosting:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Apache/Nginx

Simply upload all files to your hosting platform.

## Customization

### Update Contact Information
Edit the contact details in `index.html`:
```html
<p id="contactWardHeadPhone">📞 +91-YOUR-NUMBER</p>
<p id="contactWardHeadEmail">📧 your-email@example.com</p>
```

### Change Colors
Modify CSS variables in `styles.css`:
```css
--primary-color: #2c5aa0;
--secondary-color: #f39c12;
```

### Add More Categories
Update the select options in `index.html` and add translations in `script.js`.

## Future Enhancements

- Backend database integration
- Email notifications
- SMS alerts
- PDF report generation
- Advanced analytics
- Admin dashboard
- Citizen rating system
- Photo gallery

## Support

For issues or suggestions regarding this portal, please contact:
- Ward Head Office
- Email: wardhead@example.com
- Phone: +91-XXXXXXXXXX

## License

© 2024 Ward No. 6 Administration. All rights reserved.

## Disclaimer

This is a sample complaint management portal. For actual deployment, ensure compliance with:
- Data Protection Act
- Privacy regulations
- Accessibility standards
- Security best practices

---

**Last Updated**: September 2024
**Version**: 1.0.0
