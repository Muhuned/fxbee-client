# FXBee Client

A modern forex forecast and pivot panel built using React + Vite + Tailwind CSS.

---

## 🚀 Deployment Instructions (Netlify)

### ✅ Required Settings for Netlify Build to Work

1. **Node Version**

Go to Netlify > Site Settings > Build & Deploy > Environment > Environment Variables

Add:

```
NODE_VERSION = 18
```

---

2. **Create `.npmrc` File**

In the root of the repo, create a file named `.npmrc` with this content:

```
legacy-peer-deps=true
```

This helps avoid dependency resolution issues during build.

---

3. **Ensure Correct `vite.config.js`**

Make sure your `vite.config.js` looks like this:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    target: 'esnext'
  }
});
```

---

4. **Final Netlify Settings**

- **Build command**: `npm run build`
- **Publish directory**: `dist`

---

## 🌐 Live Deployment

Once the above steps are done, deploy using Netlify or connect GitHub for auto-deploys.
