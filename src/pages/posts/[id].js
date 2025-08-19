import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;

  // Check if browser is in app and redirect
  useEffect(() => {
    // if (navigator.userAgent.toLowerCase().includes("zalo")) {
    //   // Add a small delay to ensure everything is loaded
    //   setTimeout(() => {
    //     window.location.href = `wowsport://posts/${id}`;
    //   }, 100);
    // }
    if (id) {
      setTimeout(() => {
        window.location.href = `wowsportdev://posts/${id}`;
      }, 100);
    }
  }, [id]);

  const handleOpenInApp = () => {
    window.location.href = `wowsportdev://posts/${id}`;
  };

  // Add meta tag dynamically
  //   useEffect(() => {
  //     const metaTag = document.createElement("meta");
  //     metaTag.name = "apple-itunes-app";
  //     metaTag.content = `app-id=6740320411, app-argument=wowsport://posts/${id}`;
  //     document.head.appendChild(metaTag);

  //     return () => {
  //       document.head.removeChild(metaTag);
  //     };
  //   }, [id]);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col items-center mt-8 space-y-4">
        <Head>
          <meta
            property="al:android:package"
            content="vn.f5seconds.wowsport.dev"
          />
          <meta property="al:android:url" content={`wowsport://posts/${id}`} />
          <meta property="al:android:app_name" content="WOW Sport" />
          <meta property="al:ios:url" content={`wowsport://posts/${id}`} />
          <meta property="al:ios:app_store_id" content="6740320411" />
          <meta property="al:ios:app_name" content="WOW Sport" />
          <meta property="al:web:should_fallback" content="false" />
          <meta
            property="apple-itunes-app"
            content={`app-id=6740320411, app-argument=wowsportdev://posts/${id}`}
          />
        </Head>
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
