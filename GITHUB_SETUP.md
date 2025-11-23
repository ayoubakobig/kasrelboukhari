# GitHub Repository Setup Instructions

Follow these steps to push your project to GitHub:

## Prerequisites
- Install Git: https://git-scm.com/download/win
- Create a GitHub account: https://github.com

## Steps

### 1. Initialize Git Repository

Open PowerShell in the project folder and run:

```powershell
git init
git add .
git commit -m "Initial commit: Ksar El Boukhari Info Hub"
```

### 2. Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `ksarpanel1` (or your preferred name)
3. Description: "Interactive infographic for Ksar El Boukhari Administrative District"
4. Keep it Public (for GitHub Pages)
5. DO NOT initialize with README, .gitignore, or license
6. Click "Create repository"

### 3. Push to GitHub

Copy the commands from GitHub or use these (replace YOUR_USERNAME):

```powershell
git remote add origin https://github.com/YOUR_USERNAME/ksarpanel1.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository Settings → Pages
2. Under "Build and deployment":
   - Source: Select "GitHub Actions"
3. Your site will be published at: `https://YOUR_USERNAME.github.io/ksarpanel1/`

### 5. Update Base Path (if needed)

If your repository name is different from "kebpanel", update `vite.config.ts`:

```typescript
const base = process.env.VITE_BASE_PATH || '/your-actual-repo-name/';
```

Then commit and push:
```powershell
git add vite.config.ts
git commit -m "Update base path"
git push
```

## Troubleshooting

**Port 3000 in use:**
The dev server will automatically use port 3001 or another available port.

**Build errors:**
Make sure all dependencies are installed:
```powershell
npm install
```

**GitHub Pages not working:**
- Wait 2-3 minutes after first push
- Check Actions tab for deployment status
- Ensure repository is public
- Verify base path in vite.config.ts matches repo name

## Quick Commands Reference

```powershell
# Check status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push

# Pull latest changes
git pull

# View commit history
git log --oneline
```

## Need Help?

- Git Documentation: https://git-scm.com/doc
- GitHub Pages Guide: https://pages.github.com/
- Vite Deployment: https://vitejs.dev/guide/static-deploy.html
