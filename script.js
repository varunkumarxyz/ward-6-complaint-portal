// Bilingual Translation Dictionary
const translations = {
    en: {
        mainTitle: "Ward No. 6 Complaint Portal",
        mainSubtitle: "File and Track Your Complaints",
        navHome: "Home",
        navFileComplaint: "File Complaint",
        navTrackComplaint: "Track Complaint",
        navStatistics: "Statistics",
        navContact: "Contact",
        welcomeTitle: "Welcome to Ward 6 Complaint Management System",
        welcomeText: "This portal allows residents of Ward No. 6 to file complaints regarding civic issues and track their resolution status in real-time.",
        featureFileTitle: "Easy Filing",
        featureFileText: "Submit complaints quickly and easily",
        featureTrackTitle: "Track Status",
        featureTrackText: "Monitor complaint resolution in real-time",
        featureNotifyTitle: "Notifications",
        featureNotifyText: "Get updates via email and SMS",
        featureCommunityTitle: "Community",
        featureCommunityText: "Join thousands of residents",
        fileComplaintTitle: "File a New Complaint",
        labelName: "Your Name *",
        labelEmail: "Email Address *",
        labelPhone: "Phone Number *",
        labelCategory: "Category *",
        labelLocation: "Location Details *",
        labelDescription: "Complaint Description *",
        labelImage: "Attach Photo (Optional)",
        imageHint: "Maximum file size: 5MB",
        labelAgree: "I agree to the terms and conditions *",
        submitBtn: "Submit Complaint",
        resetBtn: "Clear Form",
        trackComplaintTitle: "Track Your Complaint",
        trackingId: "Enter Complaint ID (e.g., WRD-2024-001)",
        trackBtn: "Search",
        timelineSubmitted: "Submitted",
        timelineUnderReview: "Under Review",
        timelineInProgress: "In Progress",
        timelineResolved: "Resolved",
        infoCategory: "Category:",
        infoLocation: "Location:",
        infoStatus: "Current Status:",
        infoAssigned: "Assigned To:",
        statisticsTitle: "Ward Statistics",
        statTotalLabel: "Total Complaints",
        statResolvedLabel: "Resolved",
        statPendingLabel: "Pending",
        statAvgDaysLabel: "Avg. Days to Resolve",
        chartsTitle: "Complaint Categories",
        contactTitle: "Contact Information",
        contactWardHead: "Ward Head Office",
        contactWardHeadPhone: "📞 +91-XXXXXXXXXX",
        contactWardHeadEmail: "📧 wardhead@example.com",
        contactWardHeadAddress: "📍 Ward No. 6 Office, City",
        contactUrgent: "Urgent Issues",
        contactEmergencyPhone: "📞 Toll-free: 1800-XXX-XXXX",
        contactHours: "⏰ Available 24/7",
        contactEmailSupport: "📧 emergency@example.com",
        footerText: "&copy; 2024 Ward No. 6 Administration. All rights reserved.",
        footerPrivacy: "Privacy Policy",
        footerTerms: "Terms & Conditions",
        successMessage: "Complaint submitted successfully! Your Complaint ID is: ",
        errorMessage: "An error occurred. Please try again.",
        noComplaintFound: "No complaint found with this ID. Please check and try again.",
        categoryRoad: "Road and Infrastructure",
        categoryWater: "Water Supply",
        categoryElectricity: "Electricity",
        categorySanitation: "Sanitation",
        categoryTraffic: "Traffic and Safety",
        categoryNoise: "Noise Pollution",
        categoryPublicSpace: "Public Space Maintenance",
        categoryOther: "Other",
    },
    hi: {
        mainTitle: "वार्ड नंबर 6 शिकायत पोर्टल",
        mainSubtitle: "अपनी शिकायतें दर्ज करें और ट्रैक करें",
        navHome: "होम",
        navFileComplaint: "शिकायत दर्ज करें",
        navTrackComplaint: "शिकायत ट्रैक करें",
        navStatistics: "आंकड़े",
        navContact: "संपर्क",
        welcomeTitle: "वार्ड 6 शिकायत प्रबंधन प्रणाली में आपका स्वागत है",
        welcomeText: "यह पोर्टल वार्ड नंबर 6 के निवासियों को नागरिक मुद्दों के बारे में शिकायतें दर्ज करने और वास्तविक समय में उनके समाधान की स्थिति को ट्रैक करने की अनुमति देता है।",
        featureFileTitle: "आसान फाइलिंग",
        featureFileText: "जल्दी और आसानी से शिकायतें जमा करें",
        featureTrackTitle: "स्थिति ट्रैक करें",
        featureTrackText: "वास्तविक समय में शिकायत समाधान की निगरानी करें",
        featureNotifyTitle: "सूचनाएं",
        featureNotifyText: "ईमेल और एसएमएस के माध्यम से अपडेट प्राप्त करें",
        featureCommunityTitle: "समुदाय",
        featureCommunityText: "हजारों निवासियों के साथ जुड़ें",
        fileComplaintTitle: "नई शिकायत दर्ज करें",
        labelName: "आपका नाम *",
        labelEmail: "ईमेल पता *",
        labelPhone: "फोन नंबर *",
        labelCategory: "श्रेणी *",
        labelLocation: "स्थान विवरण *",
        labelDescription: "शिकायत विवरण *",
        labelImage: "फोटो संलग्न करें (वैकल्पिक)",
        imageHint: "अधिकतम फाइल आकार: 5MB",
        labelAgree: "मैं शर्तों और शर्तों से सहमत हूं *",
        submitBtn: "शिकायत जमा करें",
        resetBtn: "फॉर्म साफ़ करें",
        trackComplaintTitle: "अपनी शिकायत ट्रैक करें",
        trackingId: "शिकायत आईडी दर्ज करें (जैसे WRD-2024-001)",
        trackBtn: "खोजें",
        timelineSubmitted: "जमा किया गया",
        timelineUnderReview: "समीक्षा के तहत",
        timelineInProgress: "प्रगति में",
        timelineResolved: "हल किया गया",
        infoCategory: "श्रेणी:",
        infoLocation: "स्थान:",
        infoStatus: "वर्तमान स्थिति:",
        infoAssigned: "को सौंपा गया:",
        statisticsTitle: "वार्ड आंकड़े",
        statTotalLabel: "कुल शिकायतें",
        statResolvedLabel: "हल किया गया",
        statPendingLabel: "लंबित",
        statAvgDaysLabel: "हल करने के लिए औसत दिन",
        chartsTitle: "शिकायत श्रेणियां",
        contactTitle: "संपर्क जानकारी",
        contactWardHead: "वार्ड हेड ऑफिस",
        contactWardHeadPhone: "📞 +91-XXXXXXXXXX",
        contactWardHeadEmail: "📧 wardhead@example.com",
        contactWardHeadAddress: "📍 वार्ड नंबर 6 कार्यालय, शहर",
        contactUrgent: "आपातकालीन मामले",
        contactEmergencyPhone: "📞 टोल-फ्री: 1800-XXX-XXXX",
        contactHours: "⏰ 24/7 उपलब्ध",
        contactEmailSupport: "📧 emergency@example.com",
        footerText: "&copy; 2024 वार्ड नंबर 6 प्रशासन। सर्वाधिकार सुरक्षित।",
        footerPrivacy: "गोपनीयता नीति",
        footerTerms: "शर्तें और शर्तें",
        successMessage: "शिकायत सफलतापूर्वक जमा हो गई! आपकी शिकायत आईडी है: ",
        errorMessage: "एक त्रुटि हुई। कृपया पुनः प्रयास करें।",
        noComplaintFound: "इस आईडी के साथ कोई शिकायत नहीं मिली। कृपया जांचें और पुनः प्रयास करें।",
        categoryRoad: "सड़क और बुनियादी ढांचा",
        categoryWater: "जल आपूर्ति",
        categoryElectricity: "बिजली",
        categorySanitation: "स्वच्छता",
        categoryTraffic: "ट्रैफिक और सुरक्षा",
        categoryNoise: "शोर प्रदूषण",
        categoryPublicSpace: "सार्वजनिक स्थान रखरखाव",
        categoryOther: "अन्य",
    }
};

// Current Language State
let currentLanguage = 'en';

// DOM Elements
const languageToggle = document.getElementById('languageToggle');
const navLinks = document.querySelectorAll('.nav-link');
const complaintForm = document.getElementById('complaintForm');
const trackBtn = document.getElementById('trackBtn');
const trackingId = document.getElementById('trackingId');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeLanguage();
    setupEventListeners();
    loadSampleData();
    initializeChart();
});

// Language Toggle Function
function initializeLanguage() {
    const savedLanguage = localStorage.getItem('wardPortalLanguage') || 'en';
    currentLanguage = savedLanguage;
    updateLanguage(currentLanguage);
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'hi' : 'en';
    localStorage.setItem('wardPortalLanguage', currentLanguage);
    updateLanguage(currentLanguage);
}

function updateLanguage(lang) {
    const t = translations[lang];
    
    // Update all elements with id
    document.getElementById('mainTitle').textContent = t.mainTitle;
    document.getElementById('mainSubtitle').textContent = t.mainSubtitle;
    document.getElementById('navHome').textContent = t.navHome;
    document.getElementById('navFileComplaint').textContent = t.navFileComplaint;
    document.getElementById('navTrackComplaint').textContent = t.navTrackComplaint;
    document.getElementById('navStatistics').textContent = t.navStatistics;
    document.getElementById('navContact').textContent = t.navContact;
    document.getElementById('welcomeTitle').textContent = t.welcomeTitle;
    document.getElementById('welcomeText').textContent = t.welcomeText;
    document.getElementById('featureFileTitle').textContent = t.featureFileTitle;
    document.getElementById('featureFileText').textContent = t.featureFileText;
    document.getElementById('featureTrackTitle').textContent = t.featureTrackTitle;
    document.getElementById('featureTrackText').textContent = t.featureTrackText;
    document.getElementById('featureNotifyTitle').textContent = t.featureNotifyTitle;
    document.getElementById('featureNotifyText').textContent = t.featureNotifyText;
    document.getElementById('featureCommunityTitle').textContent = t.featureCommunityTitle;
    document.getElementById('featureCommunityText').textContent = t.featureCommunityText;
    document.getElementById('fileComplaintTitle').textContent = t.fileComplaintTitle;
    document.getElementById('labelName').textContent = t.labelName;
    document.getElementById('labelEmail').textContent = t.labelEmail;
    document.getElementById('labelPhone').textContent = t.labelPhone;
    document.getElementById('labelCategory').textContent = t.labelCategory;
    document.getElementById('labelLocation').textContent = t.labelLocation;
    document.getElementById('labelDescription').textContent = t.labelDescription;
    document.getElementById('labelImage').textContent = t.labelImage;
    document.getElementById('imageHint').textContent = t.imageHint;
    document.getElementById('labelAgree').textContent = t.labelAgree;
    document.getElementById('submitBtn').textContent = t.submitBtn;
    document.getElementById('resetBtn').textContent = t.resetBtn;
    document.getElementById('trackComplaintTitle').textContent = t.trackComplaintTitle;
    document.getElementById('trackingId').placeholder = t.trackingId;
    document.getElementById('trackBtn').textContent = t.trackBtn;
    document.getElementById('timelineSubmitted').textContent = t.timelineSubmitted;
    document.getElementById('timelineUnderReview').textContent = t.timelineUnderReview;
    document.getElementById('timelineInProgress').textContent = t.timelineInProgress;
    document.getElementById('timelineResolved').textContent = t.timelineResolved;
    document.getElementById('infoCategory').textContent = t.infoCategory;
    document.getElementById('infoLocation').textContent = t.infoLocation;
    document.getElementById('infoStatus').textContent = t.infoStatus;
    document.getElementById('infoAssigned').textContent = t.infoAssigned;
    document.getElementById('statisticsTitle').textContent = t.statisticsTitle;
    document.getElementById('statTotalLabel').textContent = t.statTotalLabel;
    document.getElementById('statResolvedLabel').textContent = t.statResolvedLabel;
    document.getElementById('statPendingLabel').textContent = t.statPendingLabel;
    document.getElementById('statAvgDaysLabel').textContent = t.statAvgDaysLabel;
    document.getElementById('chartsTitle').textContent = t.chartsTitle;
    document.getElementById('contactTitle').textContent = t.contactTitle;
    document.getElementById('contactWardHead').textContent = t.contactWardHead;
    document.getElementById('contactWardHeadPhone').textContent = t.contactWardHeadPhone;
    document.getElementById('contactWardHeadEmail').textContent = t.contactWardHeadEmail;
    document.getElementById('contactWardHeadAddress').textContent = t.contactWardHeadAddress;
    document.getElementById('contactUrgent').textContent = t.contactUrgent;
    document.getElementById('contactEmergencyPhone').textContent = t.contactEmergencyPhone;
    document.getElementById('contactHours').textContent = t.contactHours;
    document.getElementById('contactEmailSupport').textContent = t.contactEmailSupport;
    document.getElementById('footerText').innerHTML = t.footerText;
    document.getElementById('privacyLink').textContent = t.footerPrivacy;
    document.getElementById('termsLink').textContent = t.footerTerms;
    
    // Update language toggle button
    languageToggle.textContent = lang === 'en' ? 'हिन्दी' : 'English';
    
    // Set HTML language attribute
    document.documentElement.lang = lang;
}

// Event Listeners Setup
function setupEventListeners() {
    // Language Toggle
    languageToggle.addEventListener('click', toggleLanguage);
    
    // Navigation Links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            navigateToSection(sectionId);
        });
    });
    
    // Complaint Form Submission
    complaintForm.addEventListener('submit', handleComplaintSubmit);
    
    // Track Complaint
    trackBtn.addEventListener('click', handleTrackingSearch);
    trackingId.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleTrackingSearch();
    });
}

// Navigation Function
function navigateToSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Update active nav link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
        }
    });
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Complaint Form Submission
function handleComplaintSubmit(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('complaintName').value,
        email: document.getElementById('complaintEmail').value,
        phone: document.getElementById('complaintPhone').value,
        category: document.getElementById('complaintCategory').value,
        location: document.getElementById('complaintLocation').value,
        description: document.getElementById('complaintDescription').value,
        timestamp: new Date().toISOString()
    };
    
    // Generate Complaint ID
    const complaintId = 'WRD-' + new Date().getFullYear() + '-' + Math.floor(Math.random() * 10000).toString().padStart(5, '0');
    
    // Store in localStorage
    let complaints = JSON.parse(localStorage.getItem('complaints')) || [];
    formData.complaintId = complaintId;
    formData.status = 'submitted';
    complaints.push(formData);
    localStorage.setItem('complaints', JSON.stringify(complaints));
    
    // Show success message
    const t = translations[currentLanguage];
    alert(t.successMessage + complaintId);
    
    // Reset form
    complaintForm.reset();
    
    // Navigate to home
    navigateToSection('home');
}

// Track Complaint Search
function handleTrackingSearch() {
    const id = trackingId.value.trim();
    const t = translations[currentLanguage];
    
    if (!id) {
        alert('Please enter a Complaint ID');
        return;
    }
    
    // Retrieve from localStorage
    const complaints = JSON.parse(localStorage.getItem('complaints')) || [];
    const complaint = complaints.find(c => c.complaintId === id);
    
    const trackingResult = document.getElementById('trackingResult');
    const trackingError = document.getElementById('trackingError');
    
    if (complaint) {
        displayTrackingResult(complaint);
        trackingResult.style.display = 'block';
        trackingError.style.display = 'none';
    } else {
        trackingError.textContent = t.noComplaintFound;
        trackingError.style.display = 'block';
        trackingResult.style.display = 'none';
    }
}

// Display Tracking Result
function displayTrackingResult(complaint) {
    document.getElementById('trackingComplaintId').textContent = complaint.complaintId;
    document.getElementById('infoCategoryValue').textContent = complaint.category;
    document.getElementById('infoLocationValue').textContent = complaint.location;
    document.getElementById('infoAssignedValue').textContent = 'Processing Officer';
    
    // Status badge
    const statusBadge = document.getElementById('infoStatusValue');
    statusBadge.textContent = complaint.status.replace('-', ' ').toUpperCase();
    statusBadge.className = 'status-badge ' + complaint.status;
    
    // Timeline
    const submittedDate = new Date(complaint.timestamp).toLocaleDateString(currentLanguage === 'hi' ? 'hi-IN' : 'en-IN');
    document.getElementById('timelineSubmittedDate').textContent = submittedDate;
    
    // Simulate progress
    const statuses = ['submitted', 'under-review', 'in-progress', 'resolved'];
    const currentIndex = statuses.indexOf(complaint.status);
    
    statuses.forEach((status, index) => {
        const marker = document.getElementById(status.replace('-', '') + 'Marker');
        if (index <= currentIndex) {
            marker.classList.add('completed');
            marker.classList.remove('pending', 'in-progress');
            if (index === currentIndex) {
                marker.classList.add('in-progress');
            }
        }
    });
}

// Sample Data
function loadSampleData() {
    // Check if sample data already loaded
    if (localStorage.getItem('sampleDataLoaded')) return;
    
    const sampleComplaints = [
        {
            complaintId: 'WRD-2024-00001',
            name: 'John Doe',
            email: 'john@example.com',
            phone: '9876543210',
            category: 'road',
            location: 'Main Street, near Market',
            description: 'Pothole on the main road causing accidents',
            status: 'resolved',
            timestamp: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString()
        },
        {
            complaintId: 'WRD-2024-00002',
            name: 'Jane Smith',
            email: 'jane@example.com',
            phone: '9876543211',
            category: 'water',
            location: 'Colony B, Block 5',
            description: 'No water supply for 3 days',
            status: 'in-progress',
            timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
        },
        {
            complaintId: 'WRD-2024-00003',
            name: 'Ram Kumar',
            email: 'ram@example.com',
            phone: '9876543212',
            category: 'sanitation',
            location: 'Residential Area A',
            description: 'Garbage not collected for a week',
            status: 'under-review',
            timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
        }
    ];
    
    localStorage.setItem('complaints', JSON.stringify(sampleComplaints));
    localStorage.setItem('sampleDataLoaded', 'true');
}

// Initialize Chart
let chart = null;

function initializeChart() {
    const canvasElement = document.getElementById('complaintChart');
    if (!canvasElement) return;
    
    // Check if Chart.js is loaded
    if (typeof Chart === 'undefined') {
        console.warn('Chart.js not loaded');
        return;
    }
    
    const ctx = canvasElement.getContext('2d');
    
    chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Road & Infrastructure', 'Water Supply', 'Electricity', 'Sanitation', 'Traffic & Safety', 'Noise Pollution', 'Public Space', 'Other'],
            datasets: [{
                data: [35, 25, 15, 12, 8, 3, 2, 0],
                backgroundColor: [
                    '#2c5aa0',
                    '#f39c12',
                    '#27ae60',
                    '#e74c3c',
                    '#9b59b6',
                    '#1abc9c',
                    '#34495e',
                    '#95a5a6'
                ],
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'right'
                }
            }
        }
    });
}

// Default: Show Home Section on Load
document.addEventListener('DOMContentLoaded', () => {
    navigateToSection('home');
});