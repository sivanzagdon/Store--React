import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// הגדרת נתיבים ציבוריים
const isPublicRoute = createRouteMatcher(['/', '/products(.*)', '/about'])

// המידלוור עצמו
export default clerkMiddleware((auth, req) => {
  console.log(`Request for: ${req.url}`) // מדפיס את הבקשה לקונסול

  if (!isPublicRoute(req)) {
    // אם הנתיב לא ציבורי, מוודאים שהמשתמש מחובר
    auth().protect()
  }
})

// הגדרות לקונפיגורציה של המידלוור
export const config = {
  matcher: [
    // מתעלם מנתיבי אינטרנט פנימיים של Next.js וכל קובץ סטטי
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // תמיד להריץ עבור נתיבי API
    '/(api|trpc)(.*)',
  ],
}
