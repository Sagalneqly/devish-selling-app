# FF Game Store - Setup (GitHub Pages)

Files: index.html (customer app), admin.html (admin app), products.json (shop data),
manifest.json, admin-manifest.json, icon-192.png, icon-512.png

## 1. Put the files on GitHub
1. Create a new GitHub repository (Public). Example name: ff-store
2. Upload ALL files from this folder to the main branch (Add file > Upload files).
3. Settings > Pages > Source: "Deploy from a branch" > Branch: main, folder: / (root) > Save.
4. After about 1 minute your apps are live:
   - Customer app: https://YOURNAME.github.io/ff-store/
   - Admin app:    https://YOURNAME.github.io/ff-store/admin.html

## 2. Make the admin token
1. GitHub > Settings > Developer settings > Personal access tokens > Fine-grained tokens > Generate new token.
2. Repository access: only your ff-store repo.
3. Permissions > Repository permissions > Contents: Read and write.
4. Generate and copy the token.

## 3. Connect the admin app
1. Open admin.html on your phone or PC.
2. Repository: YOURNAME/ff-store   Branch: main   Token: paste it. Press Connect.
3. Edit products, payment methods (name, number, QR image), colors, texts, notifications, product images.
4. Press "Save to shop". The customer app updates within about 1 minute.
The token is saved only in your own browser. Never share it. Use "Disconnect" to remove it.

## 4. Install as apps on the phone
Open each link in Chrome > menu > Add to Home screen / Install app.

## 5. Real user count in admin (optional)
1. Go to firebase.google.com > create a project > Build > Realtime Database > Create (test mode).
2. Rules tab, paste this and Publish:
   {"rules":{"users":{".read":true,".write":true}}}
3. Copy the database URL (https://xxxx-default-rtdb.firebaseio.com).
4. In admin > Look and text > "Database link", paste it, Save to shop.
5. Admin > App users shows Total users, Active today, Last 7 days.
The "1500+" text at the top of the customer app is the "Active users text" field in admin.

## Notes
- Notifications are in-app only (bell + popup), no phone push.
- Orders open WhatsApp with the product, ID, name and payment method. Set your number in admin (digits only, with country code).
