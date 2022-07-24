import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material";
import axios from "axios";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import useGlobalStore from "@/store/useGlobalStore";
import { theme } from "@/styles/theme";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.API_URL;
axios.defaults.timeout = 10000;

function MyApp({ Component, pageProps }) {
  // 디바이스 크기 가져오기
  const isResponsive = useMediaQuery({ query: "(max-width: 768px)" });
  // 디바이스 변수 체크
  const [isDevice, setIsDevice] = useState(false);
  // Zustand(Store) 값 가져오기 예시
  const isDark = useGlobalStore((state) => state.isToast);

  useEffect(() => {
    // 디바이스 Desktop, MobileApp 체크
    setIsDevice(isResponsive);
    // 미사용 변수 오류 임시 제거
    console.log(isDevice);
    // 스토어 값
    console.log(isDark);
  }, [isDark, isDevice, isResponsive]);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <title>레플라</title>
      </Head>
      <ThemeProvider theme={theme}>
        {/* 페이지 로딩 프로그래스바 */}
        <NextNProgress color="var(--primary-main)" height={5} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
