import { useRouter } from "next/router";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfLuvwzfA-ylBysiP7QHoTHTbqjExAYe6akSCEDlFFlHltqIw/viewform";

function ApplyPage({ ctx }: { ctx: any }) {
  const router = useRouter();
  // Make sure we're in the browser
  if (typeof window !== "undefined") {
    router.push(FORM_URL);
    return;
  }
}

ApplyPage.getInitialProps = (ctx: any) => {
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: FORM_URL });
    ctx.res.end();
  }
  return {};
};

export default ApplyPage;
