import React, { useState } from 'react';
import './ImageViewer.scss';
import { useDispatch } from 'react-redux';
import { toggleFullScreen } from '../../store/layoutSlice';

export default function ImageViewer({ imageURL = '', description = '', open = false, onClose }) {
    const [showDescription, setShowDescription] = useState(true);
    const dispatch = useDispatch();

    if (!open) return null;

    const closefullscreen = () => {
        document.exitFullscreen?.();
        onClose();
    };

    const requestFullscreen = () => {
        const docElm = document.documentElement;
        docElm.requestFullscreen?.().catch(() => { });
        dispatch(toggleFullScreen());
    };

    requestFullscreen();

    return (
        <div className="viewer-container">
            <div className="viewer-content">
                <button className="close-button" onClick={closefullscreen}>Close Image</button>
                {description && showDescription && (
                    <button className="description" onClick={() => setShowDescription(false)}>
                        {description}
                    </button>
                )}
                <img className="main-img" src={imageURL} alt="Fullscreen" />
            </div>
        </div>
    );
}
