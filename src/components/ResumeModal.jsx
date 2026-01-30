import React from 'react';
import { X, Download, ExternalLink } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
  const resumeUrl = './resume.pdf';

  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Harish_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewInNewTab = () => {
    window.open(resumeUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-900 rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col border border-slate-800">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">Resume Preview</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-300"
          >
            <X size={24} />
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 overflow-auto p-6">
          <div className="bg-slate-950 rounded-lg border border-slate-800 overflow-hidden">
            <iframe
              src={resumeUrl}
              className="w-full h-[600px]"
              title="Resume Preview"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-center gap-4 p-6 border-t border-slate-800">
          <button
            onClick={handleViewInNewTab}
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-700 transition-all duration-300 hover:scale-105"
          >
            <ExternalLink size={20} />
            View in New Tab
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-all duration-300 hover:scale-105"
          >
            <Download size={20} />
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;