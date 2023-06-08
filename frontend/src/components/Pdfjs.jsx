// import React, {useEffect, useRef} from 'react'
// import { PSPDFKit } from 'pspdfkit';

// const PdfViewer = () => {
//     const containerRef = useRef(null);

//     // useEffect(() => {
//     //     PSPDFKit.load({
//     //       container: containerRef.current,
//     //       document: 'https://res.cloudinary.com/dpfpgorhq/image/upload/v1686076076/olxposts/opsdv2nukouguoz17um6.pdf',
//     //       licenseKey: 'YOUR_LICENSE_KEY',
//     //     });
//     //   }, []);

//     useEffect(() => {
      
//         const container = containerRef.current;
//         // console.log(instance)
//         let PSPDFKit;
    
//         (async function () {
//           PSPDFKit = await import("pspdfkit");
//           const instance = await PSPDFKit.load({
//             container,
//             document: "https://res.cloudinary.com/dpfpgorhq/image/upload/v1686073228/olxavatars/Ranjan_Resume_j8tnnj.pdf",
//             // baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
//             baseUrl: `${window.location.protocol}//${window.location.host}/`,  
//           });
//         //   console.log(instance)
//         //   setInstance(instance)
  
//         })();
        
//         // setPspdfRef(PSPDFKit)
    
        
//       }, [])

//   return (
//     <div className='mt-16'>
//         PdfViewer
//         <div ref={containerRef} style={{ width: "100%", height: "100vh" }} ></div>
//     </div>
//   )
// }

// export default PdfViewer


import React, {useEffect, useRef, useState} from 'react'
import  * as pdfjs from "pdfjs-dist";
import pdfjsWorker from 'pdfjs-dist/legacy/build/pdf.worker.entry';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';
import * as pdfjsViewer from 'pdfjs-dist/web/pdf_viewer';


const Pdfjs = ({pdfUrl}) => {
//   console.log(pdfData)
  // console.log(data)

const [myPdf, setMyPdf] = useState(null);
const canvasRef = useRef(null);

async function loadPDF(url) {
    console.log("Loading PDF with URL", url)
  const pdfContainer = document.getElementById('pdf-viewer');
  pdfContainer.replaceChildren();
  const loadingTask = await pdfjsLib.getDocument(url);
  loadingTask.promise.then(async(pdf) => {setMyPdf(pdf)
    for (let i = 1; i <= pdf.numPages; i++) {
      await pdf.getPage(i).then(async(page) => {
        const canvas = document.createElement('canvas');
        canvas.id = `${Number(i)}`
        await pdfContainer.appendChild(canvas);
        const scale=1
        const viewport = page.getViewport({scale: scale});
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        const context = canvas.getContext("2d");
        
        const renderContext = {
          canvasContext: context,
          viewport: viewport
        };
        await page.render(renderContext).promise;




        
        //Select page for highlight 
        
      });
    }
    // const scrolling = document.getElementById(Number(pdfData.pageNumber))
    // scrolling.scrollIntoView()
  });
}
    useEffect(()=>{
        if(!pdfUrl) return;
      const url = "https://res.cloudinary.com/dpfpgorhq/image/upload/v1686073228/olxavatars/Ranjan_Resume_j8tnnj.pdf";
      console.log("PDF url", pdfUrl)
      loadPDF(pdfUrl)

    },[])

  return (
    <>

    <div>
    
   <p>Render</p>

    <div id="pdf-viewer">
    {/* <canvas ref={canvasRef} width="300" height="300" />  */}
    </div>
   
    
  </div>
       
    </>      
  )
}

export default Pdfjs












