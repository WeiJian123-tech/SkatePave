import React from 'react';

import Image from 'next/image';

interface OverlayProps {
  isVisible: boolean;
  onClose: () => void;
  buttonText?: string; //Optional Button Text
  buttonImage?: string; //Optional Image Text
}

const Overlay: React.FC<OverlayProps> = ({ isVisible, onClose, buttonText, buttonImage }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-50">
      <div className="flex items-end justify-end w-full h-auto">
        <button onClick={onClose} className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-400 active:bg-blue-400">
          {buttonImage && <Image src={buttonImage} alt="Button Icon" width={64} height={64} className="inline-block w-full h-auto mr-2" />}
          {buttonText}
        </button>
      </div>
      <div className="flex flex-col items-baseline justify-center w-full h-auto">
        <h2>Content</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit iure minus optio, impedit repudiandae sint molestiae explicabo eligendi dolore, est vitae nemo incidunt iusto laborum inventore error, cupiditate at aperiam.</p>
      </div>
    </div>
  );
};

export default Overlay;
