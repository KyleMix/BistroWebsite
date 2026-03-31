# The Bistro at Lakeland Village — Website

Website for The Bistro at Lakeland Village, a restaurant and full-service catering business located at 470 E Country Club Dr, Allyn, WA 98524.

## Project Structure

```
BistroWebsite/
├── index.html        # Single-page website
├── css/
│   └── styles.css    # All styles (responsive, mobile-first)
├── js/
│   └── main.js       # Interactivity (nav, scroll reveal, form, parallax)
└── README.md
```

## Running the Site in Visual Studio Code

### Option 1 — Live Server Extension (Recommended)

This gives you hot-reload so the browser refreshes automatically when you save a file.

1. Open VS Code and open the `BistroWebsite` folder:
   - **File → Open Folder...** → select the `BistroWebsite` folder

2. Install the **Live Server** extension if you don't have it:
   - Press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (Mac) to open Extensions
   - Search for **Live Server** by Ritwick Dey
   - Click **Install**

3. Launch the site:
   - In the Explorer panel, right-click `index.html` → **Open with Live Server**
   - OR click the **Go Live** button in the bottom-right status bar

4. Your browser will open automatically at `http://127.0.0.1:5500`

> Any time you save a file, the browser reloads instantly.

---

### Option 2 — Open Directly in Browser (No Extensions)

No setup required — works for basic viewing.

1. Open the `BistroWebsite` folder in VS Code
2. In the Explorer panel, right-click `index.html` → **Reveal in File Explorer** (Windows) or **Reveal in Finder** (Mac)
3. Double-click `index.html` to open it in your default browser

> Note: Some browser security policies may block external fonts or images when opened as a local `file://` URL. Live Server (Option 1) avoids this.

---

### Option 3 — VS Code Simple Browser (No Extensions)

View the site inside VS Code itself.

1. Open `index.html` in VS Code
2. Open the Command Palette: `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
3. Type **Simple Browser: Show** and press Enter
4. Enter `http://127.0.0.1:5500` (requires Live Server running) or the local file path

---

## Recommended VS Code Extensions

| Extension | Purpose |
|---|---|
| **Live Server** — Ritwick Dey | Auto-reloading local dev server |
| **Prettier** | Format HTML/CSS/JS on save |
| **HTMLHint** | Catch HTML errors |

---

## Key Sections

| Section | Description |
|---|---|
| Hero | Full-screen background, parallax, catering CTAs |
| About | Restaurant story and setting |
| Catering | Primary focus — Weddings, Private Events, Corporate, Holiday |
| Menu | Signature dish cards with photos |
| Events | Weekly events (Bingo, Live Music, Sunday Brunch) |
| Contact | Catering inquiry form + business details |

## Contact Form — One-Time Activation (Formspree)

The catering inquiry form submits to **bistro.lakelandvillage@gmail.com** via Formspree.
It will not deliver emails until the address is confirmed. This only needs to be done once.

### Steps

1. **Submit the form once** — open the live website, fill out the catering inquiry form, and hit **Send Catering Inquiry**

2. **Check the Gmail inbox** — Formspree will send a confirmation email to `bistro.lakelandvillage@gmail.com` with the subject line **"Confirm your Formspree form"**

3. **Click Confirm** in that email — after confirmation, every future form submission will be delivered directly to the inbox

4. **Verify it works** — submit the form a second time and confirm the email arrives in Gmail

> If the confirmation email doesn't appear, check the Spam or Promotions folder.

### What Each Submission Includes

| Field | Example |
|---|---|
| Name | Jane Smith |
| Email | jane@example.com |
| Phone | (360) 555-0100 |
| Event Date | 2026-06-15 |
| Event Type | Wedding |
| Expected Guests | 80 |
| Message | Venue preferences, dietary needs, questions... |

### If Formspree Is Ever Unreachable

The form will display a fallback message prompting the visitor to email
`bistro.lakelandvillage@gmail.com` or call **(360) 277-4137** directly.

---

## Business Info

- **Address:** 470 E Country Club Dr, Allyn, WA 98524
- **Phone:** (360) 277-4137
- **Email:** bistro.lakelandvillage@gmail.com
- **Hours:** Mon–Sun, 12:00 PM – 8:00 PM
- **Facebook:** [facebook.com/BistroatLakelandvillage](https://www.facebook.com/BistroatLakelandvillage)
