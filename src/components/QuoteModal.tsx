import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { QuickQuoteForm } from './QuickQuoteForm';

interface QuoteModalProps {
  isOpen: boolean;
  initialService?: string;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, initialService = "rodent-control", onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative max-w-lg w-full">
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-20 w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg hover:bg-slate-800 transition-colors cursor-pointer border border-slate-700"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        <QuickQuoteForm
          initialService={initialService}
          onSuccessSubmit={() => {}}
        />
      </div>
    </div>
  );
};
