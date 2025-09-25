# Car Details Screen

This screen displays detailed information about a specific car and its associated drivers, matching the Figma design exactly.

## Components

### CarDetails.tsx
Main component that renders the car details page with:
- Layout with sidebar navigation
- Header with search functionality
- Car information form section
- Car drivers table section

### CarInformationSection
Displays the car information form with:
- Breadcrumb navigation (Cars / Car 21A254)
- Car title with icon
- Two-column form layout with:
  - Car Name (optional)
  - Car Type (radio buttons: صغيرة, متوسطة, كبيرة, VIP)
  - Year of Manufacture
  - License Plate Number
  - Car City
  - Brand
  - Model
  - Car Status
  - Fuel Type (radio buttons: ديزل, بنزين 95, بنزين 91)
- Edit Data button (yellow)

### CarDriversSection
Displays the drivers associated with the car:
- Section header with "Add Driver for Car" button
- Table showing:
  - Driver Code
  - Driver Name
  - Phone Number
  - Address
  - Financial Value (Used/Limit) Daily
  - Account Status (with toggle indicator)
- Context menu for each driver with:
  - Driver Information
  - Remove Driver

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **RTL Support**: Full right-to-left language support for Arabic
- **Interactive Elements**: 
  - Form inputs with validation
  - Radio button groups
  - Context menus
  - Hover effects
- **Navigation**: Integrated with the main app routing
- **Consistent Styling**: Uses the project's design system and theme

## Usage

Navigate to `/car/:id` to view car details for a specific car ID.

## Dependencies

- React Router for navigation
- Lucide React for icons
- Tailwind CSS for styling
- Custom form components (Input, RadioGroup)
- Custom table component
