# Workshop Booking — UI/UX Enhanced

This project is the enhanced version of the [workshop_booking](https://github.com/FOSSEE/workshop_booking) website, created as part of **Python Screening Task 1: UI/UX Enhancement**.  

---

## ✨ Design Principles Used
1. **Mobile-first approach** → Layout designed to be clean and usable on small screens first.  
2. **Clear visual hierarchy** → Workshop cards, bold headings, and call-to-action buttons highlight important info.  
3. **Accessibility** → Semantic HTML, form labels, validation messages, and focus states for keyboard users.  
4. **Consistency** → Colors, spacing, and typography follow a simple and predictable pattern.  
5. **Performance** → Minimal custom CSS + Bootstrap CDN to ensure fast loading.  

---

## 📱 Responsiveness
- **Small screens** → Single-column layout.  
- **Medium screens** → 2-column layout.  
- **Large screens** → 3-column layout.  
- Used **CSS Grid** + Bootstrap utilities for scaling content smoothly across devices.  

---

## ⚖️ Trade-offs (Design vs Performance)
- Used **Bootstrap CDN** (fast development, consistent design) → but external dependency adds one extra network request.  
- Avoided heavy images/icons → faster load, but design is kept simple.  
- JS booking modal is lightweight → good UX, but only client-side (no backend booking logic).  

screenshots:
C:\Users\Lenovo\OneDrive\Desktop\fosee task 1\assets\ss
---

## 🔥 Most Challenging Part
Creating a modern, mobile-friendly layout while keeping the code minimal and easy to understand.  
✅ Solution → Used **card-based design** with CSS Grid + Bootstrap, so layout looks modern but code stays lightweight.  

---

## 🛠️ Setup Instructions
1. Clone/download this repository.  
2. Open `index.html` in any browser (no extra setup required).  
3. Optionally, serve with a local server:  
   ```bash
   python -m http.server 8000
