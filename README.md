# Alpha AI App

Built by Shadan 🚀

## How the APK gets built

This repo uses **GitHub Actions** to build the Android APK in the cloud —
no need for Android Studio or a powerful laptop!

Every time you push code to the `main` branch, GitHub automatically:
1. Sets up Node.js + Java
2. Installs Capacitor
3. Builds the Android app
4. Produces a downloadable APK

## How to get your APK

1. Go to the **"Actions"** tab on this GitHub repo
2. Click the latest workflow run (should have a green checkmark ✅)
3. Scroll down to **"Artifacts"**
4. Download **"alpha-ai-apk"** — it's a zip containing your `.apk` file
5. Unzip it, transfer to your phone, and install!

## Updating your app

Just edit `www/index.html` with your new AI code, then:
```bash
git add .
git commit -m "update app"
git push
```

GitHub Actions will automatically rebuild a new APK for you.
