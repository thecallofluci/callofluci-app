# Routes

This section details the routing strategy for the application from both user and developer perspectives. 

## Routing Overview

Call Of Luci leverages Next.js's powerful routing system to create a seamless and dynamic user experience. Routes for the application are organized starting from a master Next.js Route Group, `(routes)`, located inside of the `/app` directory . This `(routes)` directory is then split into the following subdirectories:

| /(routes) | Next.js App Router |
| --- | --- |
| subdirectories |  |
| /create | A static route directory where users can create new Observations. |
| /gallery | A static route directory that aggregates and displays Observations created by users. |
| /observations | A dynamic route directory which generates unique routes for each Observation. |
| /about | A static page detailing the background and purpose of the project. |
| /(temporary) | A collection of temporary pages for mockups and examples during app development. |

## Primary Routes

The user experience for the application is structured around three primary routes: `/create`, `/observations`, and `/gallery`.

```markdown
Call Of Luci Routing

├── app                        # Next.js App Router
│   ├── (routing)
│   │   ├── create             # Static route for creating Observations
│   │   │   └── page.tsx       # Page for creating Observations
│   │   ├── observations       # Dynamic route for individual Observations
│   │   │   └── [id]
│   │   │       └── page.tsx   # Pages for each unique Observation
│   │   └── gallery            # Static route for viewing existing Observations
│   │       ├── page.tsx       # Main Gallery page
│   │       ├── browse
│   │       │   └── page.tsx   # Gallery browsing functionality
│   │       └── search
│   │           └── page.tsx   # Gallery search functionality
│   └── ...
│   └── ...
│   └── ...
└── ...  
```

## 1. **Creating Content (Observations)**

### Purpose

The `create` route directory contains a static page (`page.tsx`) where users can create new Observations. This static route is accessible to all users and serves as the entry point for creating content. When a user creates a new Observation via the `create` route, the application captures the input data (text, images, etc.) and processes it to create a new Observation entity. This entity is then stored in a database or a similar persistent storage system (TBD). Each Observation should have a unique identifier (ID) that allows it to be referenced individually.

### **User Perspective**:

- Users are presented with a form on a static route to input data for creating a new Observation.
- After submission, the application processes the data and redirects users to a dynamically generated route that displays the newly created Observation.

### **Developer Perspective**:

- **Static Route for Creation**: Utilize a static route (e.g., /app/observation/create) for the Observation creation form. This simplifies the initial user interaction and focuses on data input.
- **Dynamic Route for Viewing**: Implement dynamic routes (e.g., /app/observation/[id]) for displaying individual Observations. Use Next.js's dynamic routing with [id] as a dynamic segment to fetch and display the Observation based on its unique identifier.

### **Developer Decisions Needed**:

- Decide on the schema for Observation identifiers (numeric ID, slug, etc.) and the data structure for storing Observations.

### URL Segment

This static route is shared by all users who wish to create a new Observation. It's a straightforward, user-friendly URL that clearly indicates its purpose.

- [callofluci.art/create](http://callofluci.art/create)

## 2. Individual Observations via Dynamic Routing

### Purpose

The `observations` route directory uses a dynamic segment (`[id]`) to generate unique routes for each Observation. The `page.tsx` file within the `[id]` directory is responsible for rendering the UI of individual Observations based on their unique identifiers.

### **User Perspective**:

- Each Observation is accessible through a unique, shareable URL, enhancing the ability to revisit and share specific Observations.

### **Developer Perspective**:

- **Dynamic Routes Implementation**: Use `[id]` folders within the `/observation` directory to create dynamic routes. This allows Next.js to match any path like `/observation/123` to the corresponding Observation.
- **Data Fetching**: Leverage `getStaticPaths` and `getStaticProps` for pre-rendering Observations at build time or `getServerSideProps` for server-side rendering, depending on the application's dynamic content needs.

### **Developer Decisions Needed**:

- Determine the balance between static generation and server-side rendering based on content update frequency and user experience requirements.

### URL Segment

For individual Observations, the app’s URL pattern uses a dynamic segment (`[id]`) to represent each unique Observation. This dynamic segment allows Next.js to generate pages for Observations on-demand, based on their unique identifiers. The correct syntax in the URL should include a slash `/` before the dynamic segment, like `/observation/[id]`, to denote it as a path parameter.

- callofluci.art/observation/[id]

## 3. Streaming Content (Gallery)

### Purpose

The `gallery` route directory aggregates and displays Observations created by users. It fetches existing Observations and presents them to the user, supporting functionalities like browsing and searching. This structure allows for a centralized Gallery experience with specific features accessible through nested routes.

The gallery route directory is structured to include the main Gallery page (`page.tsx`) and additional functionalities like browsing (`browse/page.tsx`) and searching (`search/page.tsx`). 

### **User Perspective**:

- The Gallery serves as a central hub for users to browse, search, and interact with existing Observations. It provides various views (e.g., carousel, search) to explore Observations.

### **Developer Perspective**:

- **Static Route for Gallery**: The Gallery route is implemented as a static route. This route fetches and displays a list of Observations, offering features like search and filtering.
- **Linking to Dynamic Routes**: From the Gallery, link to individual Observations using dynamic routes. This involves utilizing Next.js's Link component to navigate to `/observation/[id]` based on each Observation's unique identifier.

### **Developer Decisions Needed**:

- Design the search and filtering functionality within the Gallery. Choose the optimal method for fetching and displaying Observations, considering performance and scalability.

### URL Segments

The Gallery's base URL is static, serving as an entry point to various Gallery functionalities. The nested paths for browsing and searching within the Gallery are also static, indicating specific actions or views within the Gallery. These URLs are intuitive and descriptive, enhancing user navigation and SEO.

- callofluci.art/gallery
- callofluci.art/gallery/browse
- callofluci.art/gallery/search

---