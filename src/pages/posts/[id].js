import { useEffect } from "react";
import { useRouter } from "next/router";

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;

  // Check if browser is in app and redirect
  useEffect(() => {
    console.log(navigator.userAgent);
    if (navigator.userAgent.toLowerCase().includes("zalo")) {
      // Add a small delay to ensure everything is loaded
      setTimeout(() => {
        window.location.href = `wowsport://posts/${id}`;
      }, 100);
    }
  }, [id]);

  const handleOpenInApp = () => {
    window.location.href = `wowsport://posts/${id}`;
  };

  // Add meta tag dynamically
  useEffect(() => {
    const metaTag = document.createElement("meta");
    metaTag.name = "apple-itunes-app";
    metaTag.content = `app-id=id6740320411, app-argument=wowsport://posts/${id}`;
    document.head.appendChild(metaTag);

    return () => {
      document.head.removeChild(metaTag);
    };
  }, [id]);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col items-center mt-8 space-y-4">
        {/* {isMobile && (
          <a
            href={`https://wowsport.vn/posts/${id}`}
            className="w-full sm:w-auto"
          >
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              {t("postsPage.openInApp")}
            </Button>
          </a>
        )} */}

        <button
          className="w-full bg-blue-600 hover:bg-blue-700"
          onClick={handleOpenInApp}
        >
          Open in app
        </button>
      </div>
    </div>
  );
}
