"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "../../../../lib/utils";
import { Button } from "../ui/button";

interface SheetProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  side?: "left" | "right";
}

export function Sheet({ children, isOpen, onClose, side = "left" }: SheetProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex transition-transform duration-300",
        isOpen ? "translate-x-0" : side === "left" ? "-translate-x-full" : "translate-x-full"
      )}
    >
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

      {/* Sheet Content */}
      <div
        className={cn(
          "fixed bg-white shadow-lg p-5 w-64 h-full flex flex-col transition-all",
          side === "left" ? "left-0" : "right-0"
        )}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Menu</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex flex-col space-y-4">{children}</div>
      </div>
    </div>
  );
}

// Sheet Trigger
interface SheetTriggerProps {
  children: React.ReactNode;
  onClick: () => void;
}

export function SheetTrigger({ children, onClick }: SheetTriggerProps) {
  return (
    <button className="p-2" onClick={onClick} aria-label="Toggle menu">
      {children}
    </button>
  );
}

// Sheet Content (optional wrapper)
export function SheetContent({ children }: { children: React.ReactNode }) {
  return <div className="p-4">{children}</div>;
}
