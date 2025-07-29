"use client";
import { Fragment, ReactNode, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface SidebarPopupProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  widthClass?: string; // Tailwind max-w classes
}

export default function SidebarPopup({
  open,
  onClose,
  title,
  children,
  widthClass = "max-w-md",
}: SidebarPopupProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        {/* Panel */}
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 flex justify-end">
            <Transition.Child
              as={Fragment}
              enter="transform transition-[opacity,transform] ease-out duration-700"
              enterFrom="translate-x-full scale-95 opacity-0"
              enterTo="translate-x-0 scale-100 opacity-100"
              leave="transform transition-[opacity,transform] ease-in duration-600"
              leaveFrom="translate-x-0 scale-100 opacity-100"
              leaveTo="translate-x-full scale-95 opacity-0"
            >
              <Dialog.Panel className={`${widthClass} w-full h-full bg-white shadow-xl flex flex-col`}>
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b">
                  <h3 className="text-lg font-semibold text-blue-900">{title}</h3>
                  <button
                    onClick={onClose}
                    className="p-2 rounded hover:bg-gray-100"
                    aria-label="Close sidebar"
                  >
                    <XMarkIcon className="h-6 w-6 text-gray-700" />
                  </button>
                </div>
                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
