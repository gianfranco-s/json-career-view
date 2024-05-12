import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts';
import {useEffect, useState} from 'react'
pdfMake.vfs = pdfFonts.pdfMake.vfs


function DownloadPDF() {
  const docDefinition = {
    content: [
      {text: `This is a header ${Math.random()*100}`, style: 'header'},
      'No styling here, this is a standard paragraph',
      {text: 'Another text', style: 'anotherStyle'},
      {text: 'Multiple styles applied', style: ['header', 'anotherStyle']},
    ],

    styles: {
      header: {
        fontSize: 22,
        bold: true,
      },
      anotherStyle: {
        italics: true,
        alignment: 'right',
      },
    },
  };
  const [url, setUrl] = useState(null)

  const createPdf = () => {
    const pdfGenerator = pdfMake.createPdf(docDefinition);
    pdfGenerator.download()
  }

  return (
    <div className="MyCreatePDF">
      <button onClick={createPdf}>Download in PDF</button>
    </div>
  );
}

export default DownloadPDF;