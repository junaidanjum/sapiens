# Contributing to sapiens.website

Thank you for your interest in contributing! Follow these steps to add your portfolio to our collection.

## How to Add Your Profile

### 1. Fork & Clone the Repository

Fork this repository and clone it to your local machine:

```sh
git clone https://github.com/junaidanjum/sapiens.git
cd sapiens
```

### 2. Add Your Profile

Open `lib/profiles.ts` and **add your details** in the array using this format:

```ts
import { ProfileProps } from "./types";

export const profiles: ProfileProps[] = [
  {
    id: "your-unique-id", // Use a unique identifier
    name: "Your Name",
    roles: ["Developer", "Designer"], // Must be "Developer" | "Designer" | "Writer"
    website: "https://yourwebsite.com",
    bio: "A short bio about yourself.", // Preferably two lines.
  },
];
```

### 3. Upload Your Screenshot

Place a **screenshot of your portfolio** inside `public/images/`. We recommend a full width screenshot of your website.

- **Filename:** `your-unique-id.png` (e.g., `john-doe.png`) // It should match the id used in profiles.
- **Format:** PNG
- **Size Limit:** **400KB**

### 4. Commit and Push Your Changes

Once you've added your profile, commit and push your changes.

### 5. Create a Pull Request (PR)

Go to the GitHub repository and submit a **Pull Request** with a short description.

---

## ✅ Contribution Guidelines

- **Use valid roles** from `profileIcon`.
- **Keep your bio short and relevant** (1-2 lines).
- **Make sure your website is publicly accessible**.
- **Ensure your screenshot is high-quality** and follows the naming convention.

Once your PR is approved, your profile will be added to the project! 🎉

Thank you for contributing! 💙
