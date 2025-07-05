# Gateling Website Deployment Guide

## 🚀 Production Deployment Options

### Option 1: Vercel (Recommended)
Vercel provides the best experience for Next.js applications with automatic deployments and optimizations.

#### Prerequisites
- GitHub account
- Vercel account (free tier available)
- PostgreSQL database (Supabase, Neon, or Railway)

#### Steps
1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/gateling-website.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js configuration

3. **Environment Variables**
   Add these in Vercel dashboard:
   ```
   DATABASE_URL=postgresql://username:password@host:port/database
   NEXTAUTH_SECRET=your-secret-key
   NEXTAUTH_URL=https://your-domain.vercel.app
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ADMIN_EMAIL=admin@gateling.com
   ```

4. **Database Setup**
   ```bash
   npm run db:push
   npm run db:seed
   ```

5. **Deploy**
   - Vercel automatically deploys on git push
   - Custom domain can be added in Vercel dashboard

### Option 2: Netlify
Alternative deployment platform with similar features.

#### Steps
1. **Build Configuration**
   Create `netlify.toml`:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"
   
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

2. **Deploy**
   - Connect GitHub repository to Netlify
   - Add environment variables
   - Deploy automatically

### Option 3: Self-Hosted (VPS/Dedicated Server)

#### Prerequisites
- Ubuntu 22.04+ server
- Node.js 20+
- PostgreSQL 14+
- Nginx
- SSL certificate

#### Steps
1. **Server Setup**
   ```bash
   # Update system
   sudo apt update && sudo apt upgrade -y
   
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Install PostgreSQL
   sudo apt install postgresql postgresql-contrib -y
   
   # Install PM2 for process management
   sudo npm install -g pm2
   ```

2. **Database Setup**
   ```bash
   sudo -u postgres createuser --interactive
   sudo -u postgres createdb gateling_website
   ```

3. **Application Deployment**
   ```bash
   # Clone repository
   git clone https://github.com/yourusername/gateling-website.git
   cd gateling-website
   
   # Install dependencies
   npm install
   
   # Build application
   npm run build
   
   # Start with PM2
   pm2 start npm --name "gateling-website" -- start
   pm2 save
   pm2 startup
   ```

4. **Nginx Configuration**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## 🗄️ Database Configuration

### PostgreSQL Setup
1. **Create Database**
   ```sql
   CREATE DATABASE gateling_website;
   CREATE USER gateling_user WITH PASSWORD 'secure_password';
   GRANT ALL PRIVILEGES ON DATABASE gateling_website TO gateling_user;
   ```

2. **Run Migrations**
   ```bash
   npm run db:push
   ```

3. **Seed Data (Optional)**
   ```bash
   npm run db:seed
   ```

### Environment Variables
Create `.env.local` file:
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/gateling_website"

# Authentication
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="https://yourdomain.com"

# Email Configuration
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT="587"
EMAIL_USER="your-email@gmail.com"
EMAIL_PASS="your-app-password"
ADMIN_EMAIL="admin@gateling.com"

# Application
NODE_ENV="production"
```

## 📧 Email Configuration

### Gmail Setup
1. **Enable 2FA** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. **Use App Password** in EMAIL_PASS environment variable

### Alternative Email Providers
- **SendGrid**: Professional email service
- **Mailgun**: Developer-friendly email API
- **AWS SES**: Cost-effective for high volume

## 🔒 Security Considerations

### Production Security
1. **Environment Variables**
   - Never commit `.env` files
   - Use strong, unique secrets
   - Rotate keys regularly

2. **Database Security**
   - Use connection pooling
   - Enable SSL connections
   - Regular backups

3. **Application Security**
   - Enable HTTPS only
   - Set secure headers
   - Regular dependency updates

### SSL Certificate
```bash
# Using Certbot for Let's Encrypt
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

## 📊 Monitoring & Analytics

### Performance Monitoring
- **Vercel Analytics**: Built-in for Vercel deployments
- **Google Analytics**: Web analytics
- **Sentry**: Error tracking

### Uptime Monitoring
- **UptimeRobot**: Free uptime monitoring
- **Pingdom**: Professional monitoring
- **StatusCake**: Comprehensive monitoring

## 🔄 CI/CD Pipeline

### GitHub Actions
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - run: npm run test
      # Add deployment steps
```

## 🚀 Go-Live Checklist

### Pre-Launch
- [ ] Environment variables configured
- [ ] Database migrations run
- [ ] SSL certificate installed
- [ ] DNS records configured
- [ ] Email configuration tested
- [ ] Form submissions tested
- [ ] Admin interface tested
- [ ] Mobile responsiveness verified
- [ ] Performance optimized
- [ ] Analytics configured

### Post-Launch
- [ ] Monitor error logs
- [ ] Check form submissions
- [ ] Verify email notifications
- [ ] Test admin workflows
- [ ] Monitor performance metrics
- [ ] Set up regular backups
- [ ] Schedule security updates

## 📞 Support & Maintenance

### Regular Maintenance
- **Weekly**: Check error logs and performance
- **Monthly**: Update dependencies and security patches
- **Quarterly**: Review analytics and optimize conversion rates

### Backup Strategy
- **Database**: Daily automated backups
- **Files**: Weekly full backups
- **Code**: Version control with Git

## 🎯 Performance Optimization

### Production Optimizations
- **Image Optimization**: Next.js automatic optimization
- **Code Splitting**: Automatic with Next.js
- **Caching**: CDN and browser caching
- **Compression**: Gzip/Brotli compression

### Monitoring Tools
- **Lighthouse**: Performance audits
- **GTmetrix**: Speed testing
- **WebPageTest**: Detailed performance analysis

---

## 🏆 Success Metrics

Track these KPIs after deployment:
- **Conversion Rate**: Form submissions / visitors
- **Page Load Speed**: < 3 seconds target
- **Mobile Performance**: 90+ Lighthouse score
- **Uptime**: 99.9% target
- **Lead Quality**: Quote-to-client conversion rate

Your Gateling website is now ready for production deployment! 🎉

