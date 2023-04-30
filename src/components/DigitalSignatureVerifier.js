import { useState } from 'react';
import CryptoJS from 'crypto-js';
import JSZip from 'jszip';

function DigitalSignatureVerifier() {
  const [verified, setVerified] = useState(null);
  const [selectedFile, setSelectedFile] = useState();
  const [originalFile, setOriginalFile] = useState();
  const [publicKeyFile, setPublicKeyFile] = useState();
  const [signatureFile, setSignatureFile] = useState();

  const submitHandler = () => {
    console.log(publicKeyFile);
    console.log(originalFile);
    console.log(signatureFile);
    const reader = new FileReader();
    reader.onload = async (event) => {
      const isValid = signatureFile === CryptoJS.SHA256(originalFile, publicKeyFile).toString();
      console.log("Is signature valid?", isValid);
      setVerified(isValid);
    };
    reader.readAsArrayBuffer(originalFile, publicKeyFile, signatureFile);
    // const publicKey = publicKeyFile.async('text');
    // const originalMessage = originalFile.async('text');
    // const signature = signatureFile.async('text');

  }


  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = async (event) => {
      const zip = await JSZip.loadAsync(event.target.result);

      const publicKey = await zip.file('public-key.txt').async('text');
      const originalMessage = await zip.file('original-file.txt').async('text');
      const signature = await zip.file('signature.txt').async('text');


      const isValid = signature === CryptoJS.SHA256(originalMessage, publicKey).toString();
      console.log("Is signature valid?", isValid);
      setVerified(isValid);
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <div className="flex flex-row items-center justify-center gap-7">
        {/* <div className='basis-1/4 flex-col space-y-3'>
          <label class="block text-gray-700 text-sm font-bold" for="originalFile">
            Original File
          </label>
          <input
            type="file"
            name="originalFile"
            id="originalFile"
            onChange={(e) => setOriginalFile(e.target.files[0])}
            className="border border-gray-400 p-2 rounded-md"
          />
          <label class="block text-gray-700 text-sm font-bold" for="publicKey">
            Public Key File
          </label>
          <input
            type="file"
            name="publicKey"
            id="publicKey"
            onChange={(e) => setPublicKeyFile(e.target.files[0])}
            className="border border-gray-400 p-2 rounded-md"
          />
          <label class="block text-gray-700 text-sm font-bold" for="signature">
            Signature File
          </label>
          <input
            type="file"
            name="signature"
            id="signature"
            onChange={(e) => setSignatureFile(e.target.files[0])}
            className="border border-gray-400 p-2 rounded-md"
          />

          {publicKeyFile && originalFile && signatureFile ?
            <button
              onClick={submitHandler}
              className='bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded'
            >
              Verify
            </button> :
            <></>}
        </div>
        <div className='border border-black h-80'></div> */}
        <div className='flex-col basis-1/4'>
          {verified === null && <p className='mb-2'>Please select a ZIP file containing the signature, public key, and original file.</p>}
          <input type="file" accept=".zip" onChange={handleFileInputChange} className="border border-gray-400 p-2 rounded-md" />
        </div>
      </div>
      <div className='text-center mt-5 text-2xl'>
        {verified === true && <p className="text-green-500">Signature verified!</p>}
        {verified === false && <p className="text-red-500">Signature verification failed!</p>}
      </div>
    </div>
  );
}

export default DigitalSignatureVerifier;
