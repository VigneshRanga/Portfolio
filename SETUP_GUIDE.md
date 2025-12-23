# 🚀 Portfolio Setup & Deployment Guide

## 📧 Part 1: Email Integration Setup (EmailJS)

### What You Need to Do:

#### Step 1: Create EmailJS Account (5 minutes)
1. Go to **https://www.emailjs.com/**
2. Click **"Sign Up"** (Free plan: 200 emails/month)
3. Use your Gmail account to sign up
4. Verify your email address

#### Step 2: Connect Your Email Service (3 minutes)
1. Login to EmailJS Dashboard
2. Click **"Email Services"** in the left sidebar
3. Click **"Add New Service"**
4. Select **"Gmail"** (recommended)
5. Click **"Connect Account"**
6. Authorize EmailJS to send emails on your behalf
7. **IMPORTANT:** Copy the **Service ID** (looks like: `service_abc1234`)

#### Step 3: Create Email Template (5 minutes)
1. Click **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Set template name: "Portfolio Contact Form"
4. In the **Subject** field, enter:
   ```
   New Portfolio Message from {{from_name}}
   ```
5. In the **Content** field, enter:
   ```
   You have received a new message from your portfolio website!

   From: {{from_name}}
   Email: {{from_email}}

   Message:
   {{message}}

   ---
   This email was sent from your portfolio contact form.
   ```
6. Click **"Save"**
7. **IMPORTANT:** Copy the **Template ID** (looks like: `template_xyz5678`)

#### Step 4: Get Your Public Key (1 minute)
1. Click **"Account"** in the left sidebar
2. Click **"General"** tab
3. Find **"Public Key"** section
4. **IMPORTANT:** Copy the **Public Key** (looks like: `aBcDeFgHiJkLmNoPqR`)

#### Step 5: Configure Your Project (2 minutes)
1. Open the `.env` file in your project root
2. Replace the placeholder values with your actual credentials:
   ```env
   VITE_APP_EMAILJS_SERVICE_ID=service_abc1234
   VITE_APP_EMAILJS_TEMPLATE_ID=template_xyz5678
   VITE_APP_EMAILJS_PUBLIC_KEY=aBcDeFgHiJkLmNoPqR
   ```

3. Open `src/components/Contact.jsx`
4. Find line 42 and replace with your actual email:
   ```javascript
   to_email: "youremail@gmail.com", // Your actual Gmail address
   ```

#### Step 6: Test It! (2 minutes)
1. Make sure your dev server is running: `npm run dev`
2. Restart the dev server to load the new environment variables:
   - Press `Ctrl+C` in the terminal
   - Run `npm run dev` again
3. Go to http://localhost:5173
4. Scroll to the Contact section
5. Fill out the form and click "Send"
6. Check your email inbox - you should receive the message!

---

## 🌐 Part 2: Deployment Guide (Vercel - Recommended)

### Why Vercel?
- ✅ Free for personal projects
- ✅ Automatic deployments from GitHub
- ✅ Built-in SSL certificate (HTTPS)
- ✅ Global CDN for fast loading
- ✅ Perfect for React/Vite projects

### Deployment Steps:

#### Step 1: Prepare Your Project (5 minutes)
1. Make sure all your changes are saved
2. Test your project locally: `npm run dev`
3. Build your project to check for errors: `npm run build`
4. If build succeeds, you're ready!

#### Step 2: Push to GitHub (10 minutes)
1. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Name it: `portfolio-v2` or `my-portfolio`
   - Keep it **Public** (so it's free)
   - Don't initialize with README (you already have files)
   - Click **"Create repository"**

2. In your terminal (in the project folder), run:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-v2.git
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` with your GitHub username

#### Step 3: Deploy to Vercel (5 minutes)
1. Go to **https://vercel.com/**
2. Click **"Sign Up"** and use your GitHub account
3. Click **"Add New Project"**
4. Select your portfolio repository
5. Configure the project:
   - **Framework Preset:** Vite
   - **Root Directory:** `./` (leave as is)
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `dist` (auto-detected)

6. **IMPORTANT:** Add Environment Variables:
   - Click **"Environment Variables"**
   - Add these three variables:
     ```
     VITE_APP_EMAILJS_SERVICE_ID = your_service_id
     VITE_APP_EMAILJS_TEMPLATE_ID = your_template_id
     VITE_APP_EMAILJS_PUBLIC_KEY = your_public_key
     ```
   - Use the same values from your `.env` file

7. Click **"Deploy"**
8. Wait 2-3 minutes for deployment to complete
9. You'll get a URL like: `https://your-portfolio-abc123.vercel.app`

#### Step 4: Custom Domain (Optional)
1. Buy a domain from Namecheap/GoDaddy (around $10/year)
2. In Vercel dashboard, go to your project
3. Click **"Settings"** → **"Domains"**
4. Add your custom domain
5. Follow the DNS configuration instructions

---

## 🔧 Alternative: Deploy to Netlify

If you prefer Netlify over Vercel:

1. Go to **https://www.netlify.com/**
2. Sign up with GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. Select your GitHub repository
5. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Add Environment Variables (same as Vercel)
7. Click **"Deploy site"**

---

## ✅ Quick Checklist

### Before Deployment:
- [ ] EmailJS account created
- [ ] Email service connected (Gmail)
- [ ] Email template created
- [ ] `.env` file configured with real credentials
- [ ] Your email address added to `Contact.jsx`
- [ ] Tested contact form locally
- [ ] Project builds successfully (`npm run build`)

### Deployment:
- [ ] Code pushed to GitHub
- [ ] Vercel/Netlify account created
- [ ] Project imported to Vercel/Netlify
- [ ] Environment variables added to deployment platform
- [ ] Site deployed successfully
- [ ] Tested contact form on live site

---

## 🐛 Troubleshooting

### Contact Form Not Working:
1. Check browser console for errors (F12)
2. Verify `.env` values are correct
3. Make sure you restarted dev server after changing `.env`
4. Check EmailJS dashboard for error logs
5. Verify your email service is connected in EmailJS

### Build Errors:
1. Run `npm install` to ensure all dependencies are installed
2. Check for console errors
3. Make sure all images are in the correct folders
4. Verify all imports are correct

### Deployment Issues:
1. Make sure environment variables are set in Vercel/Netlify
2. Check build logs for errors
3. Verify build command is `npm run build`
4. Ensure output directory is `dist`

---

## 📞 Need Help?

If you encounter any issues:
1. Check the error message carefully
2. Google the error message
3. Check EmailJS documentation: https://www.emailjs.com/docs/
4. Check Vercel documentation: https://vercel.com/docs

---

## 🎉 Next Steps After Deployment

1. Share your portfolio URL on LinkedIn
2. Add the link to your GitHub profile
3. Include it in your resume
4. Test the contact form from the live site
5. Share with friends and get feedback!

Good luck! 🚀
