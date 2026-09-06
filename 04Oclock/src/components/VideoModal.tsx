import React from "react";
import { MdClose } from "react-icons/md";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  posterImage?: string;
  title: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl,
  posterImage,
  title,
}) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        backdropFilter: "blur(12px)",
        zIndex: 100000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: "relative",
          maxWidth: "900px",
          width: "100%",
          backgroundColor: "#0d0b10",
          borderRadius: "16px",
          overflow: "hidden",
          border: "1px solid rgba(255, 255, 255, 0.15)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 24px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <h4 style={{ margin: 0, color: "#ffffff", fontSize: "16px", fontWeight: 700 }}>
            {title} — Video Demo
          </h4>
          <button
            onClick={onClose}
            style={{
              background: "transparent",
              border: "none",
              color: "#ffffff",
              fontSize: "24px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <MdClose />
          </button>
        </div>

        <div style={{ position: "relative", width: "100%", paddingTop: "56.25%", backgroundColor: "#000" }}>
          {videoUrl ? (
            <video
              src={videoUrl}
              poster={posterImage}
              controls
              autoPlay
              muted
              playsInline
              preload="none"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          ) : (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "12px",
                color: "#888",
              }}
            >
              <img
                src={posterImage || "/images/banner.png"}
                alt={title}
                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }}
              />
              <span
                style={{
                  position: "absolute",
                  padding: "12px 24px",
                  borderRadius: "100px",
                  backgroundColor: "rgba(0,0,0,0.8)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                Video Preview Ready
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
