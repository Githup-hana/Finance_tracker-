async function investmentPage() {
    const response = await fetch("/src/pages/html/investments.html");
    const html = await response.text();
    return html;
  }
  
  export default investmentPage;