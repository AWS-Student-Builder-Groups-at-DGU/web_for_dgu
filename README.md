# ☁️ AWS Cloud Clubs at DGU - Official Website

동국대학교 AWS 학생 커뮤니티, **AWS Cloud Clubs at DGU**의 공식 웹사이트 프로젝트입니다.  
Next.js 기반의 정적 웹사이트로 구축되었으며, Serverless 기반으로 운영 비용을 최소화합니다.

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Styled-components
- **Icons**: Lucide React

### Backend & Infrastructure (AWS)
- **Hosting**: AWS S3 (Static Website Hosting) + CloudFront (CDN)
- **DNS & Security**: Cloudflare (DNS, WAF)
- **Compute**: AWS Lambda (Node.js) - Function URL
- **Database**: Amazon DynamoDB (On-demand / Provisioned Free Tier)
- **Email**: Amazon SES (Simple Email Service)

---

## 🏗 Architecture

이 프로젝트는 **Serverless Architecture**를 채택하여 별도의 EC2 서버 없이 운영됩니다.

1. `Next.js`를 **S3**에 업로드하고 **CloudFront**를 통해 캐싱하여 배포합니다.
2. '신규 회원 알림 신청' 기능은 **AWS Lambda**가 처리하며, 데이터는 **DynamoDB**에 저장되고, **SES**를 통해 관리자에게 메일이 발송됩니다.
3. CloudFront Function을 사용하여 SPA 라우팅을 처리합니다.

<img width="2625" height="814" alt="image" src="https://github.com/user-attachments/assets/27437238-aa3b-4c0e-a544-f46c0174ed69" />

---

## ⚙️ CloudFront Configuration (Critical)

SPA 라우팅(새로고침 시 403/404 에러) 문제를 해결하기 위해 **CloudFront Function**이 적용되어 있습니다.

```javascript
function handler(event) {
var request = event.request;
var uri = request.uri;

    if (uri.endsWith('/')) {
        request.uri += 'index.html';
    } 
    else if (!uri.includes('.')) {
        request.uri += '.html';
    }
    return request;
}
```

---

## 📂 Project Structure

```bash
src/
├── api/            # API 호출 로직 (Lambda 연결)
├── app/
│   ├── members/    # 멤버 소개 페이지
│   ├── recruit/    # 지원하기 페이지
│   ├── sessions/   # 세션 소개 페이지
│   ├── layout.tsx  # 전체 레이아웃 (SEO 설정 포함)
│   └── page.tsx    # 메인 랜딩 페이지
├── components/     # 공통 컴포넌트
└── lib/            # 유틸리티
```

---

## 📝 License

This project is for **AWS Cloud Clubs at Dongguk University**.  
Copyright © 2026. All rights reserved.