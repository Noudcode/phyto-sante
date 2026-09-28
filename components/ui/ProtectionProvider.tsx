"use client";

import React, { useEffect } from "react";

export default function ProtectionProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 1. Disable Right-Click Context Menu (Prevents "Save Image As...", "Copy Text", etc.)
    const handleContextMenu = (e: MouseEvent) => {
      // Allow context menu only on inputs and textareas
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
        return;
      }
      e.preventDefault();
    };

    // 2. Disable Image Dragging
    const handleDragStart = (e: DragEvent) => {
      if ((e.target as HTMLElement).tagName === "IMG") {
        e.preventDefault();
      }
    };

    // 3. Disable Copy & Save Keyboard Shortcuts (Ctrl+C, Ctrl+S, Ctrl+U, F12)
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
        return;
      }

      // Block Ctrl+C (Copy), Ctrl+S (Save), Ctrl+U (View Source), Ctrl+P (Print)
      if (
        (e.ctrlKey || e.metaKey) &&
        ["c", "s", "u", "p"].includes(e.key.toLowerCase())
      ) {
        e.preventDefault();
      }

      // Block F12 (Inspect tool)
      if (e.key === "F12") {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <>{children}</>;
}
