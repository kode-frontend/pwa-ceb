import { svgPaths } from "@shared/constants/svgPaths";
import { useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";

const Camera = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const location = useLocation();
  const isCameraActive = location.pathname.includes("scan-qr");

  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
        audio: false,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      alert(
        "Не удалось получить доступ к камере. Обновите страницу и дайте разрешение на использование камеры."
      );
    }
  }, []);

  const stopCamera = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    const srcObject = videoRef.current?.srcObject;
    if (srcObject && srcObject instanceof MediaStream) {
      srcObject.getTracks().forEach((track) => {
        track.stop();
      });
    }
  }, []);

  useEffect(() => {
    if (isCameraActive) {
      startCamera();
    } else {
      stopCamera();
    }
    return () => {
      stopCamera();
    };
  }, [isCameraActive, startCamera, stopCamera]);

  return (
    <div
      className="relative w-full max-w-md mx-auto"
      style={{ aspectRatio: "1 / 1", borderRadius: 20, overflow: "hidden" }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
        style={{ borderRadius: 20 }}
      />
      <canvas
        ref={canvasRef}
        width={343}
        height={343}
        className="absolute inset-0 w-full h-full opacity-0 pointer-events-none"
        style={{ borderRadius: 20 }}
      />
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <mask
            id="square-mask"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="100"
            height="100"
          >
            <rect x="0" y="0" width="100" height="100" fill="white" />
            <rect
              x="8"
              y="8"
              width="84"
              height="84"
              rx="5"
              ry="5"
              fill="black"
            />
          </mask>
        </defs>
        <rect
          x="0"
          y="0"
          width="100"
          height="100"
          fill="rgba(22,22,22,0.5)"
          mask="url(#square-mask)"
        />
      </svg>
      <div className="absolute bottom-2 right-2 bg-[#316dcc] rounded-2xl p-4 z-20 cursor-pointer">
        <svg
          className="block w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          preserveAspectRatio="none"
        >
          <path d={svgPaths.p26896fe0} fill="white" />
        </svg>
      </div>
    </div>
  );
};

export default Camera;
