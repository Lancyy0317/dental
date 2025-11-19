Dental Clinic CRUD with simple auth

Login credentials:
  username: lance
  password: lance

Setup:
1. Copy .env.example to .env.local and fill supabase values and AUTH_SECRET.
2. npm install
3. npm run dev

Notes:
- This project uses a simple JWT cookie for auth. The protected pages require login to access.
- Run the SQL in supabase_schema.sql to create the patients table.
