# Atlanta Food Finder

Atlanta Food Finder is a full-stack web application for discovering restaurants and exploring Atlanta's food scene. The project combines a React frontend with a Django REST Framework backend and is designed around helping users find memorable local dining experiences, browse Atlanta on a map, and keep track of saved spots.

> **Project status:** This repository is an active prototype. The core interface and backend scaffold are present, while authentication, restaurant data, map interactions, and saved-spot persistence are still being developed.

## Features

- **Atlanta-focused restaurant discovery** with a welcoming landing page centered on the city's diverse food culture.
- **React single-page interface** with client-side routes for the home page, sign-up flow, and saved spots.
- **Saved spots view** with sample restaurant cards, distance information, cuisine labels, images, and sorting/filtering concepts.
- **Google Maps integration scaffold** centered on Atlanta, Georgia.
- **Django REST API scaffold** with a sample endpoint for verifying frontend/backend connectivity.
- **Django administration and SQLite support** included in the backend foundation.
- **Responsive styling and reusable page-specific CSS** for the frontend experience.

## Tech stack

### Frontend

- React
- React Router
- JavaScript
- CSS
- Create React App tooling

### Backend

- Python
- Django 5.1.1
- Django REST Framework
- django-cors-headers
- SQLite during development

## Repository structure

```text
ATLFoodFinder/
├── src/                         # React application source
│   ├── App.js                   # Main application shell and routes
│   ├── SignUp.js                # Account creation interface
│   ├── SignIn.js                # Sign-in interface
│   ├── SavedSpots.js            # Saved restaurant prototype
│   ├── Map.js                   # Google Maps loading and Atlanta map setup
│   ├── *.css                    # Component and page styling
│   └── *.jpg, *.png, *.svg      # Frontend images and branding
├── build/                       # Generated frontend build output
├── backend/
│   ├── manage.py                # Django management entry point
│   ├── backend/                 # Django project configuration
│   └── api/                     # REST API application
├── AtlantaFoodFinder/           # Additional Django project scaffold
└── .DS_Store                    # Local operating-system metadata
```

## Getting started

### Prerequisites

Install the following before running the project locally:

- Node.js and npm
- Python 3.10 or newer
- A Google Maps JavaScript API key if you want to use the map prototype

### 1. Clone the repository

```bash
git clone https://github.com/yomnegede/ATLFoodFinder.git
cd ATLFoodFinder
```

### 2. Run the frontend

The repository currently does not include a committed `package.json`. If the React source is being developed locally, create or restore the frontend dependency manifest first, then install the required packages:

```bash
npm install
npm start
```

The React development server normally runs at:

```text
http://localhost:3000
```

The main frontend routes are:

- `/` — Atlanta Food Finder home page
- `/sign-up` — Sign-up interface
- `/saved-spots` — Saved spots prototype

### 3. Run the Django backend

Create and activate a virtual environment from the repository root:

```bash
python -m venv .venv
source .venv/bin/activate
```

On Windows PowerShell, use:

```powershell
python -m venv .venv
.venv\Scripts\Activate.ps1
```

Install the backend dependencies required by the checked-in Django configuration:

```bash
pip install django djangorestframework django-cors-headers
```

Start the development server:

```bash
cd backend
python manage.py migrate
python manage.py runserver
```

The backend normally runs at:

```text
http://127.0.0.1:8000
```

### 4. Verify the sample API

The backend exposes a simple health-check-style endpoint at:

```text
GET http://127.0.0.1:8000/api/sample/
```

A successful response currently looks like:

```json
{
  "message": "Hello from Django!"
}
```

## Google Maps configuration

`src/Map.js` contains the initial Google Maps integration. Before using the map in a real deployment:

1. Create a Google Maps JavaScript API key.
2. Restrict the key by application origin and API usage in Google Cloud.
3. Store the key in an environment variable rather than committing it to source control.
4. Update the map loader to read the environment variable.

For a Create React App environment, a local `.env` file could use a variable such as:

```env
REACT_APP_GOOGLE_MAPS_API_KEY=your_key_here
```

Do not commit `.env` files or expose unrestricted API keys in the repository.

## Backend API

The current API is intentionally minimal:

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/sample/` | Returns a sample JSON response from Django REST Framework |
| `GET` | `/admin/` | Django administration interface |

The next backend milestone is to add persistent restaurant, user, and saved-spot models, followed by serializers and authenticated API endpoints.

## Development notes

- The frontend currently uses sample restaurant content for saved spots, including Nando's Peri-Peri Chicken and RReal Tacos.
- The sign-in and sign-up screens are presentation prototypes; their forms are not yet connected to backend authentication.
- The saved-spots filters are visual UI elements and are not yet wired to filtering logic.
- The repository includes generated frontend files under `build/`. In most React workflows, the build directory is generated with `npm run build` rather than edited manually.
- The repository contains Python cache files and `.DS_Store`; these should generally be excluded with a `.gitignore` file.
- The Django settings currently use development values such as `DEBUG = True` and hard-coded secret keys. These must be replaced with environment-based configuration before deployment.

## Testing

Frontend tests can be run with the standard React test command once the frontend dependency manifest is restored:

```bash
npm test
```

Django tests can be run from the `backend` directory with:

```bash
python manage.py test
```

The current test suite is a scaffold and should be expanded as API endpoints and application behavior are implemented.

## Roadmap

- [ ] Add a committed frontend dependency manifest and documented build scripts
- [ ] Add backend dependency management, such as `requirements.txt` or `pyproject.toml`
- [ ] Connect the React frontend to the Django API
- [ ] Implement restaurant and cuisine data models
- [ ] Add restaurant search, filtering, and sorting
- [ ] Complete Google Maps restaurant markers and location search
- [ ] Implement user registration and sign-in
- [ ] Persist saved restaurants per user
- [ ] Add restaurant details, ratings, and reviews
- [ ] Add automated frontend and backend tests
- [ ] Move secrets and production settings into environment variables
- [ ] Add deployment instructions and production configuration

## Contributing

Contributions are welcome. A typical workflow is:

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and add tests where appropriate.
4. Confirm the frontend and backend still start successfully.
5. Commit your work with a clear message.
6. Open a pull request describing the change and any setup considerations.

## License

No license file is currently included in the repository. Until a license is added, the project should be treated as **all rights reserved**. If you intend others to use, modify, or distribute the code, add an appropriate open-source license.

## Acknowledgments

Atlanta Food Finder is inspired by Atlanta's diverse restaurant community and the idea that discovering a great meal is also a way to discover the city.
