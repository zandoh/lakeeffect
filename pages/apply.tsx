const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfLuvwzfA-ylBysiP7QHoTHTbqjExAYe6akSCEDlFFlHltqIw/viewform";

function ApplyPage() {
  if (typeof window !== "undefined") {
    window.location.replace(FORM_URL);
    return "";
  }

  return "";
}

export default ApplyPage;
