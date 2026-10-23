# D3X WAY - setup (one time)

## 1. Upload
Upload everything in this zip to your GitHub repo (same folder as your current index.html).
Keep your own `products.json`, `icon-192.png`, `icon-512.png` and `images/` folder - they are not in this zip.
The build file goes in `.github/workflows/build-apk.yml` (it replaces the old one).

## 2. Shop name
Open `admin.html`, set **Shop name** to `D3X WAY`, press **Save to shop**.
(The name shown inside the app comes from your products.json, not from the APK.)

## 3. Permanent signing key (important, do once)
Without it every build is signed differently and phones refuse to update over the old app.
On a computer (Java installed) run:

    keytool -genkeypair -v -keystore d3x.jks -alias d3x -keyalg RSA -keysize 2048 -validity 10000
    base64 -w0 d3x.jks

In GitHub: Settings > Secrets and variables > Actions > New repository secret. Add:
- `ANDROID_KEYSTORE_BASE64` = the long base64 text
- `ANDROID_KEYSTORE_PASSWORD` = the keystore password
- `ANDROID_KEY_ALIAS` = `d3x`
- `ANDROID_KEY_PASSWORD` = the key password (same as above if you pressed Enter)

Keep d3x.jks safe. If you lose it you can never update installed apps again.

## 4. Publish a version
GitHub > Actions > **Build D3X WAY APK** > Run workflow > type the version (example 1.0.0) > Run.
When it is green: the APK is in Releases, and `download.html` shows it.
Download page: https://sagalneqly.github.io/devish-selling-app/download.html

Also turn on: Settings > Actions > General > Workflow permissions > **Read and write**.

## 5. App ON / OFF (maintenance)
Admin > **App status** > Turn app OFF now. Customers see your message within about a minute. Turn it ON the same way.

## 6. Logs
Admin > bottom card **App logs**. Needs your Firebase database rules to allow `logs`:

    { "rules": { "users": { ".read": true, ".write": true }, "logs": { ".read": true, ".write": true } } }

## Forcing an update
Admin > **App version** > Oldest version allowed (example 1.0.2). Older apps get an Update required screen.
