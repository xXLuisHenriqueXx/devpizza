# DevPizza
<div style="display: inline_block">
  <img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/react/default.svg" alt="React" width="24" height="24" />
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/typescript/default.svg" alt="TypeScript" width="24" height="24" />
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/vite/default.svg" alt="Vite" width="24" height="24" />
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/tanstack/default.svg" alt="TanStack" width="24" height="24" />
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg" alt="Zustand" width="24" height="24" />
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/tailwind-css/default.svg" alt="Tailwind CSS" width="24" height="24" />
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/lucide/default.svg" alt="Lucide" width="24" height="24" />
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/shadcn-ui/default.svg" alt="shadcn/ui" width="24" height="24" />
</div>
<br />

**A modern pizza ordering interface focused on customization, intuitive shopping interactions, and a seamless user experience.**
DevPizza is a web application designed to simulate an online pizza ordering experience. It provides an interactive menu, customizable pizza options, and a dynamic shopping cart, combining reusable components with centralized state management.

## Features
### Product Catalog
- **Product Listing** — Browse available pizzas and other menu products.
- **Product Cards** — Display product information and interactive ordering actions.
- **Product Selection** — Add products directly to the shopping cart.
- **Dynamic Quantities** — Automatically increment product quantities when adding existing items.

### Pizza Customization
A dedicated customization experience for pizza orders.
- **Sweet and Savory Options** — Choose between different pizza categories.
- **Flavor Selection** — Select multiple flavors for a single pizza.
- **Maximum Flavor Limit** — Enforce the maximum number of flavors allowed per pizza.
- **Order Confirmation** — Confirm the selected flavors before adding the pizza to the cart.

### Shopping Cart
- **Centralized Cart State** — Manage shopping cart data using Zustand.
- **Quantity Management** — Track product quantities and repeated additions.
- **Dynamic Updates** — Keep cart information synchronized with user interactions.
- **Order Feedback** — Provide visual feedback when products are successfully added.

### User Experience
- Responsive interface for different screen sizes.
- Reusable and composable UI components.
- Interactive dialogs and product selection flows.
- Consistent visual design and typography.
- Client-side state management.

## Getting Started
### Installation
Clone the repository:
```bash
git clone https://github.com/xXLuisHenriqueXx/devpizza.git
```

Navigate to the project directory:
```bash
cd devpizza
```

Install dependencies:
```bash
yarn install
```

### Development
Start the development server:
```bash
yarn dev
```

The application will be available at:
```text
http://localhost:5173
```

## Available Scripts
| Command | Description |
|---|---|
| `yarn dev` | Starts the development server |
| `yarn build` | Runs TypeScript checks and generates the production build |
| `yarn preview` | Previews the production build |
| `yarn lint` | Runs ESLint |

## Project Structure
The application follows a component-based architecture, separating routing, reusable UI components, and state management.
```text
devpizza/
├── .github/
│   └── workflows/       # GitHub Actions workflows
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── routes/          # TanStack Router routes
│   ├── stores/          # Zustand state management
│   ├── hooks/           # Custom React hooks
│   ├── @types/           # TypeScript definitions
│   └── ...              # Application modules
├── components.json      # UI component configuration
├── eslint.config.js     # ESLint configuration
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Deployment
The project uses GitHub Actions to automate the deployment workflow to GitHub Pages.
The production build is generated using Vite and published through the configured GitHub Actions workflow.

## Contributing
Contributions, suggestions, and bug reports are welcome.
1. Fork the repository.
2. Create a feature branch.
3. Implement your changes.
4. Submit a pull request describing the changes.
Please keep contributions consistent with the existing TypeScript conventions and component architecture.

## Disclaimer
DevPizza is an independent demonstration project developed for educational and portfolio purposes. It is not affiliated with any restaurant or food delivery company.
