import React from 'react'
import axios from 'axios'
import { Download } from 'lucide-react'

const PrivateFileDownload = () => {
  const handleDownload = async () => {
    try {
      const response = await axios({
        url:
          'https://cors-anywhere.herokuapp.com/https://techtalks.s3.eu-north-1.amazonaws.com/GoodPartsOfJavaScript.pdf',
        method: 'GET',
        responseType: 'blob',
      })

      const blob = new Blob([response.data], { type: 'application/pdf' })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'MyTechTalk.pdf'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error downloading file:', error)
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <button onClick={handleDownload} className="flex gap-2">
        <Download size={18} /> Download File
      </button>
    </div>
  )
}

export default PrivateFileDownload
