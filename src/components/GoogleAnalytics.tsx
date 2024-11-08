import { GoogleAnalytics as NextGoogleAnalytics } from '@next/third-parties/google'

export function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  if (!measurementId) {
    console.warn('Google Analytics measurement ID is not set')
    return null
  }

  return <NextGoogleAnalytics gaId={measurementId} />
}
