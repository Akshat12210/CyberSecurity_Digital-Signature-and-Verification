import { useState } from 'react';
import CryptoJS from 'crypto-js';
import JSZip from 'jszip';
import FileSaver from 'file-saver';

function DigitalSignatureGenerator() {
  const [file, setFile] = useState(null);
  const [publicKey, setPublicKey] = useState(null);
  const [signature, setSignature] = useState(null);
  const [zipFile, setZipFile] = useState(null);


  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const generateSignature = () => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const fileContent = event.target.result;
      const privateKey = CryptoJS.lib.WordArray.random(32);
      const publicKey = CryptoJS.SHA256(privateKey).toString(CryptoJS.enc.Base64);
      const signature = CryptoJS.SHA256(fileContent, privateKey).toString();

      const zip = new JSZip();
      zip.file('original-file.txt', fileContent);
      zip.file('public-key.txt', publicKey);
      zip.file('signature.txt', signature);
      zip.generateAsync({ type: 'blob' }).then((content) => {
        setZipFile(content);
      });

      setPublicKey(publicKey);
      setSignature(signature);
    };

    reader.readAsText(file);
  };

  const handleDownloadZip = () => {
    if (zipFile) {
      FileSaver.saveAs(zipFile, 'digital-signature.zip');
    }
  };

  return (
    <div className='flex flex-col space-y-4'>
      <input className='border border-gray-400 p-2 rounded-md' type="file" accept=".txt" onChange={handleFileUpload} />
      <button className='bg-teal-500 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded' onClick={generateSignature}>Generate Digital Signature</button>
      {publicKey && (
        <div>
          <h3>Public Key:</h3>
          <pre>{publicKey}</pre>
        </div>
      )}
      {signature && (
        <div>
          <button className='bg-teal-500 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded' onClick={handleDownloadZip}>Download Zip</button>
        </div>
      )}
    </div>
  );
}

export default DigitalSignatureGenerator;
