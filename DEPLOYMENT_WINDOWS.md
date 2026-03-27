# Windows Server Deployment Guide (Next.js 16)

This guide deploys this project on a Windows server with your domain and HTTPS.

Recommended architecture:
- Next.js app running on localhost:3000
- IIS as reverse proxy on ports 80 and 443
- SSL certificate via win-acme (Let's Encrypt)
- App kept alive as a Windows service using NSSM

## 1) Prerequisites

Install on the server:
- Node.js 20 LTS (or newer)
- Git
- IIS (Web Server role)
- IIS URL Rewrite module
- IIS Application Request Routing (ARR)
- NSSM (Non-Sucking Service Manager)
- win-acme (Let's Encrypt client for Windows)

Open firewall ports:
- 80 (HTTP)
- 443 (HTTPS)

## 2) Prepare Project

1. Put project on server (git clone or copy files).
2. Open PowerShell in project folder.
3. Install dependencies:

```powershell
npm ci
```

4. Build production bundle:

```powershell
npm run build
```

5. Test production run manually:

```powershell
npm run start
```

6. Verify app opens at:
- http://localhost:3000

Stop the process after testing.

## 3) Run Next.js as Windows Service (NSSM)

Use NSSM so app auto-starts after reboot.

1. Start NSSM UI:

```powershell
nssm install isha-hospital
```

2. Set fields:
- Path: C:\Program Files\nodejs\node.exe
- Startup directory: path to project folder (example: C:\apps\isha-hospital)
- Arguments:

```text
node_modules\next\dist\bin\next start -H 127.0.0.1 -p 3000
```

3. In Environment tab add:

```text
NODE_ENV=production
```

4. Install and start service:

```powershell
nssm start isha-hospital
```

5. Check service status:

```powershell
Get-Service isha-hospital
```

## 4) Point Domain to Server

At your DNS provider:
- Create A record for root domain (@) -> your server public IP
- Create A record for www -> your server public IP

Wait for DNS propagation (usually minutes, sometimes longer).

## 5) Configure IIS Reverse Proxy

1. Open IIS Manager.
2. Create a new site (or use Default Web Site) with bindings:
- Type: http
- Port: 80
- Host name: yourdomain.com (and later add www)

3. Enable ARR proxy:
- In IIS root -> Application Request Routing Cache -> Server Proxy Settings
- Check Enable Proxy

4. Add URL Rewrite rule on the site:
- Type: Reverse Proxy
- Inbound target: http://127.0.0.1:3000
- Save rule

5. Confirm:
- Browsing http://yourdomain.com serves your Next.js app

## 6) Enable HTTPS (Let's Encrypt)

Using win-acme:

1. Run win-acme as Administrator.
2. Choose IIS site installation flow.
3. Select your site and domains:
- yourdomain.com
- www.yourdomain.com

4. Let win-acme:
- Create/renew certificate
- Bind certificate to IIS on port 443
- Optionally add HTTP->HTTPS redirect

5. Verify:
- https://yourdomain.com
- https://www.yourdomain.com

## 7) Post-Deployment Checklist

- Service running:

```powershell
Get-Service isha-hospital
```

- App process reachable locally:

```powershell
Invoke-WebRequest http://127.0.0.1:3000 | Select-Object -ExpandProperty StatusCode
```

- Domain and SSL valid in browser
- Contact form mail links work on desktop and mobile

## 8) Deploying Updates

From project folder:

```powershell
git pull
npm ci
npm run build
nssm restart isha-hospital
```

## 9) Troubleshooting

### Site not opening on domain
- Check DNS A records point to correct IP
- Check ports 80/443 open in firewall
- Check IIS binding host names

### 502 Bad Gateway from IIS
- Next.js service is down or wrong port
- Verify service and local app:

```powershell
Get-Service isha-hospital
Invoke-WebRequest http://127.0.0.1:3000
```

### SSL not issuing
- DNS not propagated yet
- Port 80 not publicly reachable
- Retry win-acme after fixing DNS/firewall

## 10) Optional Hardening

- Keep app bound to localhost only (127.0.0.1)
- Use strong TLS settings in IIS
- Restrict RDP access by IP
- Keep Windows, Node, and npm dependencies updated

---
If you want, add a CI pipeline later (GitHub Actions) to automate pull/build/restart on every release.
