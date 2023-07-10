"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DarkMode() {
  let router = useRouter();
  useEffect(() => {
    let cookieValue = ("; " + document.cookie)
      .split(`; mode=`)
      .pop()
      .split(";")[0];
    if (cookieValue == "") {
      document.cookie = "mode=light; max-age=" + 3600 * 24 * 400 + "; path=/";
    }
  }, []);
  return (
    <span
      onClick={() => {
         let cookieValue = ("; " + document.cookie)
           .split(`; mode=`)
           .pop()
           .split(";")[0];
         if(cookieValue == 'light'){
            document.cookie = "mode=dark; max-age=" + 3600 * 24 * 400 + "; path=/";
            router.refresh();
         } else if(cookieValue == 'dark') {
            document.cookie = "mode=light; max-age=" + 3600 * 24 * 400 + "; path=/";
            router.refresh();
         }

      }}
    >
      🌙
    </span>
  );
}
