# Putting your website at wildoysterworks.com

*A super-simple guide. Take it one step at a time. You can't break anything that can't be fixed.*

---

## First, the big idea 🏠

Think of it like this:

- **Your website** is a **house**. Right now it lives at a long, hard-to-remember address: `bajulia.github.io/wild-oyster-works`.
- **wildoysterworks.com** is a **beautiful new street sign** you bought from GoDaddy.
- Right now the sign **doesn't point anywhere**. We need to tell the sign where your house is.
- **GoDaddy** keeps the sign. **GitHub** keeps the house.

So there are only **two jobs**:

1. **At GoDaddy:** make the sign point to GitHub's house.
2. **At GitHub:** tell the house, "Hey, this sign is yours now."

Then Claude does one small tidy-up, and you're done. ✨

**Time needed:** about 15 minutes of clicking, then some waiting (usually under an hour).

---

## Job 1: At GoDaddy, point the sign 🪧

### Step 1: Open the sign's settings

1. Go to **godaddy.com** and **sign in**.
2. Click your name or the person icon (top right), then **My Products**.
3. Find **wildoysterworks.com** in the list.
4. Click **DNS** next to it. (It might say **Manage DNS**.)

You'll see a list (a table) of **records**. Each record is like a **little instruction card** that tells the internet where to go.

> 💡 **DNS** is just the internet's phone book. We're writing your house's address into it.

### Step 2: Throw away the "Parked" card 🗑️

GoDaddy puts a placeholder card there that says your domain is "parked" (like a car that isn't going anywhere).

1. Look for a row where **Type** says **A** and **Name** says **@**.
2. Its **Value** (or "Data" / "Points to") probably says **Parked** or a number.
3. Click the **trash can** 🗑️ or the **pencil ✏️ → Delete** on that row.
4. Say yes if it asks "Are you sure?"

> 💡 **@** just means "the plain domain", wildoysterworks.com with nothing in front.

**Also:** if you see a section called **Forwarding** and it's turned **on**, turn it **off**. We don't want GoDaddy sending people somewhere else.

### Step 3: Add four new cards that point to GitHub ➕➕➕➕

GitHub's house has **four front doors** (so it never gets too crowded). We give the sign all four.

Click **Add New Record** (or **Add**), and fill it in like this:

| Box on the screen | What you type |
|---|---|
| **Type** | `A` |
| **Name** | `@` |
| **Value** | `185.199.108.153` |
| **TTL** | leave it alone (the default is fine) |

Click **Save**.

Now do it **three more times**, changing only the **Value**:

| Card | Type | Name | Value |
|---|---|---|---|
| 1 ✅ | A | @ | `185.199.108.153` |
| 2 | A | @ | `185.199.109.153` |
| 3 | A | @ | `185.199.110.153` |
| 4 | A | @ | `185.199.111.153` |

> 💡 Look closely: the numbers are almost the same. Only the **third part** changes: **108, 109, 110, 111**. Like counting!

### Step 4: Fix the "www" card 🌐

Some people type **www.**wildoysterworks.com. We want that to work too.

1. Look for a row where **Type** says **CNAME** and **Name** says **www**.
2. Click the **pencil ✏️** to edit it.
   - *If there isn't one, click **Add New Record** instead.*
3. Make it look like this:

| Box | What you type |
|---|---|
| **Type** | `CNAME` |
| **Name** | `www` |
| **Value** | `bajulia.github.io` |

4. Click **Save**.

> ⚠️ Type **only** `bajulia.github.io`. Don't add `/wild-oyster-works` or `https://`. Just those letters and dots.

### ✅ Check your work

Your list should now include these rows (there may be other rows too, like **NS** and **SOA**. **Leave those alone**; they're GoDaddy's own cards):

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | bajulia.github.io |

And **no** "Parked" A record. 🎉 **Job 1 done!**

> 🙋 **Not sure you did it right?** Tell Claude "I finished GoDaddy". Claude can look up your domain from the computer and tell you if each card is correct.

---

## Job 2: At GitHub, tell the house about the sign 🏡

1. Go to: **https://github.com/BAJulia/wild-oyster-works/settings/pages**
   (Sign in if it asks.)
2. Scroll to the box called **Custom domain**.
3. Type: `wildoysterworks.com`
4. Click **Save**.

GitHub will now **check the sign**. You might see:

- ⏳ **"DNS check in progress"**: that's normal. Wait.
- ❌ **"DNS check unsuccessful"**: also normal at first! The internet needs time to learn about your new cards (like news spreading around town). Wait 15–60 minutes, then click **Check again**.
- ✅ **"DNS check successful"**: hooray!

### Turn on the lock 🔒

When the check is successful, you'll see a little box: **Enforce HTTPS**.

- **Tick it.** ☑️ This puts the little padlock in people's browsers, so your site is safe and doesn't show scary warnings.
- If the box is **grey and won't tick**, GitHub is still making your padlock. Come back in an hour and try again.

🎉 **Job 2 done!**

---

## Job 3: Tell Claude 🗣️

Your website was built to live at the **long** address. Now it needs to know it lives at the **short** one.

Just tell Claude:

> **"I saved the custom domain on GitHub. Please update the site for wildoysterworks.com and push it."**

Claude will change one setting, check it, and **ask you before publishing**. Say yes.

> 💡 For a few minutes in between, the site might look plain (no pictures or colors). That's normal. It fixes itself when Claude's update finishes, about 2 minutes after you say yes.

---

## Then... wait a little ⏰

- Usually **15–60 minutes**. Sometimes it can take **up to a day** (rare).
- It's like mailing a letter: you did everything right; it just takes time to arrive.

### How to know it worked 🎊

Open these in your browser:

- **https://wildoysterworks.com**: your gallery should appear with a 🔒 padlock.
- **https://www.wildoysterworks.com**: should jump to the same place.
- The old long address should also jump to your new one.

---

## Uh-oh? Quick fixes 🩹

| What you see | What it means | What to do |
|---|---|---|
| "This site can't be reached" | The news hasn't spread yet | Wait 30 minutes and try again |
| A GoDaddy "parked" page | The old Parked card is still there | Go back to **Step 2** and delete it |
| A GitHub "404 – There isn't a GitHub Pages site here" | GitHub doesn't know the sign is yours | Do **Job 2** again (type the domain, click Save) |
| Site shows but looks broken / no pictures | Claude's update isn't done yet | Do **Job 3**, or wait 5 minutes |
| Browser says "Not secure" | The padlock isn't on yet | Tick **Enforce HTTPS** in Job 2 (wait if it's grey) |
| GitHub says DNS check failed for hours | A card might have a typo | Tell Claude; it can check your cards for you |

---

## Your second sign: wildoysterwork.com (no "s") ↪️

You also own **wildoysterwork.com**. We don't want two houses. We want this sign to say **"→ go to wildoysterworks.com"**. People who forget the "s" still find you.

> ⚠️ **Do Job 1 for wildoysterworks.com first** (the one **with** the "s"). Then do this.

### Step A: Take the GitHub cards OFF the old sign 🗑️

GitHub can only live at **one** address. If the old sign still points at GitHub but GitHub doesn't know about it, a stranger could claim it. So we remove them.

1. **GoDaddy → My Products → DNS** next to **wildoysterwork.com** (no "s"!). Double-check the name at the top of the page.
2. **Delete** all four **A** records with Name **@** and values starting **185.199…**
3. **Delete** the **CNAME** record named **www** that points to **bajulia.github.io**.

### Step B: Turn on forwarding ↪️

1. On the same domain's page (**wildoysterwork.com**), find **Forwarding**. It's a tab or section on the DNS page, or under the domain's settings.
2. Click **Add Forwarding** (under **Domain**, not "Subdomain").
3. Fill it in:

| Box | What to choose |
|---|---|
| **Forward to** | `https://` and `wildoysterworks.com` (with the "s"!) |
| **Redirect type** | **Permanent (301)** |
| **Forward settings** | **Forward only** (⚠️ *not* "Forward with masking") |
| **Update my nameservers and DNS settings** | ✅ yes / leave ticked if offered |

4. Click **Save**.

GoDaddy adds its own records to make this work. **That's fine; don't delete them.**

### Step C: Make sure "www" forwards too 🌐

1. Go back to the **DNS records** list for **wildoysterwork.com**.
2. You want a row: **CNAME · www · @**. (If GoDaddy shows `wildoysterwork.com.` instead of `@`, that's the same thing.)
3. If it's missing, **Add New Record**: Type `CNAME`, Name `www`, Value `@`. Save.

### How to know it worked

After 15–60 minutes, typing **wildoysterwork.com** (no "s") should jump to **wildoysterworks.com**. The browser's address bar will change to the "s" version.

> 💡 If someone types **https://**wildoysterwork.com, their browser might show a security warning for a while, until GoDaddy finishes setting up its own padlock for the forwarding. Most people just type the name, and that works.

---

## Extra credit (optional, do it later): lock the sign so it's only yours 🔐

This stops anyone else from ever using wildoysterworks.com on *their* GitHub. It's a good idea, but your site works without it.

1. On GitHub, click **your profile picture** (top right) → **Settings**.
2. In the left menu, click **Pages**.
3. Click **Add a domain**, type `wildoysterworks.com`, click **Add domain**.
4. GitHub shows you a **secret code card** to add at GoDaddy. It looks like:
   - **Type:** `TXT`
   - **Name:** something like `_github-pages-challenge-BAJulia`
   - **Value:** a long jumble of letters and numbers
5. Go back to **GoDaddy → DNS**, click **Add New Record**, and copy those three things in **exactly**. Save.
6. Back on GitHub, click **Verify**. If it says not yet, wait 10 minutes and try again.

---

## The whole thing on one sticky note 📝

1. **GoDaddy → DNS:** delete the "Parked" A record. Turn off forwarding.
2. **Add 4 A records** (Name `@`): `185.199.108.153`, `.109.153`, `.110.153`, `.111.153`
3. **CNAME** `www` → `bajulia.github.io`
4. **GitHub → repo Settings → Pages → Custom domain:** `wildoysterworks.com` → **Save**
5. When the check passes: tick **Enforce HTTPS**
6. **Tell Claude** to update the site and push
7. **Wait**, then visit **wildoysterworks.com** 🎉
8. **Old sign wildoysterwork.com (no "s"):** delete its GitHub records → **Forwarding** → `https://wildoysterworks.com`, **Permanent (301)**, **Forward only** → make sure `CNAME www → @`
