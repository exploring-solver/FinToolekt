import React, { useState } from 'react';

const AuditHelper = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState([]);
  const [cleanedFileLink, setCleanedFileLink] = useState('');
  const [vendorFileLink, setVendorFileLink] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fileInput = document.getElementById('file-input');
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    setLoading(true);
    setProgress([]);
    setCleanedFileLink('');
    setVendorFileLink('');

    try {
      const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const responseData = await response.json();
        const { cleanedFilePath, vendorFilePath } = responseData;
        const uniqueId = cleanedFilePath.split('_')[0];

        const progressInterval = setInterval(async () => {
          const progressResponse = await fetch(`http://localhost:3000/progress/${uniqueId}`);
          const progressData = await progressResponse.json();
          setProgress(progressData.progress);

          if (progressData.progress.includes("Processing completed\r")) {
            clearInterval(progressInterval);
            setCleanedFileLink(`http://localhost:3000/processed/${cleanedFilePath}`);
            setVendorFileLink(`http://localhost:3000/processed/${vendorFilePath}`);
            setLoading(false);
          }
        }, 1000);
      } else {
        console.error('Upload failed');
        setLoading(false);
      }
    } catch (error) {
      console.error('Error during file upload:', error);
      setLoading(false);
    }
  };

  return (
    <div className=" bg-slate-300 h-screen pt-20 pl-20">
      <h1 className="text-3xl font-bold mb-4 border-b-[1px] border-black pb-2 w-fit">Upload Excel File for Auditing</h1>
      <form id="upload-form" onSubmit={handleSubmit} encType="multipart/form-data" className="mb-4">
        <input type="file" name="file" id="file-input" required className="mr-2" />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Upload</button>
      </form>
      {loading && (
        <div id="loading" className="bg-gray-100 p-4 mb-4">
          <p>Processing...</p>
          <ul id="progress-list" className="list-disc list-inside">
            {progress.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ul>
        </div>
      )}
      {cleanedFileLink && (
        <div id="download-link" className="mb-4">
          <a id="download-btn" href={cleanedFileLink} download="cleaned_excel_file.xlsx" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Download Cleaned Excel File</a>
        </div>
      )}
      {vendorFileLink && (
        <div id="download-link" className="mb-4">
          <a id="download-btn" href={vendorFileLink} download="cleaned_vendor_master.xlsx" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Download Cleaned Vendor Master File</a>
        </div>
      )}
    </div>
  );
};

export default AuditHelper;
