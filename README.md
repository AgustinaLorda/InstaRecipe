# 🍳 InstaRecipe – AI Powered Recipe Discovery Platform

## Collaboration & Contributors

This project was developed in collaboration between:

Agustina Lorda Focus Area: Modeling (ML Based)
Adeoluwa Afolabi Focus Area: Development (RSE Inspired)

Focus Area: Frontend Development, Authentication, Responsive Design, User Experience

InstaRecipe is a full stack web application that helps users discover recipes based on ingredients they already have at home. The platform combines AI powered recommendations with a community driven recipe sharing system, making meal planning faster, easier, and more personalized.

---

## ✨ Features

### AI Recipe Recommendations

* Generate recipe suggestions from available ingredients
* Personalized meal recommendations
* Quick recipe discovery without manual searching

### Recipe Search & Discovery

* Keyword based recipe search
* Filter by cuisine
* Filter by dietary preferences
* Filter by difficulty level
* Filter by cooking time
* Browse trending recipes

### Community Features

* Upload and share recipes
* Rate recipes
* Leave reviews
* Explore recipes created by other users

### User Accounts

* Secure registration and login
* Personalized user dashboard
* Save favorite recipes
* Manage uploaded recipes

### Content Management

* Upload recipe images
* Add ingredients and instructions
* Save recipes as drafts
* Publish recipes to the community

---

## 🧰 Tech Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3

### Backend & Database

* Supabase
* PostgreSQL

### AI Integration

* OpenAI API

### Development Tools

* Git
* GitHub

---

## 🔑 My Contributions

### Frontend Development

Designed and developed key user-facing components including:

* Login and registration pages
* Responsive layouts
* Recipe browsing interfaces
* User interaction workflows
* Navigation and page structure

### Authentication Integration

Worked with Supabase authentication to support:

* User registration
* Secure login
* Session management
* User specific functionality

### User Experience Design

Focused on creating an intuitive and responsive experience across devices by:

* Building mobile friendly interfaces
* Improving accessibility and usability
* Creating clean and consistent layouts
* Enhancing overall user interaction

---

## 🏗️ System Architecture

React handles frontend rendering, state management, and user interactions.

Supabase provides:

* User authentication
* PostgreSQL database storage
* Image storage
* Backend services

The OpenAI API generates recipe recommendations based on ingredients supplied by the user.

Together, these technologies create a scalable platform that combines AI powered meal planning with community generated content.

---

## 📊 Core Results

* AI generated recipe recommendations from user supplied ingredients
* Community recipe sharing platform
* User authentication and personalized dashboards
* Advanced recipe filtering and discovery tools
* Favorites and recommendation system
* Responsive web application supporting desktop and mobile devices

---

## 🛠 Installation

Clone the repository:

```bash
git clone https://github.com/AgustinaLorda/InstaRecipe.git
cd InstaRecipe
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and add the required environment variables:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
OPENAI_API_KEY=your_openai_api_key
```

Start the development server:

```bash
npm run dev
```

Open the application in your browser.

---

## ▶️ Usage

1. Create an account or sign in.
2. Enter available ingredients to receive AI recipe recommendations.
3. Search recipes using keywords or filters.
4. Save favorite recipes for future use.
5. Upload and share your own recipes.
6. Rate and review community recipes.
7. Discover trending and recommended meals.

---

## 🌎 Problem Addressed

Food waste and meal planning are common challenges for many households.

According to the USDA, approximately 30% to 40% of the United States food supply is wasted each year. At the same time, many people spend significant time deciding what to cook.

InstaRecipe helps address these challenges by allowing users to make better use of ingredients they already have while simplifying meal discovery through AI powered recommendations.

---

## 🔒 Security

User authentication is handled through Supabase.

Sensitive credentials such as API keys are stored in environment variables and are not included in the repository.

---

## 🚀 Future Improvements

* Meal planning calendars
* Shopping list generation
* Nutritional analysis
* Recipe recommendation personalization
* Social profiles and follower system
* Expanded dietary and health filters
* Mobile application support
