# Eraxis Authentication Model

Authentication Provider

Supabase Auth

Tables

auth.users

public.users

Relationship

auth.users.id
→ public.users.auth_user_id

Flow

Login
↓
Supabase Auth
↓
Session
↓
Current User
↓
Roles
↓
Permissions
↓
Application Access
