
  const employees = [
    {
      "id": 1,
      "email": "ali@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Build Login Page",
          "description": "Create a responsive login page with email and password fields.",
          "date": "2026-10-20",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Fix Navbar",
          "description": "Fix the responsive navigation bar for mobile devices.",
          "date": "2026-10-21",
          "category": "Bug Fix",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Update Profile UI",
          "description": "Improve the employee profile page layout.",
          "date": "2026-10-18",
          "category": "UI Design",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },

    {
      "id": 2,
      "email": "usman@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Design Dashboard",
          "description": "Create a clean and responsive dashboard.",
          "date": "2026-10-21",
          "category": "UI Design",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Create Task Cards",
          "description": "Build reusable cards to display employee tasks.",
          "date": "2026-10-22",
          "category": "Development",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Update Colors",
          "description": "Apply the updated color palette to the dashboard.",
          "date": "2026-10-19",
          "category": "UI Design",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },

    {
      "id": 3,
      "email": "ahmed@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Integrate API",
          "description": "Fetch and display employee data from the API.",
          "date": "2026-10-22",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Handle Loading State",
          "description": "Display a loader while fetching API data.",
          "date": "2026-10-23",
          "category": "Development",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Test API Response",
          "description": "Test API responses and handle possible errors.",
          "date": "2026-10-19",
          "category": "Testing",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },

    {
      "id": 4,
      "email": "hassan@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Build Task Filter",
          "description": "Add filters for active, completed and failed tasks.",
          "date": "2026-10-21",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Add Search Feature",
          "description": "Allow employees to search tasks by title.",
          "date": "2026-10-23",
          "category": "Feature",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Fix Filter Bug",
          "description": "Correct the completed-task filter.",
          "date": "2026-10-18",
          "category": "Bug Fix",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },

    {
      "id": 5,
      "email": "bilal@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Create Reports Page",
          "description": "Build a page to display employee performance reports.",
          "date": "2026-10-22",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Add Progress Counter",
          "description": "Display the total number of completed tasks.",
          "date": "2026-10-23",
          "category": "Feature",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Update Report Styling",
          "description": "Improve report tables and summaries.",
          "date": "2026-10-19",
          "category": "UI Design",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    }
  ]

  const admin = [
    {
    "id": 6,
    "email": "admin@example.com",
    "password": "123"
  }]

 export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));
  }

 export const getLocalData = () => {
   const employees = JSON.parse(localStorage.getItem('employees'));
   const admin = JSON.parse(localStorage.getItem('admin'));
   
 };  