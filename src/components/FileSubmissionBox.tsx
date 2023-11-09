import React, { useState } from "react";

interface FileSubmissionBoxProps {
    onSubmit: (file: File) => void;
}

const FileSubmissionBox: React.FC<FileSubmissionBoxProps> = ({ onSubmit }) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setSelectedFile(file || null);
        if (file) {
            setPreviewUrl(URL.createObjectURL(file));
        } else {
            setPreviewUrl(null);
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (selectedFile) {
            onSubmit(selectedFile);
        }
    };

    const renderPreview = () => {
        if (!previewUrl) return null;
        if (selectedFile?.type === "application/pdf") {
            return <object data={previewUrl} type="application/pdf" width="100%" height="600px" />;
        } else if (selectedFile?.type.startsWith("image/")) {
            return <img src={previewUrl} alt="Preview" />;
        }
        return null;
    };

    return (
        <div className="border-4 border-dotted p-10 rounded-lg shadow-lg m-auto h-full w-[90%] flex flex-col justify-center items-center bg-orange-200/70">
            <h2 className="sm:text-4xl text-3xl pt-4 text-gray-700">Drop your file here or choose a file</h2>
            <form onSubmit={handleSubmit} className="flex flex-col items-center mt-6">
                <label htmlFor="file-input" className="border border-gray-300 rounded-lg p-4 cursor-pointer bg-white text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                    {selectedFile ? selectedFile.name : "Choose a file"}
                </label>
                <input id="file-input" type="file" accept=".pdf,.jpg,.png" onChange={handleFileInputChange} className="hidden" />
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-6 disabled:bg-gray-400 disabled:text-gray-800" disabled={!selectedFile}>
                    Submit
                </button>
                {renderPreview()}
            </form>
        </div>
    );
};

export default FileSubmissionBox;