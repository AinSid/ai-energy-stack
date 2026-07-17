const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID

export function initAnalytics() {
    if (!measurementId || typeof window === 'undefined' || window.__gaInitialized) {
        return false
    }

    window.dataLayer = window.dataLayer || []
    window.gtag = window.gtag || function gtag() {
        window.dataLayer.push(arguments)
    }

    window.gtag('js', new Date())
    window.gtag('config', measurementId)

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`
    document.head.appendChild(script)

    window.__gaInitialized = true
    return true
}

export function trackEvent(eventName, parameters = {}) {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
        return false
    }

    window.gtag('event', eventName, parameters)
    return true
}
