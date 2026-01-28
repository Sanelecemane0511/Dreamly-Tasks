# Dreamly Tasks – Angular 19  
&gt; A single-page task manager built for CTU module OSD522 FA2 2025.

---

##  Features
-   Add, edit, delete, toggle-done  
-   Priority levels (Low │ Medium │ High) + colour tags  
-   Due-date picker  
-   Rich notes (multi-line) per task  
-   Persistent storage (localStorage)  
-   Responsive 2-panel layout (sidebar + main card)  
-   Glass-morphism / soft-shadow styling  
-   Angular 19 – module based – no extra libraries  

---

##  Tech Stack
| Tool        | Version |
|-------------|---------|
| Angular CLI | 19.x    |
| TypeScript  | 5.x     |
| CSS3        | native  |
| RxJS        | shipped with CLI |

---

## ⚙️ Setup & Run

1. **Prerequisites**  
   - Node.js ≥ 18  
   - Angular CLI (global)  
     ```bash
     npm i -g @angular/cli
     ```

2. **Clone / unzip project**  
   ```bash
   cd dreamly-tasks

3.   **Install dependencies**
    - npm install

4. **Start dev server**
    -ng serve
    -Open http://localhost:4200 – live reload enabled.

5. **Production build**
    -ng build --configuration production
    -Output → dist/dreamly-tasks/