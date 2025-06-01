import { useEffect } from 'react'

export function useRDStationScript() {
  useEffect(() => {
    const scriptId = 'rdstation-forms-script'
    const existingScript = document.getElementById(scriptId)

    if (!existingScript) {
      const script = document.createElement('script')
      script.id = scriptId
      script.src =
        'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])
}
