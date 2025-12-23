# 📋 Quick Setup Checklist

## 🔥 DO THIS NOW (In Order):

### 1️⃣ EmailJS Setup (15 minutes total)
```
□ Go to https://www.emailjs.com/ and sign up
□ Add Gmail service → Copy SERVICE_ID
□ Create email template → Copy TEMPLATE_ID  
□ Get Public Key from Account settings
□ Update .env file with these 3 values
□ Update Contact.jsx line 42 with your email
□ Restart dev server (Ctrl+C then npm run dev)
□ Test the contact form!
```

### 2️⃣ GitHub Setup (5 minutes)
```
□ Create new repo on GitHub (public)
□ Run these commands in terminal:
  git init
  git add .
  git commit -m "Initial commit"
  git remote add origin YOUR_GITHUB_URL
  git push -u origin main
```

### 3️⃣ Vercel Deployment (5 minutes)
```
□ Go to https://vercel.com/ and sign up with GitHub
□ Click "Add New Project"
□ Select your portfolio repo
□ Add 3 environment variables (from .env)
□ Click Deploy
□ Wait 2-3 minutes
□ Get your live URL!
```

---

## 🎯 Your To-Do List RIGHT NOW:

1. **Open EmailJS:** https://www.emailjs.com/
2. **Follow the guide:** Open `SETUP_GUIDE.md` for detailed steps
3. **Update `.env` file** with your credentials
4. **Update `Contact.jsx`** with your email (line 42)
5. **Test locally** before deploying
6. **Push to GitHub**
7. **Deploy to Vercel**

---

## 📝 Files I Created for You:

1. **`.env`** - Add your EmailJS credentials here
2. **`SETUP_GUIDE.md`** - Complete step-by-step guide
3. **Updated `.gitignore`** - Protects your credentials
4. **Updated `Contact.jsx`** - Fixed recipient name

---

## ⚡ Quick Commands:

```bash
# Restart dev server (after changing .env)
npm run dev

# Test build
npm run build

# Push to GitHub
git add .
git commit -m "Update portfolio"
git push
```

---

## 🚨 IMPORTANT:

- **NEVER** commit your `.env` file to GitHub (it's already in .gitignore)
- **ALWAYS** add environment variables to Vercel/Netlify dashboard
- **TEST** the contact form locally before deploying
- **REPLACE** "your-email@gmail.com" in Contact.jsx with your actual email

---

Start with EmailJS setup first! 🚀
