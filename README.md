🌐 Today I Learned — Fact Sharing App (with Supabase)

A simple React + Supabase app that lets users share and categorize facts, and vote on how interesting, mind-blowing, or false they are.

---

## 🚀 Features

- ✅ Submit facts with source links
- 📚 Categorize facts (science, technology, society, etc.)
- 📊 Vote if a fact is interesting, mind-blowing, or false
- 🔍 Filter facts by category
- ☁️ All data stored and managed using Supabase

---

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Backend-as-a-Service:** Supabase (PostgreSQL + Auth + RLS)
- **Styling:** CSS

---

## 🖼️ Screenshots

![App Screenshot](./screenshot.png)  
*Replace this with your actual screenshot*

---

## 🧠 How It Works

- Users can view all facts or filter by category.
- They can vote on facts.
- Anyone can submit a new fact (with validation).
- Facts are stored in the Supabase `facts` table.

---

## 🗃️ Database Schema

### Table: `facts`

| Column           | Type      | Description                     |
|------------------|-----------|---------------------------------|
| id               | int       | Primary Key                     |
| text             | text      | The fact text                   |
| source           | text      | URL source                      |
| category         | text      | Category (e.g., science)        |
| votesInteresting | int       | Votes for interesting           |
| votesMindblowing | int       | Votes for mind-blowing          |
| votesFalse       | int       | Votes for false                 |
| created_at       | timestamp | Auto-generated                  |

---

## 🔐 Supabase Policies

### Select (Read)

```sql
create policy "Public read access"
on "public"."facts"
as PERMISSIVE
for SELECT
to public
using (true);
