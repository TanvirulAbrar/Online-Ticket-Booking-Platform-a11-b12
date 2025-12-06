Project Name: Online Ticket Booking Platform
Project Overview and Discussion
You must develop a complete Online Ticket Booking Platform using the MERN stack where users can discover and book travel tickets (Bus, Train, Launch, Plane etc). There will be three user roles: User, Vendor and Admin.

20 client side & 12 commits server

Layout & Page Structure
a) Main Layout (Common for Entire Website)
Use a single <MainLayout> component that wraps all pages
Structure: → <Navbar /> at top (fixed/sticky on scroll) → <Outlet /> or children (main content area with proper padding) → <Footer /> at bottom
Fully responsive on mobile, tablet, and desktop
b) Navbar (Must be consistent across all pages)
Logo on left: “TicketBari”(or any other name) with a small bus/train icon
Menu items Home , All Tickets (private) , Dashboard (private) → Login / Register (only when not logged in)
Right side (when logged in): → User avatar (rounded) → User name → Dropdown: My Profile → Logout
Mobile view: Hamburger menu
c) Footer (Must appear on every page)
4 columns on desktop, stacked on mobile
Column 1: Logo + short description (“Book bus, train, launch & flight tickets easily”)
Column 2: Quick Links → Home, All Tickets, Contact Us, About
Column 3: Contact Info → Email, Phone, Facebook Page
Column 4: Payment Methods (ex: stripe)
Bottom bar: © 2025 TicketBari. All rights reserved.

Authentication System
User Login
The user will show a Login page with a form, so that the user can Log in to this application.
Show a Title for Login. & Form with the following fields
( Email, Password, Forget Password, Login button )

If the user logs in successfully, then
navigate them to their desired Route / Home page.
If not, show him an error with a toast/error message anywhere in the form.

There will be some other options like
Show the user a Link for Register so that he can go to the register page.
Show users a Social Login Button ( Google only ) on clicking it
The user authenticates with Google
Navigate him to his desired Route / Home page.

User Registration
Create a register page with a form, so that the user can register themselves in this application.
Show a Title for registration and a Form with the following fields
( Name, Email, Photo-URL, Password, & Register Button )

If the user registers successfully, then
navigate them to their desired Route / Home page.
If not, show him an error with a toast/error message anywhere in the form.

Implement password validation
For password validation, you need to follow the criteria below. Show a password error in the form, and don't Register for an invalid password
Must have an Uppercase letter in the password
Must have a Lowercase letter in the password  
Length must be at least 6 characters

There will be some other options like
Show the user a Link for Login so that he can go to the Login page.
Show users a Social Login Button ( Google only ) on clicking it
The user authenticates with Google
Navigate the user to the Home page.

2. Home Page
   Hero Banner/Slider
   Advertisement Section: Exactly 6 tickets chosen by Admin (see requirement 7d)
   Each card will have: - Image - Ticket Title - Price (per unit) - Ticket Quantity - Transport type - Perks - “See details” button
   Clicking the “See details” button will take the user to the Ticket Details page(see requirement 4)
   Latest Tickets Section: 6-8 recently added tickets will be shown.
   Each card will have: - Image

- Ticket Title - Price (per unit) - Ticket Quantity - Transport type - Perks - “See details” button
  Clicking the “See details” button will take the user to the Ticket Details page(see requirement 4)

Two Extra Sections (your choice, e.g., “Popular Routes”, “Why Choose Us?”)

3. All Tickets Page
   Shows only admin-approved tickets.  
   Each card contains:

   - Image
   - Ticket title
   - From(location) → To(location)
   - Transport type - Price (per unit) - Ticket Quantity - Perks - Departure date & time
   - “See details” button
     Clicking the “See details” button will take the user to the Ticket Details page (See requirement 4)

4. Ticket Details Page (Protected Route)  
   Show Full details of the ticket.
   “Book Now” button
   Show countdown depending on the Departure date and time

- Clicking the “Book Now” button opens a modal where the user can enter the desired ticket quantity in the input field and submit the form. Upon successful submission, the booking is saved to the database with a “Pending” status and immediately appears on the user’s “My Booked Tickets” page (see Requirement 5b).

-The 'Book Now' button will be disabled if the departure date and time have already passed.

- If the Ticket quantity is 0 then “Book Now” button will be disabled”

- Booking quantity can’t be greater than Ticket Quantity

Dashboard Layout: 5. User Dashboard (User Only)  
Sidebar routes:  
User Profile  
My Booked Tickets  
Transaction History

a) User Profile
Display all User information such as profile picture, name, email, role etc.

b) My Booked Tickets  
All the Tickets that the user has booked will be shown here in a 3 column grid layout.Each card will have:

- Ticket title
- Image
- Booking Quantity
- Total Price (unit price \* Booking Quantity)
- From(Location) → To(Location)
- Departure date/time
- Status: pending | accepted | rejected | paid (initially pending)
- A countdown will be shown based on departure date and time.

- If the vendor accepts the booking request then the status will be “accepted” and a “Pay Now” button will appear. (see requirement 6d)
  -Clicking the “Pay Now” button opens the Stripe payment interface, where the user can complete the purchase. The total amount(to be paid) is automatically calculated as (unit price × booked quantity).
- After successful payment the status will be “paid” also the Ticket Quantity will be reduced.

- Users cannot make payment if the departure date and time have already passed, even if the vendor has accepted the booking request.

- If the vendor rejects the booking request then the status will be “rejected” and the countdown will be removed from the card.
  c) Transaction History
  Display all of the user’s Stripe transactions in a table format. Each row should include the following information:
  -Transaction ID
  -Amount
  -Ticket Title
  -Payment Date

6. Vendor Dashboard (Vendor Only)  
    Sidebar routes:  
   Vendor Profile  
   Add Ticket  
   My Added Tickets  
   Requested Bookings  
   Revenue Overview

a) Vendor Profile
Display all Vendor information such as profile picture, name, email, role etc.

b) Add Ticket
There will be a form with the fields below:

- Ticket title
- From(Location), To(Location)
- Transport type,
- Price(per unit)
- Ticket quantity
- Departure date & time
- Perks (checkboxes) (ex: AC, Breakfast etc)
- Image upload (imgbb)
- Vendor name (readonly)
- Vendor email (readonly)
- “Add Ticket” button

- Clicking the “Add Ticket” button will save the data to the database with a verification status “pending” initially and also the data will be shown in the vendor's “My Added Tickets” page.(see requirement 6c)

c) My Added Tickets
All added tickets by the vendor will be displayed here in a 3-column grid layout. Each card will show relevant ticket information along with its verification status.
Verification status:
Initially “pending”
If the admin approves the ticket then the verification status will be “approved” and if the admin rejects the ticket then the verification status will be “rejected”.(see requirement 7b)

There will be two buttons on each card:

- Update . Vendors can modify ticket details at any time using the “Update” button.
- Delete. Vendors can delete the ticket by clicking the delete button.
- Both buttons will be disabled if the verification status is “rejected”.

d) Requested Bookings (Table)

- User name/email (user that requested to book the ticket)
- Ticket title
- Booking Quantity
- Total price (unit price \* Booking Quantity)
- Accept and Reject buttons

- By clicking the “Accept” button the vendor can accept the booking request.
- By clicking the “Reject” button the vendor can reject the booking request.

e) Revenue Overview  
Display “Total Revenue”, “Total Tickets Sold”, and “Total Tickets Added” using interactive charts. 7. Admin Dashboard (Admin Only)  
Sidebar routes:  
 Admin Profile  
 Manage Tickets  
 Manage Users  
 Advertise Tickets

a) Admin Profile
Display all Admin information such as profile picture, name, email, role etc.

b) Manage Tickets (Table)  
All the tickets added by vendors will be shown here in a tabular format.
Each row will contain ticket information including two buttons :
-Approve. By clicking the approve button admin can approve any ticket and the ticket will be shown in the “All Tickets” page.
-Reject. By clicking the reject button admin can reject the ticket.

c) Manage Users (Table)  
All the users will be shown in a tabular format.Each row will contain:

- Name, Email, Role
- Make Admin , Make Vendor buttons.(Admin can make a user Admin or Vendor by clicking these buttons) .
- Mark as Fraud button (only if the user is a vendor) .Allows admin to mark a vendor as fraud. Once clicked, all of the vendor’s tickets are hidden from the platform, and the vendor loses the ability to add tickets in the future.

d) Advertise Tickets
All the admin-approved tickets will be shown here with some information in a tabular format.
-There will be an “Advertise” toggle button on each row.
-Admin can Advertise or Unadvertise any ticket by this button.
-Advertised tickets will be displayed in the Advertisement Section on the homepage.
-Admin cannot advertise more than 6 tickets at a time.
Additional
Show loading spinner when any data is in loading state.
Show an error page for invalid routes.

UI Design Requirements:

Unique Design: First, decide what kind of website you want to make. Then, search online or check out websites like ThemeForest to get ideas for the design. But remember, your website idea shouldn't be similar to any projects you've done before or to any examples in our modules or conceptual sessions.
You can also look for free resources on blogs to help with your website.

Keep the main heading style (font, size, color) consistent across all sections.

Keep paragraph spacing balanced and text easily readable.
Maintain uniform image sizes and spacing. 4. Use the same button style as on the home page.
Ensure good spacing and proper alignment.
Navbar, Keep the heading/logo same style and size as on the home page.
Use a grid layout with equal image sizes.
Keep all cards equal height and width (especially in services, projects, or products section)
Use the new X logo instead of the old Twitter bird to match the latest rebrand
Responsiveness: Make it responsive for all devices, including mobile, tablet, and desktop views.
Dashboard UI Requirements:
Responsive design for mobile and tablet screens
Consistent color theme
Full-width dashboard
Charts and graphs for quick data visualization
User profile section

Resources:
https://uiverse.io/
https://devmeetsdevs.com/
https://bootcamp.uxdesign.cc/free-images-and-resources-collection-for-website-c77f2fc46ce5
https://themeforest.net/?srsltid=AfmBOopTj6PNz51iuV2YJXUtBP8nt19_zT5LG2dToAjIHQqzNCzregn0
https://codecanyon.net/?srsltid=AfmBOooRoUfeK7lOROpchCuA4hPVj5P9WRmtDQJ9K0E6Yhf4VTrHhXKt

Challenge Requirements

1. Add a Search functionality depending on From(Location) - To(Location) and also add a Filter by transport type in the “All Tickets” page.
2. Implement Sort by price (Low to High / High to Low) functionality in the “All Tickets” page.
3. Use JWT token or Firebase token to protect api’s.
   4.Implement Pagination in “All Tickets” page (6–9 per page)
4. Implement Dark/Light mode toggle.

What to Submit
Admin Email:
Admin Password:
Vendor Email:
Vendor Password:
Live Site Link :
Github Repository ( server ) :
Github Repository ( client ) :
Optional Requirement Guideline

1. PDF ticket download after payment
2. Cancel booking (only before vendor accepts)
3. Live seat map (simple grid for bus)
4. Use React Hook Form
5. Swiper.js for homepage slider
